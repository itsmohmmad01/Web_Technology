import React, { useState } from 'react';
import { apiFetch } from '../api';

export default function StudentLogin({ onLogin }) {
  const [form, setForm] = useState({ student_id: '', name: '' });
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const student = await apiFetch('/student/login', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      onLogin(student);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 60 }}>
      <div className="card">
        <h2 style={{ marginBottom: 20 }}>Student Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student ID</label>
            <input
              type="text"
              
              value={form.student_id}
              onChange={e => setForm({ ...form, student_id: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-success" style={{ width: '100%', marginTop: 8 }}>Login</button>
        </form>
      </div>
    </div>
  );
}
