import React from "react";
import { useApp } from "../context/AppContext";

export default function Profile() {
  const { student, courses, assignments } = useApp();
  const submitted = assignments.filter((a) => a.status === "submitted").length;
  const totalCredits = courses.reduce((s, c) => s + c.credits, 0);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>My Profile</h1>
      <p style={styles.sub}>Your academic identity</p>

      <div style={styles.profileCard}>
        <div style={styles.avatarLg}>{student.avatar}</div>
        <div>
          <div style={styles.name}>{student.name}</div>
          <div style={styles.id}>ID: {student.id}</div>
          <div style={styles.chips}>
            <span style={styles.chip}>{student.year}</span>
            <span style={styles.chip}>{student.major}</span>
          </div>
        </div>
      </div>

      <div style={styles.statsGrid}>
        {[
          { label: "GPA", value: student.gpa, color: "#6366f1" },
          { label: "Credits", value: totalCredits, color: "#10b981" },
          { label: "Courses", value: courses.length, color: "#f59e0b" },
          { label: "Completed", value: submitted, color: "#ec4899" },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ ...styles.statCard, borderBottom: `3px solid ${color}` }}>
            <div style={{ ...styles.statValue, color }}>{value}</div>
            <div style={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>

      <div style={styles.infoCard}>
        <div style={styles.infoTitle}>Academic Info</div>
        {[
          ["Full Name", student.name],
          ["Student ID", student.id],
          ["Year", student.year],
          ["Major", student.major],
          ["GPA", `${student.gpa} / 4.0`],
        ].map(([label, val]) => (
          <div key={label} style={styles.infoRow}>
            <span style={styles.infoLabel}>{label}</span>
            <span style={styles.infoVal}>{val}</span>
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
  profileCard: { display: "flex", alignItems: "center", gap: 20, background: "#1a1a26", borderRadius: 14, padding: 24, marginBottom: 20 },
  avatarLg: { width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg, #6366f1, #ec4899)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 22, flexShrink: 0 },
  name: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff" },
  id: { color: "#6b6b8a", fontSize: 13, marginTop: 4 },
  chips: { display: "flex", gap: 8, marginTop: 10 },
  chip: { background: "#2a2a40", color: "#a0a0c0", fontSize: 11, padding: "4px 12px", borderRadius: 20 },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 },
  statCard: { background: "#1a1a26", borderRadius: 12, padding: "18px 16px", textAlign: "center" },
  statValue: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 26 },
  statLabel: { color: "#6b6b8a", fontSize: 12, marginTop: 4 },
  infoCard: { background: "#1a1a26", borderRadius: 14, padding: 22 },
  infoTitle: { fontFamily: "Syne, sans-serif", fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 16 },
  infoRow: { display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #1e1e2e" },
  infoLabel: { color: "#6b6b8a", fontSize: 13 },
  infoVal: { color: "#fff", fontSize: 13, fontWeight: 500 },
};
