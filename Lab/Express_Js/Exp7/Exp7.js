const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) =>{
    let user = [
    {id : 1, name : "Nuh"},
    {id : 2, name : "Saad"}
];
    res.json(user)
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
      let user = [
    {id : 1, name : "Nuh"},
    {id : 2, name : "Saad"}
];
    const userData = user.find(u => u.id === parseInt(userId));
    if (userData) {
        res.json(userData);
    } else {
        res.status(404).json({ message: "User not found" });
    }
})

app.listen(port, () => {
  console.log(`Date server live on  http://localhost:${port}`)
})
