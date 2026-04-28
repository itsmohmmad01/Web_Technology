import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTask = '';
  todos: Todo[] = [
    { id: 1, text: 'Learn Angular basics', done: true },
    { id: 2, text: 'Build a cool project', done: false },
    { id: 3, text: 'Ship it 🚀', done: false },
  ];

  get remaining() {
    return this.todos.filter(t => !t.done).length;
  }

  addTodo() {
    const text = this.newTask.trim();
    if (!text) return;
    this.todos.push({ id: Date.now(), text, done: false });
    this.newTask = '';
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  remove(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  clearDone() {
    this.todos = this.todos.filter(t => !t.done);
  }
}
