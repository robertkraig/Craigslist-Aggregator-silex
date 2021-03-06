<?php

$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}

set_time_limit(60*3);
error_reporting(E_ALL);
ini_set('error_log', './php_errors.log');

date_default_timezone_set('America/Los_Angeles');

require_once __DIR__.'/../vendor/autoload.php';
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;
use Silex\Application;
use Silex\Provider\TwigServiceProvider;

use App\CLAgg\ReadConfig;
use App\CLAgg\Scraper;
use App\CLAgg\Utils;

Utils::$cache_url = './../cache/data/';

$app = new Application();

$sites = array(
	'findstuff'		=>false,
	'findjobs'		=>false,
	'findgigs'		=>false,
	'findplaces'	=>false,
	'findservices'	=>false,
);

$app->register(new TwigServiceProvider(), array(
    'twig.path'		=> './../views',
	'twig.options'	=> array(
//		'cache'=> './../cache/twig/',
		'cache'=>false,
	)
));

$app->before(function (Request $request)
{
	if (0 === strpos($request->headers->get('Content-Type'), 'application/json'))
	{
		$data = json_decode($request->getContent(), true);
		$request->request->replace(is_array($data) ? $data : array());
	}
});

$app->get('/', function(Request $req) use ($app, $sites)
{
	return $app['twig']->render('index.html.twig', array(
		'title'			=>'My Kraigslist Search',
		'server_name'	=>$_SERVER['SERVER_NAME'],
		'sites'			=>$sites,
	));
});

$app->get('/assets/{type}', function(Request $req, $type) use ($app, $sites)
{
	switch($type)
	{
		case 'css':
			return new Response(file_get_contents(__DIR__.'/../assets/compiled/css/application.css'), 200, array(
				'Content-Type'=>'text/css'
			));

		case 'js':
			return new Response(file_get_contents(__DIR__.'/../assets/compiled/js/application.js'), 200, array(
				'Content-Type'=>'text/javascript'
			));
	}
});

$app->get('/site', function(Request $req) use ($app, $sites)
{
	$site = $req->get('site','findjobs');
	if(!isset($sites[$site]))
		$app->redirect('/');

	$config = new ReadConfig(__DIR__."/../sites/{$site}.locations.xml");

	return $app['twig']->render('site.html.twig', array(
		'title'			=>$config->getInfo()->title,
		'server_name'	=>$_SERVER['SERVER_NAME'],
		'sites'			=>$sites,
		'site'			=>$site,
		'page_type'		=>$config->getInfo()->pageType,
		'page_title'	=>$config->getInfo()->pagetitle,
		'search_example'=>$config->getInfo()->pagesearchexample,
		'fields'		=>$config->getFieldsArray(),
	));

});

$app->post('/sites/fetch', function(Request $req) use ($app, $sites)
{
	$site = $req->get('site','jobs');
	$site = 'find'.$site;

	$include = $req->get('include', false);

	if(!isset($sites[$site]))
	{
		$app->json (array(
			'status'=>false,
			'message'=>'site not defined'
		), 500);
	}

	$config			= new ReadConfig(__DIR__."/../sites/{$site}.locations.xml");
	$fields			= $config->getFields();
	$locations		= $config->getLocations();
	$search_field	= $req->get($fields[0]['argName'], FALSE);

	if($search_field !== false)
	{
		// $_POST IS NO LONGER USED, POST-BODY IS AS JSON
		$data = json_decode($req->getContent(), true);
		$scraper = new Scraper($data, $include, $locations, $fields);
		return $app->json(array_values($scraper->getRecords()));
	}

	$app->json (array(
		'status'=>false,
		'message'=>'argument parameter not defined'
	), 500);

});

$app->post('/sites/data', function(Request $req) use ($app, $sites)
{
	$site = $req->get('site','jobs');
	$site = 'find'.$site;

	if(!isset($sites[$site]))
	{
		$app->json (array(
			'status'=>false,
			'message'=>'site not defined'
		), 500);
	}
	$config = new ReadConfig(__DIR__."/../sites/{$site}.locations.xml");

	return $app->json(array(
		'page_info'		=>$config->getInfo(),
		'region_list'	=>$config->getRegions(),
		'area_list'		=>$config->getAreas(),
		'fields'		=>$config->getFieldsArray()
	));
});

$app->error(function (Exception $e, $code) use ($app)
{
    switch ($code)
	{
        case 404:
			return $app->redirect('/');
            break;
        default:
            $message = 'We are sorry, but something went terribly wrong.';
    }

	file_put_contents('./error.log', $e->getMessage(), FILE_APPEND);

    return $app->json(array(
		'status'=>false,
		'message'=>$message,
		'exception'=>$e->getMessage()
	),$code);

});

$app->run();
