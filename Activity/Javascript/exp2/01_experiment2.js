// Experiment 2 — Arrays, Functions, Objects & Algorithms

// ════════════════════════════════════════════════
// 1. Array, Function, Object — Declare and Print
// ════════════════════════════════════════════════
console.log("=== 1. Array / Function / Object ===");

const fruits = ["apple", "banana", "cherry"];
console.log("Array:", fruits);

function greet(name) { return `Hello, ${name}!`; }
console.log("Function:", greet("World"));

const person = { name: "Alice", age: 25, city: "Mumbai" };
console.log("Object:", person);
console.log();


// ════════════════════════════════════════════════
// 2. Reverse a Number
// ════════════════════════════════════════════════
function reverseNumber(n) {
  const reversed = parseInt(String(Math.abs(n)).split("").reverse().join(""));
  return n < 0 ? -reversed : reversed;
}
console.log("=== 2. Reverse Number ===");
console.log(reverseNumber(12345));   // 54321
console.log(reverseNumber(-9870));   // -789
console.log(reverseNumber(1000));    // 1
console.log();


// ════════════════════════════════════════════════
// 3. Check Whether String is Palindrome
// ════════════════════════════════════════════════
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
console.log("=== 3. Palindrome Check ===");
console.log(`"racecar" → ${isPalindrome("racecar")}`);     // true
console.log(`"hello"   → ${isPalindrome("hello")}`);       // false
console.log(`"A man a plan a canal Panama" → ${isPalindrome("A man a plan a canal Panama")}`); // true
console.log();


// ════════════════════════════════════════════════
// 4. Fibonacci Series
// ════════════════════════════════════════════════
function fibonacci(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n);
}
console.log("=== 4. Fibonacci Series ===");
console.log("First 10:", fibonacci(10));
console.log();


// ════════════════════════════════════════════════
// 5. Count Vowels in String
// ════════════════════════════════════════════════
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log("=== 5. Count Vowels ===");
console.log(`"Hello World" → ${countVowels("Hello World")} vowels`);         // 3
console.log(`"JavaScript"  → ${countVowels("JavaScript")} vowels`);          // 3
console.log(`"rhythms"     → ${countVowels("rhythms")} vowels`);             // 0
console.log();


// ════════════════════════════════════════════════
// 6. Find Largest Element in Array
// ════════════════════════════════════════════════
function findLargest(arr) {
  return Math.max(...arr);
}
console.log("=== 6. Largest Element ===");
console.log([3, 7, 1, 9, 4, 6], "→ Largest:", findLargest([3, 7, 1, 9, 4, 6])); // 9
console.log();


// ════════════════════════════════════════════════
// 7. Remove Duplicates from Array
// ════════════════════════════════════════════════
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("=== 7. Remove Duplicates ===");
const dup = [1, 2, 2, 3, 4, 4, 5, 1];
console.log("Original:", dup);
console.log("Unique  :", removeDuplicates(dup));
console.log();


// ════════════════════════════════════════════════
// 8. Find Missing Number in Array (1 to n)
// ════════════════════════════════════════════════
function findMissing(arr, n) {
  const expected = (n * (n + 1)) / 2;
  const actual   = arr.reduce((a, b) => a + b, 0);
  return expected - actual;
}
console.log("=== 8. Find Missing Number ===");
const arrMissing = [1, 2, 3, 5, 6, 7, 8, 9, 10]; // missing 4 from 1–10
console.log("Array:", arrMissing);
console.log("Missing number:", findMissing(arrMissing, 10)); // 4
console.log();


// ════════════════════════════════════════════════
// 9. Function to Find Even or Odd
// ════════════════════════════════════════════════
const isEvenOrOdd = n => (n % 2 === 0 ? "Even" : "Odd");
console.log("=== 9. Even or Odd (function) ===");
[1, 2, 3, 100, 77].forEach(n => console.log(`${n} → ${isEvenOrOdd(n)}`));
console.log();


// ════════════════════════════════════════════════
// 10. Sum of Array
// ════════════════════════════════════════════════
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log("=== 10. Sum of Array ===");
const nums = [10, 20, 30, 40, 50];
console.log("Array:", nums);
console.log("Sum  :", sumArray(nums)); // 150
