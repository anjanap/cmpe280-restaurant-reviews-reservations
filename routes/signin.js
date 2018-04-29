var express = require('express');
//var router = express.Router();
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/cmpe280";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cmpe280');
var User = require('../models/model.js');
var userid;

/*
router.post('/signin', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("users").findOne({email: email, password: password}, function(err, result) {
            if (err) throw err;
           if(result)
            res.render('home');
            else
                res.send("User Not found");
            db.close();
        });
    });
});

module.exports = router;
*/

function check_mongoose(req,res){
     var email = req.body.email;
     var password = req.body.password;
     console.log(email);
    User.findOne({email: email, password: password},function(err, result){
        if(err) res.render('../views/error.html');
        if(result)
        {
            req.session.userid = result._id + "";
            console.log(req.session.userid);
            res.render('../views/home.html');
        }
    });
}

exports.userid = userid;
// function check(req, res) {

//     var email = req.body.email;
//     var password = req.body.password;
//     console.log("email: " + email);
//     console.log("password: " + password);


//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("cmpe280");
//         dbo.collection("users").findOne({email: email, password: password}, function(err, result) {
//             if (err) throw err;
//            if(result)
//             res.render('../views/success.html');
//                //res.send("IN");
//             else
//                 res.render('../views/error.html');
//                //res.send("NOPE");
//             db.close();
//         });
//     });

// }//function
exports.login = check_mongoose;
