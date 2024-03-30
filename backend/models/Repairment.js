const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepairmentSchema = new Schema({

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
    DateofDropoff : {
        type: String,
        required: true
    },
    PreferredPickupDate : {
        type: String,
        required: true
    },
    DescriptionofIssue: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    
});

const Repairment = mongoose.model('repairments', RepairmentSchema);

module.exports = Repairment;