const questions = [
    { question: "log<sub>2</sub>32 = ?", options: ["4", "5", "6"], answer: "5" },
    { question: "log<sub>5</sub>125 =", options: ["2", "3", "4"], answer: "3" },
    { question: "log<sub>3</sub>81 =", options: ["2", "3", "4"], answer: "4" },
    { question: "log<sub>7</sub>49 =", options: ["1", "2", "3"], answer: "2" },
    { question: "log<sub>10</sub>1000 =", options: ["1", "2", "3"], answer: "3" },
    { question: "Tengsizlikni yeching: 2x - 5 > 7", options: ["x > 5", "x > 6", "x > 7"], answer: "x > 6" },
    { question: "Tengsizlikni yeching: 3x + 2 ≤ 11", options: ["x ≤ 3", "x ≤ 5", "x ≤ 6"], answer: "x ≤ 3" },
    { question: "|x - 3| = 5 bo‘lsa, x ning qiymatlari?", options: ["8 yoki -2", "5 yoki -5", "6 yoki 0"], answer: "8 yoki -2" },
    { question: "Tengsizlik: 4x - 7 < 9 ni yeching.", options: ["x < 4", "x < 5", "x < 6"], answer: "x < 4" },
    { question: "Tengsizlik: -2x + 3 > 7 ni yeching.", options: ["x < -2", "x > -2", "x > 2"], answer: "x < -2" },
    { question: "sin 60° ning qiymati nechaga teng?", options: ["0.5", "√3/2", "1"], answer: "√3/2" },
    { question: "cos 45° ning qiymati nechaga teng?", options: ["√2/2", "1", "0.5"], answer: "√2/2" },
    { question: "tg 30° ning qiymati nechaga teng?", options: ["1", "√3/3", "0"], answer: "√3/3" },
    { question: "cos²x + sin²x =", options: ["0", "1", "2"], answer: "1" },
    { question: "cot 45° ning qiymati nechaga teng?", options: ["1", "√2", "0"], answer: "1" },
    { question: "sin²30° + cos²30° =", options: ["1", "0.5", "2"], answer: "1" },
    { question: "tg 45° ning qiymati nechaga teng?", options: ["1", "0", "√2"], answer: "1" },
    { question: "sin 90° ning qiymati nechaga teng?", options: ["1", "0", "-1"], answer: "1" },
    { question: "cos 0° ning qiymati nechaga teng?", options: ["0", "1", "-1"], answer: "1" },
    { question: "sin 30° ning qiymati nechaga teng?", options: ["0.5", "√3/2", "1"], answer: "0.5" },
    { question: "Arifmetik progressiya: 3, 7, 11, ... Uning 10-hadini toping.", options: ["35", "39", "43"], answer: "39" },
    { question: "Sonlar nazariyasi: 40 va 60 ning EKUB nechaga teng?", options: ["10", "20", "30"], answer: "20" },
    { question: "√(81) - √(25) =", options: ["4", "6", "2"], answer: "4" },
    { question: "x² - 9 = 0 tenglamaning ildizlari?", options: ["±3", "±9", "±6"], answer: "±3" },
    { question: "Agar 5 ta do‘stdan 3 tasini tanlash necha xil usulda bo‘lishi mumkin?", options: ["5", "10", "20"], answer: "10" }
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
    questionEl.innerText = "Test yakunlandi!";
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
