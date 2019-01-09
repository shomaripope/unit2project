const Car = require('../models/Car')

const carController = {
    index: (req, res) => {
        Car.find({}).then((car) => {
            res.send(car)
        })
    }
}

module.exports = carController