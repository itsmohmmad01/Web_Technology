// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBIFjdlyYswixC2aA4CZw12eqGn8LirQsI",
  authDomain: "qr-attendance-system-91e6a.firebaseapp.com",
  databaseURL: "https://qr-attendance-system-91e6a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "qr-attendance-system-91e6a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

let currentSubject = "ALL";

function generateQR() {
  let subject = document.getElementById("subject").value;

  let baseUrl = "https://luxury-cascaron-951488.netlify.app";

  let link = `${baseUrl}/student.html?subject=${subject}`;

  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), link);

  console.log("QR Generated:", link);
}

function markAttendance() {
  let name = document.getElementById("name").value.trim();

  let urlParams = new URLSearchParams(window.location.search);
  let subject = urlParams.get("subject") || "Unknown";

  if (!name) {
    alert("⚠️ Please enter your name");
    return;
  }

  db.ref("attendance").push({
    name,
    subject,
    time: new Date().toLocaleString()
  });

  document.getElementById("msg").innerText = "✅ Attendance Marked!";

  document.getElementById("name").value = "";
}


function filterSubject(subject) {
  currentSubject = subject;
  loadAttendance();
}


function loadAttendance() {
  if (!document.getElementById("list")) return;

  db.ref("attendance").off(); 

  db.ref("attendance").on("value", snapshot => {
    let data = snapshot.val();
    let list = document.getElementById("list");

    list.innerHTML = "";

    if (!data) {
      list.innerHTML = "<li>No attendance records found</li>";
      return;
    }

    Object.keys(data).forEach(key => {
      let item = data[key];

      if (currentSubject !== "ALL" && item.subject !== currentSubject) {
        return;
      }

      let li = document.createElement("li");

      li.innerHTML = `
        <span>${item.name} - ${item.subject}</span>
        <button onclick="deleteStudent('${key}')">❌</button>
      `;

      list.appendChild(li);
    });
  });
}

function deleteStudent(id) {
  db.ref("attendance/" + id).remove()
    .then(() => console.log("Deleted:", id));
}

if (document.getElementById("list")) {
  loadAttendance();
}