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

for(i = 0; i <= 5; i++){
    console.log(`Handing out book number ${i}`);
}


let water_level = 5;
while(water_level > 0){
    console.log(`Taking a sip... water level: ${water_level}`);
     water_level --;
}

// break statement
// Used to exit a loop early, even if the condition is still true.
// Analogy: You’re reading a book with 10 pages. You reach page 4 and feel tired — so you stop.
for(let page = 1; page <= 10; page ++){
    if(page === 5){
        console.log("I am tired. I am stopping now");
        break;
    }
    console.log(`Reading page: ${page}`);
}

// continue statement
// used to skip the current iteration and move to the next
//  Analogy: You’re checking 10 boxes. You skip box #6 because it’s already empty.
for(let box = 1; box <= 10; box ++){
    if(box === 6){
        console.log("Skipping box number 6");
        continue;
    }
    console.log(`Checking box ${box}`)
}