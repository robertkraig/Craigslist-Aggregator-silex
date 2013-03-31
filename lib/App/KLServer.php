<?php
namespace App;

use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
use App\CLAgg\Scraper;

class KLServer implements MessageComponentInterface
{
	private static function log($msg)
	{
		echo $msg.PHP_EOL;
	}
	
	/**
	 *
	 * @var \SplObjectStorage
	 */
    protected $clients;
    public function __construct()
	{
        $this->clients = new \SplObjectStorage;
    }

	public function onClose(ConnectionInterface $conn)
	{
		self::log("Connection closed on: {$conn->resourceId}");
	}

	public function onError(ConnectionInterface $conn, \Exception $e)
	{
		self::log("Connection errored on: {$conn->resourceId}");
		self::log("error: {$e->getMessage()}");
	}

	public function onMessage(ConnectionInterface $from, $msg)
	{
		self::log(print_r($msg, true));
		$from->send($msg);
	}

	public function onOpen(ConnectionInterface $conn)
	{
		self::log("Connection opened on resource: {$conn->resourceId}");
	}	
}
