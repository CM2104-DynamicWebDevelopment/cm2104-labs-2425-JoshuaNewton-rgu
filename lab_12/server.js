var express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
var app = express();
var spotifyWebApi = require("spotify-web-api-node");
app.use(express.static("public"));

var spotifyApi = new SpotifyWebApi({
    clientID: "1ff8f943ebfc4f09b8cbcc0f1b39a0ec" ,
    ClientSecret: "6e45c1307fe947228ff310e85c56f28f"

});

app.use(express.static("public"));

app.get("/",function(req,res){
    res.send("Hello World! By Express");
});
app.listen(8080);