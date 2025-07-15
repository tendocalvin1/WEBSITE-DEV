// comparison operators in JavaScript.
let a = 0;
console.log(Boolean(a)); // false

// 0 is a falsy value in JavaScript.

// When you convert a (which is 0) to a Boolean using Boolean(a), it becomes false.

// Falsy values in JavaScript include:

// false, 0, "", null, undefined, NaN

let b = "0"; 
console.log(Boolean(b)); // true

// "0" is a non-empty string, and all non-empty strings are truthy in JavaScript.

// So, Boolean(b) is true.

// 📌 Even though "0" looks like zero, it's a string, not a number.

console.log(a == b); // true

// This is where type coercion (specifically with == aka loose equality) comes in.

//     a is 0 (number)

//     b is "0" (string)

//     When using ==, JavaScript tries to convert both sides to the same type.

// "0" (string) → becomes 0 (number)
// 0 == 0 → true

console.log( null == undefined ); // true
// or maths and other comparisons < > <= >=

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. 
// That’s why null >= 0 is true and null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, 
// without any conversions, 
// they equal each other and don’t equal anything else. 
// That’s why null == 0 is false.