import React, { useState, useEffect, useRef } from 'react';
import { apiFetch } from '../api';
import jsQR from 'jsqr';

export default function StudentDashboard({ student, onLogout, initialToken }) {
  const [tab, setTab] = useState(initialToken ? 'scan' : 'scan');
  const [token, setToken] = useState(initialToken || '');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const scanIntervalRef = useRef(null);

  useEffect(() => {
    if (tab === 'history') loadHistory();
    if (tab !== 'scan') stopCamera();
  }, [tab]);

  useEffect(() => {
    if (initialToken) markAttendance(initialToken);
  }, [initialToken]);

  async function loadHistory() {
    try {
      const data = await apiFetch(`/student/history/${student.id}`);
      setHistory(data);
    } catch (e) {}
  }

  async function markAttendance(tok) {
    setError(''); setMessage('');
    setLoading(true);
    try {
      const data = await apiFetch('/student/mark-attendance', {
        method: 'POST',
        body: JSON.stringify({ token: tok, student_id: student.id }),
      });
      setMessage(data.message);
      setToken('');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  async function handleManualSubmit(e) {
    e.preventDefault();
    if (!token.trim()) return;
    await markAttendance(token.trim());
  }

  // Camera QR scan
  async function startCamera() {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setScanning(true);
        scanIntervalRef.current = setInterval(scanFrame, 400);
      }
    } catch (err) {
      setError('Camera not available. Use manual token entry below.');
    }
  }

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    clearInterval(scanIntervalRef.current);
    setScanning(false);
  }

  function scanFrame() {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      stopCamera();
      // Extract token from URL if QR contains full URL
      const url = code.data;
      const tokenMatch = url.match(/token=([^&]+)/);
      const tok = tokenMatch ? tokenMatch[1] : url;
      markAttendance(tok);
    }
  }

  return (
    <div>
      <nav>
        <h1>Student Attendance System — Student</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13 }}>{student.name} ({student.student_id})</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="tabs">
          <button className={`tab ${tab === 'scan' ? 'active' : ''}`} onClick={() => setTab('scan')}>Mark Attendance</button>
          <button className={`tab ${tab === 'history' ? 'active' : ''}`} onClick={() => setTab('history')}>My Attendance</button>
        </div>

        {/* Scan Tab */}
        {tab === 'scan' && (
          <div>
            <div className="card" style={{ maxWidth: 460 }}>
              <h3 style={{ marginBottom: 16 }}>Mark Attendance</h3>

              {message && (
                <div style={{ background: '#dcfce7', border: '1px solid #16a34a', borderRadius: 4, padding: '12px 16px', marginBottom: 16, color: '#15803d', fontWeight: 'bold' }}>
                  ✓ {message}
                </div>
              )}
              {error && (
                <div style={{ background: '#fee2e2', border: '1px solid #dc2626', borderRadius: 4, padding: '12px 16px', marginBottom: 16, color: '#dc2626' }}>
                  ✗ {error}
                </div>
              )}

              {/* Camera Section */}
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 10 }}>Option 1: Scan QR with Camera</p>
                {!scanning ? (
                  <button className="btn btn-primary" onClick={startCamera}>Open Camera & Scan QR</button>
                ) : (
                  <div>
                    <video ref={videoRef} style={{ width: '100%', borderRadius: 6, border: '2px solid #2563eb', maxHeight: 260 }} muted playsInline />
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                    <button className="btn btn-danger" style={{ marginTop: 8 }} onClick={stopCamera}>Stop Camera</button>
                    <p style={{ fontSize: 12, color: '#666', marginTop: 6 }}>Point your camera at the QR code shown by the teacher...</p>
                  </div>
                )}
              </div>

              <hr style={{ borderColor: '#eee', marginBottom: 16 }} />

              {/* Manual token */}
              <div>
                <p style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 10 }}>Option 2: Enter Token Manually</p>
                <form onSubmit={handleManualSubmit} style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="text"
                    placeholder="Paste QR token here"
                    value={token}
                    onChange={e => setToken(e.target.value)}
                    style={{ flex: 1, padding: '9px 12px', border: '1px solid #ccc', borderRadius: 4, fontSize: 14 }}
                  />
                  <button type="submit" className="btn btn-success" disabled={loading}>
                    {loading ? '...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {tab === 'history' && (
          <div className="card">
            <h3 style={{ marginBottom: 16 }}>My Attendance History</h3>
            {history.length === 0 ? (
              <p style={{ color: '#888', fontSize: 14 }}>No attendance recorded yet.</p>
            ) : (
              <table>
                <thead>
                  <tr><th>#</th><th>Subject</th><th>Date</th><th>Marked At</th></tr>
                </thead>
                <tbody>
                  {history.map((h, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{h.subject}</td>
                      <td>{h.class_date}</td>
                      <td>{new Date(h.marked_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
