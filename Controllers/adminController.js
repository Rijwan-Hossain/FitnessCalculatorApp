
const Admin = require('../Models/Admin') 
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken') 


// Create User 
const adminRegister = (req, res) => { 
    let name = 'Md. Rijyan Hossain'; 
    let email = 'rijyan.cse.152@gmail.com'; 
    let password = '152002007'; 
    
    bcrypt.hash(password, 10, (err, hash) => { 
        if(err) { 
            return res.json({ 
                error: err 
            }) 
        } 

        let newAdmin = new Admin({ 
            name, 
            email, 
            password: hash, 
            mobile: req.body.mobile || '', 
            avatar: req.body.avatar || '', 
            gender: req.body.gender || '', 
            weight: req.body.weight || '', 
            ft: req.body.ft || '', 
            inch: req.body.inch || '', 
            address: req.body.address || '' 
        }) 

        newAdmin.save() 
            .then(() => { 
                res.json({ 
                    message: `Account Created` 
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





// Get Admin 
let getAdmin = (req, res) => { 
    Admin.find() 
        .then(admin => { 
            res.json({ 
                message: 'Admin Info', 
                admin: admin[0] 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 





// Login 
let adminLogin = (req, res) => { 
    let { email, password } = req.body 
    
    Admin.findOne({email}) 
        .then(admin => { 
            if(!admin) { 
                return res.json({ 
                    message: 'Wrong Email, admin' 
                }) 
            } 
            bcrypt.compare(password, admin.password, (err, result) => { 
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
                        const payload = { 
                            id: admin._id, 
                            name: admin.name, 
                            email 
                        } 
                        const token = jwt.sign( 
                            payload, 'ADMIN-SECRET', { expiresIn: '1d' } 
                        ) 
                        
                        return res.json({ 
                            message: 'Login Successful', 
                            token: `Bearer ${token}` 
                        }) 
                    } 
                } 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error' 
            }) 
        }) 
} 






// Update admin Profile
let updateAdmin = (req, res) => { 
    console.log('Hello World');
    
    let { id } = req.params; 
    // let { password } = req.body 
    
    let password = req.body.password || '152002007'; 

    bcrypt.hash(password, 10, (err, hash) => { 
        let newAdmin = { 
            name: req.body.name, 
            password: hash, 
            mobile: req.body.mobile || '', 
            avatar: req.body.avatar || '', 
            gender: req.body.gender || '', 
            weight: req.body.weight || '', 
            ft: req.body.ft || '', 
            inch: req.body.inch || '', 
            address: req.body.address || '' 
        } 

        console.log('hashed password');
        console.log(hash);
        

        Admin.findOneAndUpdate({_id: id}, {$set: newAdmin}) 
            .then((updatedAdmin) => { 
                res.json({ 
                    message: 'Updated Successfully',
                    updatedAdmin 
                }) 
                console.log('Updated Successfully');
                
            }) 
            .catch(err => { 
                res.json({ 
                    message: 'error Occurred while updating in server' 
                }) 
            }) 
    })
} 






// Delete single user 
let deleteAdmin = (req, res) => { 
    const id = req.params.id 
    Admin.findOneAndDelete({_id: id}) 
        .then(admin => { 
            res.json({ 
                message: `Deleted Successfully`
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error', 
                error: err 
            }) 
        }) 
} 




module.exports = { 
    adminRegister, 
    getAdmin, 
    adminLogin, 
    updateAdmin, 
    deleteAdmin 
} 





