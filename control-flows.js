// if-else statement.
let priceOfChocolate = 1.99;
let hasAmountInCash = 0;

const canBuyChocolate =  hasAmountInCash >=  priceOfChocolate;

if (canBuyChocolate) {
    console.log("Enjoy your purchase!")
} else{
    console.log("You donot have enough money.")
}

hour = 18
if(hour >= 6 && hour <= 8){
    console.log("Serving Breakfast");
}else if (hour >= 9 &&  hour <=11){
    console.log("Sering Mid morning-tea.")
}else if(hour >=11 &&  hour <=13){
    console.log("Lectures")
}else if (hour >= 13 &&  hour <=14){
    console.log("Lunch time, please!")
}else{
    console.log("Dinner Time")
}


// switch-case statements


// job = "Cloud Engineer"
// if(job === 'Software Engineer'){
//     console.log("Designs Systems");
// }else if (job === 'Designer'){
//     console.log("Makes designs for the company")
// }else if(job === "Cloud Engineer"){
//     console.log("Deploys and manages files on the cloud")
// }else if (job === "DevOps Engineer"){
//     console.log("Deploys Applications on hosting platforms")
// }else{
//     console.log("Talks to customers")
// }


let job = 'Sales Rep';
switch(job){
    case "Software Engineer":
        console.log("Designs Systems and Architectures");
        break; 

    case "Designer":
        console.log("Makes designs for the company");
        break;

    case "Cloud Engineer":
        console.log("Deploys and manages files on the cloud");
        break;

    case "DevOps Engineer":
        console.log("Deploys Applications on hosting platforms");
        break;

    default:
        console.log("Talks to customers");

}
// Loops
// for loop- A for loop is executed so that a block of code is executed repeatedly.
// syntax for a for-loop
//{
//  for(let idx=0; idx < 100; idx++){
//  console.log(idx);
//}
//}  
let  numbers = [1,2,3,4,5,6,7]
for (let index = 0 ; index < numbers.length; index++){
    console.log(numbers[index]);
}

for (numbers = 10; numbers < 15; numbers++){
    console.log(numbers)
}

for (letters = 26 ; letters <= 35; letters++){
    console.log(letters);
}

// while loop
let figures = [90,91,92,93,94,95,96]
let index = 0;
while(index < figures.length){
    console.log(figures[index]);

    index++
}



