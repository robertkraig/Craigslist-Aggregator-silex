<?php

namespace CLAgg;

class Utils
{

	public static $cache_url = './cache/';

	public static function CURL($url, $post = null, $retries = 3)
	{

		mt_srand();

		$user_agents = array(
			'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0',
			'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20120427 Firefox/15.0a1',
			'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16) Gecko/20120421 Firefox/11.0',
			'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6',
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3',
			'Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00',
			'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50'
		);
		$randomize_user_agent = $user_agents[mt_rand(0, count($user_agents)-1)];

//		file_put_contents('./requests.txt', $user_agents[mt_rand(0, count($user_agents)-1)]."\n", FILE_APPEND | LOCK_EX);

		$curl = curl_init($url);

		if (is_resource($curl) === true)
		{
			curl_setopt($curl, CURLOPT_USERAGENT, $randomize_user_agent);
			curl_setopt($curl, CURLOPT_FAILONERROR, true);
			curl_setopt($curl, CURLOPT_ENCODING, 1);
			curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($curl, CURLOPT_HTTPHEADER, array('Accept-Encoding: gzip, deflate'));

			if (null != $post)
			{
				curl_setopt($curl, CURLOPT_POST, true);
				curl_setopt($curl, CURLOPT_POSTFIELDS, (is_array($post) === true) ? http_build_query($post, '', '&') : $post);
			}

			$result = false;

			while (($result === false) && (--$retries > 0))
			{
				$result = curl_exec($curl);
				$response = curl_getinfo($curl);
			}
			curl_close($curl);
		}

		switch ($response['http_code'])
		{
			case 200:
				$return = array(
					'response' => $response,
					'output' => $result
				);
				break;
			case 301:
			case 302:
				foreach (get_headers($response['url']) as $value)
				{
					if (substr(strtolower($value), 0, 9) == "location:")
					{
						return CURL(trim(substr($value, 9, strlen($value))));
					}
				}
				break;
			default:
				$return = false;
				break;
		}

		return $return;
	}

	public static function getFileCache($location, $expire = false)
	{
		if (is_bool($expire))
			$expire = 60 * 30;
		$hash = sha1($location);
		$cacheDir = self::$cache_url;
		$file = "{$cacheDir}{$hash}";
		if (file_exists($file))
		{
			$file_content = file_get_contents($file);
			$unserialize_file = unserialize($file_content);
			$file_expire = $unserialize_file['expire'];
			if ($file_expire > time())
			{
//			error_log('Returning Cache', E_NOTICE);
				return base64_decode($unserialize_file['content']);
			}
			else
			{
//			error_log('Cache Expired', E_NOTICE);
			}
		}
		$content = self::CURL($location);
		if (!$content || !$content['output'])
			return false;
		$store = array(
			'date' => time(),
			'expire' => time() + $expire,
			'content' => base64_encode($content['output'])
		);
		$serialize = serialize($store);
		file_put_contents($file, $serialize);
//	error_log('Writing Cache', E_NOTICE);
		return $content['output'];
	}

}