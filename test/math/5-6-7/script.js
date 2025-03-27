const questions = [
    { question: "1/2 + 1/3 =", options: ["5/6", "1/5", "2/3"], answer: "5/6" },
    { question: "3.5 × 2 =", options: ["5", "6", "7"], answer: "7" },
    { question: "16 : 4 =", options: ["3", "4", "5"], answer: "4" },
    { question: "25% ning kasr shakli qanday?", options: ["1/4", "1/5", "1/2"], answer: "1/4" },
    { question: "Bir sonning 20% 60 ga teng. O‘sha sonni toping.", options: ["200", "250", "300"], answer: "300" },
    { question: "X + 7 = 15. X ni toping.", options: ["6", "7", "8"], answer: "8" },
    { question: "3x = 18. X ni toping.", options: ["5", "6", "7"], answer: "6" },
    { question: "Teng yonli uchburchakning asos burchagi 50°. Uchburchakning uchinchi burchagini toping.", options: ["40°", "50°", "80°"], answer: "80°" },
    { question: "6 m² maydonga 24 ta g‘isht joylashtirildi. 1 m² ga nechta g‘isht sig‘adi?", options: ["2", "4", "6"], answer: "4" },
    { question: "12 ning kvadrati nechaga teng?", options: ["124", "144", "164"], answer: "144" },
    { question: "7 ning kubi nechaga teng?", options: ["243", "343", "441"], answer: "343" },
    { question: "Bir to‘g‘ri to‘rtburchakning perimetri 40 sm, uzunligi 12 sm. Uning kengligini toping.", options: ["6", "8", "10"], answer: "8" },
    { question: "Biror sonning 15% 45 ga teng bo‘lsa, u sonni toping.", options: ["250", "275", "300"], answer: "300" },
    { question: "15 + 8 × 2 =", options: ["30", "31", "32"], answer: "31" },
    { question: "2x - 5 = 9. X ni toping.", options: ["6", "7", "8"], answer: "7" },
    { question: "4 ning kvadrati + 3 ning kubi =", options: ["37", "38", "39"], answer: "37" },
    { question: "X/3 = 9. X ni toping.", options: ["25", "26", "27"], answer: "27" },
    { question: "9 ning ⅔ qismi nechaga teng?", options: ["4", "5", "6"], answer: "6" },
    { question: "Geometriyada Pifagor teoremasi qanday shaklda yoziladi?", options: ["a² + b² = c²", "a² - b² = c²", "a² × b² = c²"], answer: "a² + b² = c²" },
    { question: "10 va 15 ning eng katta umumiy bo‘luvchisini (EKUB) toping.", options: ["3", "5", "10"], answer: "5" },
    { question: "18 va 24 ning eng kichik umumiy karralisi (EKUK) nechaga teng?", options: ["54", "72", "90"], answer: "72" },
    { question: "Kvadratning bitta tomoni 5 sm. Uning yuzasini toping.", options: ["10", "20", "25"], answer: "25" },
    { question: "3 m uzunlikdagi simning 75% qismi ishlatildi. Necha metr qoldi?", options: ["0.5 m", "0.75 m", "1.5 m"], answer: "0.75 m" },
    { question: "Bir g‘ildirakning diametri 14 sm. Uning aylana uzunligini toping (π = 3).", options: ["42", "44", "46"], answer: "42" },
    { question: "Bir karra soni 7. Bu sonni toping.", options: ["0", "7", "14"], answer: "7" },
    { question: "0.25 ning teskari sonini toping.", options: ["2", "4", "8"], answer: "4" },
    { question: "10 kg olmaning 30% ini sotib oldik. Necha kg qoldi?", options: ["5", "6", "7"], answer: "7" },
    { question: "14 ning kvadrat ildizi nechaga teng?", options: ["3", "3.7", "3.8"], answer: "3.7" },
    { question: "40% ni kasr shaklida ifodalang.", options: ["2/5", "4/10", "2/10"], answer: "2/5" }
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
