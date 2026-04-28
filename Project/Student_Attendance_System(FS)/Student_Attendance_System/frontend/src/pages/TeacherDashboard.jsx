import React, { useState, useEffect } from 'react';
import { apiFetch } from '../api';

export default function TeacherDashboard({ teacher, onLogout }) {
  const [tab, setTab] = useState('generate');
  const [subject, setSubject] = useState('');
  const [qrData, setQrData] = useState(null);
  const [classes, setClasses] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (tab === 'history') loadClasses();
  }, [tab]);

  // Countdown timer for QR expiry
  useEffect(() => {
    if (!qrData) return;
    const interval = setInterval(() => {
      const diff = Math.max(0, Math.floor((new Date(qrData.expiresAt) - Date.now()) / 1000));
      setTimeLeft(diff);
      if (diff === 0) { setQrData(null); clearInterval(interval); }
    }, 1000);
    return () => clearInterval(interval);
  }, [qrData]);

  async function generateQR(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await apiFetch('/teacher/generate-qr', {
        method: 'POST',
        body: JSON.stringify({ teacher_id: teacher.id, subject }),
      });
      setQrData(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  async function loadClasses() {
    try {
      const data = await apiFetch(`/teacher/classes/${teacher.id}`);
      setClasses(data);
    } catch (err) { console.error(err); }
  }

  async function viewAttendance(cls) {
    setSelectedClass(cls);
    try {
      const data = await apiFetch(`/teacher/attendance/${cls.id}`);
      setAttendance(data);
    } catch (err) { console.error(err); }
  }

  return (
    <div>
      <nav>
        <h1>Student Attendance System — Teacher</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13 }}>Hello, {teacher.name}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="tabs">
          <button className={`tab ${tab === 'generate' ? 'active' : ''}`} onClick={() => setTab('generate')}>Generate QR</button>
          <button className={`tab ${tab === 'history' ? 'active' : ''}`} onClick={() => setTab('history')}>Class History</button>
        </div>

        {/* Generate QR Tab */}
        {tab === 'generate' && (
          <div>
            <div className="card" style={{ maxWidth: 420 }}>
              <h3 style={{ marginBottom: 16 }}>Generate Attendance QR Code</h3>
              <form onSubmit={generateQR}>
                <div className="form-group">
                  <label>Subject Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Mathematics, Physics"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Generating...' : 'Generate QR Code'}
                </button>
              </form>
            </div>

            {qrData && (
              <div className="card" style={{ maxWidth: 420, textAlign: 'center' }}>
                <h3 style={{ marginBottom: 4 }}>{qrData.subject}</h3>
                <p style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>
                  Show this QR to students. It expires in {' '}
                  <b style={{ color: timeLeft < 60 ? '#dc2626' : '#16a34a' }}>
                    {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                  </b>
                </p>
                <img src={qrData.qrImage} alt="QR Code" style={{ width: 220, height: 220, border: '1px solid #ddd', borderRadius: 6 }} />
                <p style={{ fontSize: 12, color: '#888', marginTop: 10 }}>Class ID: {qrData.classId}</p>

                <button
                  className="btn btn-gray"
                  style={{ marginTop: 12 }}
                  onClick={() => viewAttendance({ id: qrData.classId, subject: qrData.subject }) || setTab('live')}
                >
                  View Live Attendance
                </button>
              </div>
            )}

            {/* Live attendance for current QR */}
            {qrData && (
              <LiveAttendance classId={qrData.classId} />
            )}
          </div>
        )}

        {/* History Tab */}
        {tab === 'history' && (
          <div>
            <div className="card">
              <h3 style={{ marginBottom: 16 }}>All Classes</h3>
              {classes.length === 0 ? (
                <p style={{ color: '#888', fontSize: 14 }}>No classes yet. Generate a QR to start.</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Date</th>
                      <th>Students Attended</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map(cls => (
                      <tr key={cls.id}>
                        <td>{cls.subject}</td>
                        <td>{cls.class_date}</td>
                        <td><span className="badge badge-green">{cls.attendance_count}</span></td>
                        <td>
                          <button className="btn btn-primary" style={{ padding: '5px 12px', fontSize: 13 }}
                            onClick={() => viewAttendance(cls)}>
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {selectedClass && (
              <div className="card">
                <h3 style={{ marginBottom: 16 }}>Attendance — {selectedClass.subject}</h3>
                {attendance.length === 0 ? (
                  <p style={{ color: '#888', fontSize: 14 }}>No students marked attendance yet.</p>
                ) : (
                  <table>
                    <thead>
                      <tr><th>#</th><th>Name</th><th>Student ID</th><th>Marked At</th></tr>
                    </thead>
                    <tbody>
                      {attendance.map((a, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{a.name}</td>
                          <td>{a.student_id}</td>
                          <td>{new Date(a.marked_at).toLocaleTimeString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function LiveAttendance({ classId }) {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await apiFetch(`/teacher/attendance/${classId}`);
        setAttendance(data);
      } catch (e) {}
    };
    fetch();
    const interval = setInterval(fetch, 5000); // refresh every 5 seconds
    return () => clearInterval(interval);
  }, [classId]);

  return (
    <div className="card">
      <h3 style={{ marginBottom: 12 }}>Live Attendance <span className="badge badge-blue" style={{ marginLeft: 8 }}>Auto-refreshes</span></h3>
      {attendance.length === 0 ? (
        <p style={{ color: '#888', fontSize: 14 }}>Waiting for students to scan...</p>
      ) : (
        <table>
          <thead>
            <tr><th>#</th><th>Name</th><th>Student ID</th><th>Time</th></tr>
          </thead>
          <tbody>
            {attendance.map((a, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{a.name}</td>
                <td>{a.student_id}</td>
                <td>{new Date(a.marked_at).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
