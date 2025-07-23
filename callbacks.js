// callback = a function that is passed as an argument to another function
//             used to handle asynchronous operations like :
//              1. Reading a file
//              2. Network requests
//              3. interacting with databases .

//By using callbacks, we are guaranting that the function passed in as an argument will be executed next.


hello(wait);


function hello(callback){
    console.log('Hello !');
    callback();
}

function wait(){
    console.log('Wait for me please!');
}

function happyBirthday(callback){
    console.log("Happy birthday babe!");
    callback();
}

function age(){
    console.log("I am 23 years old now.");
}

happyBirthday(age);

function sum(callback,x, y){
    let result = x + y;
    callback(result);
}

function displayconsole(result){
    console.log(`The sum of the two digits is: ${result}`);
}

sum(displayconsole, 1, 4);