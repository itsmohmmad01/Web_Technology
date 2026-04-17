import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  name: string = '';
  age: number | null = null;
  course: string = '';

  students: any[] = [];

  addStudent() {
    if (this.name && this.age && this.course) {
      this.students.push({
        name: this.name,
        age: this.age,
        course: this.course
      });

      this.name = '';
      this.age = null;
      this.course = '';
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}