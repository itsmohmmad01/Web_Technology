// Function Activity 2 — String Methods Study

const str = "  Hello, JavaScript World!  ";

// ── Length ───────────────────────────────────────────────────
console.log("length:", str.length);

// ── Case ─────────────────────────────────────────────────────
console.log("toUpperCase:", str.toUpperCase());
console.log("toLowerCase:", str.toLowerCase());

// ── Trim ─────────────────────────────────────────────────────
console.log("trim()    :", `"${str.trim()}"`);
console.log("trimStart:", `"${str.trimStart()}"`);
console.log("trimEnd  :", `"${str.trimEnd()}"`);

// ── Search / Find ────────────────────────────────────────────
console.log("\nincludes('JavaScript'):", str.includes("JavaScript")); // true
console.log("startsWith('  Hello') :", str.startsWith("  Hello"));   // true
console.log("endsWith('!  ')       :", str.endsWith("!  "));          // true

console.log("indexOf('o')          :", str.indexOf("o"));             // 5
console.log("lastIndexOf('o')      :", str.lastIndexOf("o"));         // 22

// ── Slice / Substring ────────────────────────────────────────
console.log("\nslice(2, 7)       :", str.slice(2, 7));       // "Hello"
console.log("slice(-6)         :", str.slice(-6));            // "orld!  "
console.log("substring(2, 7)   :", str.substring(2, 7));     // "Hello"

// ── Replace ──────────────────────────────────────────────────
console.log("\nreplace:", str.replace("JavaScript", "JS"));
console.log("replaceAll:", "aabbaa".replaceAll("a", "X"));   // "XXbbXX"

// ── Split ────────────────────────────────────────────────────
const csv = "apple,banana,cherry,mango";
const arr = csv.split(",");
console.log("\nsplit(','):", arr);
console.log("join(' | '):", arr.join(" | "));

// ── Pad ──────────────────────────────────────────────────────
const id = "42";
console.log("\npadStart:", id.padStart(6, "0")); // "000042"
console.log("padEnd  :", id.padEnd(6, "-"));     // "42----"

// ── Repeat ───────────────────────────────────────────────────
console.log("repeat:", "ha".repeat(3)); // "hahaha"

// ── charAt / charCodeAt / at ─────────────────────────────────
const s = "Hello";
console.log("\ncharAt(1)    :", s.charAt(1));        // e
console.log("charCodeAt(0):", s.charCodeAt(0));      // 72 (H)
console.log("at(-1)       :", s.at(-1));             // o  (last char)

// ── String.fromCharCode ──────────────────────────────────────
console.log("fromCharCode(65):", String.fromCharCode(65)); // A

// ── match / matchAll ─────────────────────────────────────────
const sentence = "The price is $10 and $25";
const matches = sentence.match(/\$\d+/g);
console.log("\nmatches ($prices):", matches); // ["$10", "$25"]

// ── Template Literal (reminder) ──────────────────────────────
const name = "World";
const score = 99;
console.log(`\nTemplate: Hello ${name}, score = ${score * 2}`);
