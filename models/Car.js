
const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Car = new Schema({
    year: Number,
    make: String,
    model: String,
    image: String,
    isAvailable: Boolean,
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

module.exports = mongoose.model("Car", Car);