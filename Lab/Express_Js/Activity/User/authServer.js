const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

const cors = require('cors');
app.use(cors());

// ➤ LOGIN (FETCH USERS FROM USER SERVER)
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    // get users from user server
    const response = await fetch('http://localhost:3000/users')
    const users = await response.json()

    const user = users.find(
      u => u.email === email && u.password === password
    )

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      })
    }

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

app.listen(port, () => {
  console.log(`Auth API running at http://localhost:${port}`)
})