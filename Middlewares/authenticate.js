

const jwt = require('jsonwebtoken') 

let authenticate = (req, res, next) => { 
    try { 
        let token = req.headers.authorization.split(' ')[1] 
            jwt.verify(token, 'SECRET', (err, decode) => { 
            if(err) {
                console.log('err');
                // console.log(err);
                return res.json({
                    message: 'Login Required' 
                }) 
            } 
            // req.user = decoded 
            next() 
        }) 
    } 
    catch(err) { 
        res.json({ 
            message: 'Authentication Failed. Again Signin' 
        }) 
    } 
} 


module.exports = authenticate 




