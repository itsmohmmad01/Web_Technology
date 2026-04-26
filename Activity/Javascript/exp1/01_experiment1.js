// Experiment 1 — JavaScript Basics

// ════════════════════════════════════════════════
// 1. Display Student Information
// ════════════════════════════════════════════════
const student = {
  name  : "Riya Sharma",
  age   : 20,
  grade : "A",
  school: "Delhi Public School",
};
console.log("=== Student Information ===");
console.log(`Name  : ${student.name}`);
console.log(`Age   : ${student.age}`);
console.log(`Grade : ${student.grade}`);
console.log(`School: ${student.school}\n`);


// ════════════════════════════════════════════════
// 2. Check Whether the Number is Even or Odd
// ════════════════════════════════════════════════
function checkEvenOdd(num) {
  return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;
}
console.log("=== Even or Odd ===");
console.log(checkEvenOdd(10));   // Even
console.log(checkEvenOdd(7));    // Odd
console.log(checkEvenOdd(0));    // Even
console.log(checkEvenOdd(-5));   // Odd
console.log();


// ════════════════════════════════════════════════
// 3. Check Whether Student Pass or Fail
// ════════════════════════════════════════════════
function checkResult(marks) {
  const PASS_MARK = 40;
  if (marks >= PASS_MARK) {
    return `Marks: ${marks} — ✅ PASS`;
  } else {
    return `Marks: ${marks} — ❌ FAIL (need ${PASS_MARK - marks} more marks)`;
  }
}
console.log("=== Pass or Fail ===");
console.log(checkResult(75));  // PASS
console.log(checkResult(35));  // FAIL
console.log(checkResult(40));  // PASS (boundary)
console.log();


// ════════════════════════════════════════════════
// 4. Print Numbers from 1 to 10
// ════════════════════════════════════════════════
console.log("=== Numbers 1 to 10 ===");
for (let i = 1; i <= 10; i++) {
  process.stdout.write(i + (i < 10 ? ", " : "\n"));
}
console.log();


// ════════════════════════════════════════════════
// 5. Assign Values from One Variable to Another
// ════════════════════════════════════════════════
console.log("=== Variable Assignment ===");
let x = 50;
let y = x;   // copy value
console.log(`x = ${x}, y = ${y}`); // 50, 50

y = 100;     // changing y does NOT affect x (primitive value)
console.log(`After y = 100: x = ${x}, y = ${y}`); // 50, 100

// With objects (reference copy)
let obj1 = { name: "Alice" };
let obj2 = obj1;            // both point to SAME object
obj2.name = "Bob";
console.log(`obj1.name = ${obj1.name}`); // Bob (shared reference)

// Deep copy to avoid this
let obj3 = { ...obj1 };     // spread creates a new object
obj3.name = "Charlie";
console.log(`obj1.name still = ${obj1.name}`); // Bob (unaffected)
console.log();


// ════════════════════════════════════════════════
// 6. Print Output to Browser Console
// ════════════════════════════════════════════════
// In Node.js: console.log() writes to the terminal.
// In a browser: press F12 → Console tab to see output.
console.log("=== Console Output Methods ===");
console.log("console.log   — general output");
console.warn("console.warn  — warning message");
console.error("console.error — error message");
console.info("console.info  — informational message");

// Formatted output
console.log("Name: %s, Age: %d, Score: %.2f", "Arjun", 21, 98.567);

// Table output (very useful for arrays/objects)
const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob",   marks: 72 },
  { name: "Carol", marks: 91 },
];
console.table(students);

// Grouping
console.group("Student Details");
console.log("Total students:", students.length);
console.log("Top scorer:", students.reduce((best, s) => s.marks > best.marks ? s : best).name);
console.groupEnd();
