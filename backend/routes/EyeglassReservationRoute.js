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

module.exports = router;