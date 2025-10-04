// Function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    let correctAnswer = "4";

    // Step 2: Get the user's selected answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Check if an option was selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return; // Stop here if no answer was chosen
    }

    let userAnswer = selectedOption.value;

    // Step 4: Compare the user's answer with the correct one
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add a click event listener to the Submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);