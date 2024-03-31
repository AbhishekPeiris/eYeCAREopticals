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

router.route('/').post(async(req, res) => {

    try {
        
        const eyeglass = await EyeGlass.find();

        if (!eyeglass) {
            return res.status(404).json({ status: "eyeglass not found" });
        }

        return res.status(200).json({status: "eyeglass is fatched", eyeglass});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch eyeglass", message: error});

    }
});

router.route('/:model').post(async(req, res) => {

    const model = req.params.model;

    try {
        
        const eyeglass = await EyeGlass.find({ model: model });

        if (!eyeglass) {
            return res.status(404).json({ status: "eyeglass model not found" });
        }

        return res.status(200).json({status: "eyeglass model is fatched", eyeglass});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch eyeglass", message: error});

    }
});


module.exports = router;