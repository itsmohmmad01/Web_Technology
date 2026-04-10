// Middleware is a function that runs before sending the response.
// It can check data, log info, and authenticate users.

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Website')
})

app.get('/Home', (req, res) => {
  res.send('Home page.')
})

app.get('/About', (req, res) => {
  res.send('About page.')
})  

app.get('/Contact', (req, res) => {
  res.send('Contact page.')
})

app.get('/Project', (req, res) => {
  res.send('Project page.')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
//next is used to pass control too the next function without next the request will be stuck in the middle ware function and will not reach the response function