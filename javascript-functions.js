// function declarations.
function greet(){
    console.log("Hello Tendo !");
}

greet(); // calling the function.

// function expression
// this involves storing a function inside a variable.

const greet1 = function(){
    console.log("Hello Gareth Southgate!");
}
greet1();


// arrow functions (ES6+)
const greet3 = () =>{
    console.log("Hello David Beckham")
}

greet3();

// Parameters vs Arguments
// 🔹 Parameters:
// The placeholders/variables you define when declaring the function.

// 🔹 Arguments:
// The actual values you pass when calling the function.

// 🔹 Real-Life Analogy:
// Think of parameters as blanks in a form and arguments as the real answers you fill in.


function welcome(name){
    console.log("Welcome, " + name + "!");
}
welcome("Arnold"); //"name" is the parameter, "Arnold" is the argument



// return values.
// concept: Functions can send  back a value using the return key
function add(a, b){
    return a + b;
}
let sum = add(6, 5)
console.log(sum);

// combining concepts in a real app (eg BMI Calculator)
// Arrow functions with parameters.
const CalculateBMI = (weight, height) =>{
    const BMI = weight / (height * height);
    return BMI
}
// call the function with arguments
let result = CalculateBMI(70, 1.75); 
console.log("Your BMI is:", result.toFixed(3));

function isEven(number){
    if(number % 2 === 0){
        console.log("This number is even");
    }else{
        console.log("This number is odd");
    }
}
isEven(40);
