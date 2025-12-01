// Prompt Quizzer – A Simple Console-Based JavaScript Quiz Game

// Array of quiz questions and answers
const quizQuestions = [
  { question: "What is the full form of HTML?", answer: "hypertext markup language" },
  { question: "What is the purpose of CSS?", answer: "styling" },
  { question: "Name any one loop used in JavaScript.", answer: "for loop" },
  { question: "What is the full form of DOM?", answer: "document object model" },
  { question: "What is the HTTP status code for 'Not Found'?", answer: "404" }
];

// Function to clean and normalize user input
function normalizeInput(str) {
  if (str === null) return null; // If user cancels prompt
  return String(str).toLowerCase().trim();
}

// Main quiz function
function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  alert("Welcome to Prompt Quizzer! You will be asked " + total + " questions.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const current = quizQuestions[i];

    // Ask question
    let userAnswer = prompt(current.question);

    // If user pressed cancel
    if (userAnswer === null) {
      alert("You skipped this question.\nCorrect answer: " + current.answer);
      continue;
    }

    // Normalize both answers
    const cleanedUserAnswer = normalizeInput(userAnswer);
    const cleanedCorrectAnswer = normalizeInput(current.answer);

    // Check answer
    if (cleanedUserAnswer === cleanedCorrectAnswer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!\nCorrect answer: " + current.answer);
    }
  }

  // Final score
  alert("Quiz Completed!\nYour Score: " + score + " / " + total);
  console.log("Final Score:", score + " / " + total);
}

// Start the quiz automatically
runQuiz();
