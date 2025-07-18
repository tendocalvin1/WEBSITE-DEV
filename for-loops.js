// for loops in JS
// for loop = repeat some code a LIMITED amount of times

// with CONTINUE, we can skip an iteration.
// with BREAK , it means that we are going to stop running the loop
for(let i = 2; i <= 16; i++){

    if(i === 13){
        continue;
    }else{
        console.log(i)
    }
   
}


for(let i = 2; i <= 15; i++){

    if(i === 10){
        break;
    }else{
        console.log(i)
    }
   
}