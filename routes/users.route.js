const {Router} = require('express')
const {usersController} = require('../controllers/users.controller')
const router = require('./news.route')

router.post('./users', usersController.addUsers)
router.get('./users', usersController.getUsers)
router.delete('./users', usersController.deleteUsers)
router.patch('./users', usersController.editUsers)

module.exports = router 