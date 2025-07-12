// activities on Nested objects and arrays.
let title = {
    book : "Elon Musk",
    author :{
        firstName : "Walter",
        lastName : "Isaacson",
    }
}

let {firstName, lastName} = title.author;
console.log(lastName);


let team = {
    name : "Developers",
    members : ['Absolom','Masai','Tendo']
}
console.log(team.members[0]);

let items = [
    {item : "Milk", quantity: 3},
    {item : "bread", quantity: 4},
    {item : "Eggs", quantity: 3}
]
console.log(items[2].quantity);


let library = {
    name : "City Library",
    sections : {
        science : ["A Brief History of Time", "Cosmos"] ,
        fiction :  ["1984", "Brave New World"]
    }
}

console.log(library.sections.science);


let profile = {
    username : "calvintendo1",
    settings : {
        theme : "dark" ,
            preferences :{
                notifications : {
                    email : true,
                    sms : false
                }

            }
        }
    }

console.log(profile.settings.preferences.notifications.sms);
