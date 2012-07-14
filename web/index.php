<?php

set_time_limit(60*3);
error_reporting(E_ALL);
ini_set('error_log', './php_errors.log');

require_once __DIR__.'/../vendor/autoload.php';
use \Symfony\Component\HttpFoundation\Request;
use CLAgg\ReadConfig;
use CLAgg\Scraper;

$app = new Silex\Application();

$sites = array(
	'findstuff'		=>false,
	'findjobs'		=>false,
	'findgigs'		=>false,
	'findplaces'	=>false,
	'findservices'	=>false,
);

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
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

	$fields = $config->getFields();
	array_walk($fields, function(&$array){
		if(preg_match('/(string|int)/', $array['argType']))
		{
			$array['argType'] = 'text';
		}
		elseif($array['argType'] == 'radio')
		{
			$argList    = explode(':', $array['argTitle']);
			$titles     = explode('|', $argList[0]);
			$args       = explode('|', $argList[1]);
			$select     = explode('|', $argList[2]);

			$array['radio'] = array();
			for($i = 0; $i < count($titles); $i++)
			{
				$array['radio'][] = array(
					'checked'		=>($select[$i] == '1'),
					'arg_name'		=>$titles[$i],
					'arg_name_id'	=>str_replace(' ', '_', $titles[$i]),
					'arg'			=>$args[$i]
				);
			}

		}
		elseif($array['argType'] == 'checkbox')
		{
			list($title, $value) = explode(':', $array['argTitle']);
			$arg_name = str_replace(' ', '_', $array['argName']);
			$array['checkbox'] = array(
				'value'		=>$value,
				'title'		=>$title,
				'arg_name'	=>$arg_name
			);
		}
	});

	return $app['twig']->render('site.html.twig', array(
		'title'			=>$config->getInfo()->title,
		'server_name'	=>$_SERVER['SERVER_NAME'],
		'sites'			=>$sites,
		'site'			=>$site,
		'page_type'		=>$config->getInfo()->pageType,
		'page_title'	=>$config->getInfo()->pagetitle,
		'search_example'=>$config->getInfo()->pagesearchexample,
		'fields'		=>$fields,
	));

});

$app->post('/', function(Request $req) use ($app, $sites)
{
	$site = $req->get('site','findjobs');
	$include = $req->get('include',false);

	if(!isset($sites[$site]))
	{
		$app->json (array(
			'status'=>false,
			'message'=>'site not defined'
		), 500);
	}

	$config = new ReadConfig(__DIR__."/../sites/{$site}.locations.xml");
	$search_fields = $config->getFields();
	$search_field_name = $search_fields[0]['argName'];

	if(isset($_POST[$search_field_name]))
	{
		$scraper = new Scraper(array(
			'config'	=>$config,
			'include'	=>$include
		));
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
