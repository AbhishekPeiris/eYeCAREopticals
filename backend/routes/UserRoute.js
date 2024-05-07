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
        password,
        role
    } = req.body;

    const newUser = new User({

        firstname,
        lastname,
        dob,
        address,
        gender,
        contact,
        email,
        password,
        role
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
        const user = await User.findOne({ email: email, password: password });

        if (user) {

            const loginUser = {

                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                dob: user.dob,
                address: user.address,
                gender: user.gender,
                contact: user.contact,
                email: user.email,
                role: user.role
            }

            return res.status(200).json({ status: "Login Success", loginUser});        
        } 
        else {
            return res.status(500).json({ status: "The email or password is incorrect" });
        }

    } catch (error) {
        return res.status(500).json({ status: "Error during login", message: error });
    }
});

router.route('/edituser/:id').put(async (req, res) =>{

    const userId = req.params.id;

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

    const updateUser = {

        firstname,
        lastname,
        dob,
        address,
        gender,
        contact,
        email,
        password
    }
    
    try {
        
        await User.findByIdAndUpdate(userId, updateUser);
        return res.status(200).json({status: "User updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update user", message: error});

    }
});

router.route('/deleteuser/:id').delete(async (req, res) => {

    const userId = req.params.id;

    try {
        
        await User.findByIdAndDelete(userId);
        return res.status(200).json({status : "User is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete user", message : error});

    }
});


module.exports = router;