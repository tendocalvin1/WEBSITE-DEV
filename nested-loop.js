// Nested loop
// A nested loop is just having a loop inside another loop 

for(i = 0; i < 3; i++){
    for(j = 10; j <= 15; j++){
        console.log(j);
    }
    console.log('\n');
    
}



for (let l = 1; l <= 10; l++){

    let row = ''; // Empty string to hold one line of results
    for(let m = 1; m <= 10; m++){

        row += String(l * m).padStart(5, '');  
    }

    console.log(row);  // print the full row. 
}