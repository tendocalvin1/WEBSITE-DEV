// Closure = A function defined inside another function,
//             the inner function has access to the variables,
//             and the scope of the outer function.
//             Allow for private variables and state maintenance
//             Used frequently in JS frameworks: 'React', 'Vue', 'Angular' .
//             It's basically an object that references multiple functions within, 
//              to protect a variable from being public. (Another definition for closure)

function greet(name){
    return function(){
        console.log(`Hello, ${name}`);
    }
}

const greetTendo = greet('Tendo');
greetTendo();

// Example 2: Private Counter using Closure

function createCounter(){
    let count = 0;
    return function(){
        count ++
        console.log(`Count: ${count}`);
    }
}
const counter = createCounter();
counter(); // count : 1
counter(); // count : 2
counter(); // count : 3

// Example 3: Function Factory

function multiplier(factor){
        return function(number){
            return number * factor;
        }
}

const double = multiplier(2);
console.log(double(10)); // result is 20

// Example 4: Preserving State in Async Callbacks
function delayedMessage(message, delay){
        return function(){
            setTimeout(() =>{
                console.log(message);
            }, delay)
        };
};

const show = delayedMessage('I am shown after 3 seconds', 3000)
show();

// Example 5: Encapsulation using Closures
function secretHolder(){
    let secret = 'I love coding and solving real world problems';
    return {
        getSecret : function(){
            return secret;
        },
        setSecret : function(newSecret){
            secret = newSecret;
        }
    }
}


const secret = secretHolder();
console.log(secret.getSecret()); // I love coding and solving real world problems. 
secret.setSecret();
// console.log(secret.setSecret());


// basic syntax of a closure
function outerFunction(){
    let outerVariable = 'I am from outer scope';

    function innerFunction(){
        // innerFunction can access outerVariable due to closure
        console.log(outerVariable);
    }

    return innerFunction;
}


const closureFunc = outerFunction();
closureFunc();


// General syntax pattern
function outer(param1){
    let localVar = 'some value';

    return function inner(param2){
        // Has access to param1, localVar and param2
        console.log(param1, localVar, param2);
    }
}

const myFunc = outer('Hello');  // created an object called myFunc
myFunc('World');


// Closure with loop example
function createFunctions() {
    let funcs = [];

    for (let i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log(i); // each function remembers its own 'i'
        });
    }

    return funcs;
}

const result = createFunctions();
result[0](); // 0
result[1](); // 1
result[2](); // 2


// 💡 Key Points of Closure Syntax

//     Inner functions "close over" the variables of their outer functions.

//     The returned inner function remembers the scope even after the outer function has finished executing.

//     Closures are used to preserve state, encapsulate data, or create function factories.