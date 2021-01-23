const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');
const app = express();

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex ({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'tom1314520',
      database : 'smart-brain'
    }
});

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
    res.send('success');
})

app.post('/signin', signin.handleSignin(db, bcrypt))

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (res, req) => { profile.handleProfileGet(req, res, db) })

app.put('/image', (req, res) => { image.handleImage(req, res, db) })

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

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