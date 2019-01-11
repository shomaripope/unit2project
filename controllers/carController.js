const Car = require('../models/Car')

const carController = {
    index: (req, res) => {
        Car.find({}).then((car) => {
            console.log(car);
            res.render('car/index', {car})
            
        })
    },
    new: (req,res) =>{
        res.render('car/new')
    },
    create: (req,res) =>{
        Car.create({
            year: req.body.year,
            make: req.body.make,
            model: req.body.model,
            image: req.body.year,
            isAvailable: req.body.isAvailable
                }).then(homePage => {
                res.redirect('/')
                })
    },
    show: (req,res) =>{
    const carId = req.params.id
    console.log(carId)
      Car.findById(carId).then((car) => {
       
        res.render('car/show', { car })
      })
    },
    edit: (req, res) => {
        const carId = req.params.id
        // console.log(carId)
        res.render('car/edit', {carId})
    },
    update: (req, res) => {
        const carId = req.params.id
        console.log(req.body)
        Car.findByIdAndUpdate(carId, req.body, {new: true}).then((newslink) => {
            res.redirect(`/${carId}`)
        })
    },

}
module.exports = carController;
