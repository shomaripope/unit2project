
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema({
    title: String,
    author: String,
    date: Date,
    comment: String
});

module.exports = mongoose.model("Post", Post)