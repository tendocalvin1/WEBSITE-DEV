// break & continue exercises


// for(let i = 1; i <= 100; i ++){
//     if(i === 42){
//         break;
//     }else{
//         console.log(i);
//     }
// }

// for( let m = 1; m <= 50; m++){
//     if(m % 5 === 0){
//         continue;
//     }else{
//         console.log(m);
//     }
// }

// Loop through an array of fruits. Stop when you find "banana".

let fruits = ['apples','pineapples','banana','berries','mangoes'];
for(i = 0; i < fruits.length; i++){
    
    if(fruits[i] === 'banana'){
        console.log("Banana found, stop lopping!");
        break;  // stop the loop when banana is found
    }else{
        console.log(fruits[i]);
    }
}


let cars = ['tesla','buggati','rolls-royce','range-rover','masserati'];
for(i = 0; i < cars.length ; i++){
    if(cars[i] === 'buggati'){
        console.log("buggati found!, stop lopping");
        break;  // stop the loop when buggati is found
    }else{
        console.log(cars[i]);
    }
}


// Loop from 1 to 30. Skip numbers divisible by 3 but print all others

for(i = 1; i <= 30; i++){
    if(i % 3 === 0){
        continue;
    }else{
        console.log(i);
    }
}




