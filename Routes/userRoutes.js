
const express = require('express'); 
const router = express.Router(); 
const { 
    register, 
    getAllUsers, 
    getSingleUser, 
    deleteUser, 
    updateUser, 
    login
} = require('../Controllers/userController'); 
const authenticate = require('../Middlewares/authenticate')

// routes
router.post('/register', register); 
router.get('/alluser', getAllUsers); 
router.get('/register/:id', getSingleUser); 
router.delete('/register/:id', deleteUser); 
router.patch('/register/:id', authenticate, updateUser); 
router.post('/login', login); 


module.exports = router; 




