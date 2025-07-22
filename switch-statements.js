// switch statements : This can be an efficient way to replace many if statements.

// let day = 2;

// switch(day){
//     case 1:
//         console.log("It is Monday today");
//         break;

//     case 2:
//         console.log("It is Tuesday today");
//         break;

//     case 3:
//         console.log("It is Wednesday today");
//         break;



//     case 4:
//         console.log("It is Thursday today");
//         break;

//     case 5:
//         console.log("It is Friday today");
//         break;


//     case 6:
//         console.log("It is Saturday today");
//         break;

    
//     case 7:
//         console.log("It is Sunday today");
//         break;
    
    
//     default:
//         console.log(`${day} is not a day.`)
// }



// example two

let TestScore = 34;
let letterGrade;

switch(true){
    case TestScore >= 90:
        letterGrade = "A"
        break; 

    case TestScore >= 80:
        letterGrade = "B"
        break; 

    case TestScore >= 70:
        letterGrade = "C"
        break;
        
        
    case TestScore >= 60:
        letterGrade = "D"
        break; 


    case TestScore >= 50:
        letterGrade = "E"
        break; 

    default:
        letterGrade = "F";

}

console.log(letterGrade);