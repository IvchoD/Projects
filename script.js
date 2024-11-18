function checkAnswer(resultId, correctAnswer, feedbackId) {
    const result = document.getElementById(resultId).value.trim();
    const feedback = document.getElementById(feedbackId);
    if (result === correctAnswer) {
        feedback.textContent = "Правилно!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Грешно!";
        feedback.style.color = "red";
    }
}

function clearInput(resultId) {
    document.getElementById(resultId).value = '';
}

function checkShape(selectedShape, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (selectedShape === 'triangle') {
        feedback.textContent = "Правилно!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Грешно!";
        feedback.style.color = "red";
    }
}

function checkNumericAnswer(correctNumber, resultId, feedbackId) {
    const result = parseInt(document.getElementById(resultId).value, 10);
    const feedback = document.getElementById(feedbackId);
    if (result === correctNumber) {
        feedback.textContent = "Правилно!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Грешно!";
        feedback.style.color = "red";
    }
}

function checkSingleChoice(selectedOption, correctOption, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (selectedOption === correctOption) {
        feedback.textContent = "Правилно!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Грешно!";
        feedback.style.color = "red";
    }
}
