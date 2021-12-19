const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const dontenv = require('dotenv');
const bodyParser = require('body-parser');



 const app = express();


app.use(express.static('/CSS'));
app.use(express.static('/public'));
app.use('/CSS', express.static(__dirname + '/CSS'));
app.use('/Images', express.static(__dirname + '/Images'));
app.use('/JS', express.static(__dirname + '/JS'));
app.use('/shopping-cart.js', express.static(__dirname + '/shopping-cart.js'));


app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

// app.use(bodyParser.urlencoded({extended: true}));

 
mongoose.connect("mongodb+srv://manlai4j:Asd85875995@cluster0.hurap.mongodb.net/manlai4j?retryWrites=true&w=majority",
{useNewUrlParser: true},{ useUnifiedTopology: true });


// const CartSchema = {
//      username: String,
//       email: String,
//       phone: String,
//       password: String,
// }

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/");
  });
 app.get("/login.html", function(req, res){
     res.sendFile(__dirname + "/public/login.html");
});
app.get("/public/index.html", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/public/mobile.html", function(req, res){
    res.sendFile(__dirname + "/public/mobile.html");
});
app.get("/public/payment.html", function(req, res){
    res.sendFile(__dirname + "/public/payment.html");
});

app.get("/public/signup.html", function(req, res){
    res.sendFile(__dirname + "/public/signup.html");
});





// app.get("/mobile.html", function(req, res){
//     res.sendFile(__dirname + "/mobile.html");
// });
// app.get("/login.html", function(req, res){
//     res.sendFile(__dirname + "/login.html");
// });
// app.get("/payment.html", function(req, res){
//     res.sendFile(__dirname + "/payment.html");
// }) ;
// app.get("/index.html", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// });

// app.get("/login", function(req, res) {
//     let newCart = new CartSchema({
//         username: req.body.username,
//         email: req.body.email,
//         phone: req.body.phone,
//         passowrd: req.body.password,
//     })
//     newCart.save();
//     res.redirect('/');
    
// })

