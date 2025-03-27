const questions = [
    { question: "56 + 24 =", options: ["78", "80", "82"], answer: "80" },
    { question: "96 - 47 =", options: ["49", "51", "53"], answer: "49" },
    { question: "8 × 7 =", options: ["54", "56", "58"], answer: "56" },
    { question: "64 ÷ 8 =", options: ["6", "7", "8"], answer: "8" },
    { question: "Bobur 3200 so‘m bor edi. U 1500 so‘mga qalam va daftar oldi. Unda nechta pul qoldi?", options: ["1500", "1700", "1800"], answer: "1700" },
    { question: "145 + 76 =", options: ["219", "221", "223"], answer: "221" },
    { question: "203 - 125 =", options: ["68", "78", "88"], answer: "78" },
    { question: "9 × 9 =", options: ["80", "81", "82"], answer: "81" },
    { question: "Bir bog‘da 96 ta daraxt bor. 36 ta daraxt o‘rib tashlandi. Endi nechta daraxt qoldi?", options: ["58", "60", "62"], answer: "60" },
    { question: "156 - 97 =", options: ["59", "61", "63"], answer: "59" },
    { question: "12 × 6 =", options: ["70", "72", "74"], answer: "72" },
    { question: "Sinfda 28 ta o‘quvchi bor. Ularning 16 tasi o‘g‘il bola. Nechta qiz bola bor?", options: ["10", "12", "14"], answer: "12" },
    { question: "217 + 99 =", options: ["314", "316", "318"], answer: "316" },
    { question: "340 - 190 =", options: ["140", "150", "160"], answer: "150" },
    { question: "Fayzulla 6 ta daftar oldi. Har biri 1200 so‘mdan. U jami qancha to‘ladi?", options: ["7000", "7200", "7400"], answer: "7200" },
    { question: "144 ÷ 12 =", options: ["10", "11", "12"], answer: "12" },
    { question: "87 + 45 =", options: ["130", "132", "134"], answer: "132" },
    { question: "Bolalar 9 ta stulni 3 tadan joylashtirdi. Nechta qator hosil bo‘ldi?", options: ["2", "3", "4"], answer: "3" },
    { question: "18 × 5 =", options: ["85", "90", "95"], answer: "90" },
    { question: "272 - 135 =", options: ["136", "137", "138"], answer: "137" },
    { question: "600 ÷ 20 =", options: ["28", "30", "32"], answer: "30" },
    { question: "45 + 75 =", options: ["118", "120", "122"], answer: "120" },
    { question: "Bir quti qalam 8 ta. 6 ta quti qalam sotib olindi. Jami nechta qalam bo‘ldi?", options: ["46", "48", "50"], answer: "48" },
    { question: "25 × 4 =", options: ["98", "100", "102"], answer: "100" },
    { question: "320 ÷ 8 =", options: ["38", "40", "42"], answer: "40" },
    { question: "98 + 67 =", options: ["163", "165", "167"], answer: "165" },
    { question: "Sardor 10 ta konfet oldi. U 4 tasini ukasiga berdi. Unda nechta konfet qoldi?", options: ["5", "6", "7"], answer: "6" },
    { question: "23 × 3 =", options: ["67", "69", "71"], answer: "69" },
    { question: "Onajon bozorga 25000 so‘mga 5 kg olma oldi. 1 kg olma qancha turadi?", options: ["4800", "5000", "5200"], answer: "5000" }
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
