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

app.get('/add' , function (req, res) {
var x = req.query.x;
var y = req.query.y;
res.send("x + y = " + (parseInt(x) + parseInt(y)));
});


app.get('/calc' , function (req, res) {
    var x = req.query.x;
    var y = req.query.y;
    var op = req.query.op;
    var result = 0;
    if (op == "add") {
        result = parseInt(x) + parseInt(y);
    }
    else if (op == "sub") {
        result = parseInt(x) - parseInt(y);
    }
    else if (op == "mul") {
        result = parseInt(x) * parseInt(y);
    }
    else if (op == "div") {
        result = parseInt(x) / parseInt(y);
    }
    res.send("Result = " + result);
});

app.listen(8080);