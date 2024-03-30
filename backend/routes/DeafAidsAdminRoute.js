const router = require('express').Router();
const DeafAids = require('../models/DeafAids');

router.route('/adddeafaids').post(async(req, res) => {

    const {

        model,
        gender,
        material,
        discription,
        size1,
        size2,
        price,
        rating,
        imageurlcolor1,
        imageurlcolor2

    } = req.body;

    const newDeafAids = new DeafAids({
        model,
        gender,
        material,
        discription,
        size1,
        size2,
        price,
        rating,
        imageurlcolor1,
        imageurlcolor2
     });
 
     try {
         
         await newDeafAids.save();
         return res.status(200).json({status: "DeafAids is added successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with add deafAids", message: error});
 
     }   

});

router.route('/').post(async(req, res) => {

    try {
        
        const deafaids = await DeafAids.find();

        if (!deafaids) {
            return res.status(404).json({ status: "DeafAids not found" });
        }

        return res.status(200).json({status: "DeafAids is fatched", deafaids});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch deafaids", message: error});

    }
});

router.route('/:model').post(async(req, res) => {

    const model = req.params.model;

    try {
        
        const deafaids = await DeafAids.find({ model: model });

        if (!deafaids) {
            return res.status(404).json({ status: "DeafAids model not found" });
        }

        return res.status(200).json({status: "DeafAids model is fatched", deafaids});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch deafAids", message: error});

    }
});

router.route('/editdeafaids/:id').put(async (req, res) =>{

    const deafaidsID = req.params.id;

    const {
        model,
        gender,
        material,
        discription,
        size1,
        size2,
        price,
        rating,
        imageurlcolor1,
        imageurlcolor2 
    } = req.body;

    const updateDeafAids = {
        model,
        gender,
        material,
        discription,
        size1,
        size2,
        price,
        rating,
        imageurlcolor1,
        imageurlcolor2
    }
    
    try {
        
        await DeafAids.findByIdAndUpdate(deafaidsID , updateDeafAids);
        return res.status(200).json({status: "Deafaids updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update deafaids", message: error});

    }
});

router.route('/deletedeafaids/:id').delete(async (req, res) => {

    const deafaidsId = req.params.id;

    try {
        
        await DeafAids.findByIdAndDelete(deafaidsId);
        return res.status(200).json({status : "deafaids is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete deafaids", message : error});

    }
});

module.exports = router;