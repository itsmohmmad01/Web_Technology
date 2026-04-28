import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import TeacherLogin from './pages/TeacherLogin';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentLogin from './pages/StudentLogin';
import StudentDashboard from './pages/StudentDashboard';

export default function App() {
  const [role, setRole] = useState(null);       // 'teacher' | 'student'
  const [user, setUser] = useState(null);
  const [initialToken, setInitialToken] = useState(null);

  // If student opens a QR link like /?token=..., auto-extract token
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      setInitialToken(token);
      setRole('student');
    }
  }, []);

  function handleRoleSelect(r) {
    setRole(r);
    setUser(null);
  }

  function handleLogout() {
    setRole(null);
    setUser(null);
    setInitialToken(null);
  }

  if (!role) return <Home onSelect={handleRoleSelect} />;

  if (role === 'teacher') {
    if (!user) return <TeacherLogin onLogin={setUser} />;
    return <TeacherDashboard teacher={user} onLogout={handleLogout} />;
  }

  if (role === 'student') {
    if (!user) return <StudentLogin onLogin={setUser} />;
    return <StudentDashboard student={user} onLogout={handleLogout} initialToken={initialToken} />;
  }
}
