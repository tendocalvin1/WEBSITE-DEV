// function declaration = define a reusable block of code that performs a specific task


// function expressions = A way to define functions as values or variables

// Function expressions are used in the following ways;
// high-order functions
// call-backs in asynchronous functions
// closures
// event listeners

const hello = function(){
    console.log("Hello");
}
hello();

setTimeout(function(){
    console.log("Amara!")
}, 3000);


const numbers = [1,2,3,4,5,6];
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
console.log(cubes);

const EvenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
})

console.log(EvenNumbers);


const OddNumbers = numbers.filter(function(element){
    return element % 2 !== 0;
})

console.log(OddNumbers);