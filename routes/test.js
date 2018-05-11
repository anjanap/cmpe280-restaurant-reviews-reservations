var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cmpe280";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cmpe280');
var review_model = require('../models/model_review.js');
var ObjectId = require('mongodb').ObjectID;


/* GET home page. */
router.get('/test', function (req, res, next) {
    res.render('../views/test.html');
});


function test(req,res){
    var review = req.body.review_list;
    var userid = req.session.userid;
    var rest_id = req.session.restaurantid;
    var username = req.session.name;
    //rest_id = rest_id + "";
    console.log(review);
    var item = {
        userid: userid,
        restaurantid: rest_id,
        uname: username,
        Description: review
    };
    console.log(item);
    var newReview = new review_model(item);
    console.log(newReview + "HHHHHH") ;
    var flag = newReview.save();
    var final = [];

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("restaurant_details").find({_id: ObjectId(rest_id)}).toArray(function(err, r_result) {
            if (err) throw err;
            if(r_result.length == 0) {
                a = false;
                final.push(a);
                res.send(final);
            }
            else {
                res.render('../views/home.html');
            }
            db.close();
        });
    });
}



exports.test = test;
