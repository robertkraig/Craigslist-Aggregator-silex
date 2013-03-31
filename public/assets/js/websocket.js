var CLAgg = {
	conn:null,
	init:function()
	{
		this.conn = new ab.Session(
			// the websocket host
			'ws://' + window.location.hostname + ':9080',
			// callback on connection established
			function(session){
				console.log('websocket open');
				CLAgg.onConnect(session);
			},
			// callback on connection close
			function(session){
				console.log('websocket close');
				CLAgg.onClose(session);
			},
			// additional AB parameters
			{ 'skipSubprotocolCheck' : true }
		);
	},
	process_data:function()
	{
		process_data(json);
	},
	send_data:function()
	{
		this.conn.call('process_arguments', data);
	},
	onConnect:function(session)
	{
//		user_id = session._session_id;
		console.log('Connection established, unique user id ');
		console.log('Adding set of WAMP subscribers.');
	},
	onClose:function(session)
	{
		console.log('Websocket connection is closed. Are you sure the server is up?');
	}
};

CLAgg.init();