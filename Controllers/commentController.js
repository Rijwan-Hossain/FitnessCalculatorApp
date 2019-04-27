const Comment = require('../Models/Comment'); 
const Post = require('../Models/Post'); 

let createComment = (req, res) => { 
   let postId = req.params.postId; 

    let comment = new Comment({ 
        userId: req.body.userId,
        userName: req.body.userName,
        postId,
        body: req.body.body, 
        avatar: req.body.avatar || ''
    }) 

    comment.save() 
        .then(data => { 
            Post.findById(postId) 
                .then(post => { 
                    post.comments.push(data._id); 
                    Post.findOneAndUpdate({_id: postId}, {$set: post}) 
                        .then(() => { 
                            res.json({ 
                                message: 'Comment Added' 
                            }) 
                        }) 
                }) 
        }) 
        .catch(err => { 
            res.json({ 
                massage: 'Error Occured' 
            }) 
        }) 
} 









// Export 
module.exports = {
    createComment
    // getSingleComment,
    // deleteComment,
    // updateComment
 }
 
 

