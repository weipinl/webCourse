const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');

const app = express();

app.use(bodyParser.json());
const database = {
    users: [
        {
            id: '123',
            name: 'john',
            email: 'john@gmail.com',
            password: 'cookies', 
            entires: 0,
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
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json('success');
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
        password: password, 
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