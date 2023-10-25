const express = require('express')
const { getOrders, postOrder } = require('./../controllers/orders-controller')

const router = express.Router()

router.get('/orders', getOrders)
router.post('/orders', postOrder)

module.exports = router
