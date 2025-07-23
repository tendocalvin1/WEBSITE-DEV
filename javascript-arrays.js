// array = a variable like structure that can hold more than 1 value
// array methods

my_fruits = ['apples','mangoes','grapes'];
my_fruits.push('coconut'); // push adds an element to the end of an array
console.log(my_fruits);

my_fruits = ['apples','mangoes','grapes'];
my_fruits.pop(); // pop removes an element at the end of an array
console.log(my_fruits);

my_fruits2 = ['apples','mangoes','grapes'];
my_fruits.unshift('oranges'); // unshift adds an element at the beginning of an array
console.log(my_fruits);

my_fruits = ['apples','mangoes','grapes'];
my_fruits.shift(); // shift removes an element at the beginning of an array
console.log(my_fruits);

let number_of_fruits = my_fruits2.length;
console.log(number_of_fruits);

let index = my_fruits2.indexOf('apples');
console.log(index);

let cars = ['tesla','audi','subaru','harrier'];
for(let i = 0; i < cars.length; i++){
        console.log(cars[i]);
}