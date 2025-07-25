// Closure = A function defined inside another function,
//             the inner function has access to the variables,
//             and the scope of the outer function.
//             Allow for private variables and state maintenance
//             Used frequently in JS frameworks: 'React', 'Vue', 'Angular' .
//             It's basically an object that references multiple functions within, 
//              to protect a variable from being public. (Another definition for closure)


function outer(){
    let message = 'Hello Cynthia';

    function inner(){
        console.log(message);
    }
    inner(); // this will have access to the outer function for example it will have access to
    //          the variable message.
}



// A closure can maintain the state of the variable. Check this example
function createCounter(){
    let count = 0;

    function increment(){
        count ++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount}; // this helps in creating an object that references
    //                             to the functions that is increment and getCount and 
    //                             it is a must to write this in a closure.
}

const counter = createCounter()
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

// A closure is an object that references multiple functions within, 
// so that a variable is protected and private.


function createGame(){
    let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${score}points`);
}

function decreaseScore(points){
    score -= points;
    console.log(`-${score}points`);
}


function getScore(){
    return score;
}

return {increaseScore, decreaseScore, getScore}

}
// Now we are going to use the createGame() function to create an object.
const game = createGame();

game.increaseScore(6);
game.increaseScore(6);
game.decreaseScore(2);

console.log(`The final score is ${game.getScore()} points`);



