import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from '../admin/admin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Admin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}