const router = require('express').Router();
const DoctorAppointment = require('../models/DoctorAppointment');
const User = require('../models/User');

router.route('/addappointment').post(async(req, res) => {

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

router.route('/getalldoctorappointment').post(async (req, res) => {
    try {
        const doctorAppointments = await DoctorAppointment.find();

        if (!doctorAppointments) {
            return res.status(404).json({ status: "No doctor appointments found" });
        }

        return res.status(200).json({ status: "Doctor appointments fetched successfully", doctorAppointments });
    } catch (error) {
        console.error("Error with fetching doctor appointments:", error);
        return res.status(500).json({ status: "Error with fetching doctor appointments", message: message });
    }
});

router.route('/getalldoctorappointment/:id').post(async(req, res) => {

    const doctorAppointmentID = req.params.id;

    try {
        
        const doctorAppointment = await DoctorAppointment.findById(doctorAppointmentID);

        if (!doctorAppointment) {
            return res.status(404).json({ status: "doctorAppointment model not found" });
        }

        return res.status(200).json({status: "doctorAppointment model is fatched", doctorAppointment});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch doctorAppointment", message: error});

    }
});


router.route('/editdoctorappointment/:id').put(async (req, res) =>{

    const doctorAppointmentID = req.params.id;

    const {
        cusname,
        contact,
        address,
        email,
        model,
        DateofDropoff,
        PreferredPickupDate,
        DescriptionofIssue,
        price
    } = req.body;

    const doctorAppointment = {
        cusname,
        contact,
        address,
        email,
        model,
        DateofDropoff,
        PreferredPickupDate,
        DescriptionofIssue,
        price
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

router.route('/adduser').post(async (req, res) => {

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
        
        return res.status(500).json({status: "Error with add user", messsage: error});
    }
});


module.exports = router;