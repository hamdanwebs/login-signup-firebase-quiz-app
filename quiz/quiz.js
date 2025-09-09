const que = [
      {
        question: "Which is the largest animal?",
        answers: [
          { text: "Elephant", correct: false },
          { text: "Blue Whale", correct: true },
          { text: "Giraffe", correct: false },
          { text: "Great White Shark", correct: false }
        ]
      },
      {
        question: "What is the capital of Japan?",
        answers: [
          { text: "Beijing", correct: false },
          { text: "Seoul", correct: false },
          { text: "Tokyo", correct: true },
          { text: "Bangkok", correct: false }
        ]
      },
      {
        question: "Which planet is known as the Red Planet?",
        answers: [
          { text: "Venus", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Mercury", correct: false }
        ]
      },
      {
        question: "Who painted the Mona Lisa?",
        answers: [
          { text: "Leonardo da Vinci", correct: true },
          { text: "Pablo Picasso", correct: false },
          { text: "Vincent van Gogh", correct: false },
          { text: "Claude Monet", correct: false }
        ]
      },
      {
        question: "Which gas do humans need to breathe?",
        answers: [
          { text: "Carbon Dioxide", correct: false },
          { text: "Oxygen", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Hydrogen", correct: false }
        ]
      },
      {
        question: "How many continents are there on Earth?",
        answers: [
          { text: "5", correct: false },
          { text: "6", correct: false },
          { text: "7", correct: true },
          { text: "8", correct: false }
        ]
      },
      {
        question: "Which is the fastest land animal?",
        answers: [
          { text: "Cheetah", correct: true },
          { text: "Leopard", correct: false },
          { text: "Horse", correct: false },
          { text: "Lion", correct: false }
        ]
      },
      {
        question: "What is the boiling point of water?",
        answers: [
          { text: "50°C", correct: false },
          { text: "100°C", correct: true },
          { text: "0°C", correct: false },
          { text: "212°C", correct: false }
        ]
      },
      {
        question: "Which country is famous for pizza?",
        answers: [
          { text: "Spain", correct: false },
          { text: "Italy", correct: true },
          { text: "France", correct: false },
          { text: "Mexico", correct: false }
        ]
      },
      {
        question: "Which is the smallest prime number?",
        answers: [
          { text: "0", correct: false },
          { text: "1", correct: false },
          { text: "2", correct: true },
          { text: "3", correct: false }
        ]
      }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("ansb");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }

    function showQuestion() {
      resetState();
      let currentQuestion = que[currentQuestionIndex];
      questionElement.innerHTML = currentQuestion.question;

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
      });
    }

    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("wrong");
      }

      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });

      nextButton.style.display = "block";
    }

    function showScore() {
      resetState();
      questionElement.innerHTML = `You scored ${score} out of ${que.length}! 🎉`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
    }

    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < que.length) {
        showQuestion();
      } else {
        showScore();
      }
    }

    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < que.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });
    startQuiz();    
    