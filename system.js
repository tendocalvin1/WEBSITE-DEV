// recapping how a student grading system works

let campusers = [
    {
        name :"Kamara Kasaija Muzaazi",
        marks : {
            Python_Programming : 68,
            linear_Algebra : 70,
            System_Design : 78
        }
    },

    {
        name :"Ismail Daud",
        marks : {
            Python_Programming : 88,
            linear_Algebra : 77,
            System_Design : 80
        }
    },

    {
        name :"Marcus Thuram",
        marks : {
            Python_Programming : 77,
            linear_Algebra : 77,
            System_Design : 74
        }
    }
]

for (let campuser of campusers) {
    let total = 0;
    let subjects = Object.entries(campuser.marks); // ✅ Corrected

    for (let mark of subjects) {
        total += mark[1]; // ✅ mark is [subject, score]
    }

    let average = total / subjects.length;
    let passed = average >= 70 ? "PASS" : "FAIL"; // ✅ Use boolean condition directly

    console.log(`\nStudent: ${campuser.name}`);
    console.log(`Marks: ${JSON.stringify(campuser.marks)}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Passed: ${passed}`);
}


//   // Loop through each student
//   for (let student of Students) {
//     let total = 0;
//     let subjects = Object.values(student.marks);
    
//     // Calculate total
//     for (let mark of subjects) {
//       total += mark;
//     }
  
//     // Calculate average
//     let average = total / subjects.length;
  
//     // Determine pass/fail
//     let status = average >= 60 ? "PASS" : "FAIL";
  
//     // Print results
//     console.log(`\nStudent: ${student.name}`);
//     console.log(`Marks: ${JSON.stringify(student.marks)}`);
//     console.log(`Average: ${average.toFixed(2)}`);
//     console.log(`Status: ${status}`);
//   }
  