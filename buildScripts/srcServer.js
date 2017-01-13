var express = require('express'); // call express
var path = require('path'); // ref to the path
var open = require('open'); // open our site in the browser

var port = 3000; // store the port we're going to use
var app = express(); // create a instance of express

// declare routing
// tell express which root should handles. Any ref to the root should be handle by this function which take request and response
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
