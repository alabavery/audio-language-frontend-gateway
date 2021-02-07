const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', async (req, res) => {
    const { data } = await axios.get(`http://localhost:5000/words${req.url}`)
    console.log(data);
    res.send(data)   
})

module.exports = router