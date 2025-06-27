let usersChosenColor = 'blue';
let defaultColor = 'green';

const currentWebsiteColor =  usersChosenColor || defaultColor;
console.log(currentWebsiteColor);

// operator precedence.
let n = (5 + 4) * 5;
console.log(n)


let a = 10;
let b =4;

console.log("addition:",a + b);
console.log("subraction:", a - b);
console.log("division:", a / b);
console.log("multiplication:", a * b);
console.log("modulus:", a % b);
console.log("exponential:", a ** b);

let points = 50;

points = points - 10;
console.log("subratcion:", points);


points += 10;
console.log("addition:", points);




points /= 10;
console.log("division:", points);

points %= 10;
console.log("modulus:", points);

// mini challenge
let base = 12;
let height = 20;
let area = (base * height) / 2;
console.log("Area of a triangle is:", area);


// comparison operators
let x = 5;
let y = "5";

console.log(x == y);  // true Loose equality → compares value only (ignores type)
console.log(x === y);  // false Strict equality → value AND type must match
console.log(x != y); // false Loose inequality → values are equal, so it's false
console.log(x !== y); // true Strict inequality → types differ, so it's true

//logical operators

let age = 10;
let hasID = true;

if(age >= 16 && hasID){
    console.log("Eligible to have a conversation");
}else{
    console.log("Still too young for such conversations.")
}



