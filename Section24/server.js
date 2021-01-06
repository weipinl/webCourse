const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.use((req, res, next) => {
//     console.log('<h1> hellooooo </h1>')
//     next(); //pass the data along
// }) 

app.get('/', (req, res) => {
    res.send('getting root');
});

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('success');
});

app.listen(3000);