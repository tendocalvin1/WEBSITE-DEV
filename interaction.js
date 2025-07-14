// alert, prompt and confirm.
// prompt ()
//Used to ask the user for input (a string).
// 🔹 Syntax:

// let userInput = prompt("What is your name?");
// let name = 'tendo'
// let names = prompt("Enter your name:");
// console.log("Hello, " + name + "!"); 

// prompt only worls when you are using the web browser

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (name) {
  console.log(`Hello, ${name}!`);
  rl.close();
});