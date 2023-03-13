const { Router } = require('express')
const {commentsController} = require('../controllers/comments.controller')  
const authMiddleware = require('../Models/Middlewares/auth.middleware')
const router = Router() 

router.post('/comments',  authMiddleware, commentsController.createComment)  
router.get('/comments', commentsController.getAllComment)  



module.exports = router  