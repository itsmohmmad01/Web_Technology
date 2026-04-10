const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const users = require('./data')

const cors = require('cors');
app.use(cors());

// ➤ ADD USER (REGISTER)
app.post('/users', (req, res) => {
  const { name, email, password } = req.body

  const existingUser = users.find(u => u.email === email)
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" })
  }

  const user = {
    id: users.length + 1,
    name,
    email,
    password
  }

  users.push(user)

  res.json({ message: "User added", user })
})


// ➤ GET ALL USERS
app.get('/users', (req, res) => {
  res.json(users)
})


// ➤ UPDATE USER
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id)

  if (user) {
    user.name = req.body.name
    user.email = req.body.email
    if (req.body.password) user.password = req.body.password

    res.json({ message: "User updated", user })
  } else {
    res.status(404).json({ message: "User not found" })
  }
})


// ➤ DELETE USER
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id)

  if (index !== -1) {
    users.splice(index, 1)
    res.json({ message: "User deleted" })
  } else {
    res.status(404).json({ message: "User not found" })
  }
})

app.listen(port, () => {
  console.log(`User API running at http://localhost:${port}`)
})