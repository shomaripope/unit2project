const Car = require('../models/Car')

const carController = {
    index: (req, res) => {
        Car.find({}).then((car) => {
            res.render('car/index', {car})
        })
    },
    new: (req,res) =>{
            res.render('car/new')
    },
    create: (req,res) =>{
        res.render('car/newcar')
}
}
module.exports = carController;
