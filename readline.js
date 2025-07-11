// // practicing read-line in Node.js 
// const readline = require('readline'); //1. import the module

// // 2. Create an interface for input/output
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // 3. Ask a question
// rl.question("What is your name ?", function(name){
//     console.log(`Hello, my name is ${name}.`);

//     rl.close(); // 4. close the input interface

// });

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("What team do you support ?", function(club){
//     console.log(`The team that I support is called ${club}`);

//     rl.close();
// });


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl.question("Enter The first number:", function(number_one){
//     rl.question("Enter the second number:", function(number_two){
//         const addition = parseFloat(number_one) + parseFloat(number_two);
//         console.log(`The total sum of the two figures is ${addition}.`);
//         rl.close();
//     });
// });

// const readline = require('readline');
// rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl.question("Enter a number:", function(number){
//     const digit = parseFloat(number);
//     if (number % 2 === 0){
//         console.log("The number is even");
//     }else{
//         console.log("The number is odd.");
//     }
//     rl.close();
// });

// simple age validator
const readline = require('readline');
rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
});;
rl.question("What is your age please ?", function(number){
    const age = parseFloat(number);
    if (age < 18){
        console.log("This is a child, access denied!");
    }else{
        console.log("Access granted, You know what you're doing!");
    }
    rl.close();
})



