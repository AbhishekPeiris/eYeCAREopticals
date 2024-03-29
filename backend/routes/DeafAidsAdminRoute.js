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

module.exports = router;