const express = require('express');
const cors = require('cors');
require('dotenv').config();

const teacherRoutes = require('./routes/teacher');
const studentRoutes = require('./routes/student');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/teacher', teacherRoutes);
app.use('/api/student', studentRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Student Attendance System API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
