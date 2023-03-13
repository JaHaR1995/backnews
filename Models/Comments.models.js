const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text: String,
    user:{
        type: mongoose.SchemaTypes.ObjectId,  
        ref: 'Users'
    },

    news:{
        type: mongoose.SchemaTypes.ObjectId,  
        ref: 'News' 
    }
})

const Comments = mongoose.model('Comment',  commentSchema) 

module.exports =  Comments  