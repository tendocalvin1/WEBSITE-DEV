// ✅ 10 Advanced Callback Challenges

function step1(callback){
    let team = 'Paris Saint Germain';
    console.log(`My favourite team is ${team}`);
    callback(team);
}

function step2(team){
        let league = 'French Ligue 1';
        console.log(`This team is always the first in ${league}`);
        
}

function step3(league){
    console.log('They are the current Champions league winners of 2024/25 season');
}

step1(step2);
step2(step3);
