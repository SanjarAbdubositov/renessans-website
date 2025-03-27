const questions = [
    { question: "5 + 4 =", options: ["8", "9", "10"], answer: "9" },
    { question: "12 - 3 =", options: ["8", "9", "10"], answer: "9" },
    { question: "2 × 3 =", options: ["5", "6", "7"], answer: "6" },
    { question: "8 ÷ 2 =", options: ["3", "4", "5"], answer: "4" },
    { question: "Murodning 5 ta olmasi bor edi. U 3 tasini akasiga berdi. Endi uning nechta olmasi qoldi?", options: ["1", "2", "3"], answer: "2" },
    { question: "7 + 6 =", options: ["12", "13", "14"], answer: "13" },
    { question: "9 - 5 =", options: ["3", "4", "5"], answer: "4" },
    { question: "2 × 6 =", options: ["10", "12", "14"], answer: "12" },
    { question: "Bir do‘konda 20 ta non bor edi. 6 tasi sotildi. Endi nechta non qoldi?", options: ["12", "14", "15"], answer: "14" },
    { question: "10 - 7 =", options: ["2", "3", "4"], answer: "3" },
    { question: "4 × 5 =", options: ["15", "20", "25"], answer: "20" },
    { question: "Ali 3 ta quti oldi. Har bir qutida 5 ta konfet bor. Jami nechta konfet bo‘ladi?", options: ["12", "15", "18"], answer: "15" },
    { question: "11 + 9 =", options: ["19", "20", "21"], answer: "20" },
    { question: "14 - 6 =", options: ["6", "7", "8"], answer: "8" },
    { question: "O‘g‘il bolalar 8 ta, qiz bolalar esa 5 ta. Sinfda jami nechta bola bor?", options: ["12", "13", "14"], answer: "13" },
    { question: "25 ÷ 5 =", options: ["4", "5", "6"], answer: "5" },
    { question: "9 + 8 =", options: ["16", "17", "18"], answer: "17" },
    { question: "Sardor 4 ta qalam sotib oldi. Har bir qalam 3 ming so‘m. Jami qancha pul to‘laydi?", options: ["10 ming", "12 ming", "14 ming"], answer: "12 ming" },
    { question: "2 × 9 =", options: ["16", "17", "18"], answer: "18" },
    { question: "Anvar 30 ta sharlardan 6 tasini uchirib yubordi. Unga nechta shar qoldi?", options: ["22", "24", "26"], answer: "24" },
    { question: "50 ÷ 10 =", options: ["4", "5", "6"], answer: "5" },
    { question: "8 + 6 =", options: ["13", "14", "15"], answer: "14" },
    { question: "Dadam 40 ming so‘m berdi. Oyim esa 15 ming so‘m qo‘shib berdi. Endi nechta pul bor?", options: ["50 ming", "55 ming", "60 ming"], answer: "55 ming" },
    { question: "5 × 6 =", options: ["25", "30", "35"], answer: "30" },
    { question: "40 ÷ 8 =", options: ["4", "5", "6"], answer: "5" },
    { question: "15 + 7 =", options: ["21", "22", "23"], answer: "22" },
    { question: "Dildoraning 9 ta kitobi bor edi. U 3 tasini dugonasiga berdi. Endi uning nechta kitobi bor?", options: ["5", "6", "7"], answer: "6" },
    { question: "6 × 7 =", options: ["40", "41", "42"], answer: "42" },
    { question: "Onam bozordan 8 kg olma sotib oldi. 3 kg olmani qo‘shnimizga berdi. Endi nechta olma qoldi?", options: ["4 kg", "5 kg", "6 kg"], answer: "5 kg" }
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
