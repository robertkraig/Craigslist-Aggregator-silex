<?php

namespace App\CLAgg;
use Guzzle\Http\Client;

class Utils
{

	public static $cache_url = './cache/';

	public static $user_agents = array(
		'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0',
		'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20120427 Firefox/15.0a1',
		'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1',
		'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1',
		'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6',
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3',
		'Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00',
		'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50'
	);

	public static function getFileCache($location, $expire = false)
	{
		if (is_bool($expire))
			$expire = 60 * 30;
		$hash = sha1($location);
		$cacheDir = self::$cache_url;
		$file = "{$cacheDir}{$hash}";
		if(file_exists($file))
		{
			$file_content = file_get_contents($file);
			$unserialize_file = unserialize($file_content);
			$file_expire = $unserialize_file['expire'];
			if ($file_expire > time())
			{
				return base64_decode($unserialize_file['content']);
			}
		}

		mt_srand();

		$randomize_user_agent = self::$user_agents[mt_rand(0, count(self::$user_agents)-1)];

		$location = parse_url($location);
		$http = "http://{$location['host']}";
		$path = "{$location['path']}?{$location['query']}";

		$client = new Client($http);
		$request = $client->get($path);
		$request->setHeader('User-Agent', $randomize_user_agent);
		$response = $request->send();

		if(!$response->isSuccessful())
			return false;

		$content = $response->getBody(true);
		$store = array(
			'date' => time(),
			'expire' => time() + $expire,
			'content' => base64_encode($content)
		);
		$serialize = serialize($store);
		file_put_contents($file, $serialize);

		return $content;
	}

}