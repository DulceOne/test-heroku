const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const db = require('./db');
const port = process.env.PORT || 9000;
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(cors());

///models

const Order = require('./models/order');




app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html')
    res.send('REPTILEHAUS Chat Server')
})




io.on('connection', (socket) => {

    console.log('user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    app.post('/send-to-front', (req, res) => {
        const phone = req.body.number;
        console.log(phone);
        io.emit('message', {secret: 'secret', contact_phone_number: phone, virtual_phone_number: phone});
        res.send({message: 'success'}).status(200)
    })

});


app.post('/api/v1/order/list', (req, res) => {
    Order.find({}).then(result => {
        console.log(result);
        res.send(result).status(200);
    }).catch(err => {

    })
})



http.listen(port, () => {
    console.log('Server started on port 9000');
});