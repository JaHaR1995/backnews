const {Router} = require('express')
const {categoryController} = require('../controllers/category.controller')
const router = Router()

router.post('/category', categoryController.addCategory)
router.get('/category', categoryController.getCategory)
router.delete('/category', categoryController.deleteCategory)
router.patch('/category/:id', categoryController.editCategory)

module.exports = router 