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
        status,
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
       status,
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
router.route('/geteyeglass/:id').post(async(req, res) => {

    const id = req.params.id;

    try {
        
        const eyeglass = await EyeGlass.findById(id);

        if (!eyeglass) {
            return res.status(404).json({ status: "eyeglass not found" });
        }

        return res.status(200).json({status: "eyeglass is fatched", eyeglass});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch eyeglass", message: error});

    }
});

router.route('/editeyeglass/:id').put(async (req, res) =>{

    const eyeglassID = req.params.id;

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
        status,
        imageurlcolor1,
        imageurlcolor2,
        imageurlcolor3
    } = req.body;

    const updateEyeglass = {
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
        status,
        imageurlcolor1,
        imageurlcolor2,
        imageurlcolor3
    }
    
    try {
        
        await EyeGlass.findByIdAndUpdate(eyeglassID , updateEyeglass);
        return res.status(200).json({status: "EyeGlass updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update EyeGlass", message: error});

    }
});

router.route('/deleteeyeglass/:id').delete(async (req, res) => {

    const eyeglassId = req.params.id;

    try {
        
        await EyeGlass.findByIdAndDelete(eyeglassId);
        return res.status(200).json({status : "EyeGlass is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete EyeGlass", message : error});

    }
});


module.exports = router;