const express = require('express')
const {
	getOrders,
	postOrder,
	getOrder,
	deleteOrder,
	updateOrder,
} = require('./../controllers/orders-controller')

const router = express.Router()

router.get('/orders', getOrders)
router.get('/orders/:id', getOrder)
router.post('/orders', postOrder)
router.delete('/orders/:id', deleteOrder)
router.patch('/orders/:id', updateOrder)

module.exports = router
