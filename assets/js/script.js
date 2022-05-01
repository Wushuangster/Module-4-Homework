var score = 0;
var timeLeft = 100;
var timer = document.getElementById('timer')
var startBtn = document.getElementById('startBtn')
var introduction = document.getElementById('introduction')
var title = document.getElementById("title")
var questions = document.getElementById("questions")
var choices =document.querySelectorAll(".choices")
var answerBtn1 = document.getElementById("0")
var answerBtn2 = document.getElementById("1")
var answerBtn3 = document.getElementById("2")
var answerBtn4 = document.getElementById("3")
var result = document.getElementById("result")
var intials = document.getElementById('intials')
var finalScore = document.getElementById("finalScore")
var highscore = document.getElementById("highscore")

var index = 0;
var myTimeInterval;
var questionsArr = [
    {
        title:"JavaScript is a ______-side progromming language.",
        choices:["1. Client", "2. Server", "3. Both", "4. None"],
        answer: "Both"
    },
    {
        title: "Which of the following is the correct syntax to print a page using JavaScript?",
        choices:["1. window.print()", "2. browser.print()", "3.  navigator.print()", "4. document.print()"],
        answer: "window.print()"
    },
    {
        title: "How do you find the minimum of x and y using JavaScript?",
        choices: ["1. min(x,y)", "2. Math.min(x,y)", "3. Math.min(xy)", "4. min(xy)"],
        answer:"Math.min(x,y)"
    },
    {
        title: "Which JavaScript label catches all the values, except for the ones specified?",
        choices: ["1. catch", "2. label", "3. try", "4. default"],
        answer:"default"
    },
    {
        title: "Which built-in method returns the length of the string?",
        choices: ["1. length()", "2. size()", "3. index()", "4. None of the above"],
        answer:"length()"
    }
]

startBtn.addEventListener("click", quizStart)
answerBtn1.addEventListener("click", nextQuestion)
answerBtn2.addEventListener("click", nextQuestion)
answerBtn3.addEventListener("click", nextQuestion)
answerBtn4.addEventListener("click", nextQuestion)


// set intial timer value and fire off two functions
function quizStart() {
    myTimeInterval = setInterval(startTimer,1000);
    timer.textContent = "Time: " + timeLeft;
    introduction.style.display = "none";
    displayQestion();
    questions.style.display = "block";
} 

function startTimer() {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
         endTime();
    }
}

function displayQestion() {
    title.textContent = questionsArr[index].title;
    answerBtn1.textContent = questionsArr[index].choices[0];
    answerBtn2.textContent = questionsArr[index].choices[1];
    answerBtn3.textContent = questionsArr[index].choices[2];
    answerBtn4.textContent = questionsArr[index].choices[3];
}

function nextQuestion(event) {
    var currentButton = Number(event.target.id);
    var correctAnswer = questionsArr[index].answer;
    var currentChoice = questionsArr[index].choices[currentButton];
    var choiceArr = currentChoice.split(".")
    currentChoice = choiceArr[1].trim()
    if (correctAnswer === currentChoice) {
        result.textContent = "Correct"
        setTimeout(function() {result.innerHTML = ("");},800)
    }
    else {
        timeLeft = (timeLeft - 10)
        result.textContent = "Wrong"
        setTimeout(function() {result.innerHTML = ("");},800)
    }
    index++;
    if (index < questionsArr.length) {
        displayQestion();
    }
    else {
        setTimeout(function() {
          endTime();
          if (endTime) {
            finalScore.textContent = ("You final score is  " + score + ".")
           }
        },1000)
   }
}

function endTime() {
    console.log(timeLeft)
    score = timeLeft;
    timer.textContent = "Time: " + timeLeft;
    clearInterval(myTimeInterval);
    questions.style.display = "none";
    intials.style.display = "block";
}


























// const startButton = document.getElementById('start-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let shuffledQuestions, currentQuestionIdex

// startButton.addEventListener('click', startGame)

// function startGame() {
//     console.log('Started')
//     startButton.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIdex = 0
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }

// function setNextQuestion() {
//     showQuestion(shuffledQuestions[currentQuestionIdex])
// }

// function showQuestion(question) {
//     questionElement.innerText = question.question
// }

// function selectAnswer() {
    
// }

// const questions = [
//     {
//         question: 'JavaScript is a ______-side progromming language.',
//         answer: [
//             {text:'Client', correct: false},
//             {text:'Server', correct: false},
//             {text:'Both', correct: true}, 
//             {text:'None', correct: false} 
//         ]
//     }
// ]

