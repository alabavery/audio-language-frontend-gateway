const express = require('express')
const Words = require('./words')

const router = express.Router()

router.use('/words', Words)

module.exports = router
