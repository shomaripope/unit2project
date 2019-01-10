const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).then((user) => {
            res.render('user/index', {user})
        })
    },
    new: (req,res) =>{
res.send('im working, i think')
    }
}

module.exports = userController;
