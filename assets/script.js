var quizQuestions = [
    //quizQuestions[1].choices[1] = "curly brackets"
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },

];


// Global Variables that point to relavant classes or ids in HTML


var timerDiv = document.querySelector(".timer")
var startScreenDiv = document.getElementById("start-screen")
var time = document.getElementById("time")
var startButton = document.getElementById("startBtn")
var questionsDiv = document.getElementById("questions")
var choicesDiv = document.getElementById("choices")
var endScreenDiv = document.getElementById("end-screen")
var submitButton = document.getElementById("submit")
var rightWrongDiv = document.getElementById("rightwrong")
var score = document.getElementById("final-score")

// Variables that keep track of quiz time / state


var quizTime = quizQuestions.length * 10;
var quizQuestionsIndex = 0;
var timerState;
// var keepScore = score;

// Creat a start function that when clicked it starts timer and displays first question

startButton.onclick = function () {
    startQuiz()
}

function setSeconds() {
    quizTime = quizTime - 1
    time.textContent = quizTime

    if (quizTime === 0) {
        console.log("Quiz is Over");
        clearInterval(timerState);
    };
    //insert quiz end function here
}

function startQuiz() {
    startScreenDiv.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class")
    timerState = setInterval(setSeconds, 1000) //in order to stop timer need to use a clear interval with timerState ref
    time.textContent = quizTime
    //fire question cycle function
    cycleQuestions()
}
// Create a function that displays and cycles through questions

function cycleQuestions() {

    var displayQuestion = quizQuestions[quizQuestionsIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = displayQuestion.title;
    choicesDiv.innerHTML = "";
    displayQuestion.choices.forEach(function (choice, i) {
        var questionNode = document.createElement("button");
        questionNode.setAttribute("class", "choice");
        questionNode.setAttribute("value", choice);
        questionNode.textContent = choice;
        choicesDiv.appendChild(questionNode);
        questionNode.onclick = quizQuestionsIndex;

    })
if (quizQuestionsIndex < quizQuestions.length){
    quizQuestionsIndex++;
}

var setQuestion = function() {
    resetAnswers()
    displayQuestion(arrayShuffledQuestions[quizQuestionIndex])
}

    var chosenAnswer = event.target.getAttribute("answer")


    let questionNodeChild = document.getElementsByClassName("choice");

    for (i of questionNodeChild) {
        i.addEventListener('click', function () {
            answerCheck(i.innerHTML);

        });
    }

}
//check if answer is correct    
function answerCheck(answer) {

    if (answer === quizQuestions[quizQuestionsIndex].answer) {
        quizQuestionsIndex++;
    }
    else {
        quizQuestionsIndex++;


    }
}