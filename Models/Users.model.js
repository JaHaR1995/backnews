
const mongoose = require('mongoose')

const usersShema = mongoose.Schema({
    name: String,
    password: Number
})

const Users = mongoose.model('Users', usersShema)

module.exports  =  Users  