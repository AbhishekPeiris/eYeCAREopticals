const router = require('express').Router();
const EyeglassReservation = require('../models/EyeglassReservation');

router.route('/createeyeglassreservation').post(async(req, res) => {

    const {

        cusname,
        contact,
        address,
        email,
        model,
        type,
        brand,
        gender,
        framesize,
        price,
        imageurlcolor

    } = req.body;

    const newEyeglassReservation = new EyeglassReservation({
        cusname,
        contact,
        address,
        email,
        model,
        type,
        brand,
        gender,
        framesize,
        price,
        imageurlcolor
     });
 
     try {
         
         await newEyeglassReservation.save();
         return res.status(200).json({status: "EyeglassReservation is create successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with create EyeglassReservation", message: error});
 
     }   

});

router.route('/geteyeglassreservations/:email').post(async(req, res) => {

    const email = req.params.email;

    try {
        
        const eyeglassreservation = await EyeglassReservation.find({ email: email });

        if (!eyeglassreservation) {
            return res.status(404).json({ status: "eyeglassreservation not found" });
        }

        return res.status(200).json({status: "eyeglassreservation is fatched", eyeglassreservation});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch eyeglassreservation", message: error});

    }
});


router.route('/editeyeglassreservation/:id').put(async (req, res) =>{

    const eyeglassreservationID = req.params.id;

    const {
        cusname,
        contact,
        address,
        email,
        model,
        type,
        brand,
        gender,
        framesize,
        price,
        imageurlcolor
    } = req.body;

    const updateEyeglassReservation = {
        cusname,
        contact,
        address,
        email,
        model,
        type,
        brand,
        gender,
        framesize,
        price,
        imageurlcolor
    }
    
    try {
        
        await EyeglassReservation.findByIdAndUpdate(eyeglassreservationID , updateEyeglassReservation);
        return res.status(200).json({status: "EyeglassReservation updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update EyeglassReservation", message: error});

    }
});

router.route('/deleteeyeglassreservation/:id').delete(async (req, res) => {

    const eyeglassreservationID = req.params.id;

    try {
        
        await EyeglassReservation.findByIdAndDelete(eyeglassreservationID);
        return res.status(200).json({status : "EyeglassReservation is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete EyeglassReservation", message : error});

    }
});

module.exports = router;