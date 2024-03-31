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

module.exports = router;