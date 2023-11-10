const { Reproduction } = require('../models/reproduction')

const srcRegExp = /^(?:.*\.(?=(png|jpg|jpeg)$))?[^.]*$/i
const yearRegExp = /^[1-9][0-9]{3}$/

function validateReproduction(data, res) {
	if (data.hasOwnProperty('name')) {
		if (typeof data.name !== 'string') {
			res.status(400).json('name must be a string')
			return false
		}
		data.name = data.name.trim()
	}

	if (data.hasOwnProperty('author')) {
		if (typeof data.author !== 'string') {
			res.status(400).json('author must be a string')
			return false
		}
		data.author = data.author.trim()
	}

	if (data.hasOwnProperty('country')) {
		if (typeof data.country !== 'string') {
			res.status(400).json('country must be a string')
			return false
		}
		data.country = data.country.trim()
	}

	if (data.hasOwnProperty('imgSrc')) {
		if (typeof data.imgSrc !== 'string') {
			res.status(400).json('imgSrc must be a string')
			return false
		}
		data.imgSrc = data.imgSrc.trim()
	}

	if (!srcRegExp.test(data.imgSrc)) {
		res.status(400).json('imgSrc must be either .png, .jpg or .jpeg extension')
		return false
	}

	if (data.price <= 0) {
		res.status(400).json('Price must be more than 0')
		return false
	}

	if (!yearRegExp.test(data.year)) {
		res.status(400).json('Year must be in range of 1000 and 9999')
		return false
	}

	return true
}

const getReproductions = (req, res) => {
	const limit = req.query.limit
	const skip = req.query.skip

	const filter = {}

	const country = req.query.country
	const year = req.query.year

	if (country) filter.country = country
	if (year) filter.year = year

	Reproduction.find(filter)
		.limit(limit ? limit : 0)
		.skip(skip ? skip : 0)
		.then(reproductions => {
			res.status(200).json(reproductions)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const postReproduction = (req, res) => {
	const body = req.body

	if (!validateReproduction(body, res)) return

	const reproduction = new Reproduction(body)

	reproduction
		.save()
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const deleteReproduction = (req, res) => {
	Reproduction.findByIdAndDelete(req.params.id)
		.then(result => {
			res.status(204).json(result)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const updateReproduciton = (req, res) => {
	const body = req.body

	if (!validateReproduction(body, res)) return

	Reproduction.findByIdAndUpdate(req.params.id, body)
		.then(result => {
			res.status(200).json(result)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const getCountries = (req, res) => {
	Reproduction.distinct('country')
		.then(countries => {
			res.status(200).json(countries)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const getYears = (req, res) => {
	Reproduction.distinct('year')
		.then(years => {
			res.status(200).json(years)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

module.exports = {
	getReproductions,
	postReproduction,
	deleteReproduction,
	updateReproduciton,
	getCountries,
	getYears,
}
