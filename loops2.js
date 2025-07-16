// While and For
// while loop syntax
//while(condition){
//code
// so called loop-body }
//

let i = 0;
while(i < 5){
    console.log(i);
    i ++;
}

// do...while loop
//do{
// loop body
//}while(condition);
let m = 0;
do{
    m ++;
    console.log(m);
}while(m < 3);

let z = 5;
do{
    z ++;
    console.log(z);
}while(z < 8);


let r = 10;
while(r < 15){
    r ++;
    console.log(r);
}


let C = 30;
do{
    C ++;
    console.log(C);
}while(C < 33);

// for loop
// syntax
// for (begin; condition; step) {
    // ... loop body ...
//  }


for(let i = 0; i < 2; i++){
    console.log(i);
}

// begin 	let i = 0 	Executes once upon entering the loop.
// condition 	i < 2 	Checked before every loop iteration. If false, the loop stops.
// body 	console.log(i) 	Runs again and again while the condition is truthy.
// step 	i++ 	Executes after the body on each iteration.



// breaking the loop
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;

function askNumber() {
    rl.question("Enter a number (or press enter to finish): ", (value) => {
        if (value === "") {
            console.log("Sum:", sum);
            rl.close();
        } else {
            sum += Number(value);
            askNumber(); // ask again
        }
    });
}

askNumber();
