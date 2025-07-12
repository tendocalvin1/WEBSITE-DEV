// Write a function to convert an array of objects representing students into JSON.

let students = {
    name : "Tendo",
    isStudent : true,

    name_two : "Aronld",
    isSoftwareEngineer : true,

    name_three : "Trent",
    isDataEngineer : true,

}

let jsonString = JSON.stringify(students);  // Converts object to string
console.log(students);

let parsed = JSON.parse(jsonString);  // Converts back to object
console.log(jsonString);

// Create an object with nested values and write a function that reads a nested key.
function(marks){
    function(results){
        
    }
}
