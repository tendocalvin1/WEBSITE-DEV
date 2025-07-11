
const readline =require("readline");
const rl = readline.createInterface({
    output:process.stdout,
    input :process.stdin,

});


let score = 0;


rl.question("Who is the current president of Uganda ?", function(president){
    if(president.toLowerCase().trim() === "yoweri kaguta museveni"){
        console.log("Correct answer!");
        score ++;
    }else{
        console.log("Wrong answer: The correct one is yoweri kaguta museveni");
    }
    rl.question("What is the capital city of Uganda ?", function(capital){
        if(capital.toLowerCase().trim() === "kampala"){
            console.log("Correct answer");
            score ++;
        }else{
            console.log("Wrong answer: The correct answer is Kampala")
        }
        rl.question("What is the capital city of Uganda ?", function(capital){
        if(capital.toLowerCase().trim() === "kampala"){
            console.log("Correct answer");
            score ++;
        }else{
            console.log("Wrong answer: The correct answer is Kampala")
        }
            rl.question("Who is the current prime minister of Uganda ?", function(primeminister){
        if(primeminister.toLowerCase().trim() === "robinah nabbanja"){
            console.log("Correct answer");
            score ++;
        }else{
            console.log("Wrong answer: The correct answer is robinah nabbanja");
        }

                rl.question("Name the greatest player in history of all time",function(player){
        if(player.toLowerCase().trim() === 'lionel messi'){
            console.log("Correct answer");
            score ++;
        }else{
            console.log("Wrong answer: The correct answer is lionel messi");
        }
    })

    console.log(`You have scored ${score}/4`);

    if (score === 4){
        console.log("Keep pushing the good spirit, Excellent work");
    }else if(score === 3){
        console.log("Fair result, keep pushing");
    }else if(score === 2){
        console.log("Keep fighting till the end, hang in there")
    }else if (score === 1){
        console.log("Alot of work needs to be done, try harder");
    }else{
        console.log("A lot of reading is required!")
    }
    rl.close();
        });
        });
    });
});


