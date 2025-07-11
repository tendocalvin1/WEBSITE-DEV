// break and continue
// 1. break in for loop
for(i = 0; i < 5; i++){
    if(i ===3) break;
    console.log(i);
}

// 2. continue in for loop
for(i = 2; i < 6; i++){
    if(i === 3)continue;
    console.log(i);
}

// 3. break in while loop
let k = 0 ; 
while(k < 5){
    if(k === 2) break;
    console.log("k in", k);
    k++;
}

// continue in while loop
let m = 0
while(m < 4){
    m ++;
    if(m === 1) continue;
    console.log("m in", m);
    
}

// 5. break in nested loop
for(let i = 1; i < 4; i++){
    for(let j = 1; j < 4; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}

// 6. Label with break
outer: for(let a =0; a < 3; a++){
    for(let b = 0; b < 3; b++){
        if (b === 3)break outer;
        console.log(a,b);
    }
}

// 7. break with condition
for(let i = 10; i >= 0; i--){
    if(i ===5) {
        console.log("Reached midpoint");
        break;
    }
    console.log(i);
}


// simulate search in array
let fruits = ['apple', 'banana','grape']
for(let fruit of fruits){
    if(fruit === 'banana'){
        console.log("found the banana!");
        break;
    }
}