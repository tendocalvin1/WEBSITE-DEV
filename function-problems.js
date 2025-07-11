// Number One

function calculate(a, b, operation){
  function addition(a, b){
    return a + b;
  }
  function subtraction(a, b){
    return a - b;
  }

  function multuplication(a, b){
    return   a * b; 
  }

  function division(a, b){
    if (b === 0){
        console.log("This is an error as you cannot divide a number by zero");
    }else{
        return a / b;
    }
  }


if(operation === "add"){
    return addition(a, b);
}else if(operation === "subtract"){
    return subtraction(a, b);
}else if(operation === "multiply"){
    return multiplication(a, b);
}else if(operation === "divide"){
    return division(a, b);
}else {
    console.log("This is an invalid operation");
}
}

console.log(calculate(2, 6,"subtract"));
console.log(calculate(2, 4,"divide"));


// number two
function assignGrade(score){
    if(score > 0 && score <= 35){
        console.log("This is an F");
    }else if(score > 35 && score <= 50){
        console.log("This is an E");
    }else if(score > 50 && score <= 60){
        console.log("This is a D");
    }else if(score > 60 && score <= 70){
        console.log("This is a C");
    }else if (score > 70 && score <= 80){
        console.log("This is a B");
    }else{
        console.log("This is an A");
    }
}
assignGrade(90);

// number 5
function numberToWords(num){
    if(num === 1){
        return "This is one";
    }else if(num === 2){
        return "This is two";
    }else if(num === 3){
        return "This is three";
    }else if(num === 4){
        return "This is four";
    }else if(num === 5){
        return "This is five";
    }else if (num === 6){
        return "This is six";
    }else if (num === 7){
        return "This is seven";
    }else if(num === 8){
        return "This is eight";
    }else if (num === 9){
        return "This is nine";
    }else{
        return "Invalid input";
    }
}

console.log(numberToWords(2));

// number six
function greetUser(name, timeOfDay){
    if(typeof name !== "string" || typeof timeOfDay !== "string"){
        console.log("Invalid input: Both name and time of day should be strings.");
        return;
    }
    if(timeOfDay === "morning"){
         console.log(`Good morning, ${name}!`);
    }else if(timeOfDay === "afternoon"){
        console.log(`Good afternoon, ${name}!`);
    }else if(timeOfDay === "evening"){
        console.log(`Good evening, ${name}!`);
    }else{
        console.log("Invalid time of the day");
    }
}
greetUser("Becks" , "morning");

// number seven
function ScopeDebugger() {
    function outer() {
        let message = "Hello from outer function";

        console.log("Outer:", message); // prints outer's message

        function inner() {
            let message = "Hello from inner function";
            console.log("Inner:", message); // prints inner's message
        }

        inner();
    }

    outer();
}
// number eight
function FilterEven(number){
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    if(number % 2 === 0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
}
FilterEven(2);



// another way of doing number eight
function FilterEvenNumbers(numbers){
    const EvenNumbers = [];

    for(i = 0; i < numbers.length ; i++){
        if(numbers[i] % 2 === 0){
            EvenNumbers.push(numbers[i]);
        }
    }
    return EvenNumbers;
}

// usage
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = FilterEvenNumbers(numbersArray);
console.log("Even numbers:", evenNumbers);

// number 9

function factorial(n){
    if(n < 0){
        console.log("This is an invalid input, please enter a non negative number");
        return;
    }
    if (n === 0){
        return 1; // Base case: 0! is 1
    }
     // Recursive case: n * factorial(n - 1)
    return n *factorial(n - 1);
}

console.log(factorial(6));


// number ten
function formatName(firstName, lastName){
    if(firstName === "Tendo"){
        return `This is a valid first name`;
        
    }else{
        return `This is an invalid first name`;
        
    }
    if(lastName === "Calvin"){
        return `This is an valid last name`;
        
    }else{
        return `This is an invalid last name`;
    }
}
console.log(formatName("Daniel", "Agger"));

// correction for number 10.
//  Final Answer Using Arrow Function & String Manipulation:
const FormatName1 = (fname, lname) =>{
    const capitalize = (str) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return `${capitalize(fname)} ${capitalize(lname)}`
}

// Example usage
console.log(FormatName1("calvin", "tendo")); // Output: "Calvin Tendo"
console.log(FormatName1("DANIEL", "agger")); // Output: "Daniel Agger"