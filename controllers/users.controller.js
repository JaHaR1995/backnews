const Users = require('../Models/Users.model')

module.exports.usersController={
    addUsers: async (req, res) =>{
        try{
            const users = await Users.create({         
                name: req.body.name,
                password: req.body,password  
            })
        }catch(error){
            console.log(error)
        }
    },


    getUsers: async (req, res) =>{
        try{
            const users = await Users.find()  
        } catch(error){
            console.log(error)        
        }
    },


    editUsers: async (req, res) =>{
        try{
            const users = await Users.findByIdAndUpdate(req.params.id) 
        }catch(error){
            console.log(error)
        }
    },

    deleteUsers: async (req, res) =>{
        try{
            const users = await Users.findByIdAndDelete(req.params.id)
        }catch(error){
            console.log(error) 
        }
    }

}