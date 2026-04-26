// Function Activity 1 — Function Deep Study

// ── 1. Function Declaration ──────────────────────────────────
// Hoisted: can be called before it is defined
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// ── 2. Function Expression ───────────────────────────────────
// NOT hoisted
const add = function (a, b) {
  return a + b;
};
console.log("add(3,4):", add(3, 4));

// ── 3. Arrow Function ────────────────────────────────────────
const multiply = (a, b) => a * b;
console.log("multiply(5,6):", multiply(5, 6));

// ── 4. Default Parameters ────────────────────────────────────
function power(base, exp = 2) {
  return base ** exp;
}
console.log("power(3):", power(3));      // 9
console.log("power(3,3):", power(3, 3)); // 27

// ── 5. Rest Parameters ───────────────────────────────────────
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5)); // 15

// ── 6. Arguments Object (classic functions only) ─────────────
function logArgs() {
  console.log("arguments:", Array.from(arguments));
}
logArgs(10, 20, 30);

// ── 7. Higher-Order Function ─────────────────────────────────
function applyTwice(fn, value) {
  return fn(fn(value));
}
const double = x => x * 2;
console.log("applyTwice(double, 3):", applyTwice(double, 3)); // 12

// ── 8. Closure ───────────────────────────────────────────────
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log("counter():", counter()); // 1
console.log("counter():", counter()); // 2
console.log("counter():", counter()); // 3

// ── 9. IIFE (Immediately Invoked Function Expression) ─────────
const result = (function (x, y) {
  return x + y;
})(10, 20);
console.log("IIFE result:", result); // 30

// ── 10. Recursive Function ───────────────────────────────────
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("factorial(6):", factorial(6)); // 720

// ── 11. Pure vs Impure ───────────────────────────────────────
// Pure: same input → same output, no side effects
const pureAdd = (a, b) => a + b;

// Impure: depends on/modifies external state
let total = 0;
function impureAdd(n) {
  total += n; // side effect
  return total;
}
console.log("impureAdd(5):", impureAdd(5));  // 5
console.log("impureAdd(5):", impureAdd(5));  // 10 (different result!)

// ── 12. Callback Function ────────────────────────────────────
function doMath(a, b, callback) {
  return callback(a, b);
}
console.log("doMath subtract:", doMath(10, 3, (a, b) => a - b)); // 7
