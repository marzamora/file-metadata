require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./api/routes')

const app = express()

app.use(cors())
app.use('/public', express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

routes(app)

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is currently listening on port ' + listener.address().port)
})