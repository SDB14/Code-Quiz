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

// Variables that keep track of quiz time / state

   var timerState;
   var quizTime = quizQuestions * 10;
   var quizQuestionsIndex = 0;

// Creat a start function that when clicked it starts timer and displays first question

function setSeconds(){
    quizTime--
    time.textContent = quizTime

    if(
        quizTime = 0
    ){console.log("Quiz is Over") //insert quiz end function here
}
}
function startQuiz(){
    startScreenDiv.setAttribute("class","hide")
    questionsDiv.removeAttribute("class")
    timerState = setInterval(setSeconds,1000) //in order to stop timer need to use a clear interval with timerState ref
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
    displayQuestion.choices.forEach(function(choice, i) {
     var questionNode = document.createElement("button");
     questionNode.setAttribute("class", "choice");
     questionNode.setAttribute("value", choice); //how to reference if answer is correct or incorrect
     //questionNode.onclick = questionClick; // attaches a click event to each button to check accuracy
     questionNode.textContent = choice;
     choicesDiv.appendChild(questionNode);
    });
   }

// Create a function that determines if answer is correct or incorrect and if incorrect it will subtracts time from the clock

// Set time equal score

// Create an end quiz function that is set off when timer reaches zero or no more questions are available

// Create a function that when game is over it transitions to local storage for initials

startButton.onclick=startQuiz