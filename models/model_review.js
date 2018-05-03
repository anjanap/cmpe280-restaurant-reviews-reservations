var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	restaurantid: String,
    userid: String,
		uname: String,
    Description: { type: String, required: true}
},{collection:'reviews'});

module.exports = mongoose.model('review', reviewSchema);
