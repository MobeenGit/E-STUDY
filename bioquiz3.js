function submitQuiz() {
    var score = 0;
    var totalQuestions = 5;

    var answers = {
        "q1": "Alleles",
        "q2": "Double helix",
        "q3": "Brown eyes",
        "q4": "Meiosis",
        "q5": "Gregor Mendel"
    };
    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'Alleles') {
        score++;
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'Double helix') {
        score++;
    }

    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'Brown eyes') {
        score++;
    }

    var q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'Meiosis') {
        score++;
    }

    var q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'Gregor Mendel') {
        score++;
    }

    // Display the result
    var resultText = `You got ${score} out of ${totalQuestions} correct!`;
    document.getElementById('result').innerText = resultText;
    if (score === 5) {
        document.getElementById("nextQuizButton").disabled = false;
        document.getElementById("message").innerHTML = "Perfect score! You can proceed.";
    } else {
        document.getElementById("nextQuizButton").disabled = true;
        document.getElementById("message").innerHTML = "You need a score of 5/5 to proceed.";
    }


}