
const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    image: String,
    location: String,
    content: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }]
});

module.exports = mongoose.model("User", User);