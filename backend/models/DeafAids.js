const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deafAidsSchema = new Schema({

    model : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    material : {
        type: String,
        required: true
    },
    discription : {
        type: String,
        required: true
    },
    size1 : {
        type: String,
        required: true
    },
    size2 : {
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
    imageurlcolor1 : [],
    imageurlcolor2 : [], 
});

const DeafAids = mongoose.model('deafaids', deafAidsSchema);

module.exports = DeafAids;