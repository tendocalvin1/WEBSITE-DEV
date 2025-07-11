const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculate() {
    rl.question("Enter the first number: ", function(first) {
        if (isNaN(first)) {
            console.log("❌ Please enter a valid number.");
            return calculate(); // Retry
        }

        rl.question("Enter the second number: ", function(second) {
            if (isNaN(second)) {
                console.log("❌ Please enter a valid number.");
                return calculate(); // Retry
            }

            rl.question("Choose an operation (+, -, *, /): ", function(operation) {
                const number1 = parseFloat(first);
                const number2 = parseFloat(second);
                let result;

                switch (operation) {
                    case "+":
                        result = number1 + number2;
                        break;
                    case "-":
                        result = number1 - number2;
                        break;
                    case "*":
                        result = number1 * number2;
                        break;
                    case "/":
                        if (number2 === 0) {
                            console.log("❌ Cannot divide by zero.");
                            return calculate(); // Retry
                        }
                        result = number1 / number2;
                        break;
                    default:
                        console.log("❌ Invalid operation. Please choose +, -, *, or /.");
                        return calculate(); // Retry
                }

                console.log(`✅ Result: ${result}`);

                rl.question("Do you want to calculate again? (yes/no): ", function(answer) {
                    if (answer.toLowerCase().trim() === "yes") {
                        calculate(); // Repeat
                    } else {
                        console.log("👋 Thank you for using our calculator!");
                        rl.close();
                    }
                });
            });
        });
    });
}

// Run the calculator
calculate();
