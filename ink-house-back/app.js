require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const reproductionsRoutes = require('./routes/reproductions-routes')
const ordersRoutes = require('./routes/orders-routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(reproductionsRoutes)
app.use(ordersRoutes)

const { DB_HOST, DB_PORT, DB_NAME } = process.env

DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose
	.connect(DB_URL)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch(err => {
		console.log(`Error connecting to MongoDB: ${err}`)
	})

const PORT = process.env.PORT

app.listen(PORT, err => {
	err
		? console.log('Error on server start: ', err)
		: console.log(`Server listening on port ${PORT}`)
})
