// string conversion
// string conversion happens when we need the sting form of a value

let value = true;
console.log(typeof value); // outputs a boolean

value = String(value);
console.log(typeof value); // outputs string since The variable value has been associated with the string data type


// numeric conversion
// numeric conversions in mathematical functions and expressions happen automatically
let division = "6" / "2";
console.log(division);

// We can use the Number(value) function to explicitly convert a value to a number
let str = '123';
console.log(typeof str); // outputs a string

let num =  Number(str);
console.log(typeof num); // outputs number 

let age = Number("An arbitrary string instead of a number");
console.log(age);

// Boolean conversions
// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

