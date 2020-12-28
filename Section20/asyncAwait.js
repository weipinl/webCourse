//Example of promises

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

//Example of Async Await

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); //pause until i have something for you
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(330, 'Left'); //pause
}

//realistic example
//in promises
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

//in asyn function
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

//another example
 const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/album'
 ]

 const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('ooops', err)
    }
 }