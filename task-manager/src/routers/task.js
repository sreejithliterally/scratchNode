const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


router.post('/tasks',(req,res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

module.exports = router