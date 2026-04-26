import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentForm {

  student: Student = {
    id: 0,
    name: '',
    age: 0,
    course: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  addStudent() {
    this.studentService.addStudent(this.student);

    // reset form after adding
    this.student = {
      id: 0,
      name: '',
      age: 0,
      course: ''
    };

    // go back to list
    this.router.navigate(['/']);
  }
}