
const router = require('express').Router() 
const {
    createPost, 
    getAllPost, 
    getSinglePost, 
    updatePost, 
    deletePost, 
    likePost
} = require('../Controllers/postController')
router.post('/', createPost) 
router.get('/', getAllPost) 
router.get('/:id', getSinglePost) 
router.patch('/:id', updatePost) 
router.delete('/:id', deletePost) 
router.get('/:postId/like', likePost) 



module.exports = router

