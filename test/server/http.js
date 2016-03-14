var express = require('express'),
	app = express(),
	serverRequest = process.argv[2],
	path = require('path'),
	swig = require('swig'),
	isProduction = process.env.NODE_ENV === 'production',
	routeTemplates = {
		starterPolymer: 'testPolymerStarter',
		timePerformance: 'testTimePerformance',
		notFound: 'notFound'
	};

// Middleware resources
app.use(express.static(path.resolve('test/bundle')));
app.use(express.static(path.resolve('test/elements')));
app.use(express.static(path.resolve('test/styles')));
app.use(express.static(path.resolve('test/bower_components')));
app.use(express.static(path.resolve('test/styles')));

// Middleware template engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', [__dirname + './../templates']);
app.set('view cache', isProduction);
swig.setDefaults({
	cache: isProduction ? 'memory' : false,
	varControls: ['{{', '}}']
});

// client routes
app.get('/' + serverRequest, function (req, res) {
	'use strict';

	res.status(200);
	res.render(routeTemplates[serverRequest], {});
});

app.get('*', function (req, res) {
	'use strict';

	res.status(404);
	res.render(routeTemplates.notFound, {
		pageAviable: 'http://localhost:9090/' + serverRequest
	});
});

// Open Server client Port
app.listen('9090', function () {
	'use strict';

	/*eslint no-console: 0*/
	console.log('Application running in localhost:9090/' + serverRequest);
});
