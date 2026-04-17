import { Component } from '@angular/core';
import { Student } from '../student/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Student Management System';
}