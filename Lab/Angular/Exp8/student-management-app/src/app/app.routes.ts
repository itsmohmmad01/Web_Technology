import { Routes } from '@angular/router';
import { StudentList } from './student-list/student-list';
import { StudentForm } from './student-form/student-form';

export const routes: Routes = [
  { path: '', component: StudentList },
  { path: 'add', component: StudentForm }
];