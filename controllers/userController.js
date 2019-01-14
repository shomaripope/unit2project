const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).then((user) => {
            res.render('user/index', {user})
        })
    },
    new: (req,res) =>{
        res.render('user/new')
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            location: req.body.location,
            content: req.body.content
        }).then(() => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const userId = req.params.id
        console.log(userId)
        User.findById(userId).then((user) => {

            res.render('user/show', { user })
        })
    },
    edit: (req, res) => {
        const userId = req.params.id
        // console.log(carId)
        res.render('user/edit', { userId })
    },
    update: (req, res) => {
        const userId = req.params.id
        console.log(req.body)
        User.findByIdAndUpdate(userId, req.body, { new: true }).then((user) => {
            res.redirect(`/${userId}`)
        })
    },
    delete: (req, res) => {
        const userId = req.params.id
        User.findByIdAndRemove(userId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = userController;
