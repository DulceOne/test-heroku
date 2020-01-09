const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./router');

app.use(cors());
app.use('/test', router);

app.get('/', (req,res) => {
    res.end('<h1>Hello world!!!</h1>')
})

app.post('/test', (req, res) => {
    console.log("work!!")
    res.send({message: 'work pls'});
})



app.listen(port, () => {
    console.log("SERVER IS STARTED...")
})