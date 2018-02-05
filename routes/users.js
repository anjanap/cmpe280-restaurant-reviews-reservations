var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cmpe280";

/* GET users listing. */
router.post('/', function(req, res, next) {

    var name = req.body.name;
    var password = req.body.password;

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("users").findOne({name: name, password: password}, function(err, result) {
            if (err) throw err;
            res.send(result._id);
            db.close();
        });
    });
});

module.exports = router;
