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
