const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')

//router.get('/cars', carController.index)

router.get('/', carController.index)
router.post('/newcar', carController.create)
router.get('/new', carController.new)
// router.get('/:id', carController.show)
// router.get('/:id/edit', carController.edit)
// router.put('/:id', carController.update)
// router.destroy('/:id', carController.destroy)


module.exports = router;