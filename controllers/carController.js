const Car = require('../models/car')

const carController = {
    index: (req, res) => {
        Car.find({}).then((car) => {
            console.log(car);
            res.render('car/index', { car })

        })
    },
    new: (req, res) => {
        res.render('car/new')
    },
    create: (req, res) => {
        Car.create({
            year: req.body.year,
            make: req.body.make,
            model: req.body.model,
            image: req.body.year,
            isAvailable: req.body.isAvailable
        }).then(() => {
            res.redirect('/car')
        })
    },
    show: (req, res) => {
        const carId = req.params.carId
        //console.log("carId" )
        Car.findById(carId).then((car) => {

            res.render('car/show', { car })
        })
    },
    edit: (req, res) => {
        Car.findById(req.params.id).then(car =>{
        // console.log(carId)
        res.render('/car/edit')
        })
    },
    update: (req, res) => {
        const carId = req.params.carId
        console.log(req.body)
        Car.findByIdAndUpdate(carId, req.body, { new: true }).then((car) => {
            res.redirect(`/${carId}`)
        })
    },
    delete: (req, res) => {
        const carId = req.params.carId
        Car.findByIdAndRemove(carId).then(() => {
            res.redirect(`/car/${car._id}`)
        })
    }

}
module.exports = carController;
