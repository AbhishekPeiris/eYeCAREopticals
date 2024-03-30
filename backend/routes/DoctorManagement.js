const router = require('express').Router();
const Doctor = require('../models/Doctor');

router.route('/adddoctor').post(async (req, res) => {

    const {
        firstname,
        lastname,
        contact,
        email,
        experiance,
        language,
        type,
        department,
        rating,
        doctorfee,
        discription,
        date,
        specialty,
        imageurl    
    } = req.body;

    const newDoctor = new Doctor({
        firstname,
        lastname,
        contact,
        email,
        experiance,
        language,
        type,
        department,
        rating,
        doctorfee,
        discription,
        date,
        specialty,
        imageurl
    });

    try {

        await newDoctor.save();
        return res.status(200).json({status: "Doctor added successfully"});
        
    } catch (error) {

        return res.status(500).json({status: "Error with add doctor", message: error});
        
    }

});

router.route('/').post(async(req, res) => {

    try {
        
        const doctor = await Doctor.find();

        if (!doctor) {
            return res.status(404).json({ status: "doctor not found" });
        }

        return res.status(200).json({status: "doctor is fatched", doctor});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch doctor", message: error});

    }
});

module.exports = router;