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

module.exports = {
	getOrders,
	postOrder,
}
