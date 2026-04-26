import React from "react";
import { NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";

const navItems = [
  { path: "/", label: "Dashboard", icon: "⊞" },
  { path: "/courses", label: "Courses", icon: "◫" },
  { path: "/assignments", label: "Assignments", icon: "✎" },
  { path: "/grades", label: "Grades", icon: "◉" },
  { path: "/profile", label: "Profile", icon: "◎" },
];

export default function Sidebar() {
  const { student, notifications, clearNotifications } = useApp();

  return (
    <aside style={styles.sidebar}>
      <div style={styles.brand}>
        <span style={styles.brandIcon}>◈</span>
        <span style={styles.brandText}>EduTrack</span>
      </div>

      <div style={styles.studentCard}>
        <div style={styles.avatar}>{student.avatar}</div>
        <div>
          <div style={styles.studentName}>{student.name}</div>
          <div style={styles.studentMeta}>{student.year} · {student.major}</div>
        </div>
      </div>

      <nav style={styles.nav}>
        {navItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            style={({ isActive }) => ({
              ...styles.navItem,
              ...(isActive ? styles.navItemActive : {}),
            })}
          >
            <span style={styles.navIcon}>{icon}</span>
            <span>{label}</span>
            {label === "Assignments" && notifications > 0 && (
              <span style={styles.badge} onClick={clearNotifications}>{notifications}</span>
            )}
          </NavLink>
        ))}
      </nav>

      <div style={styles.gpaCard}>
        <div style={styles.gpaLabel}>Current GPA</div>
        <div style={styles.gpaValue}>{student.gpa}</div>
        <div style={styles.gpaBar}>
          <div style={{ ...styles.gpaFill, width: `${(student.gpa / 4) * 100}%` }} />
        </div>
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 240,
    minHeight: "100vh",
    background: "#0f0f13",
    borderRight: "1px solid #1e1e2e",
    display: "flex",
    flexDirection: "column",
    padding: "24px 16px",
    gap: 0,
    flexShrink: 0,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 28,
    paddingLeft: 8,
  },
  brandIcon: { fontSize: 22, color: "#6366f1" },
  brandText: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", letterSpacing: "-0.5px" },
  studentCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#1a1a26",
    borderRadius: 12,
    padding: "12px 14px",
    marginBottom: 24,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "linear-gradient(135deg, #6366f1, #ec4899)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontFamily: "Syne, sans-serif",
    fontWeight: 700,
    fontSize: 13,
    flexShrink: 0,
  },
  studentName: { fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 13, color: "#fff" },
  studentMeta: { fontSize: 11, color: "#6b6b8a", marginTop: 2 },
  nav: { display: "flex", flexDirection: "column", gap: 4, flex: 1 },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 10,
    color: "#6b6b8a",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    transition: "all 0.15s",
    position: "relative",
  },
  navItemActive: {
    background: "#1a1a30",
    color: "#fff",
    borderLeft: "3px solid #6366f1",
    paddingLeft: 9,
  },
  navIcon: { fontSize: 16, width: 20, textAlign: "center" },
  badge: {
    marginLeft: "auto",
    background: "#ec4899",
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    borderRadius: 20,
    padding: "2px 7px",
    cursor: "pointer",
  },
  gpaCard: {
    background: "#1a1a26",
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  gpaLabel: { fontSize: 11, color: "#6b6b8a", marginBottom: 4 },
  gpaValue: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", marginBottom: 8 },
  gpaBar: { height: 4, background: "#2a2a40", borderRadius: 4, overflow: "hidden" },
  gpaFill: { height: "100%", background: "linear-gradient(90deg, #6366f1, #ec4899)", borderRadius: 4 },
};
