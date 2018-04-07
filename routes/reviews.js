var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cmpe280";

function check(req, res) {

    var review = req.body.newreview;
    var userid = 1;
    console.log("Review: " + review + " by user: " + userid);

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("reviews").insertOne({userid: userid, review: review}, function(err, result) {
            if (err) throw err;
            if(result)
                res.render('../views/success.html');
            else
                res.render('../views/error.html');
            db.close();
        });
    });

}//function
exports.add = check;