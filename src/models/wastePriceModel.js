const mongoose = require('mongoose')


const wastePriceSchema = new mongoose.Schema({
    plastic_price:{
        type: Number,
        required:true
        },
    carton_price:{
        type: Number,
        required:true
        },
    glass_price:{
        type: Number,
        required:true
        },
    oil_price:{
        type: Number,
        required:true
        
        },
    cans_price:{
        type: Number,
        required:true
      
        },
    grease_price:{
        type: Number,
        required:true
    
        },

})


module.exports = mongoose.model( 'wastePrice', wastePriceSchema )