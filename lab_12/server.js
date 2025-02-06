var express = require("express");
var app = express();
app.use(express.static("public"));
const SpotifyWebApi = require("spotify-web-api-node");

var spotifyApi = new SpotifyWebApi({
    clientId: '1ff8f943ebfc4f09b8cbcc0f1b39a0ec' ,
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
    spotifyApi.searchTracks(searchterm)
    .then(function(data){
    var tracks = data.body.tracks.items;
    var HTMLResonse = "";
    for(var i = 0; i < tracks.length; i++){
        var track = tracks[i];
        console.log(track.name);

        HTMLResonse=HTMLResonse + "<div>"+"<h2>"+track.name+"</h2>"+"<h4>"+track.artists[0].name+"</h4>"+"<img src="+track.album.images[0].url+">"+"</div>";
        console.log(HTMLResonse);
    }
    res.send(HTMLResonse);
    },
    function(err){
        console.error(err);
    }
);
}

app.get("/searchLove",function(req, res){
    getTracks("love",res);
});


app.get('/search', function(req,res){
    var searchterm = req.query.searchterm;
    getTracks(searchterm,res);
})



app.listen(8080);