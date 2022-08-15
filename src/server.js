const express = require('express')
const cors = require('cors')


const newsletterRouter = require('./routes/newsletterRouter')
const wastePriceRouter = require('./routes/wastePriceRouter')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/newsletter', newsletterRouter)
app.use('/wasteprice', wastePriceRouter)

app.get('/', async(request, response)=>{
    response.json({
        ok: true,
        message: 'Mini API Recolectapp V1.0'
    })
})

module.exports = app