const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home', (req, res) => {
  res.send('This is the Home page.')
})

app.get('/About', (req, res) => {
  res.send('This is the About page.')
})  

app.get('/Contact', (req, res) => {
  res.send('This is the Contact page.')
})

app.get('/Project', (req, res) => {
  res.send('This is the Project page.')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})

//Routing in Express js
//Routing refers to determine how an application responds to a client request for a specific url and http method
//app.get() - to handle GET requests
