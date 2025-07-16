// logical operators
// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

// For example:
let hour = 9;
if (hour < 10 || hour > 18){
    console.log("The office is closed");
}

let party = 12;
let isWeekend = true;
if(party < 10 || hour > 18 || isWeekend){
    console.log("The office is closed");
}

let Hour = 12;
let minute = 30;
if(Hour === 12 && minute === 30){
    console.log("The time is 12:30")
}

let num = 5;
if(num >= 10 && num <=20){
    console.log("Number is in this range");
}else{
    console.log("This number is out of range");
}

let years = 3;
let hasLicense = true;
if(years >= 18 && hasLicense === true){
    console.log("Eligible to drive");
}else{
    console.log("Not eligible to drive");
}

let isStudent = true;
let isSenior = false;

if(isStudent === false){
    console.log("The student gets a discount.");
}else{
    console.log("No discount for you please !")
}

let username = 'calvin';
let password = '1234';

if(username.trim() !== "" && password.trim() !== ""){
    if(username === 'calvin' && password === '1234'){
        console.log("Welcome to our site");
    }else if(username === '' && password === ''){
        console.log("Wrong credentials, please try again !");
    }else{
        console.log("username or password cannot be empty");
    }
}



