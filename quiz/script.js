const questions = [
    {
      question: "Which is the capital of Afghanistan?",
      answer: ["Kabul", "Balkh", "Herat", "Kandahar"],
      correctAns: "Kabul"
    },
    {
      question: "Who create this site ?",
      answer: ["Matin", "Omid", "Abdullah", "Rahim"],
      correctAns: "Abdullah"
    },
    {
        question: "What do you call a bear with no teeth?",
        answer: [
          "A gummy bear",
          "A toothless bear",
          "A bear without teeth",
          "A tooth-free bear"
        ],
        correctAns: "A gummy bear"
      },
      {
        question: "Why don't scientists trust atoms?",
        answer: [
          "Because they make up everything",
          "Because they're too small to be trusted",
          "Because they're always changing",
          "Because they're too unpredictable"
        ],
        correctAns: "Because they make up everything"
      },
      {
        question: "What's a pirate's favorite letter?",
        answer: [
          "R",
          "P",
          "C",
          "X"
        ],
        ccorrectAns: "R"
      },
      {
        question: "What did one wall say to the other wall?",
        answer: [
          "I'll meet you at the corner",
          "I'm feeling plastered",
          "Nice bricks!",
          "Let's hang out together"
        ],
        correctAns: "I'll meet you at the corner"
      },
      {
        question: "Why don't skeletons fight each other?",
        answer: [
          "They don't have the guts",
          "They're too fragile",
          "They're too friendly",
          "They're already dead"
        ],
        correctAns: "They don't have the guts"
      }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // HTML element references
  const startButton = document.getElementById("startbutton");
  const questionElement = document.getElementById("questions");
  const option1Element = document.getElementById("answeroption1");
  const option2Element = document.getElementById("answeroption2");
  const option3Element = document.getElementById("answeroption3");
  const option4Element = document.getElementById("answeroption4");
  const submitButton = document.getElementById("submitclick");
  
  // Event listeners
  startButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", submitAnswer);
  
  // Quiz initialization
  function startQuiz() {
    startButton.disabled = true;
    displayQuestion();
  }
  
  // Displaying questions and options
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    option1Element.textContent = currentQuestion.answer[0];
    option2Element.textContent = currentQuestion.answer[1];
    option3Element.textContent = currentQuestion.answer[2];
    option4Element.textContent = currentQuestion.answer[3];
  }
  
  // Submitting answers
  function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      const userAnswer = selectedOption.nextElementSibling.textContent;
      const currentQuestion = questions[currentQuestionIndex];
      if (userAnswer === currentQuestion.correctAns) {
        score++;
      }
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    }
    selectedOption.checked = false;
  }
  
  // Ending the quiz
  function endQuiz() {
    questionElement.textContent = "";
    option1Element.textContent = "";
    option2Element.textContent = "";
    option3Element.textContent = "";
    option4Element.textContent = "";
    submitButton.disabled = true;
    const resultElement = document.createElement("h2");
    resultElement.textContent = "Quiz Complete! Your Score: " + score;
    document.body.appendChild(resultElement);
  }
  