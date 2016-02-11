var routeServers = {
	starterPolymer: 'test/starterPolymerElements.html',
	notFound: 'test/notFound.html',
};

var express = require('express')(),
    http = require('http'),
    serverRequest = process.argv[2],
    server = http.createServer(express);

var httpListen = server.http.listen('9090', function () {
  console.log('Application running in localhost:9090/' + serverRequest);
});

server.use(express.static(''));

server.get('/' + serverRequest, function(req, res){
  res.status(200);
  res.sendFile(routeServers.serverRequest);
});

server.get('*', function(req, res){
  res.status(404);
  res.sendFile(routeServers.notFound);
});
