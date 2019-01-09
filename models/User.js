
const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    image: String,
    location: String,
    content: String
});

module.exports = mongoose.model("User", User);