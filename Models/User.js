

const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const common = { 
    type: String, 
    required: true, 
    trim: true 
} 

const UserSchema = new Schema({ 
    name: { ...common }, 
    email: { ...common }, 
    password: { ...common }, 
    avatar: String, 
    gender: String, 
    weight: String, 
    birthDate: Date, 
    address: String 
}, 
{ 
    timeStamp: true 
}) 

const User = new mongoose.model('User', UserSchema); 
module.exports = User; 



