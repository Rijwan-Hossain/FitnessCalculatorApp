
const express = require('express'); 
const router = express.Router(); 
const {
    createTutorial, 
    getAllTutorial, 
    getSingleTutorial, 
    updateTutorial, 
    deleteTutorial
} = require('../Controllers/tutorialController') 


router.post('/', createTutorial) 
router.get('/', getAllTutorial) 
router.get('/:id', getSingleTutorial) 
router.patch('/:id', updateTutorial) 
router.delete('/:id', deleteTutorial) 



module.exports = router; 


