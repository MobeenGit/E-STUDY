function submitQuiz() {
    var score = 0;
    var totalQuestions = 5;

    var answers = {
        "q1": "A species",
        "q2": "Ranunculus acris",
        "q3": "sensitivity",
        "q4": "excretion",
        "q5": "carnivores"
    };
    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'A species') {
        score++;
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'Ranunculus acris') {
        score++;
    }

    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'sensitivity') {
        score++;
    }

    var q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'excretion') {
        score++;
    }

    var q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'carnivores') {
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