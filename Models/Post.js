
const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const PostSchema = new Schema({ 
    title: String, 
    body: String, 
    author: String, 
    authorAvatar: String,
    like: { 
        type: Number, 
        default: 0
    }, 
    comments: [ 
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Comment' 
        } 
    ] 
}, { timestamps: true }) 

PostSchema.index( 
    { 
        'title': 'text', 
        'body': 'text', 
    } 
) 

const Post = mongoose.model('Post', PostSchema) 

module.exports = Post 

