//   Loops: for, while, do...while, for...in, for...of

//1.  for loop
// A for loop is best when you know in advance how many times you want to repeat a block of code.
//syntax 
//for (initialization; condition; update) {
    // code to execute
//}

for(let i= 0; i < 5; i++){
    console.log("Count:", i);
}

//2. while loop
// A while loop is best when you don’t know in advance how many times to loop — you repeat as long as a condition is true.
let n = 0;
while (n < 3){
    console.log("n is",n);
    n++;
}

// do while loop
let p = 34
do{
    console.log("p is", p);
    p++;
}while(p < 38);


for (r = 3; r < 6; r++){
    console.log("r is", r);
}

z = 0
while(z < 5){
    console.log("Z is",z);
    z++;
}

// 4. for...in (object keys)
let user = {name: "Calvin", age:23}
for (let key in user){
    console.log(`${key}: ${user[key]}`)
}

for(i = 2; i < 6; i ++){
    console.log(" I is", i);
}

let q = 3
while(q < 6){
    console.log("Q is", q);
    q++;
}

let S = 60
do{
    console.log("S is", S);
    S++;
}while(S < 65);



// 5. for...of (iterables)
let colors = ['red', 'blue', 'green']
for (let color of colors){
    console.log(color);
}

// 
// 6. Looping through string
for (let char of "JavaScript"){
    console.log(char);
}

// 7. Nested for loop
for(let i = 1; i <= 4; i++){
    for(let j = 1; j <= 2; j++){
        console.log(`i = ${i}, j = ${j}`)
    }
}

// 8. while with break
let count = 0;
while (true){
    if (count === 3) break;
    console.log("Break loop at", count);
    count ++
}

// 9. for with continue
for(i = 3; i<= 5; i++){
    if(i === 3)continue;{
        console.log("i is", i);
    }
}

// reversing an array.
let nums = [1,2,3,4]
for(let i = nums.length - 1; i >=0; i--){
    console.log(nums[i]);
}
