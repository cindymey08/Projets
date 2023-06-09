// (4)buat schema 
const mongoose = require('mongoose')

const MixieuySchema= mongoose.Schema({
    
    nama:{
        type:String,
        required:true
    },
    harga:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
   
    createdAt:{
        type:Date,
        default:Date.now()
    }

})
module.exports= mongoose.model('Mixieuy',MixieuySchema)