var readlineSync = require('readline-sync');
const chalk = require('chalk')
var score=0;
var userName=readlineSync.question(chalk.rgb(255, 255, 0)("Your Name: "));
console.log(chalk.hex('#DEADED').bold(`\nWelcome ${userName} to Vidushi's Lion King QUIZ!!`));
console.log(chalk.bold.red.underline("\nRules"));
console.log(chalk.rgb(153, 255, 214)("\n1. There are three levels. You have 7,7 and 6 questions in Level-1,Level-2,Level-3 respectively."));
console.log(chalk.rgb(153, 255, 214)("\n2.You have to score more than 4 to qualify level-1. Similarly, you have to score more than 10 to qualify level-2."))
console.log(chalk.rgb(153, 255, 214)("\n3.Type the answer and press Enter Key."))
console.log(chalk.rgb(179, 0, 71).bold("\nLet's Start...\n"));
//High Scores(Bonus Homework)
var highScores=[{
  name:"Vidushi",
  hScore:"20"
},
{
  name:"Niyati",
  hScore:"20"
},
{
  name:"Keshav",
  hScore: "19"
}]
//Questions
//Level 1 Questions
var questionOne = {
  question: "What is the name of the main character of the movie The Lion King?\n  a. Jeff\n  b. Simba\n  c. Leo\n",
  answer: "b"
}
var questionTwo = {
  question: "What is the name of Simba's mother?\n  a. Sarabi\n  b. Sarafina\n  c. Nala\n",
  answer: "a"
}
var questionThree = {
  question: "What type of Animal is Zazu?\n  a. Toucan\n  b. Hornbill\n  c. Parrot\n",
  answer: "b"
}
var questionFour = {
  question: "What Event Does Scar Cause?\n  a. Mudslide\n  b. Stampede\n  c. Flood\n",
  answer: "b"
}
var questionFive = {
  question: "What is Simba’s father's name?\n  a. Mufasa\n  b. Simbu\n  c. Scar\n",
  answer: "a"
}
var questionSix = {
  question: "What does Hakuna Matata stand for?\n  a. No need to worry\n  b. Be careful\n  c. Run fast\n",
  answer: "a"
}
var questionSeven = {
  question: "Which area is Simba forbidden from going to?\n  a. Elephant Graveyard\n  b. River\n  c. Mountains\n",
  answer: "a"
}
//Level 2 Questions
var questionEight = {
  question: "What colour are Nala's eyes?\n  a. Green\n  b. Brown\n  c. Blue\n",
  answer: "c"
}
var questionNine = {
  question: "Which actor provided Simba's voice?\n  a. Matthew Broderick\n  b. Nathan Lane\n  c. Rowan Atkinson\n",
  answer: "a"
}
var questionTen = {
  question: "What's This First Song Played In The Movie?\n  a. Be Prepared\n  b. Circle Of life\n  c. Hakuna Matata\n",
  answer: "b"
}
var questionEleven = {
  question: "What is the name of the area where the lions rule?\n  a. Neverland\n  b. Arendelle\n  c. The Pride Lands\n",
  answer: "c"
}
var questionTwelve = {
  question: "What Year was the film Lion King released?\n  a. June 1996\n  b. June 1994\n  c. June 1995\n",
  answer: "b"
}
var questionThirteen = {
  question: "What Do The Stars Represent?\n  a. Balls Of Gas\n  b. Kings Of The Past\n  c. A Riddle\n",
  answer: "b"
}
var questionFourteen = {
  question: "What Type Of Animal Is Timon?\n  a. Ferret\n  b. Groundhog\n  c. Meerkat\n",
  answer: "c"
}
//Level-3 Questions
var questionFifteen = {
  question: "What was the earlier title of the movie The Lion King?\n  a. The Lion Terror\n  b. King of the Jungle\n  c. Simba\n",
  answer: "b"
}
var questionSixteen = {
  question: "Which Of These Is NOT A Hyena?\n  a. Ed\n  b. Ngannou\n  c. Banzai\n",
  answer: "b"
}
var questionSeventeen = {
  question: "How many Academy Awards did the original The Lion King win?\n  a. 2\n  b. 5\n  c. 1\n",
  answer: "a"
}
var questionEighteen = {
  question: "Which work of William Shakespeare inspires Lion King?\n  a. King Lear\n  b. Macbeth\n  c. Helmet\n",
  answer: "c"
}
var questionNineteen = {
  question: "What is Zazu's official title in the movie The Lion King?\n  a. Butler\n  b. Secretary\n  c. Best Friend\n",
  answer: "a"
}
var questionTwenty = {
  question: "How Many Main Hyenas Does Scar Employ?\n  a. 1\n  b. 2\n  c. 3\n",
  answer: "c"
}
//Play Function
function play(question,answer)
{
  readlineSync.setDefaultOptions({limit:['a','b','c']});
  var userName= readlineSync.question(chalk.rgb(255, 128, 0)(question));
  if(userName.toUpperCase() === answer.toUpperCase())
   {
     console.log(chalk.green.bold('This is a Right Answer!'));
     score++;
  }
  else
    console.log(chalk.redBright.bold("OOPS! This is an Incorrect Answer.")); 
  console.log("Score:",score);
  console.log("-------------")
}
//Function Call
var levelOne=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven];
for(var i=0;i<7;i++)
{
  //var currentQues=array[i];
  play(levelOne[i].question,levelOne[i].answer);
}
console.log(chalk.bold.keyword('pink')("\nYOUR LEVEL-1 SCORE: ")+(chalk.red)(score));
if(score>4 && score<8)
{
  console.log(chalk.hex('#DEADED').bold(`\nWelcome ${userName} to Level 2\n`));
  //var levelScore=0;
  var levelTwo= [questionEight,questionNine,questionTen,questionEleven,questionTwelve,questionThirteen,questionFourteen];
  for(var i=0;i<7;i++)
  {
   play(levelTwo[i].question,levelTwo[i].answer);
  }
  console.log(chalk.bold.keyword('pink')("\nYOUR CURRENT SCORE: ")+(chalk.red)(score));
}
if(score>10)
{
  console.log(chalk.hex('#DEADED').bold(`\nWelcome ${userName} to Level 3\n`));
  //var levelScore=0;
  var levelThree= [questionFifteen,questionSixteen,questionSeventeen,questionEighteen,questionNineteen,questionTwenty];
  for(var i=0;i<6;i++)
  {
   play(levelThree[i].question,levelThree[i].answer);
  }
  console.log(chalk.bold.keyword('pink')("\nYOUR TOTAL SCORE: ")+(chalk.red)(score));
}
if(score>18){
  console.log(chalk.rgb(204, 255, 204)("\nYay! You reached the HighScore"));
  console.log(chalk.rgb(204, 255, 204)("\nSend me the Screenshot."));
}
console.log(chalk.bold.underline.cyanBright("\n\nHIGHSCORERS"));
console.log(chalk.yellowBright("\nNAME\tScore\n"));
for(var i=0;i<3;i++)
{
  console.log(`${highScores[i].name}\t${highScores[i].hScore}`);
  // console.log("NAME: ",highScores[i].name);
  // console.log("SCORE: ",highScores[i].hScore);
}
console.log("\n")
console.log(chalk.blue.bold("Thank You for playing!"));
ratings=['Excellent','Average','Poor'];
index=readlineSync.keyInSelect(ratings,"How was the QUIZ?",{cancel: "Not Interested"});
console.log(`You said ${ratings[index]}`);
console.log(chalk.blue.bold("\nThanks for your feedback"));