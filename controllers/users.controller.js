const Users = require("../Models/Users.model");
const bcrypt = require('bcrypt');
const  jwt  = require("jsonwebtoken");  



module.exports.usersController = {
  addUsers: async (req, res) =>{
    const {login,  password} =  req.body;

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))  

    const users = await Users.create({login: login, password: hash})  



    res.json(users)  
  },

  login: async (req, res) =>{                       
    const {login, password} = req.body;

    const candidate =await Users.findOne({login});

    if(!candidate){
        return res.status(401).json({error:'error login'})  
    }

   

    const valid = await bcrypt.compare(password, candidate.password)       

    if(!valid){
        return res.status(401).json({error: 'error passwod'})  
    }

    const payload = {
        id: candidate._id,
        login: candidate.login 
    }

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY,{  
        expiresIn:  '24h', 
    });

    res.json(
        token
    ) 
  },
  

  getUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users)
    } catch (error) {
      console.log(error);
    }
  },

  editUsers: async (req, res) => {
    try {
      const users = await Users.findByIdAndUpdate(req.params.id);
      res.json(users)
    } catch (error) {
      console.log(error);
    }
  },

  deleteUsers: async (req, res) => {
    try {
      const users = await Users.findByIdAndDelete(req.params.id);  
      res.json(users)
    } catch (error) {
      console.log(error);
    }
  },
}
