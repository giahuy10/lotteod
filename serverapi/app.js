const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
let eventRoutes = require('./routes/event') 
eventRoutes(app)
let reservationRoutes = require('./routes/reservation') 
reservationRoutes(app)
let photoRoutes = require('./routes/photo') 
photoRoutes(app)
const port = 1210

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))