const numbers = [1,2,3,4,5,6];
doubled_numbers = numbers.map((element) => Math.pow(element, 2))
console.log(doubled_numbers);

const hello = (username) => console.log(`Hello ${username}`);
hello('Davinah');

const digits = [1,2,3,4,5,6];
odd_numbers = numbers.filter((element) => element % 2 !==0)
console.log(odd_numbers);

const names = ['Alison', 'Becker','Mo','Salah','Florian','Wirtz','Jeremy','Frimpong'];
count = names.filter((names) => names.length > 5)
console.log(count);


// Capitalize the first letter of each name in an array (e.g., ["alice"] → ["Alice"]).
const school_names = ['tendo','calvin','christian','romero','arnold','trent','jurgen'];
capitalized_names = school_names.map((school_names) => school_names.charAt(0).toUpperCase() + school_names.slice(1));
console.log(capitalized_names);


// Sum all even numbers in an array using reduce.
const nums = [1,2,3,4,5,6,7,8];
total_of_even_numbers = nums.reduce((sum,element) => {return element % 2 === 0 ? sum + element: sum;}, 0);
console.log(total_of_even_numbers);


// Write an arrow function that returns the larger of two numbers.
const GetLargerNumber = (a, b) => a > b ? a : b;
const whatsapp = [45, 56];
const larger_number = GetLargerNumber(whatsapp[0], whatsapp[1]);
console.log(larger_number);  


// Write a function using an arrow that returns true if a number is prime, otherwise false.
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
const all_numbers = [1,2,3,4,5,6,7,8,9];
const prime_numbers = all_numbers.filter(isPrime);
console.log(prime_numbers);

// Write an arrow function that takes an object {name, age} and returns "Name is [name] and age is [age]".
const greeting = (name, age) => console.log(`Hello my name is ${name} and I am ${age} years old`);
greeting("Tendo", 23);

// Given an array of words, use map and an arrow function to return an array of word lengths.
const words = ['tendo','calvin','christian','romero','arnold','trent','jurgen'];
word_lengths = words.map((words) => words.length);
console.log(word_lengths);

// .map() creates a new array by applying the arrow function to each element.

// word.length gets the number of characters in each word.
