
const User = require('../Models/User') 
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken')
const validate = require('../Validator/registrationValidator') 

// Create User 
const register = (req, res) => { 
    // Get Data 
    let { name, email, password, confirmPassword } = req.body 
    
    // Validate Data 
    const result = validate({ name, email, password, confirmPassword }) 
    if(Object.keys(result).length !== 0) { 
        res.json({ 
            result 
        }) 
    } 
    
    
    // Check Duplicate User 
    User.find({email: email}) 
        .then(user => { 
            if(Object.keys(user).length > 0) { 
                res.json({ 
                    message: 'You cannot signup by this email.' 
                }) 
            } 
            else { 
                // Hash Password  
                bcrypt.hash(password, 10, (err, hash) => { 
                    // Error First Pattern 
                    if(err) { 
                        res.json({ 
                            error: err 
                        }) 
                    } 
                    
                    // Save to DB 
                    let newUser = new User({ 
                        name, 
                        email, 
                        password: hash, 
                        avatar: req.body.avatar || '', 
                        gender: req.body.gender || '', 
                        weight: req.body.weight || '', 
                        birthDate: req.body.birthDate || null, 
                        address: req.body.address || '' 
                    }) 
                    
                    newUser.save() 
                        .then(() => { 
                            res.json({ 
                                message: `Thank you ${name} for signing up. Enjoy our services` 
                            }) 
                        }) 
                        .catch((err) => { 
                            res.json({ 
                                message: 'Account is not created.', 
                                err 
                            }) 
                        }) 
                }) 
            } 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error', 
                error: err 
            }) 
        }) 
} 



// Get All Users 
let getAllUsers = (req, res) => { 
    User.find() 
        .then(users => { 
            res.json({ 
                message: 'Heres all the user', 
                users 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error', 
                error: err 
            }) 
        }) 
} 


// Get a single user 
let getSingleUser = (req, res) => { 
    const id = req.params.id 
    User.findById(id) 
        .then(user => { 
            if(Object.keys(user).length === 0) { 
                res.json({ 
                    message: 'No User Found' 
                }) 
            } 
            else { 
                res.json({ 
                    message: 'Here\'s the user, you are looking for',
                    user 
                }) 
            } 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error', 
                error: err 
            }) 
        }) 
} 





// Delete single user 
let deleteUser = (req, res) => { 
    const id = req.params.id 
    User.findOneAndDelete(id) 
        .then(user => { 
            res.json({ 
                message: `${user.name} Deleted Successfully`
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error', 
                error: err 
            }) 
        }) 
} 





// Login 
let login = (req, res) => { 
    let { email, password } = req.body 
    //   Should Check Validation, But I did not. 
    //   So, do it in front end 

    User.findOne({email}) 
        .then(user => { 
            if(!user) { 
                res.json({ 
                    message: 'User Not Found'
                }) 
            } 
            else { 
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err) { 
                        res.json({ 
                            message: 'Server Error'
                        }) 
                    } 
                    else {
                        if(!result) {
                            res.json({ 
                                message: 'Wrong Password'
                            }) 
                        } 
                        else { 
                            const token = jwt.sign( 
                                { 
                                    id: user._id, 
                                    name: user.name, 
                                    email, 
                                }, 
                                'SECRET', 
                                { 
                                    expiresIn: '1d'
                                } 
                            ) 
                            
                            res.json({ 
                                message: 'Login Successful', 
                                token: `Bearer ${token}`
                            }) 
                        } 
                    } 
                }) 
            } 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error' 
            }) 
        }) 
} 



module.exports = {
    register, 
    getAllUsers, 
    getSingleUser, 
    deleteUser, 
    login 
}





