var readLineSync = require('readline-sync');
var score = 0;

const highScores = [
  {
    name : "Saurav",
    score : 3,
  },
  {
    name : "Eoin",
    score : 2,
  }
];

var questions = [
  {
    question : "What is my favorite movie",
    answer  : "TheMachinist",
  },
  {
    question : "Where do i live?",
    answer : "Assam",
  },
  {
    question : "What is my favorite band",
    answer : "GreenDay",
  }
];

const welcome = () => {
  var userName = readLineSync.question('Whats your name\n');
  console.log(`Welcome ${userName}, Do You Know Saurav`);
}

const letsPlay = (question, answer) => {
  var userAns = readLineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct Answer!\n");
    score += 1;

  } else {
    console.log("Wrong Answer\n");
    
  }
  console.log(`Current Score : ${score}`);
  console.log(`--------`);
}

const timeToPlayTheGame = (questions) => {
  for(let index = 0; index < questions.length; index++) {
    let question = questions[index].question;
    let answer = questions[index].answer;

    letsPlay(question, answer);
  }
}

const showTheScore = () => {
  console.log(`YAY!, Score : ${score}`);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(hscore => console.log(`${hscore.name} : ${hscore.score}`));
}

welcome();
timeToPlayTheGame(questions);
showTheScore();