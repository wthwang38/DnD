// Modules and NPM package calls
require('dotenv').config(); // Enables loading of env variables 
require('express-async-errors'); // Simplifies async error handling without next method
const express = require('express'); // Express framework
const app = express(); // Initialize express app
const connectDB = require('./db/connect');
const cors = require('cors'); // Cross origin resource sharing
const restaurantRouter = require('./routes/restaurant'); 
const userRouter = require('./routes/user');

// Allows req.body to be captured for input
app.use(express.json())

// Allow for cross-origin requests on APIs
app.use(cors());


// Routers
app.use('/api/v1/users', userRouter);
app.use('/api/v1/restaurants', restaurantRouter);

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