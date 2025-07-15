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
let age = 45;

if(age > 18){
    AccessAllowed = true;
}else{
    AccessAllowed = false;
}

console.log(AccessAllowed);