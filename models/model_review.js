var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	restaurantid: String,
    userid: Number,
    Description: { type: String, required: true}
},{collection:'reviews'});

module.exports = mongoose.model('review', reviewSchema);