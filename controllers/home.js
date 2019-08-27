const express = require('express')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
    res.render ('home/home')
})

module.exports = {
    homeRouter
}