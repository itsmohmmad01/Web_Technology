import React from "react";
import { useApp } from "../context/AppContext";

export default function Courses() {
  const { courses } = useApp();

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>My Courses</h1>
      <p style={styles.sub}>All enrolled courses this semester</p>

      <div style={styles.grid}>
        {courses.map((c) => (
          <div key={c.id} style={{ ...styles.card, borderTop: `3px solid ${c.color}` }}>
            <div style={styles.cardTop}>
              <span style={{ ...styles.code, color: c.color }}>{c.code}</span>
              <span style={{ ...styles.grade, color: c.color }}>{c.grade}</span>
            </div>
            <div style={styles.courseName}>{c.name}</div>
            <div style={styles.credits}>{c.credits} Credits</div>
            <div style={styles.progressSection}>
              <div style={styles.progressLabel}>
                <span style={styles.progressText}>Progress</span>
                <span style={{ ...styles.progressPct, color: c.color }}>{c.progress}%</span>
              </div>
              <div style={styles.bar}>
                <div style={{ ...styles.fill, width: `${c.progress}%`, background: c.color }} />
              </div>
            </div>
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
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 },
  card: { background: "#1a1a26", borderRadius: 14, padding: 20 },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  code: { fontSize: 12, fontWeight: 700, letterSpacing: "0.5px" },
  grade: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18 },
  courseName: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 },
  credits: { color: "#6b6b8a", fontSize: 12, marginBottom: 16 },
  progressSection: {},
  progressLabel: { display: "flex", justifyContent: "space-between", marginBottom: 6 },
  progressText: { color: "#6b6b8a", fontSize: 12 },
  progressPct: { fontSize: 12, fontWeight: 700 },
  bar: { height: 6, background: "#2a2a40", borderRadius: 4, overflow: "hidden" },
  fill: { height: "100%", borderRadius: 4, transition: "width 0.4s ease" },
};
