// 2. Interactive Quiz
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Styled Sections", "Creative Style System"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which language is used for web apps?",
    options: ["PHP", "Python", "JavaScript"],
    answer: "JavaScript"
  }
];

function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizData.forEach((q, index) => {
    let div = document.createElement("div");
    div.classList.add("quiz-question");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(opt => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${opt}"> ${opt}
        </label><br>`;
    });
    quizContainer.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    let answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && answer.value === q.answer) {
      score++;
    }
  });
  document.getElementById("quizResult").textContent = `You scored ${score} / ${quizData.length}`;
}

loadQuiz();

// 3. Fetch Data from API (Joke API)
async function getJoke() {
  let response = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await response.json();
  document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
}