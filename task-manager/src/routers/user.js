const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get("/users",(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)

    }).catch((e)=>{
    res.status(500).send

    })
})

router.get("/users/:id",(req,res)=>{
    const _id = req.params.id

    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }).catch((e)=>{
        res.status(500).send()

    })
})

router.post("/users",async (req,res)=>{
    const user = new User(req.body)
    try{
       await user.save()
       res.status(201).send({user})
    }
    catch (error){
        res.status(400).send(error)
        console.log('tes')
    }

})

router.patch('/users/:id', async(req,res)=>{
    const allowedUpdates = ['name','email','password','age']
    const isValidOperation = updates.every((upa))
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch (e){
        res.status(400).send(e)

    }
})

router.post('/users/login', async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        console.log(token)
        res.send({user,'token':token})
    } catch(e){
        res.status(400).send()  
    }
})


module.exports = router