const mongoose = require('mongoose')
const { ReproductionSchema } = require('./reproduction')

const Schema = mongoose.Schema

const OrderElementSchema = new Schema({
	reproduction: {
		type: ReproductionSchema,
		required: true,
	},
	size: {
		type: String,
		required: true,
	},
	method: {
		type: String,
		required: true,
	},
	count: {
		type: Number,
		required: true,
	},
})

const OrderSchema = new Schema({
	customerName: {
		type: String,
		required: true,
	},
	customerSurname: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	shippingAddress: {
		type: String,
		required: true,
	},
	orderList: [OrderElementSchema],
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order
