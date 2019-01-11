
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema({
    title: String,
    author: String,
    date: String,
    comment: String
});

module.exports = mongoose.model("Post", Post)