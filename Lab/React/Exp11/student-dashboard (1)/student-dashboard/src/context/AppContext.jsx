import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

const initialStudent = {
  name: "Alex Johnson",
  id: "STU-2024-001",
  avatar: "AJ",
  gpa: 3.8,
  year: "3rd Year",
  major: "Computer Science",
};

const initialCourses = [
  { id: 1, name: "Data Structures", code: "CS301", grade: "A", progress: 88, credits: 3, color: "#6366f1" },
  { id: 2, name: "Algorithms", code: "CS302", grade: "A-", progress: 82, credits: 3, color: "#ec4899" },
  { id: 3, name: "Web Development", code: "CS401", grade: "B+", progress: 76, credits: 3, color: "#f59e0b" },
  { id: 4, name: "Database Systems", code: "CS350", grade: "A", progress: 91, credits: 3, color: "#10b981" },
  { id: 5, name: "Machine Learning", code: "CS480", grade: "B+", progress: 74, credits: 4, color: "#3b82f6" },
];

const initialAssignments = [
  { id: 1, title: "Binary Tree Implementation", course: "CS301", due: "2024-04-28", status: "pending", priority: "high" },
  { id: 2, title: "Sorting Algorithm Analysis", course: "CS302", due: "2024-04-30", status: "submitted", priority: "medium" },
  { id: 3, title: "React Portfolio Project", course: "CS401", due: "2024-05-02", status: "pending", priority: "high" },
  { id: 4, title: "SQL Query Optimization", course: "CS350", due: "2024-05-05", status: "pending", priority: "low" },
  { id: 5, title: "Neural Network Lab", course: "CS480", due: "2024-05-08", status: "submitted", priority: "medium" },
];

export function AppProvider({ children }) {
  const [student] = useState(initialStudent);
  const [courses] = useState(initialCourses);
  const [assignments, setAssignments] = useState(initialAssignments);
  const [notifications, setNotifications] = useState(3);

  const markAssignmentDone = (id) => {
    setAssignments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "submitted" } : a))
    );
  };

  const clearNotifications = () => setNotifications(0);

  return (
    <AppContext.Provider value={{ student, courses, assignments, notifications, markAssignmentDone, clearNotifications }}>
      {children}
    </AppContext.Provider>
  );
}
