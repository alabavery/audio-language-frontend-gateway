const express = require('express')
const Router = require('./routes')

const app = express()
const port = 8080

app.use('/', (_, res, next) => {
    console.log("called use")
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    next()
})

app.use('/', Router)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})