require ('dotenv').config()
const mongoose = require('mongoose')

const server = require('./src/server')

const {
    DB_USER,
    PORT,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
} = process.env


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then( () =>{
    server.listen(`${PORT}`, () =>{
        console.log('Recolectapp API Administrador OK')
    })
})
.catch(error =>{
    console.error(error)
})