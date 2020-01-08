const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.end('<h1>Hello world!!!</h1>')
})

app.post('/test', (req, res) => {
    res.send({message: 'work pls'});
})

app.listen(3000)