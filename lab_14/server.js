var express = require("express");
var app = express();

app.set("View engine","ejs");

app.get("/",function(req,res){
    res.render("Pages/index");
});
app.get("/about",function(req,res){
    res.render("Pages/about");
});
app.listen(8080);
console.log("Server is running on port 8080");