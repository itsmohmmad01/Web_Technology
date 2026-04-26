import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container" *ngIf="student; else notFound">
      <div class="header">
        <h2>Student Detail</h2>
        <div class="header-btns">
          <a [routerLink]="['/students/edit', student.id]" class="btn-edit">Edit</a>
          <a routerLink="/students" class="btn-back">← Back</a>
        </div>
      </div>

      <div class="card">
        <div class="row"><span class="label">ID</span><span>{{ student.id }}</span></div>
        <div class="row"><span class="label">Name</span><span>{{ student.name }}</span></div>
        <div class="row"><span class="label">Email</span><span>{{ student.email }}</span></div>
        <div class="row"><span class="label">Course</span><span>{{ student.course }}</span></div>
        <div class="row"><span class="label">Grade</span><span>{{ student.grade }}</span></div>
        <div class="row"><span class="label">Age</span><span>{{ student.age }}</span></div>
      </div>
    </div>

    <ng-template #notFound>
      <div class="container">
        <p>Student not found. <a routerLink="/students">Go back</a></p>
      </div>
    </ng-template>
  `,
  styles: [`
    .container { max-width: 520px; margin: 30px auto; padding: 0 16px; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    h2 { margin: 0; font-size: 1.4rem; }
    .header-btns { display: flex; gap: 8px; }
    .btn-edit { background: #fef9c3; color: #854d0e; padding: 7px 14px; border-radius: 5px;
                text-decoration: none; font-size: 0.88rem; }
    .btn-back { background: #f1f5f9; color: #333; padding: 7px 14px; border-radius: 5px;
                text-decoration: none; font-size: 0.88rem; }
    .btn-edit:hover { background: #fef08a; }
    .btn-back:hover { background: #e2e8f0; }
    .card { background: #fff; border-radius: 6px; box-shadow: 0 1px 6px rgba(0,0,0,0.1);
            overflow: hidden; }
    .row { display: flex; padding: 12px 18px; border-bottom: 1px solid #f0f0f0; font-size: 0.9rem; }
    .row:last-child { border-bottom: none; }
    .label { width: 100px; font-weight: 600; color: #555; }
  `]
})
export class StudentDetailComponent implements OnInit {
  student: Student | undefined;

  // Dependency Injection — ActivatedRoute, Router, StudentService
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentService.getById(id);
  }
}
