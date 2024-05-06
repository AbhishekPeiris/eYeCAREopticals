const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorAppointmentSchema = new Schema({

    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    age : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    contact : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    emergency : {
        type : String,
        required : true
    },
    doctor : {
        type : String,
        required : true
    },
    doctorfee : {
        type : String,
        required : true
    },
    
});

const DoctorAppointment = mongoose.model('doctorappointments', DoctorAppointmentSchema);

module.exports = DoctorAppointment;