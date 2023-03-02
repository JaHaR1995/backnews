const { Router } = require('express')
const {newsController} = require('../controllers/news.controller')

const router = Router() 

router.post('/news', newsController.addNews)
router.get('/news', newsController.getNews)
router.delete('/news',newsController.deleteNews)
router.patch('/news/:id', newsController.editNews)
router.get('/news', newsController.getNewsByCat)

module.exports = router  