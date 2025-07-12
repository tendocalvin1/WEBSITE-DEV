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


// Use find() to locate a product with a certain price in an array of objects

let ShoppingList = [
    { Product: "Bag", Price: 200 },
    { Product: "Watch", Price: 1200 },
    { Product: "United Jersey", Price: 100 }
];

// Use find() to locate product with price === 100
let priceMatch = ShoppingList.find(item => item.Price === 100);

console.log("Commodity that matches the price of 100:", priceMatch);



// let users = [{id : 1}, {id : 2}];
// let user = users.find(u => u.id === 2); 
// console.log("Found user:", user); // {id: 2}


// nested values and nested keys
// A nested value means a value inside another object or inside another array or object within an object.
// A nested key is the key (property name) that is inside a nested object.


//  Example of an Object with Nested Values:

let SoftwareEngineer = {
    name : "Tendo Calvin",
    age : 23,
    marks : {
        Maths : 87,
        English : 77,
        Science : 77
    }
};
console.log(SoftwareEngineer.marks.Maths);

// marks is a key whose value is another object.
// math, english, science are nested keys inside the marks object.

// Writing a function to read a nested key:
function getNestedMark(studentObj, subject){
    return studentObj.marks[subject];
}

let student = {
    name : "Tendo",
    age : 23,
    marks : {
        Maths : 78,
        English : 90,
        Science : 95
    }
};
console.log(getNestedMark(student, "Maths"));


// nested objects.
let user = {
    name : "Calvin",
    address : {
        city : "Kasese",
        zip : 256
    }
};
console.log(user.address.city);
// 📌 address is an object inside the user object.
// 📌 city is a nested key.


// Example 2: Object with Nested Array

let DataScientist = {
    name : "Tendo Calvin",
    subjects : ['ML', 'Data Analysis', 'NLP'],
}

console.log(DataScientist.subjects[0]);

// 📌 subjects is an array inside the student object.
// 📌 Access using the index.


//  Example 3: Array of Objects
let products = [
    {name : "laptop", price: 2400},
    {name : "Phone", price: 1000}
]

console.log(products[1].price);
console.log(products[0].price);

// 📌 products is an array containing objects.
// 📌 Each object has its own keys like name and price.


// Example 4: Nested Object Inside Array Inside Object
let company = {
    employees : [
        {name : "Aaron", role: "Data Scientist"},
        {name : "Tendo", role: "Software Engineer"}
    ]
}
console.log(company.employees[0].role);

//  Example 5: Deeply Nested Object
let school = {
    name : "UCU",
    location : {
        city : "Wakiso",
        building : {
            main : "N block",
            other_blocks : "K block",
        }
    }
};

console.log(school.location.city);




