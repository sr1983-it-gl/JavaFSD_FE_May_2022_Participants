function Question(questionText, questionNo){

  this.questionText = questionText;
  this.questionNo = questionNo;
}


const question1 = new Question("JavaScript supports", 1);
const question2 = new Question("Which language is used for styling web pages?", 2);
const question3 = new Question("Which is not a JavaScript Framework?", 3);
const question4 = new Question("Which is used for Connect To Database?", 4);
const question5 = new Question("JavaScript is a", 5);


function Answer(answerText){

  this.answerText = answerText;
}

// Question 1
const answer1Q1 = new Answer("Functions");
const answer2Q1 = new Answer("XHTML");
const answer3Q1 = new Answer("CSS");
const answer4Q1 = new Answer("HTML");

// Question 2
const answer1Q2 = new Answer("HTML");
const answer2Q2 = new Answer("JQuery");
const answer3Q2 = new Answer("CSS");
const answer4Q2 = new Answer("XML");

// Question 3
const answer1Q3 = new Answer("Python Script");
const answer2Q3 = new Answer("JQuery");
const answer3Q3 = new Answer("Django");
const answer4Q3 = new Answer("NodeJS");

// Question 4
const answer1Q4 = new Answer("PHP");
const answer2Q4 = new Answer("HTML");
const answer3Q4 = new Answer("JS");
const answer4Q4 = new Answer("All");

// Question 5
const answer1Q5 = new Answer("Language");
const answer2Q5 = new Answer("Programming Language");
const answer3Q5 = new Answer("Development");
const answer4Q5 = new Answer("All");


function QuestionAnswer(questionObj, answerChoicesObj, correctAnswerObj){

  this.questionObj = questionObj;
  this.answerChoicesObj = answerChoicesObj;
  this.correctAnswerObj = correctAnswerObj;


  this.isItACorrectAnswer = function(userSelectedAnswer){

    // '===' Type & Value
    // '==' Value comparison alone
    if (userSelectedAnswer === correctAnswerObj.answerText){
      console.log("Correct Answer")
      return true;
    }else{
      console.log("Incorrect Answer")
      return false;
    }
  }
}

const qa1 = new QuestionAnswer(question1, 
    [answer1Q1, answer2Q1, answer3Q1, answer4Q1], answer1Q1);

const qa2 = new QuestionAnswer(question2, 
    [answer1Q2, answer2Q2, answer3Q2, answer4Q2], answer3Q2);
  
const qa3 = new QuestionAnswer(question3, 
  [answer1Q3, answer2Q3, answer3Q3, answer4Q3], answer3Q3);

const qa4 = new QuestionAnswer(question4, 
  [answer1Q4, answer2Q4, answer3Q4, answer4Q4], answer1Q4);

const qa5 = new QuestionAnswer(question5, 
  [answer1Q5, answer2Q5, answer3Q5, answer4Q5], answer2Q5);
  
  
function QuizApplication(qaArray){

  this.qaArray = qaArray;
  this.pageIndex = 0;
  this.score = 0;

  this.init = function(){

    this.initAndDisplayPage();
  }

  this.initAndDisplayPage = function(){

    this.pageIndex = 0;
    this.attachListeners();
    this.displayQuizPage();
  }

  this.initAndDisplayNextPage = function(){

    this.pageIndex ++;
    this.attachListeners();
    this.displayQuizPage();
  }

  this.attachListeners = function(){

    const questionAnswerObj = qaArray[this.pageIndex];
    const currentQuizApplicationObj = this;

    for (let index = 0; index < questionAnswerObj.answerChoicesObj.length; index ++){

      let buttonId = "btn" + index; 
      const answerChoiceHtmlButtonElement =  document.getElementById(buttonId);

      answerChoiceHtmlButtonElement.onclick = function(event){

        const currentTarget = event.currentTarget;

        // Correct Answer Check
        // Track / Increment Score [Calcualte Percentage]

        const userSelectedAnswer = currentTarget.children[0].innerHTML;;
        const result = questionAnswerObj.isItACorrectAnswer(userSelectedAnswer);
        if (result){
          currentQuizApplicationObj.incrementScore()
        }

        // Forward to Next
        currentQuizApplicationObj.next();
      }
    }
  }

  this.incrementScore = function(){

    this.score ++;
  }

  this.next = function(){

    if (this.isThisTheLastQuestion()){
      this.displayResultPage();
    }else{
     this.initAndDisplayNextPage(); 
    }
  }

  this.isThisTheLastQuestion = function(){

    if (this.pageIndex === this.qaArray.length - 1){
      return true;
    }else{
      return false;
    }
  }

  this.displayQuizPage = function(){

    this.displayQASection();
    this.displayQuestionProgressSection();
  }

  this.displayQASection = function(){

    const questionAnswerObj = qaArray[this.pageIndex];

    // Setting the question text
    const questionText = questionAnswerObj.questionObj.questionText;
    const questionHtmlElement = document.getElementById("question");

    questionHtmlElement.innerHTML = questionText;

    // Setting the answer(s) text

    const answerChoicesObj = questionAnswerObj.answerChoicesObj;
    for (let index = 0; index < answerChoicesObj.length; index ++){

      let answerChoiceHtmlElementName = "choice" + index;

      const answerObj = answerChoicesObj[index];

      const answerChoiceHtmlElement = document.getElementById(answerChoiceHtmlElementName);
      answerChoiceHtmlElement.innerHTML = answerObj.answerText;
    }
  }

  this.displayQuestionProgressSection = function(){

    // Single Quote - '
    // Backtick - `

    const questionAnswerObj = qaArray[this.pageIndex];
    const questionNo = questionAnswerObj.questionObj.questionNo;

    const totalNoOfQuestions = qaArray.length;

    let progressText = `Question ${questionNo} of ${totalNoOfQuestions}`;

    const progressHtmlElement = document.getElementById("progress");
    progressHtmlElement.innerHTML = progressText;
  }

  this.displayResultPage = function(){

    const percentage = (this.score / this.qaArray.length) * 100;

    const resultPageContent = `
      <h1>Quiz Result</h1>
      <h3 id='score'> 
      Your scores ${this.score}. Mark Percentage ${percentage}
      </h3>
      `

    const quizHtmlElement = document.getElementById("quiz");
    quizHtmlElement.innerHTML = resultPageContent;
  }
}

const quizApplication = new QuizApplication(
  [qa1, qa2, qa3, qa4, qa5]
);
quizApplication.init();