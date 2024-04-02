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

router.route('/:id').post(async(req, res) => {

    const doctorID = req.params.id;

    try {
        
        const doctor = await Doctor.findById(doctorID);

        if (!doctor) {
            return res.status(404).json({ status: "doctor not found" });
        }

        return res.status(200).json({status: "doctor is fatched", doctor});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch doctor", message: error});

    }
});

router.route('/editdoctor/:id').put(async (req, res) =>{

    const doctorID = req.params.id;

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

    const updateDoctor = {
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
    }
    
    try {
        
        await Doctor.findByIdAndUpdate(doctorID , updateDoctor);
        return res.status(200).json({status: "doctor updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update doctor", message: error});

    }
});

router.route('/deletedoctor/:id').delete(async (req, res) => {

    const doctorID = req.params.id;

    try {
        
        await Doctor.findByIdAndDelete(doctorID);
        return res.status(200).json({status : "doctor is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete doctor", message : error});

    }
});


module.exports = router;