const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.end('<h1>Hello world!!!</h1>')
})

app.listen(80)