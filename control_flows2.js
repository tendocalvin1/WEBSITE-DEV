// conditionals: if,else,switch;

// basic if statement.
let age = 23;
if(age >= 18){
    console.log("You're an adult!");
}

// if else statement
let score = 0;
if (score >= 60){
    console.log("Pass");
}else{
    console.log("Fail");
}

// else if statement
let temp = 7;
if(temp < 0){
    console.log("Freezing");
}else if(temp < 20){
    console.log("Cold");
}else{
    console.log("warm");
}

// 4. Checking multiple conditions
let loggedIn = true, isAdmin = false;
if(loggedIn && isAdmin){
    console.log("User Access");
}else{
    console.log("Admin Access");
}

// 5. Nested if
let num = 24.0;
if(num > 0){
    if(num % 2 ===0){
        console.log("Even Positive");
    }else{
        console.log("Odd positive");
    }
}

// 6. Ternary operator
let points = 74.99999;
let grade = points >= 75 ? "Distinction" : "Try Again"; 
console.log(grade);

// 7. Switch statement
let day = 'Sunday';
switch(day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("Still Early");
        break;
    case "Friday":
        console.log("Almost Weekend");
        break;
    case "Saturday":
        console.log("Weekend");
        break;
    case "Sunday":
            console.log("Praising God on this day");
            break;
    default:
        console.log("Midweek Day");
}

let job = 'Data Engineer'
switch(job){
    case 'Data Scientist':
        console.log("Design models that predict trends");
        break;
    case 'CyberSecurity Analyst':
        console.log("Protects systems against any malicious attacks");
        break;
    case 'Salesperson':
        console.log("Talks to customers and persudaes them so that a product can be bought");
        break;
    case 'Software Engineer':
        console.log("Manages and controls systems of the comapany and maintains the system running.");
        break;
    default:
        console.log("Lectures and mentors students.");
}

// 8. Switch with numbers
let code = 3;
switch(code){
    case 1:
        console.log("low");
        break;
    case 2:
        console.log('medium');
        break;
    case 3:
        console.log('high');
        break;
    default:
        console.log('invalid code');
}

// 9. Using logical OR
let username = '';
if(username ==='' || username === null){
    console.log("Please enter your name please!");
}

// 10. Using NOT
let subscribed = false;
if (!subscribed) console.log("You need to subscribe!");

let marks = 68;
if(marks >= 0 && marks <= 30){
    console.log("Grade of an F");
}else if(marks >=31 && marks <= 45){
    console.log("Grade of an E");
}else if(marks >= 46 && marks <= 55){
    console.log("Grade of a D");
}else if(marks >= 55 && marks <= 65){
    console.log("Grade of a C");
}else if (marks > 65 && marks <= 70){
    console.log("Grade of a C++");
}else if(marks >70 && marks <= 80){
    console.log("Grade of a B");
}else{
    console.log("Grade of an A");
}
