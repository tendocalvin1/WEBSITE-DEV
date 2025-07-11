
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Can you guess the number am thinking about ?",function(number){
    let digit = 4;
    let attempts = 0;
    if(number === 4){
        console.log("This is the right number");
        
    }else if(number > 0 && number <= 5){
        console.log("This is very close to the answer!");
    }else if(number > 5 && number <= 10){
        console.log("This is close to the answer");
    }else if(number > 10 && number <= 15){
        console.log("This is far from the answer");
    }else if(number > 15 && number <= 20){
        console.log("This is too distant from the answer");
    }

    // number of attempts
console.log(`The total mumber of attempts is ${attempts}`);

if(attempts === 1){
    console.log("You have guessed it in one attempt, keep the spirit");
    attempts ++;
    
}
   

if (attempts === 2){
    console.log("You have guessed it in 2 attempts, keep the spirit");
    attempts ++;
    
}

if (attempts === 3){
    console.log("You have guessed it in 3 attempts, keep the spirit");
    attempts ++;
    
}


if (attempts === 4){
    console.log("You have guessed it in 4 attempts, keep the spirit");
    attempts ++;
   
}


    rl.close();    
})