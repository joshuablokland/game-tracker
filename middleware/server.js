const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('Game Tracker middleware')
})

app.get('/search/:search', (req, res) => {
  axios.get(`https://api-v3.igdb.com/games/?search=${req.params.search}`, {
    headers: {
      'user-key': 'b5c33ea3b5c328adc8ac600dea758bc1',
      Accept: 'application/json'
    }
  })
  .then(response => {
    res.send(response.data)
    // res.send({hello: 'world'})
  })
  .catch(e => {
    console.log('error', e);
  })
})

app.listen(5000, (err) => {
	if(err) { console.log(err) }
	console.log('Listening on port 5000')
})