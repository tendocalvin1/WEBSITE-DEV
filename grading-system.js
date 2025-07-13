// updated version of the grading system

let Students = [
    {
        name : "Tendo Calvin",
        marks :{
            calculus: 75,
            linear_Algebra : 89,
            probability : 77
        }
    },

    {
        name : "David Beckham",
        marks :{
            calculus: 85,
            linear_Algebra : 80,
            probability : 76
        }
    },

    {
        name : "Trent Arnold",
        marks :{
            calculus: 33,
            linear_Algebra : 65,
            probability : 81
        }  
    }
]

for(let student of Students){
    let marks = Students.marks; 
    let total = 0;
    let numSubjects  = 0 ;



for (let subject in marks){
    total += marks[subject];
    numSubjects++;

}



let average = total / numSubjects;
let status = average => 60 ? "PASS" : "FAIL";

console.log(`\n${student.name}`);
console.log(`Marks: ${JSON.stringify(marks)}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Status: ${status}`);


}