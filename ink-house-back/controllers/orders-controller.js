const Order = require('../models/order')

const getOrders = (req, res) => {
	Order.find()
		.then(orders => {
			res.status(200).json(orders)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const getOrder = (req, res) => {
	Order.findById(req.params.id)
		.then(orders => {
			res.status(200).json(orders)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const postOrder = (req, res) => {
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

const deleteOrder = (req, res) => {
	Order.findByIdAndDelete(req.params.id)
		.then(result => {
			res.status(204).json(result)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

const updateOrder = (req, res) => {
	Order.findByIdAndUpdate(req.params.id, req.body)
		.then(result => {
			res.status(200).json(result)
		})
		.catch(err => {
			res.status(500).json(err)
		})
}

module.exports = {
	getOrder,
	getOrders,
	postOrder,
	deleteOrder,
	updateOrder,
}
