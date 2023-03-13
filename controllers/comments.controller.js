const Comment = require("../Models/Comments.models");
const jwt = require("jsonwebtoken");

module.exports.commentsController = {

    getAllComment: async (req, res) => {
        const comments = await Comment.find()

        return res.json(comments)
    },
  createComment: async (req, res) => {
    const { text } = req.body;
    
    try {         
      const comment = await Comment.create({  
        news: req.body.news,    
        user: req.user.id,
        text
      });

      return res.json(comment)


    } catch (error) {
      return res.status(401).json("Неверный  токен");  
    }
  },
};
