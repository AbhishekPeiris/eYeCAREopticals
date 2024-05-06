const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({

    email : {
        type: String,
        required: true
    },
    model : {
        type: String,
        required: true
    },
    type : {
        type: String,
        required: true
    },
    brand : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    rating : {
        type: Number,
        required: true
    },
    status :{
        type: String,
        required: true,
        default : 'In stock'
    },
    imageurlcolor : [],
});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;