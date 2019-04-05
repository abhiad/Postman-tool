var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set ("view engine", "ejs");
var friends = ["Niyu", "Abhishek", "Sadaf", "Amit"];

app.get("/", function(req, res){
res.render("home");
});

app.post("/addfriend", function(req,res){
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.send("You have reached the post request");
});

app.get("/friends", function(req, res){
res.render("friends", {friends:friends});
});

app.listen('300', 'localhost', function(){
	console.log("Server Started");
});
