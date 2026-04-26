// Async Await — Blocking vs Non-Blocking (2 Examples)

// ════════════════════════════════════════════════
// EXAMPLE 1 — BLOCKING (Synchronous)
// ════════════════════════════════════════════════
// Blocking means each line waits for the previous to finish.
// The entire program halts until a task is done.

function syncDelay(ms) {
  // Simulates a blocking operation by spinning the CPU
  const start = Date.now();
  while (Date.now() - start < ms) { /* busy-wait */ }
}

console.log("=== BLOCKING EXAMPLE ===");
console.log("[1] Task A started");
syncDelay(1000); // Everything STOPS for 1 second
console.log("[2] Task A finished (after 1 second block)");
console.log("[3] Task B started");
syncDelay(500);
console.log("[4] Task B finished (after 0.5 second block)");
console.log("[5] Both done — total ~1.5 seconds\n");

// Output order is strictly sequential.
// Real-world: reading a huge file synchronously blocks the server
//             from handling any other requests.


// ════════════════════════════════════════════════
// EXAMPLE 2 — NON-BLOCKING (Asynchronous with async/await)
// ════════════════════════════════════════════════
// Non-blocking means tasks are started and the program
// continues without waiting. Results are handled when ready.

function asyncDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runNonBlocking() {
  console.log("=== NON-BLOCKING EXAMPLE ===");
  console.log("[1] Task A started");

  // Instead of blocking, we await — the runtime is free to do other work
  await asyncDelay(1000);
  console.log("[2] Task A finished");

  console.log("[3] Task B started");
  await asyncDelay(500);
  console.log("[4] Task B finished");

  console.log("[5] Both done — sequentially but NON-blocking\n");
}

// ════════════════════════════════════════════════
// BONUS — Running both in PARALLEL (Promise.all)
// ════════════════════════════════════════════════
async function runParallel() {
  console.log("=== PARALLEL NON-BLOCKING ===");
  const start = Date.now();

  console.log("Starting Task A and Task B simultaneously...");
  await Promise.all([
    asyncDelay(1000).then(() => console.log("  Task A done")),
    asyncDelay(1000).then(() => console.log("  Task B done")),
  ]);

  console.log(`Both finished in ~${Date.now() - start}ms (not ~2000ms!)\n`);
}

async function main() {
  await runNonBlocking();
  await runParallel();
}

main();

/*
  KEY DIFFERENCE:
  ┌─────────────┬──────────────────────────────────────────────────────┐
  │             │ Blocking               │ Non-Blocking                │
  ├─────────────┼────────────────────────┼─────────────────────────────┤
  │ Thread      │ Thread is frozen       │ Thread remains free          │
  │ CPU         │ Wasted (busy-wait)     │ Free for other tasks         │
  │ Performance │ Poor under load        │ Scales well                  │
  │ Code style  │ Simple sequential      │ async/await or callbacks     │
  │ Example     │ fs.readFileSync()      │ fs.readFile() / fetch()      │
  └─────────────┴────────────────────────┴─────────────────────────────┘
*/
