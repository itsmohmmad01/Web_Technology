import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push({ ...student });
  }
}