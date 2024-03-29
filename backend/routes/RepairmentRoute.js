const router = require('express').Router();
const Repairment = require('../models/Repairment');

router.route('/addrepairment').post(async(req, res) => {

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

    const newRepairment = new Repairment({
        cusname,
        contact,
        address,
        email,
        model,
        DateofDropoff,
        PreferredPickupDate,
        DescriptionofIssue,
        price
     });
 
     try {
         
         await newRepairment.save();
         return res.status(200).json({status: "Repairment is added successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with add Repairment", message: error});
 
     }   

});

router.route('/').post(async(req, res) => {

    try {
        
        const repairment = await Repairment.find();

        if (!repairment) {
            return res.status(404).json({ status: "Repairment not found" });
        }

        return res.status(200).json({status: "Repairment is fatched", repairment});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch Repairment", message: error});

    }
});


module.exports = router;