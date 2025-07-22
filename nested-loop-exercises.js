// Exercises on nested loops

for(i = 1; i < 4; i++){

     let row = '';
    for(j = 1; j < 4; j++){
         row += String(i * j).padStart(4, '');
    }
    console.log(row);
}


// for(i = 1; i < 4; i++){
//     for(j = 1; j <= 4; j++){
//         console.log(j);
//     }
//     //console.log('\n');
    
// }

// Create a nested loop that breaks both loops when l * m == 12 using a labeled break.
outerloop :for(l = 1; l <= 4; l++){
    let row = '';


    for(m = 1; m <= 4; m++){
        
    
    if(l * m === 12){
        console.log("Loop is breaking, it is 12!");
        break outerloop; // stop once l * m = 12
    }

    row += String(l * m).padStart(2, '');
}

    console.log(row);

}

// Use nested loops to print a multiplication table (1-5).

for(a = 1; a <= 5; a++){
    let row = '';
    
    for(b = 1; b <= 5; b++){
        row += String(a * b).padStart(4, '');
    }

    console.log(row);
}


// Use continue with a label to skip to the next outer loop when an inner condition is met.

outerloop : for(c = 1; c <= 5; c++){
    let row = '';

    for(d = 1; d <= 5; d++){
        if(c * d === 15){
            console.log("The loop is going to the next step, the result is now 15.");
            continue outerloop;
        }
        row += String(c * d).padStart(4, '');
    }
    console.log(row);
}

// Simulate going through 3 aisles in a store, each with 5 items. 
// Break out of all loops when item 4 is "rotten".

outerloop: for (let aisle = 1; aisle <= 3; aisle++) {
    let row = '';

    for (let item = 1; item <= 5; item++) {
        if (item === 4) {  // Simulate item 4 being rotten
            console.log(`Item 4 is rotten in aisle ${aisle}. Leaving the store.`);
            break outerloop;
        }

        row += `A${aisle}I${item} `.padEnd(8, ' '); // Represent each item (Aisle X, Item Y)
    }

    console.log("Checked:", row);
}


// 🧠 Explanation:

//     outerloop: is used to label the outer aisle loop.

//     If item === 4, we break out of both loops (because item 4 is "rotten").

//     padEnd(8, ' ') makes sure all item labels are evenly spaced.

//     You simulate each item with a clear name like A1I3 (Aisle 1, Item 3).


