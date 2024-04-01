const router = require('express').Router();
const Cart = require('../models/Cart');


router.route('/addtocart').post(async(req, res) => {

    const {

        model,
        type,
        brand,
        gender,
        price,
        rating,
        imageurlcolor

    } = req.body;

    const newCart = new Cart({
        model,
        type,
        brand,
        gender,
        price,
        rating,
        imageurlcolor
     });
 
     try {
         
         await newCart.save();
         return res.status(200).json({status: "Add to Cart successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with add Add to Cart", message: error});
 
     }   

});

module.exports = router;