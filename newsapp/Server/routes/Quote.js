const express = require('express')
const router=express.Router()
// const {Posts} =require('../models')
const {Quotes}=require('../models')


router.get('/',async(req,res)=>{
    const listofPosts=await Quotes.findAll()
    res.json(listofPosts)
})
router.post('/',(req,res)=>{
    const post=req.body
    Quotes.create(post)
    res.json(post)

})


module.exports=router