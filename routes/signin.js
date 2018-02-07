var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cmpe280";


router.post('/', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("users").findOne({email: email, password: password}, function(err, result) {
            if (err) throw err;
            if(result)
            res.send(result._id);
            else
                res.send("User Not found");
            db.close();
        });
    });
});

module.exports = router;
