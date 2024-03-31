const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EyeglassReservationSchema = new Schema({

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
    framesize : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    imageurlcolor : [],
    
});

const EyeglassReservation = mongoose.model('eyeglassreservations', EyeglassReservationSchema);

module.exports = EyeglassReservation;