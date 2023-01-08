function Question(questionText, questionNo){

  this.questionText = questionText;
  this.questionNo = questionNo;
}

let question1 = new Question("JavaScript supports", 1);
let question2 = new Question("Which language is used for styling web pages?", 2);
let question3 = new Question("Which is not a JavaScript Framework?", 3);
let question4 = new Question("Which is used for Connect To Database?", 4);
let question5 = new Question("JavaScript is a", 5);


function Answer(answerText){

  this.answerText = answerText;
}

// Question 1
let answer1Q1 = new Answer("Functions");
let answer2Q1 = new Answer("XHTML");
let answer3Q1 = new Answer("CSS");
let answer4Q1 = new Answer("HTML");

// Question 2
let answer1Q2 = new Answer("HTML");
let answer2Q2 = new Answer("JQuery");
let answer3Q2 = new Answer("CSS");
let answer4Q2 = new Answer("XML");

// Question 3
let answer1Q3 = new Answer("Python Script");
let answer2Q3 = new Answer("JQuery");
let answer3Q3 = new Answer("Django");
let answer4Q3 = new Answer("NodeJS");

// Question 4
let answer1Q4 = new Answer("PHP");
let answer2Q4 = new Answer("HTML");
let answer3Q4 = new Answer("JS");
let answer4Q4 = new Answer("All");

// Question 5
let answer1Q5 = new Answer("Language");
let answer2Q5 = new Answer("Programming Language");
let answer3Q5 = new Answer("Development");
let answer4Q5 = new Answer("All");
