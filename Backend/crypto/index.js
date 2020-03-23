//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const request = require('request');

const app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));


app.listen(3000, function() {
  console.log("server is starting a port 3000....");
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


//what happens  when we post something
app.post("/", function(req, res) {
  //console.log(req.body.crypto);
  /// geting user inforamtion
  var crypto =req.body.crypto;
  var fiat = req.body.fiat;

  /// instead of respond we make a requset to another server

  var userpair = crypto+fiat;
  var baseUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var finalUrl = baseUrl+userpair;

  request(finalUrl, function(err, responce, body) {
    console.log(body);
    //responceinclude a lot of stuff but the body only contains more refined data
    var data = JSON.parse(body); // convering the json into javascript objec
    var price = data.last;
    res.send("the bit coin price is " + price);
  });


});
