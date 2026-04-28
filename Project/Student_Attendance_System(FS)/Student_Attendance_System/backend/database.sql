-- Run this file in MySQL to set up the database
-- mysql -u root -p < database.sql

CREATE DATABASE IF NOT EXISTS attendance_db;
USE attendance_db;

-- Teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Students table
CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  student_id VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Classes table
CREATE TABLE IF NOT EXISTS classes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  teacher_id INT NOT NULL,
  subject VARCHAR(100) NOT NULL,
  class_date DATE NOT NULL,
  qr_token VARCHAR(255) UNIQUE NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);

-- Attendance table
CREATE TABLE IF NOT EXISTS attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  class_id INT NOT NULL,
  student_id INT NOT NULL,
  marked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_attendance (class_id, student_id),
  FOREIGN KEY (class_id) REFERENCES classes(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
);

-- Sample data
INSERT INTO teachers (name, email, password) VALUES
('Mr. John Smith', 'teacher@demo.com', 'teacher123');
INSERT INTO teachers (name, email, password) VALUES
('Mr. Mohmmad Nuh', 'mohmmad@gmail.com', 'nuh1@786');

INSERT INTO students (name, email, student_id) VALUES
('Alice Johnson', 'alice@demo.com', 'STU001'),
('Bob Williams', 'bob@demo.com', 'STU002'),
('Charlie Brown', 'charlie@demo.com', 'STU003'),
('Diana Prince', 'diana@demo.com', 'STU004');


INSERT INTO students (name, email, student_id) VALUES
('Mohmmad', 'mohmmadnuh1@gmail.com', '23UAM080');
