function checkAnswer() {
    const correctAnswer = "4";

    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback")

    if (userAnswer.value == null) {
      feedback.textContent = "Please select an answer!";
      feedback.style.color = "orange";
      return;
    }

    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Wrong. Please try again";
      feedback.style.color = "red";
    }
}

document.getElementById("submit-answer").addEventListener('click', checkAnswer)