// function = A section of resuable code
//            Declare code once, use it whenever you want.
//            Call the function to execute the code
//            Functions are like two people calling each other.


function happyBirthday(username, age){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log(`Happy birthday dear ${username}`);
    console.log(`You are ${age} years old`);
}

happyBirthday("Tendo", 23);
happyBirthday('Wirtz', 22);



function add(x, y){
    let result = x + y;
    return result;
}

console.log("The result of this addition is:" , add(2, 5));


function subtract(x, y){
    let result = x - y;
    return result;
}

console.log("The result of this subtraction is:" , subtract(2, 5));


function multiplication(x, y){
    let result = x * y;
    return result;
}

console.log("The result of this multiplication is:" , multiplication(2, 5));

function division(x, y){
    let result = x / y;
    return result;
}

console.log("The result of this division is:" , division(2, 5));

function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(16));


function isValidEmail(email){
    if (email.includes('@')){
        return true;
    }else{
        return false;
    }
}

console.log(isValidEmail('tendogmail.com'));
console.log(isValidEmail('Zuckerburg@gmail.com'));
console.log(isValidEmail('Musk.com'));