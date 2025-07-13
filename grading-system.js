let Students = [
    {
      name: "Tendo Calvin",
      marks: {
        Calculus: 78,
        Linear_Algebra: 80,
        Probability: 75
      }
    },
    {
      name: "Trent Arnold",
      marks: {
        Calculus: 68,
        Linear_Algebra: 80,
        Probability: 75
      }
    },
    {
      name: "Carlos Tevez",
      marks: {
        Calculus: 68,
        Linear_Algebra: 81,
        Probability: 55
      }
    }
  ];
  
  // Loop through each student
  for (let student of Students) {
    let total = 0;
    let subjects = Object.values(student.marks);
    
    // Calculate total
    for (let mark of subjects) {
      total += mark;
    }
  
    // Calculate average
    let average = total / subjects.length;
  
    // Determine pass/fail
    let status = average >= 60 ? "PASS" : "FAIL";
  
    // Print results
    console.log(`\nStudent: ${student.name}`);
    console.log(`Marks: ${JSON.stringify(student.marks)}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Status: ${status}`);
  }
  