import React, { useState } from "react";
import { useApp } from "../context/AppContext";

const PRIORITY_COLOR = { high: "#ef4444", medium: "#f59e0b", low: "#10b981" };

export default function Assignments() {
  const { assignments, markAssignmentDone } = useApp();
  const [filter, setFilter] = useState("all");

  const filtered = assignments.filter((a) =>
    filter === "all" ? true : a.status === filter
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Assignments</h1>
      <p style={styles.sub}>Track and manage your coursework</p>

      <div style={styles.filters}>
        {["all", "pending", "submitted"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={{ ...styles.filterBtn, ...(filter === f ? styles.filterActive : {}) }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div style={styles.list}>
        {filtered.map((a) => (
          <div key={a.id} style={styles.card}>
            <div style={{ ...styles.priorityBadge, background: PRIORITY_COLOR[a.priority] }}>
              {a.priority}
            </div>
            <div style={styles.cardBody}>
              <div style={styles.assignTitle}>{a.title}</div>
              <div style={styles.assignMeta}>{a.course} · Due: {a.due}</div>
            </div>
            <div style={styles.cardRight}>
              <span style={{ ...styles.statusBadge, background: a.status === "submitted" ? "#10b98120" : "#f59e0b20", color: a.status === "submitted" ? "#10b981" : "#f59e0b" }}>
                {a.status}
              </span>
              {a.status === "pending" && (
                <button style={styles.doneBtn} onClick={() => markAssignmentDone(a.id)}>
                  Mark Done
                </button>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div style={styles.empty}>No assignments found.</div>}
      </div>
    </div>
  );
}

const styles = {
  page: { padding: 32, flex: 1, overflowY: "auto" },
  title: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 26, color: "#fff", margin: 0 },
  sub: { color: "#6b6b8a", fontSize: 14, margin: "4px 0 20px" },
  filters: { display: "flex", gap: 8, marginBottom: 20 },
  filterBtn: { padding: "7px 16px", borderRadius: 20, border: "1px solid #2a2a40", background: "transparent", color: "#6b6b8a", fontSize: 13, cursor: "pointer", fontFamily: "DM Sans, sans-serif" },
  filterActive: { background: "#6366f1", color: "#fff", border: "1px solid #6366f1" },
  list: { display: "flex", flexDirection: "column", gap: 12 },
  card: { background: "#1a1a26", borderRadius: 12, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 },
  priorityBadge: { fontSize: 10, fontWeight: 700, color: "#fff", padding: "3px 9px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.5px", flexShrink: 0 },
  cardBody: { flex: 1 },
  assignTitle: { color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 3 },
  assignMeta: { color: "#6b6b8a", fontSize: 12 },
  cardRight: { display: "flex", alignItems: "center", gap: 10 },
  statusBadge: { fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20 },
  doneBtn: { padding: "6px 14px", background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, cursor: "pointer", fontFamily: "DM Sans, sans-serif", fontWeight: 600 },
  empty: { color: "#6b6b8a", textAlign: "center", padding: 40 },
};
