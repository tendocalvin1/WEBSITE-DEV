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
