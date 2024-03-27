const questions = [
  {
    question: "Which is larget animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "BlueWhale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Dog", correct: false },
    ],
  },
  {
    question: "Which is smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Arctic", correct: false },
      { text: "Australia", correct: true },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is smallest country in the world?",
    answers: [
      { text: "Vatican city", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "Which is larget desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false0 },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
];

const que = document.getElementById("question");
const ans = document.getElementById("ansbtn");
const next = document.getElementById("nextbtn");

let currentqueIndex = 0;
let score = 0;
function startQuiz() {
  currentqueIndex = 0;
  score = 0;
  nextButton.innerHtml = "Next";
  showQuestion();
}
function showQuestion() {
  let currentque = questions[currentqueIndex];
  let queNo = currentqueIndex + 1;
  que.innerHtml = questionNo + " " + currentque.question;
  currentque.answers.forEach((answers) => {
    const btn = document.createElement("btn");
    btn.innerHTML = answers.text;
    btn.classList.add("btn");
    ans.appendChild(btn);
  });
}

startQuiz();
