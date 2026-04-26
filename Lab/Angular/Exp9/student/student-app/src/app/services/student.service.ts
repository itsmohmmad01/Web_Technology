import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'Aarav Sharma',  email: 'aarav@example.com',  course: 'Computer Science', grade: 'A',  age: 20 },
    { id: 2, name: 'Priya Mehta',   email: 'priya@example.com',  course: 'Data Science',      grade: 'A+', age: 22 },
    { id: 3, name: 'Rohan Patel',   email: 'rohan@example.com',  course: 'Web Development',   grade: 'B+', age: 21 },
    { id: 4, name: 'Sneha Iyer',    email: 'sneha@example.com',  course: 'Machine Learning',  grade: 'A',  age: 23 },
    { id: 5, name: 'Vikram Nair',   email: 'vikram@example.com', course: 'Cybersecurity',     grade: 'B',  age: 24 },
  ];
  private nextId = 6;

  getAll(): Student[] {
    return this.students;
  }

  getById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  add(student: Omit<Student, 'id'>): void {
    this.students.push({ id: this.nextId++, ...student });
  }

  update(updated: Student): void {
    const index = this.students.findIndex(s => s.id === updated.id);
    if (index !== -1) this.students[index] = updated;
  }

  delete(id: number): void {
    this.students = this.students.filter(s => s.id !== id);
  }
}
