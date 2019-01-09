const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/newsLink").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;