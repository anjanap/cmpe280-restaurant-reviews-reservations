var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    userid: Number,
    review: { type: String, required: true}
});

module.exports = mongoose.model('review', reviewSchema);