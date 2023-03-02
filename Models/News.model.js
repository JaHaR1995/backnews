const  mongoose  = require("mongoose")

const newsShema = mongoose.Schema({
    img: String,
    name: String,
    description: String,

    category:{
         type:   mongoose.SchemaTypes.ObjectId ,      
         ref: 'Category'  
    },

    comment:[{
        user: {
            type: mongoose.SchemaTypes.ObjectId,   
            ref: 'Users' 
        },
        text: String
    }]


})


const News = mongoose.model('News', newsShema)     
module.exports= News 