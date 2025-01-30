var express = require('express');
var app = express();

var Jokes = require('knock-knock-jokes');

app.use(express.static('public'));


app.get('/getform', function (req, res) {
    var name = req.query.name;
    var quest = req.query.quest;
    res.send("Hi " + name + " I am sure you will " + quest);
});

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
    if (op == "add") {
        res.send("ADD " +(parseInt(x) + parseInt(y)));
    }
    else if (op == "sub") {
        res.send("MINUS " + parseInt(x) - parseInt(y));
    }
    else if (op == "mul") {
        res.send("Times " +parseInt(x) * parseInt(y));
    }
    else if (op == "div") {
        res.send("Divide " +parseInt(x) / parseInt(y));
    }
});

app.listen(8080);