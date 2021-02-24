const express = require('express')

const Router = require('./router')

const app = express()
const port = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "application/json" }));


const FRONTEND_HOST = 'http://localhost:3000'
app.use('/', (_, res, next) => {
    res.set('Access-Control-Allow-Origin', FRONTEND_HOST)
    res.set('Access-Control-Allow-Methods', 'HEAD,POST,PUT,PATCH,GET')
    res.set(
      'Access-Control-Allow-Headers',
      'Accept,Accept-Language,Content-Language,Content-Type',
    )
    next()
})

app.use('/', Router)

app.listen(port, () => {
  console.log(`listening at  on port ${port}`)
})