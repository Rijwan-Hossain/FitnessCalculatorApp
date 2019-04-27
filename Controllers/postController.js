const Post = require('../Models/Post') 
const mongoose = require('mongoose')

const createPost = (req, res) => { 
    let { title, body, author, avatar } = req.body 
    const post = new Post({ 
        title, 
        body, 
        author, 
        avatar, 
        like: 0 
    }) 


    post.save() 
        .then(result => { 
            res.json({ 
                message: 'Post Uploaded'
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 



// Get All
const getAllPost = (req, res) => {
    Post.find() 
        .then(data => { 
            if(data.length) { 
                res.json({ 
                    message: 'See All posts', 
                    length: `There are ${data.length} posts`,
                    data 
                }) 
            } 
            else { 
                res.json({ 
                    message: 'No data found'
                }) 
            } 
            
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Error Occured', 
                err 
            }) 
        }) 
}



// get single posts
const getSinglePost = (req, res) => {
    let id = req.params.id; 

    if(mongoose.Types.ObjectId.isValid(id)) { 
        Post.findById(id) 
            // .populate('comments') 
            .then(post => { 
                res.json({ 
                    message: 'Post Found', 
                    post 
                }) 
            }) 
            .catch(err => { 
                res.json({ 
                    message: 'Error Occured', 
                    err 
                }) 
            }) 
    } 
} 



// Update 
const updatePost = (req, res) => {
    let { id } = req.params 

    Post.findOneAndUpdate({_id: id}, {$set: req.body}, {new: true}) 
        .then(post => { 
            res.json({ 
                message: 'Post Updated', 
                post 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
}


// Delete
const deletePost = (req, res) => { 
    const { id } = req.params 
    Post.findOneAndDelete({_id: id}) 
        .then(result => { 
            res.json({ 
                message: 'Post Deleted', 
                result 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 


// Like Post 
const likePost = (req, res) => { 
    console.log('Hello Like');
    
    let id = req.params.postId 
    console.log(id);

    Post.findById(id) 
        .then(post => {
            Post.findByIdAndUpdate(id, {$set: {like: post.like + 1}}, {new: true}) 
                .then(updatedPost => { 
                    res.json({ 
                        message: '1 like added'
                    }) 
                }) 
        })
        .catch(err => { 
            res.json({ 
                message: 'Server Error' 
            }) 
        }) 
} 

module.exports = { 
    createPost,  
    getAllPost, 
    getSinglePost, 
    updatePost, 
    deletePost, 
    likePost
} 

