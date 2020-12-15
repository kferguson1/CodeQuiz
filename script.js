// Variables
var quiz = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var CompeleteDiv = document.getElementById("complete");
var QuizQuestions = document.getElementById("QuizQuestions")
var submitscore = document.getElementById("SubmitScore")
var scoreEl = document.getElementById ("Score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var quiztimer = document.getElementById("timer");
var startQuizDiv= document.getElementById("startpage");
var startQuizbutton = document.getElementById("startbtn")
var HighScoreName = document.getElementById("name");
var highScoreContainer = document.getElementById("HighScoreContainer");
var highscoreScore = document.getElementById("HighScore")
var LastQuestionIndex = QuizQuestions.length;
var CurrentQuestionIndex = 0;
var timeremaining = 75;
var timerinterval;
var score = 0;
var correct;

// Quiz Questions
var QuizQuestions = [{
    question: "What does CSS stand for?",
    answerA: "Computation Style Sharing",
    answerB: "Commercial Storage String",
    answerC: "Converstion String Style",
    answerD: "Cascading Style Sheets",
    correctAnswer: "d"},

{
    question: "What does HTML stand for?",
    answerA: "Hypertext Milenial Loader",
    answerB: "Hypertext Markup Language",
    answerC: "Hypertext Mode Language",
    answerD: "Hypertext Markup Loader",
    correctAnswer: "b"},

{
    question: "What does the 'VS' in VS Code stand for?",
    answerA: "Visual Studio",
    answerB: "Virtual Studio",
    answerC: "Visual String",
    answerD: "Virtual String",
    correctAnswer: "a"},

{
    question: "Which of the following is NOT a programming Language?",
    answerA: "Python",
    answerB: "Javascript",
    answerC: "HostGator",
    answerD: "SQL",
    correctAnswer: "c"},

{
    question: "Coding is...",
    answerA: "Awesome!",
    answerB: "Fun!",
    answerC: "The best ever!",
    answerD: "All of the above",
    correctAnswer: "d"},
    ];


// Generating Quiz Questions
function generateQuizQuestions(){
    CompeleteDiv.style.display = "none";
    if (CurrentQuestionIndex === LastQuestionIndex){
        return displayScore();
    }

    var CurrentQuestion = QuizQuestions[CurrentQuestionIndex];
    questionsEL.innerHTML = "<p>" + CurrentQuestion.question + "<p>";
    buttonA.innerHTML = CurrentQuestion.answerA;
    buttonB.innerHTML = CurrentQuestion.answerB;
    buttonC.innerHTML = CurrentQuestion.answerC;
    buttonD.innerHTML = CurrentQuestion.answerD;
}

// Start Quiz
function startQuiz(){
    CompeleteDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestions();

// Timer
(function() {
    var sec = 75;
    function startTimer(){
        console.log('timer suppose to go')
        var quiztimer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                displayScore();
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();

// Display Score
function displayScore(){
    quiz.style.display = "none"
    CompeleteDiv.style.display = "flex";
    clearInterval(timerinterval);
    HighScoreName.value = "";
    scoreEl.innerHTML = "You got " + score + "out of" + QuizQuestions.length + "correct!";
}
}

submitScoreBtn.addEventListener("click", function highscore(){
    
    
    if(highscoreName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };

        function showScore(){
            quizBody.style.display = "none"
            completeDiv.style.display = "flex";
            clearInterval(timerInterval);
            highscoreName.value = "";
            ScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
        }

function clearScore(){
    window.localStorage.clear();
    highscoreName.textContent = "";
    highscoreScore.textContent = "";
}
// Replay Quiz
function replayQuiz(){
    highscoreContainer.style.display = "none";
    CompleteDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeremaining = 75;
    score = 0;
    currentQuestionIndex = 0;
}

// Check Answers
function checkAnswer(answer){
    correct = QuizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== LastQuestionIndex){
        score++;
        currentQuestionIndex++;
        generateQuizQuestion();

    }else if (answer !== correct && currentQuestionIndex !== LastQuestionIndex){
        currentQuestionIndex++;
        generateQuizQuestion();

    }else{
        showScore();
    }
}

startQuizbutton.addEventListener("click",startQuiz);