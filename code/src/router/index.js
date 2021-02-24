const express = require('express')
const axios = require('axios')
const { hostMapping } = require('./hosts')
const buildOutgoingRequest = require('./buildOutgoing')

const router = express.Router()

router.use('/:destination', (req, res) => {
    const { destination } = req.params
    host = hostMapping[destination]
    if (!host) {
        res.sendStatus(404)
        return
    }
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
        return
    }
    axios(buildOutgoingRequest(req, destination, host))
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            res.sendStatus(error.response.status)
          } else {
              res.sendStatus(500)
          }
    })
 
})

module.exports = router
