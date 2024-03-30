const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({

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
    rating : {
        type: Number,
        required: true
    },
    comment : {
        type: String,
        required: true
    },
    
});

const Feedback = mongoose.model('feedbacks', FeedbackSchema);

module.exports = Feedback;