require('dotenv').config()

const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const instance = axios.create({
  baseURL: 'https://api-v3.igdb.com',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'user-key': process.env.IGDB_API_KEY
  }
});

app.get('/', (req, res) => {
  res.send(`Game Tracker middleware`)
})

// Search by name
app.get('/search/:search', (req, res) => {
  instance.get(`/games/?search=${req.params.search}&fields=name`)
  .then(response => {
    res.send(response.data)
  })
  .catch(e => {
    console.log('error', e);
  })
})

app.listen(5000, (err) => {
	if(err) { console.log(err) }
	console.log('Listening on port 5000')
})