const express=require("express")
const {Post}=require('../models')
const router=express.Router()
router.get("/",(req,res)=>{
    const post=req.body;
    Post.create(post)
    res.json(post)

})
module.exports=router