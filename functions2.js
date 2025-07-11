//  Functions: declarations, expressions, arrow functions
function greet(){
    console.log("Hello !");
}
greet();

// function with parameter
function sayHi(name){
    console.log("Hi "+  name);
}

sayHi("Arnold");

// return values

function add(x,y){
    return x + y;
}
console.log(add(2,3));


// function expresssion
const multiply = function(a, b){
    return a * b;
}
console.log(multiply(2,3));


// arrow funtion
const subtract = (a, b) => a - b;
console.log(subtract(4, 10));

// arrow with no parameters
const hello = () => console.log("Hi there!")
hello();

// arrow with a block body
const square = (n) =>{
    return n * n;
}
console.log(square(8));

// anonymous function in setTimeout
setTimeout(function (){
    console.log("5 seconds passed")
}, 5000);


// callback function
function doMath(x, callback){
    return callback(x);
}
console.log(doMath(5, (n)=> n * n));

// function with default param
function welcome(user = "Guest"){
    console.log(`Welcome, ${user}`);
}
welcome("Tendo");
welcome();



//  Parameters vs Arguments & Function Scope
// Examples
// parameters Vs Arguments
function greetUser(name){
    console.log("Hello " + name);
}
greetUser("Tendo"); // "Tendo" is the argument

// multiple parameters
function add(a, b){
    return a + b;
}
console.log(add(5,8));

// default parameters

function login(user = 'guest'){
    console.log("Logged in as", user);
}
login();
login("Tendo");


// function scope(local)
function localScope(){
    let secret = 'top-secret';
    console.log(secret);
}


// global scope
let greeting = "Hello";
function Hi(){
    console.log("Hello");
}

Hi();


// variable shadowing
let name = 'global';

function printName(){
    let name = 'local';
    console.log(name); // local
}
printName();

// return early
function isEven(n){
    if(n % 2 === 0){
        return true;
        return false;
    }
}

// mutate global variable
let counter = 0
function increment(){
    counter ++;
}
increment();
console.log(counter);


























































































