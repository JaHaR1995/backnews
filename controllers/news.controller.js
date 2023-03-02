const News = require("../Models/News.model");

module.exports.newsController = {
  addNews: async (req, res) => {
    try {
      const news = await News.create({  
        img: req.body.img,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        comment: req.body.comment      
      });
      res.json(news);
    } catch (error) {
      console.log(error);
    }
  },

  getNews: async (req, res) => {
    try {
      const news = await News.find().populate('category'); 
      res.json(news);
    } catch (error) {
      console.log(error);
    }
  },

  editNews: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(req.params.id,{
        img: req.body.img,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,   
        $push: { Comment: {
          user: req.body.user,
          text: req.body.text
        }}
      });
      res.json(news);
    } catch (error) {
      console.log(error);
    }
  },

  deleteNews: async (req, res) => {
    try {
      const news = await News.findByandDelete(req.params.id);
      res.json(news);
    } catch (error) {
      console.log(error);
    }
  },

  getNewsByCat: async (req, res) => {
    try {
      const news = await News.find({
        category: req.params.categoryId,  
      }).populate("category");
      res.json(news);
    } catch (error) {
      console.log(error);
    }
  },
};
