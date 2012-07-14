<?php

namespace CLAgg;

class Utils
{

	public static $cache_url = './cache/';

	public static function CURL($url, $post = null, $retries = 3)
	{

//	file_put_contents('./requested_urls.txt', $url."\n", FILE_APPEND | LOCK_EX);

		$curl = curl_init($url);

		if (is_resource($curl) === true)
		{
			curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20041001 Firefox/0.10.1");
			curl_setopt($curl, CURLOPT_FAILONERROR, true);
			curl_setopt($curl, CURLOPT_ENCODING, 1);
			curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($curl, CURLOPT_HTTPHEADER, array('Accept-Encoding: gzip,deflate'));

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