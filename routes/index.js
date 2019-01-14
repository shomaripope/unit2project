const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const carController = require('../controllers/carController')

router.get('/car', carController.index)
router.post('/car', carController.create)
router.get('/car/new', carController.new)


router.get('/', userController.index)
router.post('/', userController.create)
router.get('/user/new', userController.new)
router.get('/:carId/show', carController.show)

router.get('/:id/car/edit', carController.edit)
router.patch('/:id/:carId', carController.update)
router.delete('/:id/:carId', carController.delete)


router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)


module.exports = router;