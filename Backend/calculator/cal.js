//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");//  dealing with body parser so that we can read whatever that gets posted to our server

const app = express();
// app should use the body-bodyParser
app.use(bodyParser.urlencoded({extended :true}));


app.listen(3000,function(req,re){
  console.log("server is running at port 3000");
});


/// routing....
app.get("/",function(req,re){
  re.sendFile(__dirname + "/index.html");
});


// /// how the  sever should behave when something is sent to interval
// app.post("/",function(req,res){
//   res.send("thanks for posting on me");
//
// });

/// tappinng into the things that gets posted
app.post("/",function(req,res){
   // the body paser alows us to tap into req.body
   //res.send("thanks for posting on me");
  console.log(req.body);
  // getting the actual things that were sent
  var1 = Number(req.body.num1);
  var2 = Number(req.body.num2);
  varSolution = var1 +var2;
  res.send("The solution is " +varSolution);
});


// dealing with bmi calculations
app.get("/bmicalculator",function(req,res){

  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){

  var num1 = Number(req.body.weight);
  var num2 = Number(req.body.height);
  var3 = Math.floor(num1 / (num2*num2));
   res.send("Your BMI is :" + var3);

});
