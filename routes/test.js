var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cmpe280');
var review_model = require('../models/model_review.js');
var ObjectId = require('mongodb').ObjectID;


/* GET home page. */
router.get('/test', function (req, res, next) {
    res.render('../views/test.html');
});


/*function test(req,res){
res.render('../views/test.html');
console.log(req.body);
}*/

function test(req,res){
    var review = req.body.review_list;
    var userid = req.session.userid;
    var rest_id = req.session.restaurantid;
    //rest_id = rest_id + "";
    console.log(review);
    var item = {
        userid: userid,
        restaurantid: rest_id, 
        Description: review
    };
    console.log(item);
    var newReview = new review_model(item);
    console.log(newReview + "HHHHHH") ;
    var flag = newReview.save();
    res.render('../views/success.html');
}



exports.test = test;
