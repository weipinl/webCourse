const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'john',
            email: 'john@gmail.com',
            password: 'cookies', 
            entries: 0,
            joined: new Date()
        }, 
        {
            id: '124',
            name: 'sally',
            email: 'sally@gmail.com',
            password: 'banana', 
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '', 
            email: 'john@gmail.com'
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => {
        // Load hash from your password DB.
    bcrypt.compare("apple", '$2a$10$mpv3Y/Bfhws.8HXdXnkZ0e9sVCo4kIHwJAL6vO.1F8bersn3ExLZS', function(err, res) {
        // res == true
        console.log('first guess', res)
    });
    bcrypt.compare("veggies", '$2a$10$mpv3Y/Bfhws.8HXdXnkZ0e9sVCo4kIHwJAL6vO.1F8bersn3ExLZS', function(err, res) {
        console.log('second guess', res)
    });
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json(database.users[0]);
    } else {
        res.status(400).json('error logging in');
    }
})

app.post('/register', (req, res) =>{
    const { email, name, password } = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        entires: 0,
        joined: new Date()       
    })
    res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(users => {
        if (users.id === id) {
            found = true;
            return res.json(users);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(users => {
        if (users.id === id) {
            found = true;
            users.entries++;
            return res.json(users.entries);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }    
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
});

/*
/ --> res = this is working
/signin --> POST request, res with either success or fail
/register --> POST request (wants to add the data to database/server)
/profile --> usersID -> GET = users
/iamge --> PUT (update on the users profile); users
*/