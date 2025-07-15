// operators
let x = 1;
x = -x;
console.log(x); // The result is -1

let z = 1, y = 3;
console.log(y - z); // the result is 2

// remainder %
// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the "remainder" of the integer division of a by b.
// Examples
console.log(5 % 2);  // 1, the remainder of 5 divided by 2
console.log(8 % 3);  // 2, the remainder of 8 divided by 3
console.log(8 % 4);  // 0, the remainder of 8 divided by 4


// Exponential
// The exponentiation operator a ** b raises a to the power of b.
// examples

console.log(2 ** 2); // output is 4
console.log(2 ** 3); // output is 8
console.log(2 ** 4); // output is 6

// Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

// For example, a square root is an exponentiation by ½:

console.log(4 **(1/2));// square root of 4 is 2
console.log(8 **(1/3));// cube root of 8 is 2

// string concatenation with binary
// Let’s meet the features of JavaScript operators that are beyond school arithmetics.
// Usually, the plus operator + sums numbers.
// But, if the binary + is applied to strings, it merges (concatenates) them:

let word = "my" + "string";
console.log(word);

// Note that if any of the operands is a string, then the other one is converted to a string too.
console.log('1' + 2); // output is '12' one two not twelve.
console.log(2 + '1'); // output is '21 two one not twenty one
console.log("1" + 2 + 2); // output is '122' one two two 

// The binary + is the only operator that supports strings in such a way. 
//Other arithmetic operators work only with numbers and always convert their operands to numbers.

console.log( 6 - '2');// 4, converts '2' to a number
console.log('6' / '2');  // 3, converts both operands to numbers

let r = 1
console.log(r); // output is 1

let m = -2;
console.log(+m); // output is -2

console.log(+true); // output is 1
console.log(+"");  // output is 0

let apples = '2';
let oranges = '3';
console.log(apples + oranges);  // this outputs '23' coz it concatenates apples and oranges

let united = '3';
let city = '1';
console.log(+united + +city);  // this outputs 4

// chaining assignments
let a, b, c;
a=b=c= 2+2;
console.log(a);
console.log(b);
console.log(c);

// modify in place

// let f = 2;
// f = f + 5;
// f = f * 2;

// This notation can be shortened using the operators += and *=:
let f = 2;
f += 5; // now n = 7 (same as n = n + 5)
f *= 2; // now n = 14 (same as n = n * 2) 
console.log(f);  // 14