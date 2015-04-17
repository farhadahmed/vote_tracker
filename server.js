var express = require('express'); /*iife not needed because Node does it
by default  --any time you're getting something from another file, you'll
use the 'require' statement. Require says 'go get this from another file'
add node_modules to your git ignore.  */

var app = express();

app.use(express.static(__dirname + '/public')); //addresses that begin with / are absolute paths (as opposed to relative)

app.get('/*', function(req, res) {
  res.status(404).send('could not find page');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server running');
});


//'use strict'
//
////var http = require('http');
//
///*iife not needed because Node does it by default  --any time
//you're getting something from another file, you'll use the
//'require' statement. Require says 'go get this from another file'
//add node_modules to your git ignore.  */
//var express = require('express');
//var app = express();
//
//app.use(express.static(__dirname + '/'));
//
////404 response
//function send404Response(response) {
//  response.writeHead(404, {'Content-Type': 'text/plain'});
//  response.write('Error 404: Page not found!');
//  response.end();
//}
//
////Handle a user request
//function onRequest(request, response) {
//
//  if (request.method == 'Get' && request.url == '/') {
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    express.createReadStream('./index.html').pipe(response);
//  }else {
//    send404Response(response);
//  }
//}
//
//http.createServer(onRequest).listen(3000);
//console.log('Server is now running....');
