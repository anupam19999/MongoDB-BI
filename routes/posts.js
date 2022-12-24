const { response } = require("express");
const express=require("express");
const router=express.Router();
const AviationSchema=require("../models/Schema")


//get back all the post 

router.get("/",async(req,res)=>{
    try {
        const posts=await AviationSchema.find();
        res.json(posts)
    } catch (error) {
        res.json({message:error})
    }
})

//submit a post 

router.post("/",async(req,res)=>{
    const post=new AviationSchema({
        flightNo:req.body.flightNo,
        travelBtwCities:req.body.travelBtwCities,
        flightTimmings:req.body.flightTimmings,
        planeCategory:req.body.planeCategory
    })
    try {
        await post.save()
        res.json({
            "results" :"success"
        })
    } catch (error) {
        res.json({message:error})
    }
})


module.exports=router; //exports this router 

