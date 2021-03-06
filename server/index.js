const express = require('express')
const consola = require('consola')
var bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()
// const env = require('dotenv').config()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

    host = config.env.host || 'localhost',
    port = config.env.port || 3000
  

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(bodyParser.urlencoded({ extended: false }))
 
  // parse application/json
  app.use(bodyParser.json())
  
  // Give nuxt middleware to express
  app.use(nuxt.render)
 
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
