<?php

set_time_limit(60*3);
error_reporting(E_ALL);
ini_set('error_log', './php_errors.log');

require_once './../vendor/autoload.php';
use \Symfony\Component\HttpFoundation\Request;
use CLAgg\ReadConfig;
use CLAgg\Scraper;
use CLAgg\Utils;
use Silex\Application;
use Silex\Provider\TwigServiceProvider;

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
		'cache'=> './../cache/twig/'
	)
));

$app->get('/', function(Request $req) use ($app, $sites)
{
	return $app['twig']->render('index.html.twig', array(
		'title'			=>'My Kraigslist Search',
		'server_name'	=>$_SERVER['SERVER_NAME'],
		'sites'			=>$sites,
	));
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

$app->post('/', function(Request $req) use ($app, $sites)
{
	$site = $req->get('site','findjobs');
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
		$scraper = new Scraper($_POST, $include, $locations, $fields);
		return $app->json($scraper->getRecords());
	}

	$app->json (array(
		'status'=>false,
		'message'=>'argument parameter not defined'
	), 500);

});

$app->get('/sites/data', function(Request $req) use ($app, $sites)
{
	$site = $req->get('site','findjobs');

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
		'form_fields'	=>$config->getFields()
	));
});

$app->error(function (Exception $e, $code) use ($app)
{
    switch ($code)
	{
        case 404:
            $message = 'The requested page could not be found.';
            break;
        default:
            $message = 'We are sorry, but something went terribly wrong.';
    }

    return $app->json(array(
		'status'=>false,
		'message'=>$message,
		'exception'=>$e->getMessage()
	),$code);

});

$app->run();
