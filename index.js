const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const roluter = require('./router.js');

app.use(cors());

app.get('/', (req,res) => {
    res.end('<h1>Hello world!!!</h1>')
})

app.post('/test', (req, res) => {
    console.log("work!!")
    res.send({message: 'work pls'});
})

app.use('/test',roluter);


app.listen(port, () => {
    console.log("SERVER IS STARTED...")
})