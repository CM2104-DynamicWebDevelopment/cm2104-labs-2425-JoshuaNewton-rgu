var express = require('express');
var app = express();
var Jokes = require('knock-knock-jokes');



app.get('/', function (req, res) {
res.send("Hello world by express");
});
app.get('/test' , function (req, res) {
    res.send("this is route 2 ");
});

app.get('/joke' , function (req, res) {
    var randomjoke = Jokes();
    res.end(randomjoke);
});



app.listen(8080);