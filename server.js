'use strict'

var http = require('http');
var express = require('express');

//404 response
function send404Response(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: Page not found!');
  response.end();
}

//Handle a user request
function onRequest(request, response) {

  if (request.method == 'Get' && request.url == '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    express.createReadStream('./index.html').pipe(response);
  }else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(8888);
console.log('Server is now running....');

//'use strict'
//
//var express = require('express') //require is used if you need data from another file
//
//var app = express();
//
//app.use(express.static('/public'));
//
//app.listen
