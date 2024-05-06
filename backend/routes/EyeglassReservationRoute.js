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
         
         const response = await newEyeglassReservation.save();
         return res.status(200).json(response);
 
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

router.route('/geteyeglassreservations/:email/:id').get(async (req, res) => {
    const email = req.params.email;
    const id = req.params.id;

    try {
        const eyeglassreservation = await EyeglassReservation.findById(id);

        if (!eyeglassreservation || eyeglassreservation.email !== email) {
            return res.status(404).json({ status: "Eyeglass reservation not found" });
        }

        return res.status(200).json({ status: "Eyeglass reservation fetched", eyeglassreservation });
    } catch (error) {
        return res.status(500).json({ status: "Error with fetching eyeglass reservation", message: error });
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