const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    id: Number,
    status: String,
    site: String,
    price: String,
    full_price: String,
    weight: Number,
    fio: String,
    phone: String,
    payment_type: String,
    delivery_company: String,
    address_book: String,
    index: String,
    track_number: String,
    track_status: String,
    site_address: String,
    manager: String,
    added_date: String,
    update_date: String,
    sending: String,
    ip: String,
    comment: String,
});

module.exports = mongoose.model("orders",orderSchema);