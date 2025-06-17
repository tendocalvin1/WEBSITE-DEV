// objects are nouns
// They are names of places like mosques, subject names and so on.

let course = {
    name: 'JavaScript for beginners',
    hours: 3
}
//console.log(course);
//console.log(course.hours);
console.log(course.name);

course.name = 'JavaScript Fundamentals';
console.log(course.name);

let property = 'hours';
console.log(course[property]);