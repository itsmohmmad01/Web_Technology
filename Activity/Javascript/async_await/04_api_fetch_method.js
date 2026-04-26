// Async Await — API Fetch Method

// ════════════════════════════════════════════════
// Basic fetch with async/await
// ════════════════════════════════════════════════
async function fetchUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json(); // parse JSON body
    return data;
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

// ════════════════════════════════════════════════
// Fetch + display
// ════════════════════════════════════════════════
async function main() {
  console.log("Fetching user with id = 1...");
  const user = await fetchUser(1);
  console.log("Name   :", user.name);
  console.log("Email  :", user.email);
  console.log("Phone  :", user.phone);
  console.log("Website:", user.website);
  console.log("City   :", user.address.city);

  // ── Fetch all users ─────────────────────────────────────
  console.log("\nFetching all users...");
  const res  = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log("Total users:", users.length);
  users.forEach(u => console.log(` - ${u.name} (${u.email})`));

  // ── POST request with fetch ──────────────────────────────
  console.log("\nCreating a new post...");
  const postRes = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method : "POST",
    headers: { "Content-Type": "application/json" },
    body   : JSON.stringify({
      title : "My First Post",
      body  : "This is the post content",
      userId: 1,
    }),
  });
  const newPost = await postRes.json();
  console.log("Created post:", newPost);
}

main();

/*
  FETCH STEP-BY-STEP:
  1. fetch(url)          → returns a Promise<Response>
  2. await response      → we get the Response object
  3. response.ok         → true if status 200–299
  4. response.json()     → returns a Promise<any> (parses JSON body)
  5. await data          → we get the actual JavaScript object/array

  COMMON RESPONSE METHODS:
    response.json()   → parse JSON
    response.text()   → plain text
    response.blob()   → binary (images, files)
    response.status   → HTTP status code (200, 404, 500 ...)
    response.headers  → Headers object
*/
