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

router.route('/doctorid/:id').post(async(req, res) => {

    
    const id = req.params.id;

    try {
        
        const doctor = await Doctor.findById(id);

        if (!doctor) {
            return res.status(404).json({ status: "Doctor not found" });
        }

        return res.status(200).json({ status: "Doctor found", doctor });

    } catch (error) {
        
        return res.status(500).json({ status: "Error with fetching Doctor", message: error });

    }
});


router.route('/createdoctorappointment').post(async(req, res) => {

    const {
        firstname,
        lastname,
        date,
        gender,
        age,
        email,
        contact,
        address,
        emergency,
        doctor,
        doctorfee

    } = req.body;

    const newDoctorAppointment = new DoctorAppointment({
        firstname,
        lastname,
        date,
        gender,
        age,
        email,
        contact,
        address,
        emergency,
        doctor,
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


router.route('/editdoctorappointment/:id').put(async (req, res) =>{

    const doctorAppointmentID = req.params.id;

    const {
        firstname,
        lastname,
        date,
        gender,
        age,
        email,
        contact,
        address,
        emergency,
        doctor,
        doctorfee
    } = req.body;

    const doctorAppointment = {
        firstname,
        lastname,
        date,
        gender,
        age,
        email,
        contact,
        address,
        emergency,
        doctor,
        doctorfee
    }
    
    try {
        
        await DoctorAppointment.findByIdAndUpdate(doctorAppointmentID , doctorAppointment);
        return res.status(200).json({status: "DoctorAppointment updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update DoctorAppointment", message: error});

    }
});

router.route('/deletedoctorappointment/:id').delete(async (req, res) => {

    const doctorAppointmentID = req.params.id;

    try {
        
        await DoctorAppointment.findByIdAndDelete(doctorAppointmentID);
        return res.status(200).json({status : "DoctorAppointment is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete DoctorAppointment", message : error});

    }
});

router.route('/getalldoctorappointment/:email/:id').post(async(req, res) => {

    const id = req.params.id;

    try {
        
        const doctor = await DoctorAppointment.findById(id);

        if (!doctor) {
            return res.status(404).json({ status: "doctorAppointment not found" });
        }

        return res.status(200).json({status: "doctorAppointment is fatched", doctor});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch doctorAppointment", message: error});

    }
});
module.exports = router;
