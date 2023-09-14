const express=require('express')

const router=express.Router()

const homerouter=require('./homerouter')

const userrouter=require('./userrouter')

router.use("/",homerouter)

router.use("/user",userrouter)

module.exports=router;