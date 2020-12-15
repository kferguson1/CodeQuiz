var quiz = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var CompeleteDiv = document.getElementById("complete");
var QuizQuestions = document.getElementById("QuizQuestions")
var submitscore = document.getElementById("SubmitScore")
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var quiztimer = document.getElementById("timer");

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