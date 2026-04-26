import React from "react";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

function StatCard({ label, value, sub, color }) {
  return (
    <div style={{ ...styles.statCard, borderTop: `3px solid ${color}` }}>
      <div style={{ ...styles.statValue, color }}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
      {sub && <div style={styles.statSub}>{sub}</div>}
    </div>
  );
}

export default function Dashboard() {
  const { student, courses, assignments } = useApp();
  const pending = assignments.filter((a) => a.status === "pending");
  const avgProgress = Math.round(courses.reduce((s, c) => s + c.progress, 0) / courses.length);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Welcome back, {student.name.split(" ")[0]} 👋</h1>
          <p style={styles.subtitle}>Here's your academic snapshot for today.</p>
        </div>
        <div style={styles.dateChip}>{new Date().toDateString()}</div>
      </div>

      <div style={styles.statsRow}>
        <StatCard label="Enrolled Courses" value={courses.length} sub="This semester" color="#6366f1" />
        <StatCard label="Avg. Progress" value={`${avgProgress}%`} sub="Across all courses" color="#10b981" />
        <StatCard label="Pending Tasks" value={pending.length} sub="Due this week" color="#f59e0b" />
        <StatCard label="GPA" value={student.gpa} sub="Out of 4.0" color="#ec4899" />
      </div>

      <div style={styles.twoCol}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>Recent Courses</span>
            <Link to="/courses" style={styles.cardLink}>View all →</Link>
          </div>
          {courses.slice(0, 3).map((c) => (
            <div key={c.id} style={styles.courseRow}>
              <div style={{ ...styles.courseDot, background: c.color }} />
              <div style={{ flex: 1 }}>
                <div style={styles.courseRowName}>{c.name}</div>
                <div style={styles.progressBar}>
                  <div style={{ ...styles.progressFill, width: `${c.progress}%`, background: c.color }} />
                </div>
              </div>
              <span style={styles.courseGrade}>{c.grade}</span>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <span style={styles.cardTitle}>Upcoming Tasks</span>
            <Link to="/assignments" style={styles.cardLink}>View all →</Link>
          </div>
          {pending.slice(0, 3).map((a) => (
            <div key={a.id} style={styles.taskRow}>
              <div style={{ ...styles.priorityDot, background: a.priority === "high" ? "#ef4444" : a.priority === "medium" ? "#f59e0b" : "#10b981" }} />
              <div>
                <div style={styles.taskTitle}>{a.title}</div>
                <div style={styles.taskMeta}>{a.course} · Due {a.due}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: 32, flex: 1, overflowY: "auto" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 },
  title: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 26, color: "#fff", margin: 0 },
  subtitle: { color: "#6b6b8a", fontSize: 14, margin: "4px 0 0" },
  dateChip: { background: "#1a1a26", color: "#6b6b8a", fontSize: 12, padding: "6px 14px", borderRadius: 20 },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 },
  statCard: { background: "#1a1a26", borderRadius: 12, padding: 20, borderTop: "3px solid #6366f1" },
  statValue: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 28, color: "#6366f1" },
  statLabel: { color: "#fff", fontSize: 13, fontWeight: 600, marginTop: 4 },
  statSub: { color: "#6b6b8a", fontSize: 11, marginTop: 2 },
  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 },
  card: { background: "#1a1a26", borderRadius: 14, padding: 20 },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 },
  cardTitle: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" },
  cardLink: { color: "#6366f1", fontSize: 12, textDecoration: "none" },
  courseRow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 14 },
  courseDot: { width: 10, height: 10, borderRadius: "50%", flexShrink: 0 },
  courseRowName: { color: "#d1d1e8", fontSize: 13, marginBottom: 6 },
  progressBar: { height: 4, background: "#2a2a40", borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 4, transition: "width 0.3s" },
  courseGrade: { fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#fff", fontSize: 14 },
  taskRow: { display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 },
  priorityDot: { width: 8, height: 8, borderRadius: "50%", marginTop: 4, flexShrink: 0 },
  taskTitle: { color: "#d1d1e8", fontSize: 13, fontWeight: 500 },
  taskMeta: { color: "#6b6b8a", fontSize: 11, marginTop: 3 },
};
