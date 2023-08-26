const express = require('express')
const {
	getReproductions,
	postReproduction,
	deleteReproduction,
	updateReproduciton,
	getCountries,
	getYears,
} = require('./../controllers/reproductions-controller')

const router = express.Router()

router.get('/reproductions', getReproductions)
router.post('/reproductions', postReproduction)
router.delete('/reproductions/:id', deleteReproduction)
router.patch('/reproductions/:id', updateReproduciton)
router.get('/reproductions/countries', getCountries)
router.get('/reproductions/years', getYears)

module.exports = router
