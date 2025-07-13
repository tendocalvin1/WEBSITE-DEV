// library Management System

let books = [
    {
        title : "Good to Great",
        credentials :{
            author : "Jim Collins",
            is_available : true,
        }
    },

    {
        title : "How the Mighty Fall",
        credentials :{
            author : "Jim Collins",
            is_available : false,
        }
    },

    {
        title : "Built to Last",
        credentials :{
            author : "Jim Collins",
            is_available : true,
        }
    }
]

// display all available books
console.log("Available books:");
for (let book of books){
    if(books.credentials.is_available){
        console.log(`"${book.title}" by ${books.credentials.author}`)
    }
}