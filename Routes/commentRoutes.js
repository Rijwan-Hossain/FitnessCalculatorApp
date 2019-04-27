const express = require('express'); 
const router = express.Router(); 

const { createComment } = require('../Controllers/commentController')

// Create 
// post-route/postid/comments 
router.post('/:postId/comments', createComment); 



module.exports = router 

