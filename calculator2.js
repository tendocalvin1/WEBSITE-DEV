const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        console.log("❌ Cannot divide by zero");
        return null;
    }
    return a / b;
}

function calculate() {
    rl.question("Enter the first number: ", function (firstnumber) {
        if (isNaN(firstnumber)) {
            console.log("❌ Please enter a valid number");
            return calculate();
        }

        rl.question("Enter the second number: ", function (secondnumber) {
            if (isNaN(secondnumber)) {
                console.log("❌ Please enter a valid number");
                return calculate();
            }

            rl.question("Enter the operation ('+', '-', '*', '/'): ", function (operation) {
                const number1 = parseFloat(firstnumber);
                const number2 = parseFloat(secondnumber);
                let result;

                switch (operation) {
                    case "+":
                        result = addition(number1, number2);
                        break;
                    case "-":
                        result = subtraction(number1, number2);
                        break;
                    case "*":
                        result = multiplication(number1, number2);
                        break;
                    case "/":
                        result = division(number1, number2);
                        break;
                    default:
                        console.log("❌ Invalid operation. Please try again.");
                        return calculate();
                }

                // Show result if it's not null (like division by zero)
                if (result !== null) {
                    console.log(`✅ Result: ${result}`);
                }

                // Ask user if they want to continue
                rl.question("Do you want to calculate again? (yes/no): ", function (answer) {
                    if (answer.trim().toLowerCase() === "yes") {
                        calculate(); // restart
                    } else {
                        console.log("👋 Thank you for using the calculator!");
                        rl.close();
                    }
                });
            });
        });
    });
}

calculate(); // Start calculator
