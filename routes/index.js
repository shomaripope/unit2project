const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const carController = require('../controllers/carController')


router.get('/', userController.index)
router.post('/user', userController.create)
router.get('/user/new', userController.new)
router.get('/:id', userController.show)

router.get('/:id/edit', userController.edit)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)




router.get('/car', carController.index)
router.post('/car', carController.create)
router.get('/car/new', carController.new)
router.get('/:carId/show', carController.show)

router.get('/car/:carId/edit', carController.edit)
router.patch('/car/:carId', carController.update)
router.delete('/car/:carId', carController.delete)



module.exports = router;