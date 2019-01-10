const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/carsApp").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;
