const MongoClient = require("mongodb-legacy").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbname = "star_wars_quotes";

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
var db;

connectDB();
async function connectDB() {
    await client.connect();
    console.log("Connected to server");
    db = client.db(dbname);
    app.listen(8080);
}
app.get("/all", function(req , res){
    db.collection("quotes").find().toArray(function(err, result){
        if(err)throw err;

        var output = "<h1> All the quotes</h1>"
        for(var i=0; i<result.length; i++){
            output += "<div>"
            output += "<h3>" + result[i].name + "</h3>"
            output += "<p>" + result[i].quote + "</p>"
            output += "</div>"
        }
        res.send(output);
    })
})

app.post("/quotes", function(req, res){
    db.collection("quotes").insertOne(req.body, function(err, result){
        if(err) throw err;
        console.log("saved to database")
        res.redirect("/");
    })
});