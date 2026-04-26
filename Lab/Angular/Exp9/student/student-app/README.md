# Angular Student App

Simple Angular 17 app demonstrating **Dependency Injection**, **Services**, and **Routing**.

## File Structure

```
student-app/
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    └── app/
        ├── app.component.ts       ← Root component (just <router-outlet>)
        ├── app.config.ts          ← provideRouter(routes)
        ├── app.routes.ts          ← All route definitions
        ├── models/
        │   └── student.model.ts   ← Student interface
        ├── services/
        │   └── student.service.ts ← @Injectable service (CRUD)
        └── components/
            ├── student-list/      ← /students
            ├── student-detail/    ← /students/:id
            └── student-form/      ← /students/new  &  /students/edit/:id
```

## How to Run

1. Install Node.js from https://nodejs.org (v18+)

2. Install Angular CLI:
   npm install -g @angular/cli

3. Go into the project folder:
   cd student-app

4. Install packages:
   npm install

5. Start the app:
   ng serve

6. Open browser at: http://localhost:4200

## Key Concepts

- @Injectable({ providedIn: 'root' })  →  Singleton service
- constructor(private studentService: StudentService)  →  DI in components
- app.routes.ts  →  All routes defined with RouterLink / ActivatedRoute
- ReactiveFormsModule  →  FormBuilder + Validators for Add/Edit form
- Standalone Components (Angular 17)  →  No NgModule needed
