  const mongoose = require('mongoose')
  const Usermodel = require('../model/Usermodel')



  const getData =async(req, res)=>{
    try{
         let dt= await Usermodel.find({})
         res.status(200).json({data:dt})
    }catch(err){
         res.status(400).json({err})
    }
  }