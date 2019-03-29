const express = require('express')
const app = express()
var eventsRoute = require('./routes/events')
var photosRoute = require('./routes/photos')
var contactsRoute = require('./routes/contacts')
var newslettersRoute = require('./routes/newsletters')
app.get('/', (req, res, next) => {
  res.send('API root')
})
app.use('/events/', eventsRoute)
app.use('/photos/', photosRoute)
app.use('/contacts/', contactsRoute)
app.use('/newsletters/', newslettersRoute)
// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}