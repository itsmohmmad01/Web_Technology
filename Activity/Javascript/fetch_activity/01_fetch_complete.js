// Fetch Activity — Full Study

const BASE = "https://jsonplaceholder.typicode.com";

// ════════════════════════════════════════════════
// 1. Understand fetch() code — line by line
// ════════════════════════════════════════════════
async function understandFetch() {
  console.log("=== 1. Fetch — Line by Line ===");

  // Line 1: fetch() sends an HTTP GET request and returns a Promise
  const promise = fetch(`${BASE}/posts/1`);
  // At this point — the request is SENT but not yet resolved

  // Line 2: await pauses execution until the Response arrives
  const response = await promise;
  // response is a Response object — NOT the data yet!

  // Line 3: Check if the request succeeded (status 200–299)
  console.log("ok     :", response.ok);       // true
  console.log("status :", response.status);   // 200
  console.log("url    :", response.url);

  // Line 4: response.json() reads the body and parses it as JSON
  // This also returns a Promise, so we await again
  const data = await response.json();

  // Line 5: Now we have actual data
  console.log("Title  :", data.title);
  console.log("Body   :", data.body.slice(0, 50) + "...\n");
}

// ════════════════════════════════════════════════
// 2. async/await with fetch — with error handling
// ════════════════════════════════════════════════
async function asyncAwaitFetch() {
  console.log("=== 2. async/await + fetch ===");
  try {
    const res  = await fetch(`${BASE}/todos/1`);
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    const todo = await res.json();
    console.log("Todo title    :", todo.title);
    console.log("Completed     :", todo.completed);
  } catch (err) {
    console.error("Error:", err.message);
  }
  console.log();
}

// ════════════════════════════════════════════════
// 3. Fetch users — display names in a list
// ════════════════════════════════════════════════
async function fetchUserNames() {
  console.log("=== 3. Fetch User Names ===");
  const res   = await fetch(`${BASE}/users`);
  const users = await res.json();

  console.log("User Names:");
  users.forEach((u, i) => {
    console.log(`  ${i + 1}. ${u.name}  (${u.username})`);
  });
  console.log();
}

// ════════════════════════════════════════════════
// 4. Fetch posts — show only first 5 results
// ════════════════════════════════════════════════
async function fetchFirst5Posts() {
  console.log("=== 4. Fetch Posts — First 5 Only ===");
  const res   = await fetch(`${BASE}/posts`);
  const posts = await res.json();

  const first5 = posts.slice(0, 5);
  first5.forEach((p, i) => {
    console.log(`  [${i + 1}] ${p.title}`);
  });
  console.log();
}

// ════════════════════════════════════════════════
// 5. Fake Promise — resolve after 3s / reject after 3s
// ════════════════════════════════════════════════
async function fakePromiseExamples() {
  console.log("=== 5. Fake Promise — resolve & reject ===");

  // Fake promise that RESOLVES after 3 seconds
  const resolveAfter3s = new Promise((resolve) => {
    setTimeout(() => {
      resolve("✅ Promise resolved after 3 seconds!");
    }, 3000);
  });

  // Fake promise that REJECTS after 3 seconds
  const rejectAfter3s = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("❌ Promise rejected after 3 seconds!"));
    }, 3000);
  });

  // Await the resolve
  const msg = await resolveAfter3s;
  console.log(msg);

  // Await the reject (must catch)
  try {
    await rejectAfter3s;
  } catch (err) {
    console.log(err.message);
  }
}

// ── Run all ──────────────────────────────────────
async function main() {
  await understandFetch();
  await asyncAwaitFetch();
  await fetchUserNames();
  await fetchFirst5Posts();
  await fakePromiseExamples();
}

main();
