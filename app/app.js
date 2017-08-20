var express = require('express');

var app = express();

var port = 5000
app.listen(5000, function(err){
    console.log('rinning server on port', + port)
});