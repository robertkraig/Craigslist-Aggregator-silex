<?php

use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;
use App\KLServer;

require __DIR__.'/vendor/autoload.php';

$server = IoServer::factory(
	new WsServer(
		new KLServer()
	)
  , 9080
);

$server->run();