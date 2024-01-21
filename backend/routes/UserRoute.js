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
        return res.status(200).json({status: "User is registered successfully"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with register user", messsage: error});
    }
});

module.exports = router;