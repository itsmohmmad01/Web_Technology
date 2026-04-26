// Experiment 3 — Arrow Functions, Switch, Truthy/Falsy, Ternary, Loops, Map & Filter

// ════════════════════════════════════════════════
// 1. Arrow Function — 2 Examples
// ════════════════════════════════════════════════
console.log("=== 1. Arrow Functions ===");

// Example A: Single expression (implicit return)
const square = n => n * n;
console.log("square(7):", square(7)); // 49

// Example B: Multi-line with body
const describeTemp = temp => {
  if (temp > 35)  return "🔥 Very Hot";
  if (temp > 25)  return "☀️  Warm";
  if (temp > 15)  return "🌤  Pleasant";
  return "❄️  Cold";
};
console.log("30°C →", describeTemp(30)); // Warm
console.log("10°C →", describeTemp(10)); // Cold
console.log();


// ════════════════════════════════════════════════
// 2. Switch Case
// ════════════════════════════════════════════════
console.log("=== 2. Switch Case ===");

function getDayName(dayNum) {
  switch (dayNum) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid day number";
  }
}

for (let i = 1; i <= 7; i++) {
  console.log(`Day ${i}: ${getDayName(i)}`);
}

// Switch with fall-through
function isWeekend(day) {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return true;
    default:
      return false;
  }
}
console.log("Saturday is weekend:", isWeekend("Saturday")); // true
console.log("Monday is weekend  :", isWeekend("Monday"));   // false
console.log();


// ════════════════════════════════════════════════
// 3. Truthy and Falsy Values
// ════════════════════════════════════════════════
console.log("=== 3. Truthy and Falsy ===");

// FALSY values in JS: false, 0, -0, 0n, "", '', ``, null, undefined, NaN
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("Falsy values:");
falsyValues.forEach(v => console.log(`  ${String(v).padEnd(12)} → Boolean: ${Boolean(v)}`));

// TRUTHY: everything else
const truthyValues = [true, 1, -1, "hello", [], {}, Infinity];
console.log("\nTruthy values:");
truthyValues.forEach(v => console.log(`  ${String(v).padEnd(12)} → Boolean: ${Boolean(v)}`));

// Practical use
const username = "";
console.log("\nusername || 'Guest':", username || "Guest"); // Guest (falsy → use default)

const count = 0;
console.log("count ?? 'No data':", count ?? "No data"); // 0 (nullish coalescence, only null/undefined)
console.log();


// ════════════════════════════════════════════════
// 4. Ternary Operator
// ════════════════════════════════════════════════
console.log("=== 4. Ternary Operator ===");

// condition ? valueIfTrue : valueIfFalse
const age  = 17;
const access = age >= 18 ? "✅ Access granted" : "❌ Must be 18+";
console.log(access);

const score = 85;
const grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
console.log(`Score ${score} → Grade: ${grade}`);

// Ternary in template literal
const items = 1;
console.log(`You have ${items} item${items !== 1 ? "s" : ""} in your cart.`);
console.log();


// ════════════════════════════════════════════════
// 5. Loops in JavaScript
// ════════════════════════════════════════════════
console.log("=== 5. Loops ===");

// for loop
process.stdout.write("for      : ");
for (let i = 1; i <= 5; i++) process.stdout.write(i + " ");
console.log();

// while loop
process.stdout.write("while    : ");
let w = 1;
while (w <= 5) { process.stdout.write(w++ + " "); }
console.log();

// do…while
process.stdout.write("do-while : ");
let d = 1;
do { process.stdout.write(d++ + " "); } while (d <= 5);
console.log();

// for…of (arrays)
const colors = ["red", "green", "blue"];
process.stdout.write("for..of  : ");
for (const c of colors) process.stdout.write(c + " ");
console.log();

// for…in (objects)
const obj = { a: 1, b: 2, c: 3 };
process.stdout.write("for..in  : ");
for (const key in obj) process.stdout.write(`${key}:${obj[key]} `);
console.log();

// break & continue
console.log("break at 4 :", [1,2,3,4,5].filter((_, i) => { return i < 3; }));
console.log("skip even  :", Array.from({length:10},(_,i)=>i+1).filter(n=>n%2!==0));
console.log();


// ════════════════════════════════════════════════
// 6. Map and Filter in JavaScript
// ════════════════════════════════════════════════
console.log("=== 6. Map and Filter ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map — transforms each element, returns new array of SAME length
const doubled   = numbers.map(n => n * 2);
const squared   = numbers.map(n => n ** 2);
const asStrings = numbers.map(n => `num_${n}`);
console.log("map (double)  :", doubled);
console.log("map (square)  :", squared);
console.log("map (strings) :", asStrings);

// filter — keeps elements that pass the test, returns SHORTER array
const evens     = numbers.filter(n => n % 2 === 0);
const greaterThan5 = numbers.filter(n => n > 5);
console.log("\nfilter (evens)  :", evens);
console.log("filter (> 5)    :", greaterThan5);

// Chaining map + filter
const result = numbers
  .filter(n => n % 2 === 0)   // keep even: [2,4,6,8,10]
  .map(n => n * n);             // square them: [4,16,36,64,100]
console.log("\nfilter evens then square:", result);

// Real-world example
const products = [
  { name: "Laptop", price: 50000, inStock: true  },
  { name: "Phone",  price: 20000, inStock: false },
  { name: "Tablet", price: 30000, inStock: true  },
  { name: "Watch",  price: 8000,  inStock: true  },
];

const affordableInStock = products
  .filter(p => p.inStock && p.price <= 35000)
  .map(p => `${p.name} (₹${p.price.toLocaleString()})`);

console.log("\nAffordable in-stock products:", affordableInStock);
