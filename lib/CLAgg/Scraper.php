<?php

namespace CLAgg;

use CLAgg\Utils;
use CLAgg\ReadConfig;
use CLAgg\Exception;

/**
 * @author Robert S Kraig
 * @version 0.7
 *
 */
class Scraper {

	private $_config;
	private $_record_list = null;

	public function __construct($options)
	{
		if(isset($options['config']) && $options['config'] instanceof ReadConfig)
		{
			$this->_config = $options['config'];
		}
		else
		{
			throw new Exception('config key[ReadConfig obj] was not defined');
		}

		if(isset($options['include']))
		{
			$this->initialize($options['include']);
		}
		else
		{
			throw new Exception('Include key was not defined');
		}
	}

	/**
	 * Macro which gets called to loop though locations structure to replace queried search term
	 * @param array $array holds url locations for xml locations
	 * @param string $find inserts the search term being looked up
	 * @param string $replace_tag the token which is to be replaced in the xml document
	 */
	private static function _replace_query(array $fields, array &$array)
	{
		$tmp_arr = array();
		foreach($fields as $field)
		{
			if(isset($_POST[$field['argName']]))
			{
				$tmp_arr[$field['argName']] = $_POST[$field['argName']];
			}
		}

		$tmp_arr['format'] = 'rss';

		$args = http_build_query($tmp_arr);
		foreach($array as $key=>$val)
		{
			$array[$key]['url'].='&amp;'.$args;
		}
	}

	/**
	 * Macro which takes a given url location for craigslist search and scrapes useful content off the page
	 * @param array $location
	 * @return array
	 */
	private static function _get_records(array $location)
	{
		$string = Utils::getFileCache($location['url']);
		if(!$string) return array();

		$xml = simplexml_load_string($string, 'SimpleXMLElement', LIBXML_NOCDATA);

		$search_items = array();
		foreach($xml->item as $item)
		{
			$info = get_object_vars($item);
			$dc_nodes = $item->children('http://purl.org/dc/elements/1.1/');
			$dc = get_object_vars($dc_nodes);
			$data = $info + $dc;
			$search_items[] = array(
				'location'=>$location['partial'],
				'info'=>$data
			);
		}

		return $search_items;
	}

	private function initialize($include)
	{
		$include = implode('|', $include);
		$include = str_replace('.', '\\.', $include);
		$include = str_replace("+", "(.+)", $include);
		$search_items = array();
		$locations = $this->_config->getLocations();
		$fields = $this->_config->getFields();

		self::_replace_query($fields, $locations);
		foreach($locations as $place)
		{
			if(preg_match("/({$include})/", $place['url']))
			{
				$list = self::_get_records($place);
				$search_items = array_merge($search_items,$list);
			}
		}

		$new_list = array();
		foreach($search_items as $item)
		{
			$date = $item['info']['date'];
			$dateTimeStamp = strtotime($date);
			$uniqu_group_hash = $dateTimeStamp;
			$new_list[$uniqu_group_hash] = $item;
		}

		uksort($new_list, function($a, $b)
		{
			if($a > $b)
				return 1;
			else
				return -1;
		});

		$regroupList = array();
		foreach($new_list as $dateTimeStamp => $item)
		{
			$group_hash = date('M-j-y', $dateTimeStamp);
			$regroupList[$group_hash]['timestamp'] = $dateTimeStamp;
			$regroupList[$group_hash]['date'] = date('M jS', $dateTimeStamp);
			$regroupList[$group_hash]['records'][] = $item;
		}

		$this->_record_list = array_reverse($regroupList);
	}

	public function getRecords()
	{
		return $this->_record_list;
	}
}