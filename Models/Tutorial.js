
const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const TutorialSchema = new Schema({ 
    question: String, 
    solution: String 
}) 

const Tutorial = new mongoose.model('Tutorial', TutorialSchema); 
module.exports = Tutorial; 




