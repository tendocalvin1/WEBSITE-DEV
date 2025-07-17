let i = 1

for(i = 1; i <= 20; i++){
    console.log(i);
}

for (let m = 1; m <= 20; m++){
    if(m % 2 === 0){
        console.log(m);
    }
}

// Print the multiplication table of any number (e.g., 7) up to 10.

let number = 7;
for(z = 1; z <= 10; z++){
  console.log(`${number} * ${z} = ${number * z}`);
}

// Calculate and print the sum of numbers from 1 to n (user input)
let num = 1;
for(n =1; n <= 7; n++){
    console.log(`${num} + ${n} = ${num + n}`);
}

// Print all numbers between 1 and 100 divisible by both 3 and 5.

for (let s = 1; s <= 100; s++){
    if(s % 3 === 0 && s % 5 === 0){
        console.log(s);
    }
}

// Print all the letters in a word, one per line.
let word = 'Calvin';
for (let i = 0;  i < word.length; i++){
    console.log(word[i]);
}

//  B. Basic while Loop Practice

// // Ask the user to enter a password until it’s correct
// let correctPassword = '1234';
// let userInput;

// while(userInput !== correctPassword){
//     userInput = prompt("Enter the correct password:");
// }
// console.log("This is the correct password");



// let i = 0;
// while(i < 5){
//     console.log(i);
//     i ++;
// }


// Print all odd numbers between 1 and 50 using a while loop
let y = 1;
while(y < 50){
    if(y % 2 !== 0){
        console.log(y);
    
    }
    y ++;
}

// Keep asking the user for numbers and add them until they enter 0, then print the total sum.


