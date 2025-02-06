var express = require("express");
var app = express();
app.use(express.static("public"));
const SpotifyWebApi = require("spotify-web-api-node");

var spotifyApi = new SpotifyWebApi({
    clientID: '1ff8f943ebfc4f09b8cbcc0f1b39a0ec' ,
    clientSecret: '6e45c1307fe947228ff310e85c56f28f'

});

//Retrieving an access token
spotifyApi.clientCredentialsGrant().then(
    function(data){
        console.log("The acess token expires in "+ data.body["expires_in"]);
        console.log("the acess token is " +data.body["access_token"]);


        //save the access token so that its used in future calls
        spotifyApi.setAccessToken(data.body["access_token"]);

    },
    function(err){
        console.log("Something went wrong when retrieving an access token",err.message);
    }
);

async function getTracks(searchterm, res){
    spotifyApi.searchTracks(searchterm).then(function(data){
        res.send(JSON.stringify(data.body));
    }, function(err){
        console.error(err);
    });
}

app.get("/searchLove",function(req, res){
    getTracks("love",res);
});






app.listen(8080);