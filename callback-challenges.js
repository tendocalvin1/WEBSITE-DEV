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

function retry(callback){
    let college = "Saint Mary's College Kisubi";
    console.log(`My alma mater is called ${college}`);
    callback(college);
}

// const success = Math.random
// if (success){
//     successCallback(college);
// }else{
//     errorCallback(college);
// }

function attempts(college) {
console.log(`${college} is the best secondary school in Uganda and that is a well known fact.`);
}

retry(attempts);
