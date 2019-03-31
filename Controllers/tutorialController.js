
let Tutorial = require('../Models/Tutorial') 

let createTutorial = (req, res) => { 
    let { question, solution } = req.body 

    let tutorial = new Tutorial({ 
        question, 
        solution 
    }) 
    
    tutorial.save() 
        .then(result => { 
            res.json({ 
                message: 'Tutorial created successfully', 
                result 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 




let getAllTutorial = (req, res) => {
    Tutorial.find() 
        .then(result => { 
            res.json({ 
                message: 'All tutorials on your server', 
                result 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 




let getSingleTutorial = (req, res) => { 
    let id  = req.params.id 
    Tutorial.findById(id) 
        .then(result => { 
            res.json({ 
                message: 'Found successfully', 
                result 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 





let updateTutorial = (req, res) => { 
    let id  = req.params.id 

    // let updatedValue = req.body 

    Tutorial.findOneAndUpdate({_id: id}, {$set: req.body}, { new: true }) 
        .then(result => { 
            res.json({ 
                message: 'Updated successfully', 
                result 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 



// Delete 
let deleteTutorial = (req, res) => { 
    let id  = req.params.id 
    Tutorial.findOneAndDelete(id) 
        .then(() => { 
            res.json({ 
                message: 'Deleted successfully' 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error'
            }) 
        }) 
} 





module.exports = { 
    createTutorial, 
    getAllTutorial, 
    getSingleTutorial, 
    updateTutorial, 
    deleteTutorial
} 

