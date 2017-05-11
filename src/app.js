// var msg = 'Hello World';
// console.log(msg);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.status(200).send('hello world');
// })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);