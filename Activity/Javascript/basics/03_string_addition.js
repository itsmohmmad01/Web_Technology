// 3. String Addition (Concatenation) in JavaScript

// --- Using + operator ---
let firstName = "John";
let lastName  = "Doe";
let fullName  = firstName + " " + lastName;
console.log("Full Name:", fullName); // John Doe

// --- Template Literals (ES6) ---
let age = 25;
let greeting = `Hello, my name is ${fullName} and I am ${age} years old.`;
console.log(greeting);

// --- String + Number coercion ---
console.log("5" + 3);       // "53"  (number becomes string)
console.log("Score: " + 100); // "Score: 100"

// --- Multiline template literal ---
let message = `Line 1
Line 2
Line 3`;
console.log(message);

// --- concat() method ---
let s1 = "Hello";
let s2 = " World";
console.log("concat():", s1.concat(s2)); // Hello World

// --- Repeat ---
let dash = "-".repeat(20);
console.log(dash); // --------------------

// --- String building in loop ---
let result = "";
for (let i = 1; i <= 5; i++) {
  result += `Item ${i}\n`;
}
console.log(result);
