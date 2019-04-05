

const mongoose = require('mongoose');
const Schema = mongoose.Schema 


const UserSchema = new Schema({ 
    name: String, 
    email: String, 
    password: String, 
    mobile: String, 
    avatar: String, 
    gender: String, 
    weight: String, 
    ft: String, 
    inch: String, 
    address: String 
}) 

const Admin = new mongoose.model('Admin', UserSchema); 
module.exports = Admin; 



