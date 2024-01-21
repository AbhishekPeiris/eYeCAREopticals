const router = require('express').Router();
const User = require('../models/User');

router.route('/register').post(async (req, res) => {

    const {
        firstname,
        lastname,
        dob,
        address,
        gender,
        contact,
        email,
        password
    } = req.body;

    const newUser = new User({

        firstname,
        lastname,
        dob,
        address,
        gender,
        contact,
        email,
        password
    });

    try {
        
        await newUser.save();
        return res.status(200).json({status: "User is added successfully"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with adding user", messsage: error.message});
    }
});

module.exports = router;