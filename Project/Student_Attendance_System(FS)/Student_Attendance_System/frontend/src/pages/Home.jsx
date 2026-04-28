import React from 'react';

export default function Home({ onSelect }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <h1 style={{ fontSize: 26, marginBottom: 8 }}>Student Attendance System</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Select your role to continue</p>
      <div style={{ display: 'flex', gap: 24 }}>
        <div className="card" style={{ textAlign: 'center', width: 200, cursor: 'pointer', transition: 'box-shadow 0.2s' }}
          onClick={() => onSelect('teacher')}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👨‍🏫</div>
          <h3 style={{ marginBottom: 6 }}>Teacher</h3>
          <p style={{ fontSize: 13, color: '#666' }}>Generate QR codes and track attendance</p>
          <button className="btn btn-primary" style={{ marginTop: 14, width: '100%' }}>Login as Teacher</button>
        </div>
        <div className="card" style={{ textAlign: 'center', width: 200, cursor: 'pointer' }}
          onClick={() => onSelect('student')}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎓</div>
          <h3 style={{ marginBottom: 6 }}>Student</h3>
          <p style={{ fontSize: 13, color: '#666' }}>Scan QR code to mark attendance</p>
          <button className="btn btn-success" style={{ marginTop: 14, width: '100%' }}>Login as Student</button>
        </div>
      </div>
    </div>
  );
}
