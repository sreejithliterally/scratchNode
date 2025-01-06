//CRUD Operataions

const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{},(error,client)=>{
    if(error){
        return console.log("unable to connect to db")
    }

    console.log("connected succesfully")
})
