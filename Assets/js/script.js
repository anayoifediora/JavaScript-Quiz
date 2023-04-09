var body = document.body;
var startButton = document.getElementById("#start-button");
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

divQuestionsEl.setAttribute('class', 'questions');
divAnswerEl.setAttribute('class', 'answer-buttons');

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




var options = [];
var correctOption = ""

/* function startQuiz () {
    renderQuestions();

}; */

function renderQuestions() {

    document.body.questionSection;    
    /* var questionParagraph = document.createElement('p');
    questionParagraph.textContent = "Commonly used data types do not include:";
    questionSection.appendChild(questionParagraph); */
};

renderQuestions();

//startButton.addEventListener("click", startQuiz);

