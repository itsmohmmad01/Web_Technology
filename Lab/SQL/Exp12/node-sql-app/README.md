# Experiment 12 — Node.js + MySQL CRUD Application

Connect a Node.js application with a MySQL database and perform full CRUD operations.

---

## 📁 Project Structure

```
node-sql-app/
├── server.js       ← Main server file (all CRUD routes)
├── database.sql    ← SQL script to create DB and table
├── package.json    ← Project metadata and dependencies
└── README.md       ← This file
```

---

## ✅ Prerequisites

Make sure these are installed on your system:

| Software | Check Command     |
|----------|-------------------|
| Node.js  | `node -v`         |
| npm      | `npm -v`          |
| MySQL    | `mysql --version` |
| Postman  | (download from postman.com) |

---

## 🚀 Setup & Run (Step by Step)

### Step 1 — Set Up the Database

Open **MySQL Workbench** or **MySQL Command Line** and run:

```sql
-- Copy-paste the contents of database.sql, OR run:
source /path/to/database.sql;
```

This creates the `studentdb` database and `students` table.

---

### Step 2 — Set Your MySQL Password

Open `server.js` and update line 12:

```js
password: "YOUR_PASSWORD",   // ← Replace with your actual MySQL password
```

---

### Step 3 — Install Dependencies

Open a terminal inside the `node-sql-app` folder and run:

```bash
npm install
```

This installs `express`, `mysql2`, and `body-parser`.

---

### Step 4 — Start the Server

```bash
node server.js
```

You should see:
```
✅ Connected to MySQL database!
🚀 Server running on http://localhost:3000
```

---

## 🧪 Test with Postman

### API Endpoints

| Method | URL                        | Purpose            |
|--------|----------------------------|--------------------|
| POST   | http://localhost:3000/students      | Add a student      |
| GET    | http://localhost:3000/students      | Get all students   |
| GET    | http://localhost:3000/students/:id  | Get one student    |
| PUT    | http://localhost:3000/students/:id  | Update a student   |
| DELETE | http://localhost:3000/students/:id  | Delete a student   |

---

### Sample JSON Body (for POST and PUT)

```json
{
  "name": "Shivani",
  "age": 22,
  "course": "Computer Engineering"
}
```

Set `Content-Type: application/json` in Postman Headers.

---

### Example Postman Tests

**➕ CREATE** → POST `http://localhost:3000/students`
```json
Body: { "name": "Shivani", "age": 22, "course": "Computer Engineering" }
Response: { "message": "Student added successfully!", "id": 1 }
```

**📖 READ ALL** → GET `http://localhost:3000/students`
```json
Response: [ { "id": 1, "name": "Shivani", "age": 22, "course": "Computer Engineering" } ]
```

**✏️ UPDATE** → PUT `http://localhost:3000/students/1`
```json
Body: { "name": "Shivani Patil", "age": 23, "course": "Computer Engineering" }
Response: { "message": "Student updated successfully!" }
```

**🗑️ DELETE** → DELETE `http://localhost:3000/students/1`
```json
Response: { "message": "Student deleted successfully!" }
```

---

## 📦 Dependencies

- **express** — Web framework / server
- **mysql2** — MySQL database connector
- **body-parser** — Parse JSON request bodies
