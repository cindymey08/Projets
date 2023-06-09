//(5)buat router
const express = require('express')
const router = express.Router()
const Mixieuy= require('../models/Mixieuy')

//create api for
router.post('/',async(req,res) =>{
    //Tampung dulu input 
    const mixieuyPost = new Mixieuy({
        nama:req.body.nama,
        harga:req.body.harga,
        image:req.body.image

    })
    //simpan data dengan try catch
    try{
        //simpan data nya
        const mixieuy = await mixieuyPost.save()
        //beri response 
        res.json(mixieuy)
    }catch(error){
        res.json({message:error})
    }
   
})
//read data(membaca data)
router.get('/',async(req,res)=>{
    try{
        const mixieuy=await Mixieuy.find()
        res.json(mixieuy)
    }catch(error){
        res.json({message:error})
    }
})

router.put('/:mixieuyId',async(req,res)=>{
    const data = {
        nama:req.body.nama,
        harga:req.body.harga,
        image:req.body.image
    }
    try{
        const mixieuy =await Mixieuy.updateOne({_id:req.params.mixieuyId}, data)
        res.json(mixieuy)
    }catch (error){
        res.json({message:error})
    }
})

router.delete('/:mixieuyId',async(req,res)=>{
        try{
            const mixieuy =await Mixieuy.deleteOne({_id:req.params.mixieuyId})
            res.json(mixieuy)
        }catch (error){
            res.json({message:error})
        }
 })


module.exports= router
