const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your full name? ", function (fullName) {
  rl.question("How old are you? ", function (age) {
    rl.question("Which country do you live in? ", function (country) {
      rl.question("What is your favorite hobby? ", function (hobby) {
        rl.question("What do you do (student, engineer, etc)? ", function (profession) {
          age = Number(age);
          console.log("\n🔹🔹🔹 PERSONAL PROFILE 🔹🔹🔹");
          console.log(`👤 Name: ${fullName}`);
          console.log(`🎂 Age: ${age}`);
          console.log(`🌍 Country: ${country}`);
          console.log(`💼 Profession: ${profession}`);
          console.log(`🎯 Hobby: ${hobby}`);

          if (age < 13) {
            console.log("📌 You are categorized as a *child*.");
          } else if (age < 20) {
            console.log("📌 You are categorized as a *teenager*.");
          } else if (age < 60) {
            console.log("📌 You are categorized as an *adult*.");
          } else {
            console.log("📌 You are categorized as a *senior citizen*.");
          }

          rl.close();
        });
      });
    });
  });
});
