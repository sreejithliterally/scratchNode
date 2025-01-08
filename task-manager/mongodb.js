const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json());

const uri = 'mongodb://localhost:27017';
const dbName = 'myapp';
const client = new MongoClient(uri);

let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db(dbName);
    
    // Create a collection and insert a document
    const result = await db.collection('users').insertOne({
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date()
    });

    
    console.log('Successfully connected to MongoDB and created test user');

    const userData = await db.collection('users').findOne({name:"Test User"})
    console.log(userData)
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

connectToMongo();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

