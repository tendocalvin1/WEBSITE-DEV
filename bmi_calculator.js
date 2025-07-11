

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your height in metres ?", function(heightInput){
    rl.question("What is your weight in kilograms ?", function(weightInput){
        const height = parseFloat(heightInput);
        const weight = parseFloat(weightInput);
   
        if(isNaN(weight)  || isNaN(height) || height <= 0 || weight <= 0){
            console.log("Please enter positive numbers for height and weight");
            rl.close();
            return;
        }
        const BMI = weight / (height * height); 
        console.log(`Your BMI is: ${BMI}`)
        if(BMI < 18.5){
            console.log("You are underweight my comrade");
        }else if(BMI >= 18.5 && BMI <= 24.9){
            console.log("You have a normal weight my friend");
        }else if(BMI >= 25 && BMI <= 29.9){
            console.log("You are overweight my comrade");
        }else{
            console.log("You are obese");
        }

            rl.close();
        });
});
    



 


    