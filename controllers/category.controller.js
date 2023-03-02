const Category = require('../Models/Category.model')


module.exports.categoryController ={
    addCategory: async (req, res) =>{
        try{
            const category =  await Category.create({            
                name: req.body.name
            })
        res.json()
        } catch(error){
            console.log(error)
        }
    },

    getCategory: async (req, res) =>{  

        try{
            const category = await Category.find() 
            res.json(category)        
        }catch(error){
            console.log(error)
        }
    },


    editCategory: async (req, res) =>{
        try{
            const category = await Category.findByIdAndUpdate(req.params.id)
        }catch(error){
            console.log(error)
        }
    },


    deleteCategory: async (req, res) =>{
        try{
            const category = await Category.findByIdAndDelete(req.params.id)
        }catch(error){
            console.log(error) 
        }
    }
}