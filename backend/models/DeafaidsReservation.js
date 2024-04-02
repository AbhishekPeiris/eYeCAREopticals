const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeafaidsReservationSchema = new Schema({

    cusname : {
        type: String,
        required: true
    },
    contact : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    model : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    size : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    imageurlcolor : [],
    
});

const DeafAidsReservation = mongoose.model('deafaidsreservations', DeafaidsReservationSchema);

module.exports = DeafAidsReservation;