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

router.route('/').post(async(req, res) => {

    try {
        
        const feedback = await Feedback.find();

        if (!feedback) {
            return res.status(404).json({ status: "feedback not found" });
        }

        return res.status(200).json({status: "feedback is fatched", feedback});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch feedback", message: error});

    }
});

router.route('/:id').post(async(req, res) => {

    const feedbackID = req.params.id;

    try {
        
        const feedback = await Feedback.findById(feedbackID);

        if (!feedback) {
            return res.status(404).json({ status: "Feedback model not found" });
        }

        return res.status(200).json({status: "Feedback model is fatched", feedback});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch Feedback", message: error});

    }
});


router.route('/email/:email').post(async (req, res) => {

    const userEmail = req.params.email;

    try {
        
        const feedback = await Feedback.find({ email: userEmail });

        if (!feedback) {
            return res.status(404).json({ status: "Feedback not found" });
        }

        return res.status(200).json({ status: "Feedback fetched", feedback });

    } catch (error) {
        
        return res.status(500).json({ status: "Error with fetching Feedback", message: error });

    }
});

router.route('/editfeedback/:id').put(async (req, res) =>{

    const feedbackID = req.params.id;

    const {
        cusname,
        contact,
        address,
        email,
        rating,
        comment
    } = req.body;

    const updateFeedback = {
        cusname,
        contact,
        address,
        email,
        rating,
        comment
    }
    
    try {
        
        await Feedback.findByIdAndUpdate(feedbackID , updateFeedback);
        return res.status(200).json({status: "Feedback updated"});

    } catch (error) {
        
        return res.status(500).json({status: "Error with update Feedback", message: error});

    }
});

router.route('/deletefeedback/:id').delete(async (req, res) => {

    const feedbackID = req.params.id;

    try {
        
        await Feedback.findByIdAndDelete(feedbackID);
        return res.status(200).json({status : "Feedback is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete Feedback", message : error});

    }
});

module.exports = router;