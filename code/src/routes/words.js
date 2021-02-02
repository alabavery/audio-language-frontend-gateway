const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const queried = req.query.string
    res.send(`hello ${queried}`)   
})

module.exports = router