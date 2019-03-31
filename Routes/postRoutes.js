
const router = require('express').Router() 
const {
    createPost, 
    getAllPost, 
    getSinglePost, 
    updatePost, 
    deletePost
} = require('../Controllers/postController')
router.post('/', createPost) 
router.get('/', getAllPost) 
router.get('/:id', getSinglePost) 
router.patch('/:id', updatePost) 
router.delete('/:id', deletePost) 



module.exports = router

