const express = require('express')
const router = express.Router()
const { getlist,addfilm , deletefilm ,deletelist} = require('../controllers/userControllers')
const { allCinemas} = require('../controllers/adminControllers')


// router.route('/').get(getlist)
// router.route('/').post(addfilm)



// router.route('/:id').delete(deletefilm)
// router.route('/').delete(deletelist)


router.get('/',(req,res) =>{
    allCinemas(req,res);
    
});


module.exports = router

