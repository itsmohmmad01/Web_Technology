// 1. Conversion Operators in JavaScript

// --- String to Number ---
let str = "42";
let num = Number(str);
console.log("String to Number:", num, typeof num); // 42 'number'

let str2 = "3.14";
let float = parseFloat(str2);
console.log("parseFloat:", float); // 3.14

let intVal = parseInt("10px");
console.log("parseInt:", intVal); // 10

// --- Number to String ---
let n = 100;
console.log("Number to String:", String(n), typeof String(n)); // "100" string
console.log("toString():", n.toString()); // "100"

// --- Boolean Conversions ---
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));     // false
console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true

// --- Implicit (Type Coercion) ---
console.log("5" - 2);   // 3  (string coerced to number)
console.log("5" + 2);   // "52" (number coerced to string)
console.log(true + 1);  // 2  (true → 1)
console.log(false + 1); // 1  (false → 0)
console.log(null + 5);  // 5  (null → 0)

// --- Unary + operator ---
let x = +"99";
console.log("Unary + :", x, typeof x); // 99 number
