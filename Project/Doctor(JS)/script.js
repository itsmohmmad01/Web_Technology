let bookedSlots = JSON.parse(localStorage.getItem("appointments")) || {};

const doctorSlots = {
    dr1: ["10 AM", "11 AM", "12 PM"],
    dr2: ["1 PM", "2 PM", "3 PM"],
    dr3: ["4 PM", "5 PM", "6 PM"]
};

function showTab(tab) {
    document.getElementById("booking").style.display = "none";
    document.getElementById("list").style.display = "none";

    document.getElementById(tab).style.display = "block";

    // Active tab UI
    let buttons = document.querySelectorAll(".tabs button");
    buttons.forEach(btn => btn.classList.remove("active"));

    if (tab === "booking") buttons[0].classList.add("active");
    else buttons[1].classList.add("active");

    if (tab === "list") displayAppointments();
}

function loadSlots() {
    let doctor = document.getElementById("doctor").value;
    let slotSelect = document.getElementById("slots");

    slotSelect.innerHTML = "";

    if (!doctor) return;

    doctorSlots[doctor].forEach(slot => {
        let option = document.createElement("option");

        if (bookedSlots[doctor]?.some(s => s.slot === slot)) {
            option.text = slot + " (Booked)";
            option.disabled = true;
        } else {
            option.text = slot;
        }

        slotSelect.add(option);
    });
}

function bookAppointment() {
    let doctor = document.getElementById("doctor").value;
    let slot = document.getElementById("slots").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (!doctor || !slot || !name || !age) {
        alert("Fill all fields!");
        return;
    }

    if (!bookedSlots[doctor]) bookedSlots[doctor] = [];

    bookedSlots[doctor].push({
        name,
        age,
        slot,
        status: "waiting",
        date: new Date().toLocaleString()
    });

    localStorage.setItem("appointments", JSON.stringify(bookedSlots));

    alert("Appointment Booked!");
    loadSlots();
}

function displayAppointments() {
    let container = document.getElementById("appointmentsList");
    container.innerHTML = "";

    let total = 0, waiting = 0, treatment = 0, completed = 0;

    for (let doctor in bookedSlots) {
        bookedSlots[doctor].forEach((app, index) => {

            total++;

            if (app.status === "waiting") waiting++;
            if (app.status === "treatment") treatment++;
            if (app.status === "completed") completed++;

            let div = document.createElement("div");
            div.className = "appointment";

            div.innerHTML = `
                <p><b>${app.name}</b> (${app.age})</p>
                <p>Doctor: ${doctor}</p>
                <p>Slot: ${app.slot}</p>
                <p class="${app.status}">Status: ${app.status}</p>

                <button onclick="updateStatus('${doctor}', ${index})">Next</button>
                <button onclick="removePatient('${doctor}', ${index})">Remove</button>
            `;

            container.appendChild(div);
        });
    }

    // Update dashboard
    document.getElementById("totalCount").innerText = total;
    document.getElementById("waitingCount").innerText = waiting;
    document.getElementById("treatmentCount").innerText = treatment;
    document.getElementById("completedCount").innerText = completed;
}

// Status update
function updateStatus(doc, index) {
    let status = bookedSlots[doc][index].status;

    if (status === "waiting") bookedSlots[doc][index].status = "treatment";
    else if (status === "treatment") bookedSlots[doc][index].status = "completed";

    localStorage.setItem("appointments", JSON.stringify(bookedSlots));
    displayAppointments();
}

// Remove patient
function removePatient(doc, index) {
    bookedSlots[doc].splice(index, 1);

    localStorage.setItem("appointments", JSON.stringify(bookedSlots));
    displayAppointments();
}

// 🔍 Search Function
function searchPatient() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("appointment");

    Array.from(cards).forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}