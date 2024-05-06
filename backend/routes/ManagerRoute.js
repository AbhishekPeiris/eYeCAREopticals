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

router.route('/getalluser').post(async (req, res) => {
    try {
        const user = await User.find();

        if (!user) {
            return res.status(404).json({ status: "No doctor appointments found" });
        }

        return res.status(200).json({ status: "Doctor appointments fetched successfully", user });
    } catch (error) {
        console.error("Error with fetching doctor appointments:", error);
        return res.status(500).json({ status: "Error with fetching doctor appointments", message: message });
    }
});


router.route('/getalluser/:id').post(async(req, res) => {

    const userID = req.params.id;

    try {
        
        const user = await User.findById(userID);

        if (!user) {
            return res.status(404).json({ status: "doctorAppointment model not found" });
        }

        return res.status(200).json({status: "doctorAppointment model is fatched", user});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch doctorAppointment", message: error});

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
        password,
        role
    } = req.body;

    const updateUser = {

        firstname,
        lastname,
        dob,
        address,
        gender,
        contact,
        email,
        password,
        role
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