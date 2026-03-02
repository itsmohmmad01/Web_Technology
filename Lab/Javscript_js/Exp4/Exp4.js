const form = document.getElementById("studentForm");

form.onsubmit = function (e) {
  e.preventDefault();

  const studentName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (studentName === "" || email === "" || password === "") {
    alert("Please fill all fields");
    console.error("Form not submitted: empty fields");
    return;
  }

  console.log("Student Registered");
  console.log("Name:", studentName);
  console.log("Email:", email);
  console.log("Password:", password);

  alert("Registration Successful!");

  form.reset();
};
