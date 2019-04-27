const Post = require('../Models/Post') 
const mongoose = require('mongoose')
const WordPOS = require('wordpos'),
      wordpos = new WordPOS();


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
        .populate('comments')
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
            .populate('comments') 
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


// Search post 
let searchPost = (req, res) => { 
    let { terms } = req.body; 

    wordpos.getPOS(terms, (result) => { 
        let { nouns, adjectives } = result 

        let i, term = '' 

        for(i = 0; i < nouns.length; i++) {
            if(nouns[i] === 'I') {
                nouns.splice(i, 1) 
            } 
            else if(nouns[i] === 'i') {
                nouns.splice(i, 1) 
            } 
            else if(nouns[i] === 'we') {
                nouns.splice(i, 1) 
            } 
            else if(nouns[i] === 'We') { 
                nouns.splice(i, 1) 
            } 
            else if(nouns[i] === 'so') {
                nouns.splice(i, 1) 
            } 
            else if(nouns[i] === 'So') {
                nouns.splice(i, 1) 
            } 
            else if(nouns[i] === 'us') {
                nouns.splice(i, 1) 
            } 
            else if(nouns[i] === 'Us') {
                nouns.splice(i, 1) 
            } 
        }


        for(i = 0; i < adjectives.length; i++) { 
            if(adjectives[i] === 'I') { 
                adjectives.splice(i, 1) 
            } 
            else if(adjectives[i] === 'i') { 
                adjectives.splice(i, 1) 
            } 
            else if(adjectives[i] === 'we') { 
                adjectives.splice(i, 1) 
            } 
            else if(adjectives[i] === 'We') { 
                adjectives.splice(i, 1) 
            } 
            else if(adjectives[i] === 'so') { 
                adjectives.splice(i, 1) 
            } 
            else if(adjectives[i] === 'So') { 
                adjectives.splice(i, 1) 
            } 
            else if(adjectives[i] === 'us') { 
                adjectives.splice(i, 1) 
            } 
            else if(adjectives[i] === 'Us') { 
                adjectives.splice(i, 1) 
            } 
        } 
        

        for(i = 0; i < nouns.length; i++) { 
            term = term + " " + nouns[i]  
        }  

        for(i = 0; i < adjectives.length; i++) { 
            term = term + " " + adjectives[i] 
        }  

        Post.find({$text: {$search: term}}) 
            .then(result => { 
                    if(result.length) { 
                        res.json({ 
                            message: 'Search: Data found',
                            result 
                        })  
                    }  
                    else { 
                        res.json({ 
                            message: 'No Data found'
                        }) 
                    } 
            }) 
            .catch(() => { 
                res.json({ 
                    message: 'Error Occured'
                }) 
            }) 
    }) 
} 
 
 


module.exports = { 
    createPost,  
    getAllPost, 
    getSinglePost, 
    updatePost, 
    deletePost, 
    likePost, 
    searchPost
} 

