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

router.route('/').post(async(req, res) => {

    try {
        
        const doctorAppointment = await DoctorAppointment.find();

        if (!doctorAppointment) {
            return res.status(404).json({ status: "doctorAppointment not found" });
        }

        return res.status(200).json({status: "doctorAppointment is fatched", doctorAppointment});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch doctorAppointment", message: error});

    }
});

router.route('/:id').post(async(req, res) => {

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


module.exports = router;