
const validate = ({name, email, password, confirmPassword}) => { 
    let errors = {} 
    
    if(!name) { 
        errors.name = 'Please enter your name!'
    } 
    if(!email) { 
        errors.email = 'Please enter your email!'
    } 
    
    let isAt = false; 
    for(let i in email) 
    {
        if(email[i] === '@') { 
            isAt = true; 
        } 
    } 
    
    if(isAt === false) { 
        errors.email = 'Please enter your valid email!' 
    } 
    
    
    if(!password) {
        errors.password = 'Please enter your password!' 
    } 
    else if(password.length < 6) { 
        errors.password = 'Please enter your password of minimum 6 characters!' 
    } 

    if(!confirmPassword) {
        errors.confirmPassword = 'Please enter your confirmation password!' 
    } 
    else if(password !== confirmPassword) { 
        errors.confirmPassword = 'Password does not match!' 
    } 
    return errors 
} 


module.exports = validate; 





