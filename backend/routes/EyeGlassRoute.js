const router = require('express').Router();
const EyeGlass = require('../models/EyeGlass');

router.route('/addeyeglass').post(async(req, res) => {

    const {
        model,
        type,
        brand,
        gender,
        frameshape,
        framematerial,
        frametype,
        hingetype,
        discription,
        imageurl
    } = req.body;

    const newEyeGlass = new EyeGlass({
        model,
        type,
        brand,
        gender,
        frameshape,
        framematerial,
        frametype,
        hingetype,
        discription,
        imageurl
    });

    try {
        
        await newEyeGlass.save();
        return res.status(200).json({status: "EyeGlass is added successfully"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with add eyeglass", message: error});
        
    }
});
module.exports = router;