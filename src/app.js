// var msg = 'Hello World';
// console.log(msg);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello world');
})

app.listen(3000);