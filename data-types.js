// number 
let n = 123;
n = 12.345;
console.log(n);

let infinity = 1 / 0;
console.log(infinity);

// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
let division = 'not a number' / 2;
console.log(division);

// NaN is sticky. Any further mathematical operations on NaN returns NaN :
let addition = NaN + 1;
console.log(addition);

let multiplication = NaN * 3;
console.log(multiplication);

let expression = NaN ** 0;
console.log(expression); // result is one(1)

// string in JavaScript
let str = "Hello";
console.log(str);

let str2 = 'Single quotes are okay too';
console.log(str2);

let name = 'John';
console.log(`Hello ${name}`);

let sum = 1 + 2;
console.log(`The result of the expression is ${sum}`);

// boolean type (logical type)
let nameFieldChecked = true;
console.log(nameFieldChecked);

let ageFieldChecked = false;
console.log(ageFieldChecked);

// booleans can be used for comparisons.
let isGreater  = 4 > 1;
console.log(isGreater);

// null value 
let age = null;
console.log(age);

// NB: Null is a special value which represents "nothing", "empty" or "value unknown"

// the "undefined" value
// The literal meaning of undefined is value not assigned.

// if a variable is declared, but not assigned, then its value is "Undefined".

let length ;
console.log(length);

let height = 100;
height = undefined;  // However, this is not recommended in production and testing centres.
console.log(height);

// typeof operator
// This returns the type of operand.  It’s useful when we want to process values of different types differently or just want to do a quick check.
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"

let names = "Ilya Cole";
console.log(`Hello ${names}`); // outputs Hello  Ilya Cole

console.log('Hello ${names}'); // outputs Hello ${names}

console.log(`Hello ${'names'}`); // outputs hello names