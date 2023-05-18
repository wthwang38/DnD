require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');


app.get('/', (req, res) => {
  res.status(200).send("<h1>Dine and Date Home Page 😏</h1>");
})

const port = process.env.PORT || 3000; 

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to MongoDB!');
    app.listen(port, () => {
      console.log(`Server is now listening on ${port}...`);
    })
  } catch (error) {
    console.log('Failed to connect to database...')
  }
}

startServer();