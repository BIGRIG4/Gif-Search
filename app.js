
// require
var express = require('express');




var app = express();

// middleware



// routes get
app.get('/hello-world', function (req, res) {
  res.send('Hello World');
});





app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
