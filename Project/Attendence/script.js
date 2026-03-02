let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let nameInput = document.getElementById("studentName");
    let name = nameInput.value.trim();

    if (name === "") {
        alert("Enter student name");
        return;
    }

    students.push({ name: name, present: false });
    nameInput.value = "";
    saveData();
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    let presentCount = 0;

    students.forEach((student, index) => {
        let row = table.insertRow();

        row.insertCell(0).innerText = student.name;

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = student.present;

        checkbox.onchange = function () {
            students[index].present = this.checked;
            saveData();
            displayStudents();
        };

        row.insertCell(1).appendChild(checkbox);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "deleteBtn";

        deleteBtn.onclick = function () {
            students.splice(index, 1);
            saveData();
            displayStudents();
        };

        row.insertCell(2).appendChild(deleteBtn);

        if (student.present) presentCount++;
    });

    let percentage = students.length === 0
        ? 0
        : ((presentCount / students.length) * 100).toFixed(1);

    document.getElementById("percentage").innerText = percentage + "%";
}

displayStudents();