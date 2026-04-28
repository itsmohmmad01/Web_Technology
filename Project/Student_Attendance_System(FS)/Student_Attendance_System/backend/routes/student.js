const express = require('express');
const router = express.Router();
const db = require('../db');

// Student login
router.post('/login', async (req, res) => {
  const { student_id, name } = req.body;
  if (!student_id || !name) return res.status(400).json({ error: 'student_id and name required' });

  try {
    const [rows] = await db.query(
      'SELECT * FROM students WHERE student_id = ? AND name = ?',
      [student_id, name]
    );
    if (rows.length === 0) return res.status(401).json({ error: 'Student not found. Check your ID and name.' });
    const student = rows[0];
    res.json({ id: student.id, name: student.name, student_id: student.student_id, email: student.email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark attendance via QR token
router.post('/mark-attendance', async (req, res) => {
  const { token, student_id } = req.body;
  if (!token || !student_id) return res.status(400).json({ error: 'token and student_id required' });

  try {
    // Find class by token
    const [classRows] = await db.query(
      'SELECT * FROM classes WHERE qr_token = ?',
      [token]
    );
    if (classRows.length === 0) return res.status(404).json({ error: 'Invalid QR code' });

    const cls = classRows[0];

    // Check expiry
    if (new Date() > new Date(cls.expires_at)) {
      return res.status(400).json({ error: 'QR code has expired. Ask your teacher to generate a new one.' });
    }

    // Find student
    const [studentRows] = await db.query('SELECT * FROM students WHERE id = ?', [student_id]);
    if (studentRows.length === 0) return res.status(404).json({ error: 'Student not found' });

    // Mark attendance (ignore duplicate)
    try {
      await db.query(
        'INSERT INTO attendance (class_id, student_id) VALUES (?, ?)',
        [cls.id, student_id]
      );
    } catch (dupErr) {
      if (dupErr.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Attendance already marked for this class.' });
      }
      throw dupErr;
    }

    res.json({
      success: true,
      message: `Attendance marked for ${studentRows[0].name} in ${cls.subject}`,
      subject: cls.subject,
      date: cls.class_date,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get attendance history for a student
router.get('/history/:studentId', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT c.subject, c.class_date, a.marked_at
       FROM attendance a
       JOIN classes c ON a.class_id = c.id
       WHERE a.student_id = ?
       ORDER BY a.marked_at DESC`,
      [req.params.studentId]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Validate QR token (for pre-check before marking)
router.get('/validate-token/:token', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM classes WHERE qr_token = ?', [req.params.token]);
    if (rows.length === 0) return res.status(404).json({ error: 'Invalid QR code' });
    const cls = rows[0];
    if (new Date() > new Date(cls.expires_at)) return res.status(400).json({ error: 'QR code has expired' });
    res.json({ valid: true, subject: cls.subject, class_date: cls.class_date });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
