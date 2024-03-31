const router = require('express').Router();
const DeafAidsReservation = require('../models/DeafaidsReservation');

router.route('/createdeafaidsreservation').post(async(req, res) => {

    const {

        cusname,
        contact,
        address,
        email,
        model,
        gender,
        size,
        price,
        imageurlcolor

    } = req.body;

    const newDeafAidsReservation = new DeafAidsReservation({
        cusname,
        contact,
        address,
        email,
        model,
        gender,
        size,
        price,
        imageurlcolor
     });
 
     try {
         
         await newDeafAidsReservation.save();
         return res.status(200).json({status: "DeafAidsReservation is create successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with create DeafAidsReservation", message: error});
 
     }   

});

router.route('/getdeafaidsreservations/:email').post(async(req, res) => {

    const email = req.params.email;

    try {
        
        const deafaidsreservation = await DeafAidsReservation.find({ email: email });

        if (!deafaidsreservation) {
            return res.status(404).json({ status: "deafaidsreservation not found" });
        }

        return res.status(200).json({status: "deafaidsreservation is fatched", deafaidsreservation});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch deafaidsreservation", message: error});

    }
});

router.route('/editdeafaidsreservation/:id').put(async (req, res) =>{

    const deafaidsreservationID = req.params.id;

    const {
        cusname,
        contact,
        address,
        email,
        model,
        gender,
        size,
        price,
        imageurlcolor
    } = req.body;

    const updateDeafaidsReservation = {
        cusname,
        contact,
        address,
        email,
        model,
        gender,
        size,
        price,
        imageurlcolor
    }
    
    try {
        
        await DeafAidsReservation.findByIdAndUpdate(deafaidsreservationID , updateDeafaidsReservation);
        return res.status(200).json({status: "DeafAidsReservation updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update DeafAidsReservation", message: error});

    }
});


module.exports = router;