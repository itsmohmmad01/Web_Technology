// Array Activity — split() splice() slice() toSpliced()

// ════════════════════════════════════════════════
// 1. split()  →  String method, returns an array
// ════════════════════════════════════════════════
const sentence = "apple,banana,cherry,mango,orange";

const fruits = sentence.split(",");
console.log("split(','):", fruits);
// ['apple', 'banana', 'cherry', 'mango', 'orange']

const words = "Hello World".split(" ");
console.log("split(' '):", words); // ['Hello', 'World']

const chars = "hello".split("");
console.log("split(''):", chars); // ['h','e','l','l','o']

const limited = sentence.split(",", 3);
console.log("split(',', 3):", limited); // ['apple','banana','cherry']

// ════════════════════════════════════════════════
// 2. slice()  →  Array/String method, NON-mutating
// ════════════════════════════════════════════════
const nums = [10, 20, 30, 40, 50, 60];

console.log("\nOriginal:", nums);
console.log("slice(1, 4) :", nums.slice(1, 4)); // [20, 30, 40]
console.log("slice(2)    :", nums.slice(2));     // [30, 40, 50, 60]
console.log("slice(-2)   :", nums.slice(-2));    // [50, 60]
console.log("slice(1,-1) :", nums.slice(1, -1)); // [20, 30, 40, 50]
console.log("Original unchanged:", nums);        // still [10,20,30,40,50,60]

// ════════════════════════════════════════════════
// 3. splice()  →  Array method, MUTATES the array
// ════════════════════════════════════════════════
//  array.splice(startIndex, deleteCount, ...itemsToInsert)

let colors = ["red", "green", "blue", "yellow", "purple"];

// Remove 2 elements starting at index 1
const removed = colors.splice(1, 2);
console.log("\nAfter splice(1,2) — removed:", removed);      // ['green','blue']
console.log("colors now:", colors);                           // ['red','yellow','purple']

// Insert elements without removing
colors.splice(1, 0, "pink", "cyan");
console.log("After splice(1,0,'pink','cyan'):", colors);
// ['red','pink','cyan','yellow','purple']

// Replace elements (remove 1, insert 2)
colors.splice(2, 1, "white", "black");
console.log("After splice(2,1,'white','black'):", colors);

// ════════════════════════════════════════════════
// 4. toSpliced()  →  ES2023, NON-mutating version of splice
// ════════════════════════════════════════════════
const animals = ["cat", "dog", "fish", "bird"];
console.log("\nOriginal animals:", animals);

const newAnimals = animals.toSpliced(1, 1, "rabbit", "hamster");
console.log("toSpliced(1,1,'rabbit','hamster'):", newAnimals);
// ['cat','rabbit','hamster','fish','bird']
console.log("animals unchanged:", animals);
// ['cat','dog','fish','bird']

// ── Summary Table ────────────────────────────────
console.log(`
Method       | Works on      | Mutates | Returns
─────────────┼───────────────┼─────────┼─────────────────────────
split()      | String        | No      | New array
slice()      | Array/String  | No      | New array/string (copy)
splice()     | Array         | YES     | Array of removed items
toSpliced()  | Array         | No      | New array (ES2023)
`);
