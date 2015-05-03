var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

process.on('SIGTERM', function() {
  server.close(function(){
    console.log('The server is terminated.');
    process.exit(0);
  });
});