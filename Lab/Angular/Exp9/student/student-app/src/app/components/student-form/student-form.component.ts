import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="container">
      <div class="header">
        <h2>{{ isEdit ? 'Edit Student' : 'Add Student' }}</h2>
        <a routerLink="/students" class="btn-back">← Back</a>
      </div>

      <div class="card">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

          <div class="field">
            <label>Name</label>
            <input type="text" formControlName="name" placeholder="Full name" />
            <span class="err" *ngIf="s['name'].invalid && submitted">
              Name is required (min 3 chars).
            </span>
          </div>

          <div class="field">
            <label>Email</label>
            <input type="email" formControlName="email" placeholder="Email address" />
            <span class="err" *ngIf="s['email'].invalid && submitted">
              Valid email is required.
            </span>
          </div>

          <div class="field">
            <label>Course</label>
            <select formControlName="course">
              <option value="">-- Select --</option>
              <option>Computer Science</option>
              <option>Data Science</option>
              <option>Web Development</option>
              <option>Machine Learning</option>
              <option>Cybersecurity</option>
            </select>
            <span class="err" *ngIf="s['course'].invalid && submitted">Course is required.</span>
          </div>

          <div class="field">
            <label>Grade</label>
            <select formControlName="grade">
              <option value="">-- Select --</option>
              <option>A+</option><option>A</option><option>A-</option>
              <option>B+</option><option>B</option><option>B-</option>
              <option>C</option>
            </select>
            <span class="err" *ngIf="s['grade'].invalid && submitted">Grade is required.</span>
          </div>

          <div class="field">
            <label>Age</label>
            <input type="number" formControlName="age" placeholder="Age" />
            <span class="err" *ngIf="s['age'].invalid && submitted">Age must be 16–60.</span>
          </div>

          <div class="form-btns">
            <button type="submit" class="btn-submit">{{ isEdit ? 'Update' : 'Add Student' }}</button>
            <a routerLink="/students" class="btn-cancel">Cancel</a>
          </div>

        </form>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 480px; margin: 30px auto; padding: 0 16px; }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    h2 { margin: 0; font-size: 1.4rem; }
    .btn-back { background: #f1f5f9; color: #333; padding: 7px 14px; border-radius: 5px;
                text-decoration: none; font-size: 0.88rem; }
    .btn-back:hover { background: #e2e8f0; }
    .card { background: #fff; border-radius: 6px; box-shadow: 0 1px 6px rgba(0,0,0,0.1); padding: 24px; }
    .field { display: flex; flex-direction: column; margin-bottom: 16px; }
    label { font-size: 0.82rem; font-weight: 600; color: #444; margin-bottom: 5px; }
    input, select { padding: 8px 10px; border: 1px solid #d1d5db; border-radius: 5px;
                    font-size: 0.9rem; outline: none; }
    input:focus, select:focus { border-color: #3b82f6; }
    .err { color: #dc2626; font-size: 0.78rem; margin-top: 4px; }
    .form-btns { display: flex; gap: 10px; margin-top: 8px; }
    .btn-submit { background: #3b82f6; color: #fff; padding: 8px 20px; border: none;
                  border-radius: 5px; font-size: 0.9rem; cursor: pointer; }
    .btn-submit:hover { background: #2563eb; }
    .btn-cancel { background: #f1f5f9; color: #333; padding: 8px 16px; border-radius: 5px;
                  text-decoration: none; font-size: 0.9rem; }
    .btn-cancel:hover { background: #e2e8f0; }
  `]
})
export class StudentFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  submitted = false;
  private editId?: number;

  // Dependency Injection — FormBuilder, ActivatedRoute, Router, StudentService
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:   ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      grade:  ['', Validators.required],
      age:    ['', [Validators.required, Validators.min(16), Validators.max(60)]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = Number(id);
      const student = this.studentService.getById(this.editId);
      if (student) this.form.patchValue(student);
      else this.router.navigate(['/students']);
    }
  }

  get s() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    if (this.isEdit && this.editId !== undefined) {
      this.studentService.update({ id: this.editId, ...this.form.value });
    } else {
      this.studentService.add(this.form.value);
    }
    this.router.navigate(['/students']);
  }
}
