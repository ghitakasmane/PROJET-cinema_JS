const express = require('express')
const router = express.Router()
const { addcine,deletecine,upcine,addfilm,deletefilm,upfilm,allCinemas,allFilms} = require('../controllers/adminControllers')



router.route('/root').get(allCinemas)
router.route('/affichfilm').get(allFilms)
router.route('/cine').post(addcine)
router.route('/:id').delete(deletecine)
router.route('/:id').put(upcine)
router.route('/film').post(addfilm)
router.route('/:id').delete(deletefilm)
router.route('/:id').put(upfilm)




   


module.exports = router

