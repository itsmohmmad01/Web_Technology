import React from "react";
import { useApp } from "../context/AppContext";

const GRADE_COLOR = { "A": "#10b981", "A-": "#6366f1", "B+": "#f59e0b", "B": "#3b82f6", "B-": "#ec4899" };

export default function Grades() {
  const { courses, student } = useApp();
  const totalCredits = courses.reduce((s, c) => s + c.credits, 0);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Grades</h1>
      <p style={styles.sub}>Your academic performance overview</p>

      <div style={styles.summary}>
        <div style={styles.summaryItem}>
          <div style={styles.summaryValue}>{student.gpa}</div>
          <div style={styles.summaryLabel}>Cumulative GPA</div>
        </div>
        <div style={styles.summaryItem}>
          <div style={styles.summaryValue}>{totalCredits}</div>
          <div style={styles.summaryLabel}>Total Credits</div>
        </div>
        <div style={styles.summaryItem}>
          <div style={styles.summaryValue}>{courses.length}</div>
          <div style={styles.summaryLabel}>Active Courses</div>
        </div>
      </div>

      <div style={styles.table}>
        <div style={styles.tableHeader}>
          <span>Course</span>
          <span>Code</span>
          <span>Credits</span>
          <span>Progress</span>
          <span>Grade</span>
        </div>
        {courses.map((c) => (
          <div key={c.id} style={styles.tableRow}>
            <span style={styles.courseName}>{c.name}</span>
            <span style={{ color: "#6b6b8a", fontSize: 12 }}>{c.code}</span>
            <span style={{ color: "#d1d1e8", fontSize: 13 }}>{c.credits}</span>
            <div style={styles.miniBar}>
              <div style={{ ...styles.miniBarFill, width: `${c.progress}%`, background: c.color }} />
              <span style={{ color: "#6b6b8a", fontSize: 11, marginLeft: 8 }}>{c.progress}%</span>
            </div>
            <span style={{ ...styles.gradeTag, color: GRADE_COLOR[c.grade] || "#fff" }}>{c.grade}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { padding: 32, flex: 1, overflowY: "auto" },
  title: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 26, color: "#fff", margin: 0 },
  sub: { color: "#6b6b8a", fontSize: 14, margin: "4px 0 24px" },
  summary: { display: "flex", gap: 16, marginBottom: 28 },
  summaryItem: { background: "#1a1a26", borderRadius: 12, padding: "18px 24px", flex: 1, textAlign: "center" },
  summaryValue: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 30, color: "#6366f1" },
  summaryLabel: { color: "#6b6b8a", fontSize: 12, marginTop: 4 },
  table: { background: "#1a1a26", borderRadius: 14, overflow: "hidden" },
  tableHeader: { display: "grid", gridTemplateColumns: "2fr 1fr 0.7fr 1.5fr 0.7fr", padding: "12px 20px", background: "#13131f", color: "#6b6b8a", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", gap: 12 },
  tableRow: { display: "grid", gridTemplateColumns: "2fr 1fr 0.7fr 1.5fr 0.7fr", padding: "14px 20px", borderTop: "1px solid #1e1e2e", alignItems: "center", gap: 12 },
  courseName: { color: "#fff", fontSize: 14, fontWeight: 500 },
  miniBar: { display: "flex", alignItems: "center" },
  miniBarFill: { height: 6, borderRadius: 3 },
  gradeTag: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 15 },
};
