//(5)buat router
const express = require('express')
const router = express.Router()
const Karyawan= require('../models/Karyawan')

//create api for
router.post('/',async(req,res) =>{
    //Tampung dulu input 
    const karyawanPost = new Karyawan({
        nik:req.body.nik,
        nama:req.body.nama,
        jabatan:req.body.jabatan

    })
    //simpan data dengan try catch
    try{
        //simpan data nya
        const karyawan = await karyawanPost.save()
        //beri response 
        res.json(karyawan)
    }catch(error){
        res.json({message:error})
    }
   
})
//read data(membaca data)
router.get('/',async(req,res)=>{
    try{
        const karyawan=await Karyawan.find()
        res.json(karyawan)
    }catch(error){
        res.json({message:error})
    }
})

router.put('/:karyawanId',async(req,res)=>{
    const data = {
        nik:req.body.nik,
        nama:req.body.nama,
        jabatan:req.body.jabatan
    }
    try{
        const karyawan =await Karyawan.updateOne({_id:req.params.karyawanId}, data)
        res.json(karyawan)
    }catch (error){
        res.json({message:error})
    }
})

router.delete('/:karyawanId',async(req,res)=>{
        try{
            const karyawan =await Karyawan.deleteOne({_id:req.params.karyawanId})
            res.json(karyawan)
        }catch (error){
            res.json({message:error})
        }
 })


module.exports= router
