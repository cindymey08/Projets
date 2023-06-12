// (4)buat schema 
const mongoose = require('mongoose')

const KaryawanSchema= mongoose.Schema({
    nik:{
        type:Number,
        required:true
    },
    nama:{
        type:String,
        required:true
    },
    jabatan:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now()
    }

})
module.exports= mongoose.model('Karyawan',KaryawanSchema)