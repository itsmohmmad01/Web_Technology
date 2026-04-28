# Angular Activities — All 6 Activities in One App

A complete Angular 17 project covering all activities from the lab sheet.

---

## 📁 Project Structure

```
angular-activities/
├── src/
│   ├── app/
│   │   ├── app.component.ts          ← Root shell with sidebar nav
│   │   ├── app.config.ts             ← HttpClient + Router providers
│   │   ├── app.routes.ts             ← All route definitions
│   │   ├── components/
│   │   │   ├── student-profile/      ← Activity 1: Component + Interpolation + Property Binding
│   │   │   ├── live-preview/         ← Activity 2: Two-way Binding (ngModel)
│   │   │   ├── directives-demo/      ← Activity 3: *ngIf, *ngFor, ngClass, ngStyle
│   │   │   └── api-users/            ← Activity 4: HttpClient + Observables + Spinner
│   │   └── pages/
│   │       ├── home/                 ← Activity 5: Routing - Home
│   │       ├── about/                ← Activity 5: Routing - About
│   │       └── contact/              ← Activity 5: Routing - Contact
│   ├── styles.css                    ← Global dark theme styles
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json
```

---

## ✅ Prerequisites

| Tool        | Version     | Install From              |
|-------------|-------------|---------------------------|
| Node.js     | 18+         | https://nodejs.org        |
| Angular CLI | 17+         | `npm install -g @angular/cli` |

Check: `node -v` and `ng version`

---

## 🚀 How to Run

### Step 1 — Install Dependencies
```bash
cd angular-activities
npm install
```

### Step 2 — Start Dev Server
```bash
ng serve
```
or
```bash
npm start
```

### Step 3 — Open in Browser
```
http://localhost:4200
```

---

## 📋 Activities Covered

| Activity | Route         | Concept                              |
|----------|---------------|--------------------------------------|
| 1        | /activity1    | Component, Interpolation, Property Binding |
| 2        | /activity2    | Two-way Data Binding (ngModel)       |
| 3        | /activity3    | *ngIf, *ngFor, ngClass, ngStyle      |
| 4        | /activity4    | HttpClient, Observables, API Fetch   |
| 5        | /home /about /contact | Angular Routing               |

---

## 🛠 Common Errors

| Error | Fix |
|-------|-----|
| `ng: command not found` | Run `npm install -g @angular/cli` |
| `Cannot find module` | Run `npm install` inside the folder |
| Port 4200 in use | Run `ng serve --port 4201` |
