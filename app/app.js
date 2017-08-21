var express = require('express');

var app = express();

var port = 5000

app.use(express.static('lib'));
app.get('/', function(req, res){
    res.send('ELibrary');
});

app.get('/books', function(req, res){
    res.send('Books')
})

app.listen(5000, function(err){
    console.log('rinning server on port', + port)
});