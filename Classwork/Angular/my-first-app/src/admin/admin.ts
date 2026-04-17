import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  name: string = '';
  age: number = 0;
  courses: string = '';

  showData() {
    alert("Data Submitted Successfully!");
    console.log(this.name, this.age, this.courses);
  }

}