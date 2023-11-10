const Order = require('../models/order')

const nameRegExp = /^([А-Я][а-яё]*|[A-Z][a-z]*)$/
const phoneNumberRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

function validateOrder(data, res) {
	if (typeof data.customerName !== 'string') {
		res.status(400).json('customerName must be a string')
		return false
	}
	data.customerName = data.customerName.trim()

	if (typeof data.customerSurname !== 'string') {
		res.status(400).json('customerSurname must be a string')
		return false
	}
	data.customerSurname = data.customerSurname.trim()

	if (typeof data.phoneNumber !== 'string') {
		res.status(400).json('phoneNumber must be a string')
		return false
	}
	data.phoneNumber = data.phoneNumber.trim()

	if (typeof data.shippingAddress !== 'string') {
		res.status(400).json('shippingAddress must be a string')
		return false
	}
	data.shippingAddress = data.shippingAddress.trim()

	if (
		data.customerName.length < 3 ||
		data.customerName.length > 32 ||
		!nameRegExp.test(data.customerName)
	) {
		res.status(400).json('invalid customerName')
		return false
	}

	if (
		data.customerSurname.length < 3 ||
		data.customerSurname.length > 32 ||
		!nameRegExp.test(data.customerSurname)
	) {
		res.status(400).json('invalid customerSurname')
		return false
	}

	if (!phoneNumberRegExp.test(data.phoneNumber)) {
		res.status(400).json('invalid phoneNumber')
		return false
	}

	return true
}

const getOrders = (req, res) => {
	Order.find()
		.then(orders => {
			res.status(200).json(orders)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const postOrder = (req, res) => {
	const body = req.body

	if (!validateOrder(body, res)) return

	const order = new Order(req.body)

	order
		.save()
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

module.exports = {
	getOrders,
	postOrder,
}
