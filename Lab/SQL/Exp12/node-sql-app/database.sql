-- ============================================================
-- Experiment 12: Node.js + MySQL CRUD
-- Run this file in MySQL Workbench or MySQL CMD before starting
-- ============================================================

-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS studentdb;

-- Step 2: Use the database
USE studentdb;

-- Step 3: Create the students table
CREATE TABLE IF NOT EXISTS students (
    id     INT AUTO_INCREMENT PRIMARY KEY,
    name   VARCHAR(50)  NOT NULL,
    age    INT          NOT NULL,
    course VARCHAR(50)  NOT NULL
);

-- Step 4 (Optional): Insert sample data to test
INSERT INTO students (name, age, course) VALUES
  ('Shivani', 22, 'Computer Engineering'),
  ('Rahul',   21, 'Information Technology'),
  ('Priya',   23, 'Electronics');

-- Verify
SELECT * FROM students;
