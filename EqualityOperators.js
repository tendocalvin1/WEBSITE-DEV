let a = 2;
let b ='2';

console.log(a == b);   // this performs something in JS called truthy. This returns True.

console.log(a === b);    // This checks whetther the data types are the same and if
//                          they are not the same, it will return False


// ternary operator

let age = 14;
const canDrive = age >=16 ? true : false;
console.log(canDrive);

let points = 100;
const customer = points >=110 ? 'gold' : 'silver';
console.log(customer);

//   || (or operator)
//   && (and operator)
//   !  (not operator)
//   ?? (null coalescing)

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false


let hasReservation = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservation ||  acceptingWalkIns
console.log(hasAccessToTable);


console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false


let hasReservation1 = true;
let acceptingWalkIns1 = true;

const hasAccessToTable1 = hasReservation1 &&  acceptingWalkIns1
console.log(hasAccessToTable1);

let age1 = 18;
let hasCar = true;

const canDrive1 = age1 >= 16 && hasCar;
console.log(canDrive1);








