var body = document.body;
var startButton = document.querySelector("#start-button");
var questionSection = document.querySelector(".question-section");

var questionEl = document.createElement('p');
var divQuestionsEl = document.createElement('div');
var divAnswerEl = document.createElement('div');
var olEl = document.createElement('ol');
var answerButton1 = document.createElement('button');
var answerButton2 = document.createElement('button');
var answerButton3 = document.createElement('button');
var answerButton4 = document.createElement('button');
var scoreEl = document.querySelector('.score');

answerButton1.classList.add('answer-button');
answerButton2.classList.add('answer-button');
answerButton3.classList.add('answer-button');
answerButton4.classList.add('answer-button');


var liEl1 = document.createElement('li');
var liEl2 = document.createElement('li');
var liEl3 = document.createElement('li');
var liEl4 = document.createElement('li'); 
var answerCommentEl = document.createElement('p');

divQuestionsEl.setAttribute('class', 'questions');
divAnswerEl.setAttribute('class', 'answer-buttons');


questionSection.appendChild(divQuestionsEl);
divQuestionsEl.appendChild(questionEl);
questionSection.appendChild(divAnswerEl);
divAnswerEl.appendChild(olEl);
olEl.appendChild(liEl1);
olEl.appendChild(liEl2);
olEl.appendChild(liEl3);
olEl.appendChild(liEl4); 

liEl1.appendChild(answerButton1);
liEl2.appendChild(answerButton2);
liEl3.appendChild(answerButton3);
liEl4.appendChild(answerButton4);

var currentQuestions = 1;
var score = 0;

// create a startQuiz function that will go through the quizQuestions object through a loop to render each question
let quizQuestions = [ {
  
  questionEl: "Commonly used data types do not include:",
  answerButton1: "Strings",
  answerButton2: "Boolean",
  answerButton3: "Alert",
  answerButton4: "Numbers",
  correctAnswer: "Alert",

},
{

    questionEl: "The condition in an if/else statement is enclosed within __________",
    answerButton1: "Quotes",
    answerButton2: "Parentheses",
    answerButton3: "Curly brackets",
    answerButton4: "Square Brackets",
    correctAnswer: "Parentheses",
    
},

 {
    
        questionEl: "Arrays in JavaScript can be used to store",
        answerButton1: "Numbers and Strings",
        answerButton2: "Other arrays",
        answerButton3: "Boolean",
        answerButton4: "All of the above",
        correctAnswer: "All of the above",
        
},

 {
    
    questionEl: "String values must be enclosed within ____________ when being assigned to variables",
    answerButton1: "Commas",
    answerButton2: "Curly brackets",
    answerButton3: "Quotes",
    answerButton4: "Parentheses",
    correctAnswer: "Quotes"
    
},

 {
    
    questionEl: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerButton1: "Console.log",
    answerButton2: "For loops",
    answerButton3: "Terminal/bash",
    answerButton4: "JavaScript",
    correctAnswer: "Console.log",
    
},
];

  function renderQuestions () {
    questionEl.textContent = quizQuestions[0].questionEl;
    answerButton1.textContent = quizQuestions[0].answerButton1;
    answerButton2.textContent = quizQuestions[0].answerButton2;
    answerButton3.textContent = quizQuestions[0].answerButton3;
    answerButton4.textContent = quizQuestions[0].answerButton4;
    }


function pickAnswer () {
  renderNextQuestion ();
    currentQuestions++;
};

/* function checkResult() {
  if (quizQuestions[0].answerButton3 === quizQuestions[0].correctAnswer) {
      console.log("hello");
} else {
      console.log("hi");
}
};     */

  

   
   ;

function renderNextQuestion () {
  
    questionEl.textContent = quizQuestions[currentQuestions].questionEl;
    answerButton1.textContent = quizQuestions[currentQuestions].answerButton1;
    answerButton2.textContent = quizQuestions[currentQuestions].answerButton2;
    answerButton3.textContent = quizQuestions[currentQuestions].answerButton3;
    answerButton4.textContent = quizQuestions[currentQuestions].answerButton4;
  
};
function setQuizScore () {
scoreEl.textContent = score

}

var answerButtonsArray = document.querySelectorAll('.answer-button');

for (var i = 0; i < answerButtonsArray.length; i++) {
   answerButtonsArray[i].addEventListener('click', pickAnswer);
};
startButton.addEventListener("click", renderQuestions);


 
  


// var correctOption = answerButton3;
// var wrongOptions = [answerButton1, answerButton2, answerButton4];

/* if (correctOption) {

    correctOption.addEventListener('click', function () {
        answerCommentEl.textContent = "Correct!";
        answerCommentEl.setAttribute('style', 'font-size: 30px; position: relative; left: 400px');
        body.appendChild(answerCommentEl);
        renderQuestion2();
    });
} 
if (wrongOptions) {
       
        for (var i = 0; i < wrongOptions.length; i++) {
        wrongOptions[i].addEventListener('click', function () {
        answerCommentEl.textContent = "Wrong ❌";
        answerCommentEl.setAttribute('style', 'font-size: 30px; position: relative; left: 400px');
        body.appendChild(answerCommentEl);
        renderQuestion2();
    })};

}

 correctOption = answerButton2;
wrongOptions = [answerButton1, answerButton3, answerButton4];

if (correctOption) {

    correctOption.addEventListener('click', function () {
        answerCommentEl.textContent = "Correct!";
        answerCommentEl.setAttribute('style', 'font-size: 30px; position: relative; left: 400px');
        body.appendChild(answerCommentEl);
        renderQuestion3();
    });



 */