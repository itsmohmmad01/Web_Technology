const questions = [
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        answer: 1
    },
    {
        question: "Which HTML tag is used for JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const options = document.getElementsByName("option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    document.getElementById("opt0").textContent = q.options[0];
    document.getElementById("opt1").textContent = q.options[1];
    document.getElementById("opt2").textContent = q.options[2];
    document.getElementById("opt3").textContent = q.options[3];

    // Uncheck previous selection
    options.forEach(opt => opt.checked = false);
}

function getSelectedOption() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            return parseInt(options[i].value);
        }
    }
    return null;
}

nextBtn.addEventListener("click", function () {
    const selected = getSelectedOption();

    if (selected === null) {
        console.log("❌ Please select an answer");
        return;
    }

    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        console.log("✅ Quiz Finished!");
        console.log("🎯 Your Score:", score, "/", questions.length);
        document.getElementById("quizContainer").innerHTML = "<h3>Quiz Completed! Check console for score.</h3>";
    }
});

loadQuestion();