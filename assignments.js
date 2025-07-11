
let name = "Tendo Calvin";
let age = 23;
const origin = "Uganda";
console.log(`Hello, my name is ${name}. I am ${age} years old and I live in ${origin}.`);

let Celsius = 30;
let Fahrenheit = (Celsius * 9/5) + 32;
console.log("30 degrees celsius is equal to:", Fahrenheit);

// simple interest calculator [formula: SI = P*R*T]
let principle = 30000;
let rate = 0.02
let time = 2;
let simple_interest = (principle*rate*time);
console.log("The simple interest from this transaction is:", simple_interest);

// check even or odd
let number = 51;
if (number % 2 == 0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

// Area of a circle
let radius = 6;
const PI = 3.14159;
Area_of_a_circle = (PI * radius * radius);
console.log("The area of the circle is:",Area_of_a_circle);

//  Compare Two Numbers
//Prompt two numbers from the user. Output which number is bigger, or if they’re equal.
let num1 = 23;
let num2 = 24;
if (num1 == num2){
    console.log("These numbers are equal");
}else if(num1 != num2){
    console.log("These numbers are not equal");
}else{
    console.log("Wrong input please!");
}

// check for voter Eligibility.
let age_one = 7;
if (age_one >= 18){
    console.log("Eligible to vote");
}else {
    console.log("Not Eligible");
}

// Swapping Two Variables
// Swap values of two variables without using a third variable.
let a = 18;
let b = 16;
a = a + b;
b = a - b;
a = a - b;

console.log("a:", a);
console.log("b:",b);

// Swap values of two variables using a third variable.
let c = 18;
let d = 16;

let temp = c; // Store c's value temporarily
c = d;        // Now c gets d's value (16)
d = temp;     // d gets the original c's value (18)

console.log("c:", c); // 16
console.log("d:", d); // 18

// Build a Simple Calculator
// Ask the user to enter two numbers and an operator (+, -, *, /), then return the result.
function addition(digit1, digit2){
    return digit1 + digit2;
}
console.log(addition(4,2));

let m = 45;
let n = 5;
console.log("addition:", m + n);
console.log("division:", m / n);
console.log("multiplication:", m * n);
console.log("subtraction:", m - n);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      let result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
          break;
        default:
          result = "Invalid operator!";
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});


