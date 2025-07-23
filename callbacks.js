// Callback = A function passed to another function to be executed later
// Often used in asynchronous operations (e.g. file reading, network requests, DB queries)

// Simple example of using a callback
function hello(callback) {
    console.log('Hello!');
    callback(); // Executes the callback function
}

function wait() {
    console.log('Wait for me please!');
}

hello(wait);  // "Hello!" then "Wait for me please!"


// Another example
function happyBirthday(callback) {
    console.log("Happy birthday babe!");
    callback(); // Executes 'age' after birthday wish
}

function age() {
    console.log("I am 23 years old now.");
}

happyBirthday(age);  // "Happy birthday babe!" then "I am 23 years old now."


// Sum function using callback to display the result
function displayconsole(result) {
    console.log(`The sum of the two digits is: ${result}`);
}

function displaypage(result) {
    document.getElementById('myH1').textContent = result;
}

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

// Console output
sum(displayconsole, 1, 4);  // "The sum of the two digits is: 5"

// DOM output (make sure <h1 id="myH1"></h1> exists in your HTML)
sum(displaypage, 1, 4);  // Will display 5 on the page
