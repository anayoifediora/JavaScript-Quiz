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
var liEl1 = document.createElement('li');
var liEl2 = document.createElement('li');
var liEl3 = document.createElement('li');
var liEl4 = document.createElement('li');
var answerCommentEl = document.createElement('p');

divQuestionsEl.setAttribute('class', 'questions');
divAnswerEl.setAttribute('class', 'answer-buttons');


function renderQuestion1() {

questionEl.textContent = "Commonly used data types do not include:";
answerButton1.textContent = "Strings";
answerButton2.textContent = "Boolean";
answerButton3.textContent = "Alert";
answerButton4.textContent = "Numbers";

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
};

function renderQuestion2() {

    questionEl.textContent = "The condition in an if/else statement is enclosed within __________";
    answerButton1.textContent = "Quotes";
    answerButton2.textContent = "Parentheses";
    answerButton3.textContent = "Curly brackets";
    answerButton4.textContent = "Square Brackets";
    
    
};

function renderQuestion3() {
    
        questionEl.textContent = "Arrays in JavaScript can be used to store";
        answerButton1.textContent = "Numbers and Strings";
        answerButton2.textContent = "Other arrays";
        answerButton3.textContent = "Boolean";
        answerButton4.textContent = "All of the above";
        
};

function renderQuestion4() {
    
    questionEl.textContent = "String values must be enclosed within ____________ when being assigned to variables";
    answerButton1.textContent = "Commas";
    answerButton2.textContent = "Curly brackets";
    answerButton3.textContent = "Quotes";
    answerButton4.textContent = "Parentheses";
    
};

function renderQuestion5() {
    
    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    answerButton1.textContent = "Console.log";
    answerButton2.textContent = "For loops";
    answerButton3.textContent = "Terminal/bash";
    answerButton4.textContent = "JavaScript";
    
};




startButton.addEventListener("click", renderQuestion1);

var correctOption = answerButton3;
var wrongOptions = [answerButton1, answerButton2, answerButton4];

if (correctOption) {

    correctOption.addEventListener('click', function () {
        answerCommentEl.textContent = alert("Correct!");
        answerCommentEl.setAttribute('style', 'font-size: 30px; position: relative; left: 400px');
        body.appendChild(answerCommentEl);
        renderQuestion2();
    });
} 
if (wrongOptions) {
       
        for (var i = 0; i < wrongOptions.length; i++) {
        wrongOptions[i].addEventListener('click', function () {
        answerCommentEl.textContent = alert("Wrong ❌");
        answerCommentEl.setAttribute('style', 'font-size: 30px; position: relative; left: 400px');
        body.appendChild(answerCommentEl);
        renderQuestion2();
    })};

}

/* correctOption = answerButton2;
wrongOptions = [answerButton1, answerButton3, answerButton4];

if (correctOption) {

    correctOption.addEventListener('click', function () {
        answerCommentEl.textContent = "Correct!";
        answerCommentEl.setAttribute('style', 'font-size: 30px; position: relative; left: 400px');
        body.appendChild(answerCommentEl);
        renderQuestion3();
    });
} 
if (wrongOptions) {
       
        for (var i = 0; i < wrongOptions.length; i++) {
        wrongOptions[i].addEventListener('click', function () {
        answerCommentEl.textContent = "Wrong ❌";
        answerCommentEl.setAttribute('style', 'font-size: 30px; position: relative; left: 400px');
        body.appendChild(answerCommentEl);
        renderQuestion3();
    })};

} */