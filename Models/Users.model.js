
const mongoose = require('mongoose')

const usersShema = mongoose.Schema({
    login: String,
    password: String
})

const Users = mongoose.model('Users', usersShema)

module.exports  =  Users  