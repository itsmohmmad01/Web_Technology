import React, { useState } from 'react';
import { apiFetch } from '../api';

export default function TeacherLogin({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const teacher = await apiFetch('/teacher/login', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      onLogin(teacher);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 60 }}>
      <div className="card">
        <h2 style={{ marginBottom: 20 }}>Teacher Login</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>Login</button>
        </form>
      </div>
    </div>
  );
}
