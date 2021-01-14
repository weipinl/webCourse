const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'))


// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.use((req, res, next) => {
//     console.log('<h1> hellooooo </h1>')
//     next(); //pass the data along
// }) 

// app.get('/:id', (req, res) => {
//     console.log(req.params);
//     res.status(404).send("not found");
// });

//static 


app.listen(3000);