my_movies = ['suits','merlin','addicted','power','mission impossible'];
console.log(my_movies[1]);

let book = {
    title : "Elon Musk",
    author : "Walter Isaacson",
    pages  : 300
}
console.log(book.title);

my_list = ['United', 'Liverpool', 'City', 'Arsenal','Spurs','Chelsea'];
my_list.push("Paris Saint Germain")
console.log(my_list);

my_list.unshift("AS Monaco")
console.log(my_list);


// function isEven(numbers){
//     digits = [1,2,3,4,5,6,7,8,9,10];
//     if(digits % 2 === 0){
//         console.log("This is an even number")
//     }else{
//         console.log("This is an odd number")
//     }
//     Even_Numbers = (digits % 2 === 0);
//     console.log("The even numbers are:", Even_Numbers);

// }
// isEven();

// filtering Even numbers.
function isEven(numbers){
    const digits = [1,2,3,4,5,6,7,8,9,10];

    // filtering even numbers
    const EvenNumbers = digits.filter(function(num){
        return num % 2 === 0;
    })

    console.log("The even numbers are:", EvenNumbers);
}

isEven();


let names = ['calvin','tendo','christabel','brian','mumbere'];
let uppercase = names.map(function(name){
    return name.toUpperCase();
});

console.log("Names in capital letters:", uppercase);


// Create a function that takes in multiple numbers using the rest operator and returns their average.
function average(...numbers){
    let sum = numbers.reduce((acc, curr) => acc + curr);
    let avg = sum / numbers.length;
    return avg;
}

console.log(average(15,20,25));

// ...numbers collects inputs as an array.

// .reduce() calculates the sum.

// sum / numbers.length gives the average.

function average2(...numbers){
    let sum = numbers.reduce((acc, curr)=> acc + curr);
    let average = sum / numbers.length;
    return average;
}
console.log(average2(50,60,70));

// Loop through an object of city populations and print: "City: Population"

let city_populations = {
    city : "Manchester",
    Manchester_population : 300000,
    city_two : "London",
    London_population : 1000000,
}
console.log(city_populations.London_population);
console.log(city_populations.city);


// Destructure an object with keys firstName and lastName into variables.
let CloudEngineer = {
    firstName : "Tendo",
    lastName : "Calvin"
}

// destructuring
let {firstName, lastName} = CloudEngineer;
console.log(firstName);
console.log(lastName);


// Merge two arrays using the spread operator.
clubs = ['city','united','arsenal','liverpool','chelsea'];
london_clubs = ['palace','fulham','QPR','Brentford'];

let all_clubs = [...clubs, ...london_clubs];
console.log("The premier league clubs are:", all_clubs);

// ...clubs takes all the elements from the clubs array.

// ...london_clubs takes all elements from london_clubs.

// [...clubs, ...london_clubs] creates a new array that merges both.
