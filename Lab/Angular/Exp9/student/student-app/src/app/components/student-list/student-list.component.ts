import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="header">
        <h2>Student List</h2>
        <a routerLink="/students/new" class="btn-add">+ Add Student</a>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of students">
            <td>{{ s.id }}</td>
            <td>{{ s.name }}</td>
            <td>{{ s.email }}</td>
            <td>{{ s.course }}</td>
            <td>{{ s.grade }}</td>
            <td>{{ s.age }}</td>
            <td class="actions">
              <a [routerLink]="['/students', s.id]" class="btn-view">View</a>
              <a [routerLink]="['/students/edit', s.id]" class="btn-edit">Edit</a>
              <button (click)="delete(s.id)" class="btn-del">Delete</button>
            </td>
          </tr>
          <tr *ngIf="students.length === 0">
            <td colspan="7" style="text-align:center; color:#888;">No students found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .container { max-width: 960px; margin: 30px auto; padding: 0 16px; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    h2 { margin: 0; font-size: 1.4rem; }
    .btn-add { background: #3b82f6; color: #fff; padding: 8px 16px; border-radius: 5px;
               text-decoration: none; font-size: 0.9rem; }
    .btn-add:hover { background: #2563eb; }
    table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 6px;
            box-shadow: 0 1px 6px rgba(0,0,0,0.1); overflow: hidden; }
    th { background: #f1f5f9; padding: 10px 14px; text-align: left; font-size: 0.82rem;
         color: #555; border-bottom: 2px solid #e2e8f0; }
    td { padding: 10px 14px; border-bottom: 1px solid #f0f0f0; font-size: 0.88rem; color: #333; }
    tr:last-child td { border-bottom: none; }
    tr:hover td { background: #f8fafc; }
    .actions { display: flex; gap: 6px; }
    .btn-view, .btn-edit { padding: 4px 10px; border-radius: 4px; text-decoration: none;
                            font-size: 0.8rem; }
    .btn-view { background: #e0f2fe; color: #0369a1; }
    .btn-edit { background: #fef9c3; color: #854d0e; }
    .btn-del  { padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; border: none;
                background: #fee2e2; color: #991b1b; cursor: pointer; }
    .btn-view:hover { background: #bae6fd; }
    .btn-edit:hover { background: #fef08a; }
    .btn-del:hover  { background: #fecaca; }
  `]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  // Dependency Injection — StudentService injected via constructor
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }

  delete(id: number): void {
    if (confirm('Delete this student?')) {
      this.studentService.delete(id);
      this.students = this.studentService.getAll();
    }
  }
}
