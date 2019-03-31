const Post = require('../Models/Post') 
const mongoose = require('mongoose')

const createPost = (req, res) => { 
    let { title, body, author } = req.body 
    const post = new Post({ 
        title, 
        body, 
        author 
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



module.exports = { 
    createPost,  
    getAllPost, 
    getSinglePost, 
    updatePost, 
    deletePost 
} 

