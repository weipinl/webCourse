//callback pyramid of doom
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function(){
        movePlayer(10, 'Right', function(){
            movePlayer(330, 'Left', function(){
            });
        });
    });
});

//promise would look like this
movePlayer(100, 'Left')
    .then (() => movePlayer(400, 'Left'))
    .then (() => movePlayer(10, 'Right'))
    .then (() => movePlayer(330, 'Left'))


//Promise example
const promise = new Promise((resolve, reject) => {  //how we create a promise
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII') //web API, allows us to timeout
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE') 
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you are looking for')
})

Promise.all([promise, promise2, promise3, promise4]) // takes in array or promises, wait until all the promises are resolve, then it would log out the values
    .then(values => {
        console.log(values);
    })

//chaining promises
promise 
    .then(result => {
        throw Error
        result + '!'
    })
    .then(result2 => {
        console.log(result2);
    })
    .catch(() => console.log('errrorr!')) //catches any error that may happened between the chain

promise 
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('errrror!')) //catch statement would not catch the error since it happens after
    .then(result3 => {
        throw Error;
        console.log(result3 + '!');
    })


//real world application
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(()=> console.log('error'))