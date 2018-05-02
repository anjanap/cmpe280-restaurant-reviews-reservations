var express = require('express');
//var router = express.Router();
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/cmpe280";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cmpe280');
var User = require('../models/model.js');
var userid;

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
        else {
          res.render('../views/error.html');
        }
    });
}
exports.userid = userid;
exports.login = check_mongoose;


function signout(req, res) {
    res.send("hellooooo");
    req.session.destroy(function(err) {
        if (err) res.render('../views/error.html');
        else{

        }
    });

}
exports.signout = signout;

