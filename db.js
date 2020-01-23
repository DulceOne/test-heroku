const mongoose = require("mongoose");
const uri = "mongodb+srv://DulceOne:userac04bbqq@cluster0-q6cgg.mongodb.net/fulfilment" ;

mongoose.connect(uri, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database is worked");
}).catch( (e) =>{
    console.log("Database disconnect");
    process.exit(1);
})
module.exports = mongoose.connection;