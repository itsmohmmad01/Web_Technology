//Routing in Express js
//Routing refers to determine how an application responds to a client request for a specific url and http method
//app.get() - to handle GET requests
//Activity using js create project for department means mechanical cse civil electrical aiml  also take four records for it also using rotuests in express
//componets of routin http method url path handler function

const express = require('express');
const app = express();
const port = 3000;

// function checkout(req, res, next) {
//     console.log("Request URL:", req.url);
//     next();
// }

// app.use(checkout);

// app.use((req, res, next) => {
//     console.log("Middleware function");
//     next();
// });

app.use((req, res, next) => {
    console.log("middlewareexcuted",new Date());
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


