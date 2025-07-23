// object = A collection of related properties and/or methods
// can represent real world objects(people, products, places)
//      object = {key, value,
//                 function()}

const person1 ={
    firstName: "Tendo",
    lastName: "Calvin",
    age: 23,
    isEmployed: true,
    sayHello : () =>{console.log("Hello I am Tendo")},
    eat : () => {console.log("I am eating pork")},
}

const person2 ={
    firstName: "David",
    lastName: "Beckham",
    age: 50,
    isEmployed: true,
    sayHello : () =>{console.log("Hello I am David")},
    eat : () => {console.log("I am eating pizza")},
}

console.log(person2.age);
console.log(person2.lastName);
console.log(person2.firstName);
console.log(person2.isEmployed);

(person2.sayHello());
(person1.sayHello());

(person2.eat());
(person1.eat());

