//jshint esversion:6

const supervillains = require('supervillains');
var myvillian = supervillains.random();
console.log(myvillian);


// geting started with stuff

const express = require("express");
const app = express();

// dealing with request and responce

app.get("/",function(req,re){

  // get the request printrd on the screen
  //console.log(req);


  /// sending some stuff to the web page to display
  re.send("<h1><i> Welcome to the gafa nation..<i><h1>");


});

app.listen(3000,function(){
  console.log("stating server at port 3000");
}); // listen to this port

//creating  a diff route what if a person as for something an
app.get("/home",function(req,re){
  re.send("contact me at davidtzirima@gmail.com");

});

app.get("/hobbies",function(req,res){
  res.send("what do you want to know ....");

});

// creating a route about myself
app.get("/about",function(req,re){
  re.send("<h1>Welcome to blackmhofu technologies</> <hr> <button> talk to the gafa now... </> ");
});
