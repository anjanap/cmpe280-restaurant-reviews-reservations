var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cmpe280";


function getrestaurants(req, res) {
    var final = [];

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("restaurant_details").find({}).toArray(function(err, r_result) {
            if (err) throw err;
            if(r_result.length == 0)
                res.send("No restaurants found!");
            else {
                console.log(r_result[1]);
                console.log(r_result[0].restaurant_name);
                res.send(r_result);

            }
            db.close();
        });
    });

}

exports.getrestaurants = getrestaurants;