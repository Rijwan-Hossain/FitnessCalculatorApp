
const express = require('express'); 
const router = express.Router(); 
const { 
    register, 
    getAllUsers, 
    getSingleUser, 
    deleteUser, 
    login
} = require('../Controllers/userController'); 
const authenticate = require('../Middlewares/authenticate')

// routes
router.post('/register', register); 
// router.get('/all', authenticate, getAllUsers); 
router.get('/all', getAllUsers); 
router.get('/singleuser/:id', getSingleUser); 
router.delete('/register/:id', deleteUser); 
router.post('/login', login); 
router.get('./profile', authenticate, (req, res) => {
    console.log('Yahoo!!! , I am logged in.'); 
})

module.exports = router; 




