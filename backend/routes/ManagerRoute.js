const router = require('express').Router();
const DoctorAppointment = require('../models/DoctorAppointment');

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



module.exports = router;