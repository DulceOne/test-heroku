const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req,res) => {
    res.end('<h1>Hello world!!!</h1>')
})

app.post('/test', (req, res) => {
    res.send({message: 'work pls'});
})

app.listen(port, () => {
    console.log("SERVER IS STARTED...")
})