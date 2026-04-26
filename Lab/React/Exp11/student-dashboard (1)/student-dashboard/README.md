# Student Dashboard

A React-based student dashboard demonstrating state management and client-side routing.

## Features

- **Dashboard** — Overview with stats, course progress, and upcoming tasks
- **Courses** — All enrolled courses with grades and progress
- **Assignments** — Filter by status, mark assignments as done (state update)
- **Grades** — GPA summary and per-course grade table
- **Profile** — Student info and academic stats

## Tech Stack

- React 19 (hooks, context API)
- React Router v7 (client-side routing)
- Webpack 5 + Babel (bundler)

## Getting Started

```bash
npm install
npm start       # Dev server at http://localhost:3000
npm run build   # Production build → /dist
```

## Project Structure

```
src/
  context/AppContext.jsx   ← Global state (courses, assignments, student)
  components/Sidebar.jsx   ← Navigation sidebar
  pages/
    Dashboard.jsx
    Courses.jsx
    Assignments.jsx
    Grades.jsx
    Profile.jsx
  App.jsx                  ← Router setup
  index.jsx                ← Entry point
```
