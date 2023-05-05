const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.status(200).send("<h1>Dine and Date Home Page 😏</h1>");
})

const port = 3000; 

app.listen(port, (req, res) => {
  console.log(`Server is now listening on ${port}...`)
})