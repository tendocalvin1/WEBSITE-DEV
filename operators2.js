let usersChosenColor = 'blue';
let defaultColor = 'green';

const currentWebsiteColor =  usersChosenColor || defaultColor;
console.log(currentWebsiteColor);

// operator precedence.
let n = (5 + 4) * 5;
console.log(n)


let a = 10;
let b =4;

console.log("addition:",a + b);
console.log("subraction:", a - b);
console.log("division:", a / b);
console.log("multiplication:", a * b);
console.log("modulus:", a % b);
console.log("exponential:", a ** b);

let points = 50;

points = points - 10;
console.log("subratcion:", points);


points += 10;
console.log("addition:", points);




points /= 10;
console.log("division:", points);

points %= 10;
console.log("modulus:", points);

// mini challenge
let base = 12;
let height = 20;
let area = (base * height) / 2;
console.log("Area of a triangle is:", area);


// comparison operators
let x = 5;
let y = "5";

console.log(x == y);  // true Loose equality → compares value only (ignores type)
console.log(x === y);  // false Strict equality → value AND type must match
console.log(x != y); // false Loose inequality → values are equal, so it's false
console.log(x !== y); // true Strict inequality → types differ, so it's true

//logical operators

let age = 10;
let hasID = true;

if(age >= 16 && hasID){
    console.log("Eligible to have a conversation");
}else{
    console.log("Still too young for such conversations.")
}

let isLoggedIn = true;
let isVerified = false;

if ( isLoggedIn || isVerified){
    console.log("Welcome to our platform");
}else{
    console.log("Please sign up to join our platform");
}

let myname = "Tendo Calvin";
let age1 = 23;
let isStudent = true;

console.log(`Hello, my name is ${myname}. I am ${age1} years old.`)
console.log(`Are you a student ? ${isStudent}`);

// user info collector
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your full name? ", function (fullName) {
    rl.question("How old are you? ", function (age) {
      rl.question("Which country do you live in? ", function (country) {
        rl.question("What is your favorite hobby? ", function (hobby) {
          rl.question("What do you do (student, engineer, etc)? ", function (profession) {
            age = Number(age);
            console.log("\n🔹🔹🔹 PERSONAL PROFILE 🔹🔹🔹");
            console.log(`👤 Name: ${fullName}`);
            console.log(`🎂 Age: ${age}`);
            console.log(`🌍 Country: ${country}`);
            console.log(`💼 Profession: ${profession}`);
            console.log(`🎯 Hobby: ${hobby}`);
  
            if (age < 13) {
              console.log("📌 You are categorized as a *child*.");
            } else if (age < 20) {
              console.log("📌 You are categorized as a *teenager*.");
            } else if (age < 60) {
              console.log("📌 You are categorized as an *adult*.");
            } else {
              console.log("📌 You are categorized as a *senior citizen*.");
            }
  
            rl.close();
          });
        });
      });
    });
  });



//let userName = prompt("what is your name?");
//let userAge = prompt("What's your age?");

// age = Number(age);
//console.log(`Hello ${userName}, you're ${userAge} years old.`)

//if(Age < 12){
//    console.log("You're an infant");
//}else if(Age >= 13 && Age <= 19){
//    console.log("You're a teenager!");
//}else{
//    console.log("You're a grown up person, get your shit together!");
//}



