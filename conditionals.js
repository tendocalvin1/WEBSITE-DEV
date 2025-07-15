// Conditionals exercise
let number = -1;

if(number > 0){
    console.log("The number is positive");
}else if(number < 0){
    console.log("The number is negative");
}else{
    console.log("The number is zero");
}

let marks = 40;
if(marks > 90 && marks <= 100){
    console.log("The student has scored an A");
}else if(marks >= 80 && marks <= 89){
    console.log("The student has scored a B");
}else if(marks >= 70 && marks <= 79){
    console.log("The student has scored a C");
}else if(marks >= 60 && marks <= 69){
    console.log("The student has scored a D")
}else{
    console.log("The student has scored an F");
}

// temperature feedback
let temperature = 31;

if(temperature > 30){
    console.log("It is hot");
}else if(temperature > 20 && temperature < 30){
    console.log("Nice weather");
}else if(temperature < 20){
    console.log("It is cold");
}else{
    console.log("it is freezing");
}
