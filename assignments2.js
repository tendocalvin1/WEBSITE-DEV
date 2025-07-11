// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What is your weight (in kg)? ", function (weight) {
//   rl.question("What is your height (in meters)? ", function (height) {
//     weight = parseFloat(weight);
//     height = parseFloat(height);

//     let BMI = weight / (height * height);
//     let result;

//     if (BMI < 18.5) {
//       result = "Underweight";
//     } else if (BMI >= 18.5 && BMI <= 24.9) {
//       result = "Normal weight";
//     } else if (BMI >= 25 && BMI <= 29.9) {
//       result = "Overweight";
//     } else if (BMI >= 30) {
//       result = "Obese";
//     } else {
//       result = "Invalid input";
//     }

//     console.log(`Your BMI is: ${BMI.toFixed(2)}`);
//     console.log(`You are categorized as: ${result}`);

//     rl.close();
//   });
// });


// fake login prompt
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// credentials
const storedUsername = 'calvin1';
const storedPassword = '12345';

rl.question("What is your username ? ", function (InputUsername) {
  rl.question("What is your password ? ", function (InputPassword) {

    if(InputUsername === storedUsername && InputPassword === storedPassword){
      console.log("Welcome Back!");
    }else{
      console.log("Access Denied!");
    }
    rl.close();
  });
});








