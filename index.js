// Examples of while loops

let LoggedIn = false;
let username;
let password;

while(!LoggedIn){
    username = prompt("Enter your username");
    password = prompt("Enter your password");

    if(username === 'calvin123' && password === 'cal@123'){
        LoggedIn = true;
        console.log("You are logged in !");
    }else{
        console.log("Invalid credentials!, please try again");
    }
}