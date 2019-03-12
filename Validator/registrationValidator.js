
const validate = ({name, email, password, confirmPassword}) => { 
    let error = {} 
    
    if(!name) { 
        error.name = 'Please enter your name!'
    } 
    if(!email) { 
        error.email = 'Please enter your email!'
    } 
    
    let isAt = false; 
    for(let i in email) 
    {
        if(email[i] === '@') { 
            isAt = true; 
        } 
    } 
    
    if(isAt === false) { 
        error.email = 'Please enter your valid email!' 
    } 
    
    
    if(!password) {
        error.password = 'Please enter your password!' 
    } 
    else if(password.length < 6) { 
        error.password = 'Please enter your password of minimum 6 characters!' 
    } 

    if(!confirmPassword) {
        error.confirmPassword = 'Please enter your confirmation password!' 
    } 
    else if(password !== confirmPassword) { 
        error.confirmPassword = 'Password does not match!' 
    } 
    return error 
} 


module.exports = validate; 





