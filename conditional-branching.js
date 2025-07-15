// the if statement
let year = 2025;
if(year == 2025){
    console.log("This is right")
}

// else clause
let month = 'July' ;
if( month == 'July'){
    console.log("You guessed it right!");
}else{
    console.log("How can you be so wrong!");
}

// else if clause

let job = 'Data Engineer';
if (job == 'Software Engineer'){
    console.log("This is the right path");
}else if(job != 'Software Engineer'){
    console.log("I told you not to bother trying");
}else{
    console.log("Try elsewhere");
}

let AccessAllowed;
let age = 16;

if(age > 18){
    AccessAllowed = true;
}else{
    AccessAllowed = false;
}

console.log(AccessAllowed);


let a = 1
let b = 2
let result;

if(a + b < 4){
    console.log("Below");
}else{
    console.log("Over");
}

let message;
let login ='';

if(login == "Employee"){
    console.log("Hello");
}else if(login == "Director"){
    console.log("Greetings");
}else if(login == ""){
    console.log("No Login");
}else{
    console.log("No credentials");
}