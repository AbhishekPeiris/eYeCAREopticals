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

router.route('/:id').post(async(req, res) => {

    const repairmentID = req.params.id;

    try {
        
        const repairment = await Repairment.findById(repairmentID);

        if (!repairment) {
            return res.status(404).json({ status: "Repairment model not found" });
        }

        return res.status(200).json({status: "Repairment model is fatched", repairment});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch Repairment", message: error});

    }
});


router.route('/editrepairment/:id').put(async (req, res) =>{

    const repairmentID = req.params.id;

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

    const updateRepairment = {
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
        
        await Repairment.findByIdAndUpdate(repairmentID , updateRepairment);
        return res.status(200).json({status: "repairment updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update repairment", message: error});

    }
});

router.route('/deleterepairment/:id').delete(async (req, res) => {

    const repairmentId = req.params.id;

    try {
        
        await Repairment.findByIdAndDelete(repairmentId);
        return res.status(200).json({status : "repairment is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete repairment", message : error});

    }
});


module.exports = router;