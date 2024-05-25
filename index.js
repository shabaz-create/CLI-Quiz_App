
/** creating  data set*/
let readlineSync=require("readline-sync");
let kuler=require("kuler");
let score=0;
let userName=readlineSync.question("What is your name?\n");
console.log(kuler(`\nHello ${userName} welcome to quizify`, "#1AE3D7"));
console.log("\nPlease select any option by typing either a/b/c/d\n");

//database of questions, options & answers
const database={
  data:[
    {
      question:`let a={},b={} 
console.log(a==b)
console.log(a===b)
        `,
      options:{
        a:"false false",
        b:"false true",
        c:"true false",
        d:"true true"
      },
      correctAnswer:"a"
    },
    {
      question:`Object.assign(target,source) creates which type of copy`,
      options:{
        a:"Deep Copy",
        b:"Shallow Copay",
        c:"Nested Copy",
        d:"Creates a new reference"
      },
      correctAnswer:"b"
    },{
    question:`Is Method chaning possible with forEach`,
    options:{
      a:"YES",
      b:"NO"
    },
    correctAnswer:"b"
    }
  ]
}

//main logic to find the correct answer or display the correct one
function answer(userAnswer,correctAnswer){
  if(!"abcd".includes(userAnswer)){
    console.log(kuler("\nPlease enter a valid option next time, you lost a chance this time","#E31A1A"));
    console.log("___________________");
  }else{
  if(userAnswer===correctAnswer){
    console.log(kuler("\nYou are right","#35E31A"));
    score++;
    console.log("___________________");
  }else{
    console.log(kuler("\nYou are wrong","#E31A1A"));
    console.log(kuler(`\n Correct Answer is "${correctAnswer}"`,"#E2F900"))
    console.log("___________________");
  }}
}

//leader board
const leaderBoard={
  data:[
    {
      name:'Aditya',
      score:1
    },
    {
      name:'Riya',
      score:2
    },
    {
      name:'Jay',
      score:2
    }
  ]
}

//driver function to display the questions & take user answers
function showQuestionAndOptions(database){
  for(let i=0;i<database.data.length;i++){
    console.log(kuler(`\nQ${i +1}:${database.data[i].question}\n`,"#F9C000"))

    for(let key in database.data[i].options){
      console.log(`${key} : ${database.data[i].options[key]}`)
    }
let userAnswer=readlineSync.question("\nEnter your answer(a/b/c/d) - ").toLowerCase();

    answer(userAnswer,database.data[i].correctAnswer);
  }
}

//setting up the leader board after a user plays

function showHighScorer(leaderBoard){
  leaderBoard.data.push({name:userName,score:score});
  let sortedScore = leaderBoard.data.sort((a,b)=>b.score-a.score);
  console.log("\nFind Your Position on Leaderboard:")
  for(let leader of sortedScore){
    console.log(kuler(`\n${leader.name} : ${leader.score}`,"#1500F9"));
  }
}


//calling the functions
showQuestionAndOptions(database);
console.log(`\nYour Score is: ${score}`);

showHighScorer(leaderBoard)

