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

router.route('/login').post(async (req, res) => {

    const {
        email,
        password
    } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(500).json({ status: "The email is incorrect" });
        }

        if (user.password === password) {
            return res.status(200).json({ status: "Login Success" });
        } else {
            return res.status(500).json({ status: "The password is incorrect" });
        }

    } catch (error) {
        return res.status(500).json({ status: "Error during login", message: error });
    }
});

module.exports = router;