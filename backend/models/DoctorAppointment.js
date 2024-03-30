const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorAppointmentSchema = new Schema({

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
    doctorname : {
        type: String,
        required: true
    },
    date : {
        type : String,
        required : true
    },
    doctorfee : {
        type : Number,
        required : true
    },
    
});

const DoctorAppointment = mongoose.model('doctorappointments', DoctorAppointmentSchema);

module.exports = DoctorAppointment;