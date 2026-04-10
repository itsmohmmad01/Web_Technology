import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {

  students: any[] = [];

  addStudent(name: string, age: string, course: string) {
    const student = {
      name,
      age: Number(age),
      course
    };

    this.students.push(student);
    alert("Student Added!");
  }
}