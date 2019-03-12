

const jwt = require('jsonwebtoken') 

let authenticate = (req, res, next) => { 
    try { 
        console.log('I am here');
        
        let token = req.headers.authorization.split(' ')[1] 
        var decoded = jwt.verify(token, 'SECRET') 
        req.user = decoded 
        next() 
    } 
    catch(err) { 
        res.json({ 
            message: 'Authentication Failed. Again Signin' 
        }) 
    } 
} 


module.exports = authenticate 




