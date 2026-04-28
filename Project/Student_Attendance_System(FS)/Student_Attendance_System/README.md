# Student Attendance System

A full-stack attendance system where teachers generate QR codes and students scan them to mark attendance.

## Tech Stack
- **Frontend**: React + Vite (runs on port 3000)
- **Backend**: Express.js (runs on port 5000)
- **Database**: MySQL

---

## Setup Instructions

### Step 1 — MySQL Database

1. Open MySQL and run the setup file:
   ```
   mysql -u root -p < backend/database.sql
   ```
   Or open `backend/database.sql` in MySQL Workbench and execute it.

---

### Step 2 — Backend Setup

1. Open a terminal and go to the backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Open `backend/.env` and update your MySQL password:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=attendance_db
   PORT=5000
   ```

4. Start the backend:
   ```
   npm run dev
   ```
   You should see: `Server running on http://localhost:5000`

---

### Step 3 — Frontend Setup

1. Open a **new terminal** and go to the frontend folder:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend:
   ```
   npm run dev
   ```
   Open: http://localhost:3000

---

## How It Works

### Teacher Flow
1. Go to http://localhost:3000
2. Click **Login as Teacher**
3. Login with: `teacher@demo.com` / `teacher123`
4. Enter a subject name and click **Generate QR Code**
5. A QR code appears (valid for 10 minutes)
6. Show the QR to students — live attendance updates automatically

### Student Flow
1. Go to http://localhost:3000
2. Click **Login as Student**
3. Login with Student ID and Name (e.g. `STU001` / `Alice Johnson`)
4. Click **Open Camera & Scan QR** and point at the teacher's QR
5. OR paste the token manually if camera is unavailable

---

## Demo Credentials

**Teacher:**
- Email: `teacher@demo.com`
- Password: `teacher123`

**Students:**
- STU001 / Alice Johnson
- STU002 / Bob Williams
- STU003 / Charlie Brown
- STU004 / Diana Prince

---

## Project Structure

```
Student_Attendance_System/
├── backend/
│   ├── routes/
│   │   ├── teacher.js    # Teacher API routes
│   │   └── student.js    # Student API routes
│   ├── db.js             # MySQL connection
│   ├── server.js         # Express server
│   ├── database.sql      # Database setup
│   ├── .env              # Config (set your DB password here)
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx              # Role selector
    │   │   ├── TeacherLogin.jsx
    │   │   ├── TeacherDashboard.jsx  # Generate QR, view attendance
    │   │   ├── StudentLogin.jsx
    │   │   └── StudentDashboard.jsx  # Scan QR, view history
    │   ├── App.jsx
    │   ├── api.js         # API helper
    │   └── index.css
    └── package.json
```
