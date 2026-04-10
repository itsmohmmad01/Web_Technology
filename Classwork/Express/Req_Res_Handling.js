//handling request and response express application hadles http request and response 
//the req object contains information about client req 
//exaples of req object url method header body query params
//Examples

const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
    console.log(req.query.name); 
});

//if we want to rint particuler name from localhost:3000/user?name=abc

//The response object send data back to the client
//Common res method
//res.send() - to send text
//res.json() - to send json 
//res.status() - to set http status     
//res.sendFile() - to send file

app.get('/', (req, res) => {
    const timer= new Date();
    res.json({message:"Hello World!",time:timer});
}   );

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});