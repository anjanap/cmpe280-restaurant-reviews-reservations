//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/cmpe280";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cmpe280');
var review_model = require('../models/model_review.js');
var ObjectId = require('mongodb').ObjectID;

function add(req,res){
    var review = req.body.newreview;
    var userid = req.session.userid;
    console.log(review);
    var item = {
        userid: userid,
        review: review
    };
    console.log(item);
    var newReview = new review_model(item);
    console.log(newReview) ;
    var flag = newReview.save();
    res.send("haha");
}

exports.add = add;

function display(req,res){
    var userid = req.session.userid;
    console.log(userid + "&&&&&&&");
    review_model.find({userid: userid},function(err,result){
        if(err) throw err;
        if(result){
            console.log("inside if");
            res.send(result);
        }
        else
            res.render('../views/error.html');
    });
}

exports.display = display;

function update(req,res){

    var id = req.body.updateid;
    var review = req.body.updatereview;

    var myquery = {_id :ObjectId(id)};
    var newvalues = { $set: { review: review} };

    review_model.updateOne(myquery,newvalues,function(err,result){
        if(err) throw err;
        if(result)
            res.render('../views/success.html');
        else
            res.render('../views/error.html');
    });

}


exports.update = update;

function remove(req,res){
    var id = req.param("id");//'5ac91d3f0683426258aa387c';
    console.log(id + "++++++++++++==");
    var myquery = {_id :ObjectId(id)};
    review_model.deleteOne(myquery,function(err,result){
    if(err) throw err;
    if(result)
        res.send({result:1});
    else
        res.render('../views/error.html');
    });
}

exports.remove = remove;
