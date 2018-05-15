var express = require('express');
//var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cmpe280');
var User = require('../models/model.js');

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
    res.render('../views/index.html');
}

exports.signup = register_mongoose;
