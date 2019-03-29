
let Tutorial = require('../Models/Tutorial') 

let createTutorial = (req, res) => { 
    let { question, solution } = req.body 
    console.log(question) 
    console.log(solution) 

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
                message: 'Server Error', 
                err 
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
                message: 'Server Error', 
                err 
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
                message: 'Server Error', 
                err 
            }) 
        }) 
} 





let updateTutorial = (req, res) => { 
    let id  = req.params.id 

    let updatedValue = req.body 

    Tutorial.findOneAndUpdate({_id: id}, updatedValue, { new: true }) 
        .then(result => { 
            res.json({ 
                message: 'Updated successfully', 
                result 
            }) 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'Server Error', 
                err 
            }) 
        }) 
} 




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
                message: 'Server Error', 
                err 
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

