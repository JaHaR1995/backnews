const {Router} = require('express')
const {usersController} = require('../controllers/users.controller')



const router = Router()

router.get('/users', usersController.getUsers)
router.post('/users', usersController.addUsers)
router.post('/login', usersController.login)

// router.get('/users', usersController.getUsers)
// router.delete('/users', usersController.deleteUsers)
// router.patch('/users', usersController.editUsers) 

module.exports = router 