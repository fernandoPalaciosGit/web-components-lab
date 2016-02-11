var express = require('express'),
	app = express(),
	serverRequest = process.argv[2],
	path = require('path'),
	testPath = path.resolve('test'),
	routeServers = {
		starterPolymer: testPath + '/starterPolymerElements.html',
		notFound: testPath + '/notFound.html'
	};

app.use(express.static(testPath + '/bundle'));
app.use(express.static(testPath + '/elements'));
app.use(express.static(testPath + '/styles'));

app.get('/' + serverRequest, function (req, res) {
	'use strict';

	res.status(200);
	res.sendFile(routeServers[serverRequest]);
});

app.get('*', function (req, res) {
	'use strict';

	res.status(404);
	res.sendFile(routeServers.notFound);
});

app.listen('9090', function () {
	'use strict';

	/*eslint no-console: 0*/
	console.log('Application running in localhost:9090/' + serverRequest);
});
