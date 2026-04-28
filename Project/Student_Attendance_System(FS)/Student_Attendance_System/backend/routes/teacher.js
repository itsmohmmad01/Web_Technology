const express = require('express');
const router = express.Router();
const db = require('../db');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');

// Teacher login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.query(
      'SELECT * FROM teachers WHERE email = ? AND password = ?',
      [email, password]
    );
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid email or password' });
    const teacher = rows[0];
    res.json({ id: teacher.id, name: teacher.name, email: teacher.email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Generate QR code for a class
router.post('/generate-qr', async (req, res) => {
  const { teacher_id, subject } = req.body;
  if (!teacher_id || !subject) return res.status(400).json({ error: 'teacher_id and subject required' });

  try {
    const token = uuidv4();
    const classDate = new Date().toISOString().split('T')[0];
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // expires in 10 minutes

    await db.query(
      'INSERT INTO classes (teacher_id, subject, class_date, qr_token, expires_at) VALUES (?, ?, ?, ?, ?)',
      [teacher_id, subject, classDate, token, expiresAt]
    );

    const [classRows] = await db.query('SELECT id FROM classes WHERE qr_token = ?', [token]);
    const classId = classRows[0].id;

    // The QR encodes a URL that the student visits to mark attendance
    const qrData = `http://localhost:3000/student/scan?token=${token}`;
    const qrImage = await QRCode.toDataURL(qrData);

    res.json({ qrImage, token, classId, expiresAt, subject });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get attendance for a class
router.get('/attendance/:classId', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT s.name, s.student_id, s.email, a.marked_at
       FROM attendance a
       JOIN students s ON a.student_id = s.id
       WHERE a.class_id = ?
       ORDER BY a.marked_at ASC`,
      [req.params.classId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all classes by teacher
router.get('/classes/:teacherId', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT c.*, 
        (SELECT COUNT(*) FROM attendance a WHERE a.class_id = c.id) as attendance_count
       FROM classes c
       WHERE c.teacher_id = ?
       ORDER BY c.created_at DESC`,
      [req.params.teacherId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
