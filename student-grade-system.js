// student grade system

// let students = [
//     {student : "Tendo Calvin", subject: "Calculus", marks : 80},
//     {student : "Trent Arnold", subject: "Calculus", marks : 78},
//     {student : "Noni Madueke", subject: "Calculus", marks : 75}
// ]
// if (marks === 70){
//     console.log("The student has passed the course unit");
// }else {
//     console.log("The student has failed the course unit.");
// }


let Students = [
    {
    name : "Tendo Calvin",
    marks : {
        Calculus :78,
        Linear_Algebra: 80,
        Probability: 75,
    }
}, 

{
    name : "Trent Arnold",
    marks : {
        Calculus :68,
        Linear_Algebra: 80,
        Probability: 75,
    }
}, 
{
    name : "Carlos Tevez",
    marks : {
        Calculus :68,
        Linear_Algebra: 81,
        Probability: 55,
    }
}

]


// Student Grade System based on your original code structure
for(let student of Students){
    let marks = students.marks;
    let total = 0;
    let numSubjects = 0;

    for (let subject in marks){
        total += marks[subject];
        numSubjects ++
    }

let average = total/ numSubjects;
let status = average => 60 ? "PASS" : "FAIL";

console.log(`\n${student.name}`);
console.log(`Marks: ${JSON.stringify(marks)}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Status: ${status}`);



}

// You already used for...of to loop through students ✅

// You used student.marks.<subject> — we just automated it with for...in ✅

// You didn't need to restructure anything — just extended your current idea ✅

// The use of .toFixed(2) and JSON.stringify() is optional for display only.

// ✅ Summary:

// You were just one or two steps away from the full grade system. Your intuition about the structure and logic was correct — all it needed was:

// A loop through marks using for...in

// Summing marks and dividing by subject count

// A simple average >= 60 check for pass/fail