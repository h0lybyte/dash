const express = require('express')
const app = express()
const path = require('path')
const config = require('rc')('dashboard', {
  port: 3000
})

app.use(express.static(path.join(__dirname, '..', 'public')));
app.listen(config.port, () => console.log(`dashboard: listening on port ${config.port}`))
