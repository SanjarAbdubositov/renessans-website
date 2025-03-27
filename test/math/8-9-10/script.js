const questions = [
    { question: "2x + 5 = 15. X ni toping.", options: ["3", "5", "10"], answer: "5" },
    { question: "log<sub>3</sub>27 = ?", options: ["1", "2", "3"], answer: "3" },
    { question: "Kvadrat tenglama: x² - 5x + 6 = 0. Ildizlari qaysi?", options: ["2 va 3", "1 va 6", "3 va 4"], answer: "2 va 3" },
    { question: "Sonning kvadrat ildizi 7 ga teng bo‘lsa, o‘sha son nechaga teng?", options: ["14", "49", "64"], answer: "49" },
    { question: "10 ning 60% qismi nechaga teng?", options: ["4", "5", "6"], answer: "6" },
    { question: "Arifmetik progressiya: 2, 5, 8, 11, ... Uning 10-hadini toping.", options: ["29", "30", "31"], answer: "29" },
    { question: "2 ning 8-darajasi nechaga teng?", options: ["128", "256", "512"], answer: "256" },
    { question: "log<sub>2</sub>16 = ?", options: ["2", "3", "4"], answer: "4" },
    { question: "x² = 25 tenglamaning ildizlari qaysi?", options: ["±3", "±5", "±7"], answer: "±5" },
    { question: "2x - 3 = 7. X ni toping.", options: ["4", "5", "6"], answer: "5" },
    { question: "16 ning kvadrat ildizi nechaga teng?", options: ["2", "4", "8"], answer: "4" },
    { question: "log<sub>5</sub>125 = ?", options: ["1", "2", "3"], answer: "3" },
    { question: "Foiz hisoblash: 200 ning 25% qismi nechaga teng?", options: ["50", "60", "70"], answer: "50" },
    { question: "log<sub>10</sub>1000 = ?", options: ["2", "3", "4"], answer: "3" },
    { question: "2, 4, 8, 16, ... Geometrik progressiyaning 6-hadini toping.", options: ["32", "64", "128"], answer: "64" },
    { question: "Sonlar nazariyasi: 30 va 45 ning EKUB (Eng Katta Umumiy Bo‘luvchi) nechaga teng?", options: ["5", "10", "15"], answer: "15" },
    { question: "1 litr suvning 40% bug‘lanib ketdi. Necha litr suv qoldi?", options: ["0.4 L", "0.6 L", "0.8 L"], answer: "0.6 L" },
    
    // **Trigonometriya bo‘limi (4 ta savol)**
    { question: "sin 30° ning qiymati nechaga teng?", options: ["0.5", "√2/2", "1"], answer: "0.5" },
    { question: "cos 60° ning qiymati nechaga teng?", options: ["0.5", "√3/2", "1"], answer: "0.5" },
    { question: "tan 45° ning qiymati nechaga teng?", options: ["1", "0", "∞"], answer: "1" },
    { question: "sin²x + cos²x = ?", options: ["0", "1", "2"], answer: "1" },
    
    // **Qo‘shimcha algebra va matematik mantiq savollari**
    { question: "x + 2 = 3. X ni toping.", options: ["0", "1", "2"], answer: "1" },
    { question: "100 ning 10% i nechaga teng?", options: ["5", "10", "20"], answer: "10" },
    { question: "log<sub>4</sub>64 =", options: ["2", "3", "4"], answer: "3" },
    { question: "x³ = 8. X ni toping.", options: ["1", "2", "3"], answer: "2" },
    { question: "25 ning kvadrat ildizi nechaga teng?", options: ["4", "5", "6"], answer: "5" },
    { question: "2x + 3 = 11. X ni toping.", options: ["3", "4", "5"], answer: "4" },
    { question: "log<sub>7</sub>49 = ?", options: ["1", "2", "3"], answer: "2" },
    { question: "Tenglamani yeching: x² - 16 = 0", options: ["±4", "±5", "±6"], answer: "±4" }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
const totalQuestions = 30;

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
    questionEl.innerHTML = `<span class="green">${currentQuestionIndex + 1}.</span> ${q.question}`;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerHTML = option;
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
    questionEl.innerText = "Test tugadi!";
    optionsEl.innerHTML = `<h3>Siz <span class="green">${totalQuestions}</span> tadan <span class="green">${correctAnswers}</span> ta to'g'ri topdingiz.</h3>`;
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
