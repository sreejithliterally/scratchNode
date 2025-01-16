const jwt = require('jsonwebtoken')
const User = require('../models/user')


const auth = async = (req, res, next)=>{
   try{
    const token = req.header("Authorization")
    const decoded = jwt.verify(token,'somethingrandom')
    console.log(decoded)

   }catch(e){
    res.status(401).send({error:"error in authorization"})

   }
}


module.exports = auth