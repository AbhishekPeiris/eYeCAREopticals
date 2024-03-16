const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({

    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    experiance : {
        type : String,
        required : true
    },
    language : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    doctorfee : {
        type : Number,
        required : true
    },
    discription : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    specialty : {
        type : String,
        required : true
    },
    imageurl : []
});

const Doctor = mongoose.model('doctors', doctorSchema);

module.exports = Doctor;

