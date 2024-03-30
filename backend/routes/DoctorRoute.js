const router = require('express').Router();
const Doctor = require('../models/Doctor');
const DoctorAppointment = require('../models/DoctorAppointment');

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

router.route('/getdoctor/:type').post(async(req, res) => {

    const type = req.params.type;

    try {
        
        const doctor = await Doctor.find({ type: type });

        if (!doctor) {
            return res.status(404).json({ status: "Doctor type not found" });
        }

        return res.status(200).json({status: "Doctor type is fatched", doctor});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch Doctor", message: error});

    }
});

router.route('/createdoctorappointment').post(async(req, res) => {

    const {

        cusname,
        contact,
        address,
        email,
        doctorname,
        date,
        doctorfee

    } = req.body;

    const newDoctorAppointment = new DoctorAppointment({
        cusname,
        contact,
        address,
        email,
        doctorname,
        date,
        doctorfee
     });
 
     try {
         
         await newDoctorAppointment.save();
         return res.status(200).json({status: "DoctorAppointment is added successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with add DoctorAppointment", message: error});
 
     }   

});

router.route('/getalldoctorappointment/:email').post(async(req, res) => {

    const email = req.params.email;

    try {
        
        const doctor = await DoctorAppointment.find({ email: email });

        if (!doctor) {
            return res.status(404).json({ status: "doctorAppointment not found" });
        }

        return res.status(200).json({status: "doctorAppointment is fatched", doctor});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch doctorAppointment", message: error});

    }
});

module.exports = router;
