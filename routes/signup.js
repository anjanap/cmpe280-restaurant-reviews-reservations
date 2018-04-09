var express = require('express');
//var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cmpe280');
var User = require('../models/model.js');
// var Schema = mongoose.Schema;
// //var url = "mongodb://localhost:27017/cmpe280";
// var userSchema = new Schema({
//     email: String,
//     firstname: { type: String, required: true},
//     firstname: { type: String, required: true },
//     password: { type: String, required: true }
//   });

//var User = mongoose.model('User', userSchema);
/*
router.post('/', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        var myobj = { email: email, password: password , firstname: firstname, lastname:lastname};
        dbo.collection("users").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 user created");
            db.close();
        });

    });
});

module.exports = router;*/


function register_mongoose(req,res){
    console.log(req.body.email + "&&&&&&");
    var item = {
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    };
    var newUser = new User(item);
    var flag = newUser.save();
    //console.log(JSON.stringify(flag + "*********8");
    res.render('../views/success.html');
}
//console.log(item);


// function register(req, res) {
//     var email = req.body.email;
//     var password = req.body.password;
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;
//     console.log("From html: " + email);

//     monk.connect(url, function (err, db) {
//         if (err){
//             console.log(err);
//             res.render('../views/dberror.html');
//         }
//         else{        var dbo = db.db("cmpe280");
//             var myobj = {email: email, password: password, firstname: firstname, lastname: lastname};
//             dbo.collection("users").insertOne(myobj, function (err, resp) {
//                 if (err) throw err;
//                 console.log("1 user created");
//                 db.close();
//                 res.render('../views/success.html');
//             });}


//     });

// }//function
exports.signup = register_mongoose;
