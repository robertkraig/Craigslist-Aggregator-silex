<?php

namespace CLAgg;

use CLAgg\CLAggException;

class ReadConfig
{
	private $_cl_info = null;

	/**
	 * @var SimpleXMLElement
	 */
	private $_xml = null;
	private $_locations = array();
	private $_areas = array();
	private $_regions = array();

	function  __construct($fileLocation = null)
	{
		if(is_null($fileLocation))
			throw new CLAggException('Must Enter your XML Configuration file.');

		if(!file_exists($fileLocation))
			throw new CLAggException('Your XML Configuration must exist');

		if(is_bool(strpos(strtolower($fileLocation),'.xml')))
			throw new CLAggException('File must have .xml extention');

		$xmlstr = file_get_contents($fileLocation);
		$this->_xml = simplexml_load_string($xmlstr, 'SimpleXMLElement', LIBXML_NOCDATA);

		$this->init();
	}

	private function init()
	{
		$this->_build_areas();
		$this->_build_regions();
	}

	public function getInfo()
	{
		if(is_null($this->_cl_info))
		{
			$this->_cl_info = $this->_xml->xpath('/clrepo/info');
		}
		return $this->_cl_info[0];
	}

	public function getFields()
	{
		$fields = $this->_xml->xpath('/clrepo/info/fields/argField');
		$field_array = array();
		foreach($fields as $field)
		{
			$field_array[] = get_object_vars($field);
		}
		return $field_array;
	}

	private function _build_areas()
	{
		$locations = array();
		foreach($this->_xml->xpath('/clrepo/locations/location') as $location)
		{
			$locations[] = get_object_vars($location);
		}

		uasort($locations, function($a, $b)
		{
			if ($a['state'] == $b['state'])
				return $a['name'] > $b['name']?1:-1;
			else
				return $a['state'] > $b['state']?1:-1;
		});

		foreach($locations as $location)
		{
			$this->_locations[] = $location;
			$this->_areas[$location['partial']] = array(
				'type'		=>$location['type'],
				'partial'	=>$location['partial'],
				'name'		=>ucwords($location['name']),
				'state'		=>$location['state']
			);
		}
	}

	private function _build_regions()
	{
		$regions = array();
		foreach($this->_xml->xpath('/clrepo/regions/region') as $region)
		{
			$regions[] = get_object_vars($region);
		}

		uasort($regions, function($a,$b)
		{
			return $a['name'] > $b['name']?1:-1;
		});

		foreach($regions as $region)
		{
			$this->_regions[] = array(
				'type'=>$region['type'],
				'name'=>ucwords($region['name']),
			);
		}
	}

	public function getAreas()
	{
		return $this->_areas;
	}

	public function getLocations()
	{
		return $this->_locations;
	}

	public function getRegions()
	{
		return $this->_regions;
	}

}
