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

for (let student of Students) {
  console.log(`${student.name} scored ${student.marks.Calculus} in Calculus.`);
}


// Add features to compute average and print pass/fail status.
function average(...Students){
    let sum = marks.reduce((acc, curr) => acc + curr);
    let avg = sum / numbers.length;
    return avg;
}
average();