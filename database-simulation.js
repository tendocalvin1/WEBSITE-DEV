// 5. Simulate a Database with Success/Error Callbacks

//     Create a fakeDBQuery(query, successCallback, errorCallback) function
//     that randomly succeeds or fails depending on the query passed.

function fakeDBQuery(query, successCallback1, errorCallback1){
    // simulate data processing
    console.log(`Processing query: ${query}`);

    // simulating either success or failure.(use of math modules)
const progess = Math.random > 0.5;

setTimeout(() =>{
    if(progess){
        successCallback1(`Query: ${query} executed successfully.`);  
        }else{
        errorCallback1(`Query: ${query} failed.`);
        }
}, 2000);
}

  

function successCallback1(message){
    console.log("Success:",message);
}

function errorCallback1(message){
    console.log("Error:", message);
}

fakeDBQuery("INSERT INTO products",successCallback1, errorCallback1);
fakeDBQuery("SELECT * FROM users",successCallback1, errorCallback1)