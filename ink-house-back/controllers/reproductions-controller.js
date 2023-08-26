const Reproduction = require('../models/reproduction')

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
	const reproduction = new Reproduction(req.body)

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
	Reproduction.findByIdAndUpdate(req.params.id, req.body)
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
