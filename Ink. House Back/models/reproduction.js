const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReproductionSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	imgSrc: {
		type: String,
		required: true,
	},
	properties: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
})

const Reproduction = mongoose.model('Reproudction', ReproductionSchema)

module.exports = Reproduction
