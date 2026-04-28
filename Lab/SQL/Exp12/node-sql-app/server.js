const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// ─── MySQL Connection ────────────────────────────────────────────────────────
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",   // <-- Change this to your MySQL password
  database: "studentdb",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database!");
  }
});

// ─── CREATE: Add a new student ───────────────────────────────────────────────
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ error: "name, age, and course are required." });
  }

  const sql = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";
  db.query(sql, [name, age, course], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Student added successfully!", id: result.insertId });
  });
});

// ─── READ: Get all students ──────────────────────────────────────────────────
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// ─── READ: Get a single student by ID ───────────────────────────────────────
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM students WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.json(result[0]);
  });
});

// ─── UPDATE: Update a student by ID ─────────────────────────────────────────
app.put("/students/:id", (req, res) => {
  const { name, age, course } = req.body;
  const { id } = req.params;

  const sql = "UPDATE students SET name=?, age=?, course=? WHERE id=?";
  db.query(sql, [name, age, course, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.json({ message: "Student updated successfully!" });
  });
});

// ─── DELETE: Delete a student by ID ─────────────────────────────────────────
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.json({ message: "Student deleted successfully!" });
  });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
