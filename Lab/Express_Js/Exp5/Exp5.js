//Node js is a runtime environment that let you run javascript on server side . built on chrome v8 javascript engine.
//used to create fast and scalable network applications.
//Express js is a minimal and flexible web framework for node js
//It helps to handle route , middle waer,and http request easily
//Make backend devlopment fast and simple
//why we use express js--> simplifies server creation in node js. it offers powerful features like routing , middle wear ,satitic file serving and error handling
//NPM -->node package management
//npm is the tool to install packages or libraries from the node js ecosystem

//what is package.json
//diffrence between package.json and package-lock.json

//see all http types with real time example

const express = require('express')
const app = express()
const port = 3000

//Exp_1:Hello world
app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

//Exp_2:Date and Time API
app.get('/date', (req, res) => {
  const currentDate = new Date();
  res.send({ date: currentDate.toDateString() });
});


app.get('/time', (req, res) => {
  const currentTime = new Date();
  res.send({ time: currentTime.toTimeString() });
});     

app.listen(port, () => {
  console.log(`Date server live on  http://localhost:${port}`)
})
