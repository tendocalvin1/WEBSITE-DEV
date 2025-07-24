// ✅ 10 Advanced Callback Challenges

function step1(callback){
    let team = 'Paris Saint Germain';
    console.log(`My favourite team is ${team}`);
    callback(team); // pass team to the next step
}

function step2(team,callback){
    let league = 'French Ligue 1';
    console.log(`This team is always the first in ${league}`);
    callback();  // call the next step
}
function step3(){
    console.log('They are the current Champions league winners of 2024/25 season');
    
}

// Chain the functions
// This involves explicitly passing step3 as the callback to step2:
step1(function(team) {
    step2(team, step3);
});

// chain the functions : step1 -> step2 -> step3
// step1(function(team){
//     step2(team, function(){
//         step3();
//     });
// });

// 2. Callback Retry Mechanism

//    Write a function retry(callback, attempts) that tries to execute a callback,
//    but if it fails (throws an error), retries up to attempts times before giving up.

function retry(callback, successCallback, errorCallback, maxAttempts = 3) {
    let college = "Saint Mary's College Kisubi";
    console.log(`My alma mater is called ${college}`);
    let attemptsMade = 0;

    function tryCallback() {
        attemptsMade++;
        console.log(`Attempt ${attemptsMade} for ${college}`);

        // Simulate success or failure with Math.random()
        const success = Math.random() > 0.5; // 50% chance of success

        if (success) {
            callback(college); // Call the main callback
            successCallback(college); // Call success callback
        } else if (attemptsMade < maxAttempts) {
            console.log(`Attempt ${attemptsMade} failed, retrying ...`);
            setTimeout(tryCallback, 2000); // Retry after 2 seconds
        } else {
            errorCallback(college); // Call error callback after max attempts
        }
    }

    tryCallback(); // Start the retry process
}

function attempts(college) {
    console.log(`${college} is the best secondary school in Uganda and that is a well-known fact.`);
}

function successCallback(college) {
    console.log(`Success: ${college} operation completed successfully!`);
}

function errorCallback(college) {
    console.log(`Error: Failed to complete operation for ${college} after maximum retries.`);
}

// Call retry with all required callbacks
retry(attempts, successCallback, errorCallback);


//  Simulate Multiple Async Tasks (setTimeout)

// Write a function that takes multiple callbacks and delays (in ms), 
// and executes each callback after its corresponding delay.

function dream(callback){
    setTimeout(() =>{
        console.log("Today is when am officially starting my journey as a software engineer"); 
    }, 1000)
    callback();
}

function dare(callback){
        setTimeout(() =>{
            console.log("I use code to build solutions so that am able to build start-ups.");
        }, 2000);
        callback();
        
}

function starstruck(){
    setTimeout(() =>{
        console.log("I want to build the Africa that all of us have been dreaming about.");
    }, 3000);
    
    
}

dream(function(callback) {
    dare(starstruck);
});




// setTimeout(() =>{
//     console.log("Today is the final day before React JS")
// }, 3000);