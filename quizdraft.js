var questions = [
    {
        prompt : "what colour are apples?\n(a)red/green\n\
        (b) Purple\n(c) Orange",

        answer:"a"
    },

    {
        prompt : "what colour are bananas?\n(a)red/green\n\
        (b) Yellow\n(c) Orange",

        answer:"b"
    },
    {
        prompt : "what colour are Strawberries?\n(a)green\n\
        (b) Purple\n(c) Red",

        answer:"c"
    }, 
]
var score = 0;

for(var i=0; i<question.length;i++){
    var response = window.prompt(questions(i).prompt);
    if(response==questions[i].answer){
        score++;
        alert("CORRECT!")
    }
    else{
        alert("WRONG!")

    }
    }
alert("you got" + score + "/" + questions.length);