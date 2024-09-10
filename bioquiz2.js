function submitQuiz() {
    var score = 0;
    var totalQuestions = 5;

    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'an organ') {
        score++;
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === ' cell membrane ') {
        score++;
    }

    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'a cell used for absorption') {
        score++;
    }

    var q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'A liver cell has a membrane. ') {
        score++;
    }

    var q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'carnivores') {
        score++;
    }

    // Display the result
    var resultText = `You got ${score} out of ${totalQuestions} correct!`;
    document.getElementById('result').innerText = resultText;
}