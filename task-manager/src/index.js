const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const taskRouer = require('./routers/task')
const Task = require('./models/task')
const app = express()

const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouer)
app.listen(port,()=>{
    console.log("server is up on "+port)
})








