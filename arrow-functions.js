// arrow functions = a concise way to write functions
//                   good for simple functions that you only use once .
//                   (parameters) => code


function hello(username){
    console.log(`Hello ${username}`)
}

hello('Tendo');

// Example of an arrow function
const Hello = (name, age) => {console.log(`Hello ${name}`)
                         console.log(`You are ${age} years old`)};
Hello('Davinah', 26);


const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2))
console.log(squares);

const digits = [1,2,3,4,5,6];
const cubes = digits.map((element) => Math.pow(element, 3))
console.log(cubes);

const EvenNumbers = digits.filter((element) => element % 2 === 0)
console.log(EvenNumbers);

const OddNumbers = digits.filter((element) => element % 2 != 0)
console.log(OddNumbers);

const total = digits.reduce((accumulator,element) => accumulator + element)
console.log(total);


