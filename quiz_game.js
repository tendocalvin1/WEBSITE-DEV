const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let score = 0;

rl.question("1. What does HTML stand for? ", function (HTML) {
  if (HTML.toLowerCase().trim() === "hyper text markup language") {
    console.log("✅ Correct!");
    score++;
  } else {
    console.log("❌ Incorrect. The correct answer is: Hyper Text Markup Language");
  }

  rl.question("2. What keyword is used to declare a constant in JavaScript? ", function (Const) {
    if (Const.toLowerCase().trim() === "const") {
      console.log("✅ Correct!");
      score++;
    } else {
      console.log("❌ Incorrect. The correct answer is: const");
    }

    rl.question("3. Which company developed JavaScript? ", function (company) {
      if (company.toLowerCase().trim() === "netscape") {
        console.log("✅ Correct!");
        score++;
      } else {
        console.log("❌ Incorrect. The correct answer is: Netscape");
      }

      // Final Score
      console.log(`\n🏁 Quiz Complete! You scored ${score}/3`);

      if (score === 3) {
        console.log("🎉 Excellent! You're a JavaScript star!");
      } else if (score === 2) {
        console.log("👍 Good job! Keep practicing.");
      } else {
        console.log("📘 Don't worry — review the basics and try again!");
      }

      rl.close();
    });
  });
});
