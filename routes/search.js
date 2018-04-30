var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/cmpe280";
var reviews = require('./reviews');


function search(req, res) {

    var restaurant_name = req.body.restaurant_name;
    console.log("rest name: "+restaurant_name);
    var u_id = req.session.userid;
    console.log(u_id);
    var final = [];

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("cmpe280");
        dbo.collection("restaurant_details").find({ restaurant_name: restaurant_name}).toArray(function(err, r_result) {
            if (err) throw err;
            if(r_result.length == 0)
                res.send("No restaurants found!");
            else {
                var r_id = r_result[0]._id + "";
                req.session.restaurantid = r_id;
                console.log(req.session.restaurantid);
                dbo.collection("reviews").find({restaurantid: r_id}).toArray(function(err, result) {
                    if (err) throw err;
                    if (result.length == 0)
                    {
                        final.push(r_result[0]);
                        res.send(final);
                    }

                    else {
                        final.push(r_result[0]);
                        for(var j=0;j<result.length;j++)
                          final.push(result[j]);
                        res.send(final);
                    }
                    db.close();
                });
            }
            db.close();
        });
    });
}
exports.search = search;
