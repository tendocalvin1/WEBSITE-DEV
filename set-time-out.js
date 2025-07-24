// ✅ What is setTimeout() in JavaScript?
// setTimeout() is used to delay the execution of a function by a given number of milliseconds
//  (1 second = 1000 ms).

// syntax
// setTimeout(function, delay);


setTimeout(() => {
    console.log("This runs after 2 seconds.");
}, 2000); // 2000 ms = 2 seconds

// You can also define the function separately and pass it in:
function greet(){
    console.log('Hello after 3 seconds');
}

setTimeout(greet, 3000);
