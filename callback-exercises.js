// callback exercises.
// Callback = A function passed to another function to be executed later
// Often used in asynchronous operations (e.g. file reading, network requests, DB queries)

// Create a function that takes a name and a callback, 
// then passes the name to the callback to be printed in uppercase.

function name(username, callback){
        console.log(`I am called ${username}`);
        callback(username);
}

function uppercase(name){
   console.log(name.toUpperCase())
}

name('Tendo', uppercase);

// Create a calculator function that takes two numbers 
//and a callback to perform addition, subtraction, multiplication, or division.

function calculate(callback, x,y){
        
        callback(x,y);
}

function addition(x,y){
        let result = x + y;
        console.log("The sum of the two numbers is:",result);
}

function subtraction(x,y){
    let result = x - y;
    console.log("The subtraction of the two numbers is:",result);
}


function multiplication(x,y){
    let result = x * y;
    console.log("The multiplication of the two numbers is:",result);
}

function division(x,y){
    if(y === 0){
        console.log("The diisor cannot be zero");
    }
    let result = x / y;
    console.log("The division of the two numbers is:",result);
}

calculate(addition, 4,5);
calculate(subtraction, 4,5);
calculate(division, 4,5);
calculate(multiplication, 4,5);

// Write a function that loops through an array and applies a callback to each element.

function array(callback){
    let teams = ['united','city','arsenal','liverpool','chelsea'];
    callback(teams);
}

function element(teams){
    for(let i = 0; i < teams.length;i++){
        console.log(teams[i]);
    }
}

array(element);

// Create a function that filters an array based on a condition provided by a callback.

function array2(callback){
    let names = ['tendo','calvin','aaron','musinguzi','dickson'];
    callback(names);
}

function digits(names){
    const capitalized_names = names.map((names) => names.charAt(0).toUpperCase() + names.slice(1));
    console.log(capitalized_names);
}

array2(digits);

// const school_names = ['tendo','calvin','christian','romero','arnold','trent','jurgen'];
// capitalized_names = school_names.map((school_names) => school_names.charAt(0).toUpperCase() + school_names.slice(1));
// console.log(capitalized_names);

// Implement a function that checks if any element in an array 
// satisfies a condition provided by a callback

function array3(callback){
    let countries = ['uganda','kenya','tanzania','rwanda','burudi','south sudan'];
    callback(countries);
}

function elements2(countries){
    const capitalized = countries.map((countries) => countries.toUpperCase());
    console.log(capitalized);
}

array3(elements2);


// Write a function that maps each element of an array using a callback and returns the new array.
function array4(callback){
    let numbers = [1,2,3,4,5,6,7,8,9];
    callback(numbers);
}

function elements3(numbers){
    const squares = numbers.map((element) => Math.pow(element, 2));
    console.log(squares);
}

array4(elements3);


function array5(callback){
    let numerals = [1,2,3,4,5,6,7,8,9];
    callback(numerals);
}

function elements4(numerals){
    const cubes = numerals.map((element) => Math.pow(element, 3));
    console.log(cubes);
}

array5(elements4);

// const cubes = digits.map((element) => Math.pow(element, 3))
// console.log(cubes);

// Create a function that simulates fetching data (using setTimeout) 
// and uses a callback to display the data.

function fetchData(callback) {
    setTimeout(() => {
        // Simulate some data
        const data = "My name is Tendo Calvin and I am a Software Engineer";

        // Call the callback with the data
        callback(data);
    }, 2000);
}

// Define your callback function here
function displayData(data) {
    // Display the data
    console.log('fetched data:', data);

}

// Call fetchData and pass your callback
fetchData(displayData);


setTimeout(() => {
    console.log("This runs after 2 seconds.");
}, 2000); // 2000 ms = 2 seconds

// You can also define the function separately and pass it in:
function greet(){
    console.log('Hello after 3 seconds');
}

setTimeout(greet, 3000)

// Create a function that takes a string and a callback, 
// and the callback determines whether to reverse or capitalize it.

function firstName(callback){
    let name = 'Arnold';
    callback(name);
}

function reverse(name){
    reversed_name = name.split('').reverse().join('');
    console.log(reversed_name);
}

function capital_letter(name){
    const capitalized = name.toUpperCase();
    console.log('Capital Letters:', capitalized);
}

firstName(reverse);
firstName(capital_letter);

// Implement a function that performs a countdown and 
// calls a callback when the countdown is complete.


// Write a function that takes multiple callbacks and runs them in order.
function hello(callback){
    let username = 'Arabella'
    console.log(`My name is ${username}`);
    callback(username);
}

function coming(username){
    console.log("I am on my way to that place!")
}

function wait(username){
    console.log("Wait for me, please!");
}

hello(coming);
hello(wait);

// Create a function that accepts a success callback and an error callback, 
// and randomly calls one of them.

function hello(successCallback, errorCallback) {
    const username = 'Darwin Nunez';
    console.log(`My name is ${username}`);

    // Randomly choose between success or error
    const success = Math.random() < 0.5;

    if (success) {
        successCallback();
    } else {
        errorCallback();
    }
}

function coming(username) {
    console.log(`${username} says: I have successfully conquered that place with my own hands.`);
}

function wait(username) {
    console.log(`${username} says: I did not get the job offer from that company.`);
}


// Call once and randomly get success or error
hello(coming, wait);




// Create a repeat function that takes a callback and repeats it a given number of times.

function repeat(callback, times) {
    for (let i = 0; i < times; i++) {
        callback();
    }
}

// Example usage:
function greet() {
    console.log("I'm being repeated!");
}

repeat(greet, 5); // Repeats greet() 5 times


// Write a function that simulates reading a file (using setTimeout) and returns the file content via a callback.

function read(callback){
    let content = 'The best club in the world is Paris Saint Germain';
    callback(content);
}
function displaycontent(content){
    setTimeout(() => {
        console.log("The required content is:", content);
    }, 3000);
}

read(displaycontent);

function greet(){
    console.log('Hello after 3 seconds');
}

setTimeout(greet, 3000)