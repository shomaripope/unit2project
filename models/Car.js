
const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Car = new Schema({
    year: Number,
    make: String,
    model: String,
    image: String,
    isAvailable: Boolean
});

module.exports = mongoose.model("Car", Car);