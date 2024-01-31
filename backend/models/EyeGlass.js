const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eyeGlassSchema = new Schema({

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
    frameshape : {
        type: String,
        required: true
    },
    framematerial : {
        type: String,
        required: true
    },
    frametype : {
        type: String,
        required: true
    },
    hingetype : {
        type: String,
        required: true
    },
    discription : {
        type: String,
        required: true
    },
    imageurl : []
});

const EyeGlass = mongoose.model('eyeglasses', eyeGlassSchema);

module.exports = EyeGlass;