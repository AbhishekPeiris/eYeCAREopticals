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
        framesize1,
        framesize2,
        framesize3,
        price,
        rating,
        imageurlcolor1,
        imageurlcolor2,
        imageurlcolor3
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
       framesize1,
       framesize2,
       framesize3,
       price,
       rating,
       imageurlcolor1,
       imageurlcolor2,
       imageurlcolor3
    });

    try {
        
        await newEyeGlass.save();
        return res.status(200).json({status: "EyeGlass is added successfully"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with add eyeglass", message: error});

    }
});

router.route('/:brand').post(async(req, res) => {

    const brand = req.params.brand;

    try {
        
        const eyeGlass = await EyeGlass.find({ brand: brand });

        if (!eyeGlass) {
            return res.status(404).json({ status: "Eye glass brand not found" });
        }

        return res.status(200).json({status: "Eye glass brand is fatched", eyeGlass});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch eyeglass", message: error});

    }
});

router.route('/:brand/:model').post(async(req, res) => {

    const brand = req.params.brand;
    const model = req.params.model;

    try {
        
        const eyeGlass = await EyeGlass.find({ brand: brand, model: model });

        if(!eyeGlass) {
            return res.status(404).json({ status: "Eye glass model not found" });
        }

        return res.status(200).json({status: "Eye glass model is fatched", eyeGlass});

    } catch (error) {

        return res.status(500).json({status: "Error with fetch eyeglass", message: error});
        
    }
});
module.exports = router;