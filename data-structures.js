let ShoppingList = ['Milk', 'Eggs','Bread'];
console.log(ShoppingList[0]);
ShoppingList[2] = 'Brown Bread';
ShoppingList.push("Butter");
console.log(ShoppingList);


// 2. Use Array Methods: map, filter, reduce, find, push, splice
// 📌 Real-Life Analogy:

// Think of array methods as tools for managing lists:

//     🧹 filter: removes unwanted items

//     🎨 map: transforms every item

//     ➕ reduce: summarizes items into a single result

// js examples
// Example of using map to double each number in an array. map – Transform each element
let numbers = [1,2,3,4];
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6, 8]

// filter – Keep certain elements
let names = ["Alice", "Bob", "Ann"];
let A_names = names.filter(name => name.startsWith("A")); 
console.log("Names starting with A:", A_names); // ["Alice", "Ann"]

// reduce - Combine Elements
let bills = [20, 30, 50];
let total = bills.reduce((sum, value) => sum + value, 0); // answer = 100
console.log("Total bills:", total); // 100

// find - find the first match
let users = [{id : 1}, {id : 2}];
let user = users.find(u => u.id === 2); 
console.log("Found user:", user); // {id: 2}

// push - add an item to the end
let fruits = ["Apples"];
fruits.push("Bananas");
console.log("Fruits after push:", fruits); // ["Apples", "Bananas"]


// splice - Add/remove elements
let colors = ['red', 'green','blue'];
colors.splice(1, 0, 'yellow'); // Insert 'yellow' at index 1
console.log("Colors after splice:", colors); // ['red', 'yellow', 'green', 'blue']
// Example of using splice to remove an item
colors.splice(2, 1); // Remove 'green' at index 2
console.log("Colors after removing green:", colors); // ['red', 'yellow', 'blue']

// objects in JS
// Objects are like labeled boxes for storing data.
// 📦 Real-Life Analogy
// Think of objects as labeled boxes where each label is a key and the contents are values.
let User = {
    name : "Calvin",
    age : 23,
    isSoftwareEngineer: true
};
console.log("User Name:", User.name); // Accessing a property
console.log("Age: ", User.age);


// 5. Loop Through Objects Using for...in
// 📌 Analogy:

// Going through each drawer in a toolbox to see what’s inside.
// ✅ JavaScript Example:
let book = {
    title : "AI future",
    author : "Elon Musk",
    pages : 300
}; 

for(let key in book){
    console.log(`${key}: ${book[key]}`); // Accessing key-value pairs
}

// 🔹6. Work with Nested Objects
// 📌 Real-Life Analogy:

// A folder inside another folder (like a project folder with subfiles)
// ✅ JavaScript Example:

let SoftwareEngineer = {
    name : "Tendo Calvin",
    skills : {
        programminglanguages : ['python','javascript', 'java'],
        databases: ['MySql' , 'MongoDB'],
        frameworks: ['React', 'NodeJS', 'Django', 'Flask', 'SpringBoot']
    }
};
console.log("Software Engineer Name:", SoftwareEngineer.name);
console.log("Programming Languages:", SoftwareEngineer.skills.programminglanguages);


let DataEngineer = {
    name : "Arnold Trent",
    skills : {
        programminglanguages : ['python','R', 'java'],
        databases: ['MySql' , 'MongoDB'],
        frameworks: ['Numpy', 'Pandas', 'Scikit-learn', 'Flask', 'TensorFlow']
    }
};
console.log("Software Engineer Name:", DataEngineer.name);
console.log("Frameworks:", DataEngineer.skills.frameworks);


let [a, b] = [10, 20]
console.log(b);

let {name1, age} = {name1: "Arnold", age:23}
console.log(age);



// Understand and Work with JSON
// 📌 Real-Life Analogy:

// JSON is like a digital envelope of information (data exchange format).
let person = {
    name: "Tendo Calvin",
    profession : "Software Engineer",
    age : 23
}

let jsonString = JSON.stringify(person);  // Converts object to string
let parsed = JSON.parsed(jsonString);  // Converts back to object

