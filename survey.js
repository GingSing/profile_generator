const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favorite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answer = [

];

let survey = function(questions, qNum, answers){
  rl.question(questions[qNum], (answer) => {
    answers[qNum] = answer;
    if(qNum === questions.length - 1){
      printAsParagraph(answers);
      return rl.close();
    }
    survey(questions, ++qNum, answers);
  });
};

let printAsParagraph = function(arr){
  console.log(`My name is ${arr[0]}, I like ${arr[1]}
  and listening to ${arr[2]}. My favourite meal is 
  ${arr[3]} because I like ${arr[4]}. My favorite sport is ${arr[5]}
  and my superpower is ${arr[6]} Nice to meet you!`);
}; 

survey(question, 0, answer);
