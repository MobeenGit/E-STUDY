function submitQuiz() {
    var score = 0;
    var totalQuestions = 5;

    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'ileum') {
        score++;
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'respiration') {
        score++;
    }

    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'diffusion of oxygen') {
        score++;
    }

    var q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'diffusion') {
        score++;
    }

    var q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'plant roots absorbing water from the soil') {
        score++;
    }

    // Display the result
    var resultText = `You got ${score} out of ${totalQuestions} correct!`;
    document.getElementById('result').innerText = resultText;
}