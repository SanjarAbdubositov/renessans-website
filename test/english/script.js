const questions = [
    { question: "Carl's very .... . He's never late, and he never forgets to do things.", options: ["reliable", "patient", "strict"], answer: "reliable" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus"], answer: "Mars" },
    { question: "What is the capital of France?", options: ["Paris", "London", "Rome"], answer: "Paris" },
    { question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific"], answer: "Pacific" },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Tolstoy", "Hemingway"], answer: "Shakespeare" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2"], answer: "H2O" },
    { question: "Which continent has the most countries?", options: ["Africa", "Asia", "Europe"], answer: "Africa" },
    { question: "Which is the smallest prime number?", options: ["1", "2", "3"], answer: "2" },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: "Carbon Dioxide" }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
const totalQuestions = 10; // 30 ta o'rniga hozircha 10 ta

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        showResult();
        return;
    }

    let q = questions[currentQuestionIndex];
    questionEl.innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(btn, option);
        optionsEl.appendChild(btn);
    });

    resultEl.innerText = "";
}

function checkAnswer(button, selectedOption) {
    let correctOption = questions[currentQuestionIndex].answer;
    
    if (selectedOption === correctOption) {
        button.classList.add("correct");
        correctAnswers++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll("#options button").forEach(btn => btn.disabled = true);
}

function showResult() {
    questionEl.innerText = "Viktorina yakunlandi!";
    optionsEl.innerHTML = `<h3>Siz ${totalQuestions} tadan ${correctAnswers} ta to'g'ri topdingiz.</h3>`;
    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
});

loadQuestion();
