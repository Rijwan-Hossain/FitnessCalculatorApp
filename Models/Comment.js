const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({ 
    userId: { 
        type: Schema.Types.ObjectId, 
        required: true 
    }, 
    userName: { 
        type: String, 
        required: true 
    }, 
    avatar: { 
        type: String, 
        default: '' 
    },
    postId: { 
        type: Schema.Types.ObjectId 
    },
    body: { 
        type: String,
        required: true,
        trim: true 
    } 
}) 

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;




