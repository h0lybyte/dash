const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '..', 'public')));

function listen(config) {
  app.listen(config.port, () => console.log(`dashboard: listening on port ${config.port}`))
}

module.exports = listen
