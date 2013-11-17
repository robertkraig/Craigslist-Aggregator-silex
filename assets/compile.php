<?php

require_once __DIR__.'/../vendor/autoload.php';
use Assetic\Factory\AssetFactory;
use Assetic\FilterManager;
use Assetic\AssetManager;

use Assetic\Cache\FilesystemCache;
use Assetic\Cache\ApcCache;
use Assetic\Asset\AssetCache;
use Assetic\Asset\AssetCollection;
use Assetic\Asset\FileAsset;
use Assetic\Asset\GlobAsset;
use Assetic\AssetWriter;
use Assetic\Filter\Yui\CssCompressorFilter as YuiCompressorFilter;
use Assetic\Filter\GoogleClosure\CompilerJarFilter as GoogleClosureFilter;

$fm = new FilterManager();
$am = new AssetManager();

$factory = new AssetFactory(__DIR__.'/', true);
$factory->setDefaultOutput('/');
$factory->setFilterManager($fm);
$factory->setAssetManager($am);

$yui_compressor = new YuiCompressorFilter(__DIR__.'/utils/yuicompressor-2.4.8.jar');
$fm->set('yui_css', $yui_compressor);

$google_closure_compiler = new GoogleClosureFilter(__DIR__.'/utils/google-closure-compiler.jar');
$google_closure_compiler->setLanguage($google_closure_compiler::LANGUAGE_ECMASCRIPT5);
$fm->set('google_js', $google_closure_compiler);

// The Asset Manager allows us to keep our assets organized.
$am->set('main_js', new AssetCollection(array(
	new FileAsset(__DIR__.'/../assets/js/lib/angular.js'),
	new FileAsset(__DIR__.'/../assets/js/lib/underscore.js'),
	new FileAsset(__DIR__.'/../assets/js/lib/angular-route.js'),
	new FileAsset(__DIR__.'/../assets/js/lib/angular-resource.js'),
	new FileAsset(__DIR__.'/../assets/js/lib/heartcode-canvasloader.js'),
	new FileAsset(__DIR__.'/../assets/js/app/myKraigsList.js')
)));

$am->set('main_css', new AssetCollection(array(
	new FileAsset(__DIR__.'/../assets/css/body.css'),
	new FileAsset(__DIR__.'/../assets/css/angular-csp.css')
)));

$write_cache = function($asset)
{
	$cache = new AssetCache($asset, new FilesystemCache(__DIR__.'/../cache/assets/'));
	$writer = new AssetWriter(__DIR__.'/compiled/');
	$writer->writeAsset($cache);
};

$js_asset = $factory->createAsset(array('@main_js'), array('google_js'),array('output'=>'/js/application.js'));
$css_asset = $factory->createAsset(array('@main_css'), array('yui_css'),array('output'=>'/css/application.css'));

$write_cache($js_asset);
$write_cache($css_asset);
