

const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 
const bodyParser = require('body-parser') 
const mongoose = require('mongoose') 

const app = express() 

// Middlewere 
app.use(cors()) 
app.use(morgan('dev')) 
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

const PORT = process.env.PORT || 5000 

app.listen(PORT, () => { 
    console.log('App is on fire'); 
    mongoose.connect('mongodb://localhost:27017/fitnessapp', 
    {useNewUrlParser: true}, 
    () => { 
        console.log('Database Running');
    }); 
}) 


