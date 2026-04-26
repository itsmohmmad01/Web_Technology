import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

// ─── Shared nav ───────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{ background: "#2563eb", padding: "12px 24px", display: "flex", gap: 20 }}>
      <Link to="/" style={link}>Home</Link>
      <Link to="/add" style={link}>Add Student</Link>
      <Link to="/students" style={link}>Student List</Link>
    </nav>
  );
}
const link = { color: "#fff", textDecoration: "none", fontWeight: "bold", fontSize: 15 };

// ─── Pages ────────────────────────────────────────────────────
function Home() {
  return (
    <div style={page}>
      <h1>Welcome</h1>
      <p>Use the nav to add or view students.</p>
    </div>
  );
}

function AddStudent({ onAdd }) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (!name.trim() || !grade.trim()) return alert("Fill in both fields");
    onAdd({ id: Date.now(), name, grade });
    setName(""); setGrade("");
    navigate("/students");
  };

  return (
    <div style={page}>
      <h1>Add Student</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 300 }}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={input} />
        <input placeholder="Grade (e.g. A)" value={grade} onChange={e => setGrade(e.target.value)} style={input} />
        <button onClick={submit} style={btn}>Add</button>
      </div>
    </div>
  );
}

function StudentList({ students }) {
  return (
    <div style={page}>
      <h1>Students ({students.length})</h1>
      {students.length === 0 && <p style={{ color: "#888" }}>No students yet.</p>}
      <table style={{ width: "100%", maxWidth: 400, borderCollapse: "collapse" }}>
        <tbody>
          {students.map(s => (
            <tr key={s.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px 8px" }}>{s.name}</td>
              <td style={{ padding: "10px 8px", color: "#2563eb", fontWeight: "bold" }}>{s.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────
const page = { padding: 24 };
const input = { padding: "8px 10px", fontSize: 14, border: "1px solid #ccc", borderRadius: 6 };
const btn = { padding: "9px 20px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontSize: 14, cursor: "pointer" };

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B+" },
  ]);

  const addStudent = (s) => setStudents(prev => [...prev, s]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent onAdd={addStudent} />} />
        <Route path="/students" element={<StudentList students={students} />} />
      </Routes>
    </BrowserRouter>
  );
}
