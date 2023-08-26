require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')

const Reproduction = require('./models/reproduction')

const reproductions = JSON.parse(
	fs.readFileSync(
		path.join(__dirname, 'db_collections', 'ink-house.reproductions.json'),
		'utf-8'
	)
)

async function importReproductions() {
	reproductions.forEach(record => {
		for (field in record) {
			if (Object.keys(record[field]).includes('$oid')) {
				record[field] = record[field]['$oid']
			}

			if (Object.keys(record[field]).includes('$date')) {
				record[field] = record[field]['$date']
			}
		}
	})

	Reproduction.insertMany(reproductions)
		.then(res => {
			console.log('Succesfully imported collection')
		})
		.catch(err => {
			console.log('Error importing collection: ', err)
		})
}

const { DB_HOST, DB_PORT, DB_NAME } = process.env
const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log('Ready to import collections')
		importReproductions()
	})
	.catch(err =>
		console.log(`Error connecting to DB by URL ${MONGO_URL}: ${err}`)
	)
