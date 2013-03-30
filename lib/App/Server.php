<?php
namespace App;

use Ratchet\ConnectionInterface;
use Ratchet\Wamp\WampServerInterface;

class KLServer implements WampServerInterface
{
	public function onCall(ConnectionInterface $conn, $id, $topic, array $params) {
		
	}

	public function onClose(ConnectionInterface $conn) {
		
	}

	public function onError(ConnectionInterface $conn, \Exception $e) {
		
	}

	public function onOpen(ConnectionInterface $conn) {
		
	}

	public function onPublish(ConnectionInterface $conn, $topic, $event, array $exclude, array $eligible) {
		
	}

	public function onSubscribe(ConnectionInterface $conn, $topic) {
		
	}

	public function onUnSubscribe(ConnectionInterface $conn, $topic) {
		
	}
}
