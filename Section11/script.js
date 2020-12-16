var database = [
    {
        username: "Tom",
        password: "Tom",
    },
    {
        username: "Sally",
        password: "123",
    },
    {
        username: "Ingrid",
        password: "777",
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Josh",
        timeline: "Javascript is preeetyy cool!"
    },
]

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid (username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password == password) {
            return true;
        }
    }    
    return false; 
}

//wrong logic 
function signIn(username, password) {
    if (isUserValid(username, password) === true) {
        console.log(newsFeed);
    } else {
        alert("username and password cannot be found!");
    }
}

signIn(userNamePrompt, passwordPrompt);

// var todos = [
//     "clean room",
//     "brush teeth", 
//     "exercise",
//     "study javascript",
//     "eat healthy",
// ];

// var todosImportant = [
//     "clean room!",
//     "brush teeth!", 
//     "exercise!",
//     "study javascript!",
//     "eat healthy!",
// ];

// var todosLength = todos.length;

// for (var i=0; i < todosLength; i++) {
//     console.log(i);
// }

// todos.forEach(function(todo, i){
//     console.log(todo, i);
// })

//Can use it like the following
// function logTodos(todo, i) {
//     console.log(todo, i);
// }

// todosImportant.forEach(logTodos);

// var counterOne = 10;

// while(counterOne > 0) {
//     console.log(counterOne)
//     counterOne--;
// }

// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

