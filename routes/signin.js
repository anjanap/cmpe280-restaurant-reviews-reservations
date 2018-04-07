var express = require('express');
//var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cmpe280";

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
function check(req, res) {

    var email = req.body.email;
    var password = req.body.password;
    console.log("email: " + email);
    console.log("password: " + password);
  /*  if (email == "abc@abc.com" && password == "123456") {
        console.log("password:$$$$$$$$SSSS " + password);
        res.render('../views/success.html');
    }
    else{
        res.render('../views/error.html');
    }*/


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("users").findOne({email: email, password: password}, function(err, result) {
            if (err) throw err;
           if(result)
            res.render('../views/success.html');
               //res.send("IN");
            else
                res.render('../views/error.html');
               //res.send("NOPE");
            db.close();
        });
    });

}//function
exports.login = check;
