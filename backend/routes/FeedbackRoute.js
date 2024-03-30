const router = require('express').Router();
const Feedback = require('../models/Feedback');

router.route('/addfeedback').post(async(req, res) => {

    const {

        cusname,
        contact,
        address,
        email,
        rating,
        comment

    } = req.body;

    const newFeedback = new Feedback({
        cusname,
        contact,
        address,
        email,
        rating,
        comment
     });
 
     try {
         
         await newFeedback.save();
         return res.status(200).json({status: "Feedback is added successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with add Feedback", message: error});
 
     }   

});



module.exports = router;