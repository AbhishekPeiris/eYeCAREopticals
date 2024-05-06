const router = require('express').Router();
const Cart = require('../models/Cart');


router.route('/addtocart').post(async(req, res) => {

    const {

        email,
        model,
        type,
        brand,
        gender,
        price,
        rating,
        status,
        imageurlcolor

    } = req.body;

    const newCart = new Cart({
        email,
        model,
        type,
        brand,
        gender,
        price,
        rating,
        status,
        imageurlcolor
     });
 
     try {
         
         await newCart.save();
         return res.status(200).json({status: "Add to Cart successfully"});
 
     } catch (error) {
         
         return res.status(500).json({status: "Error with add Add to Cart", message: error});
 
     }   

});

router.route('/getallcartitems/:email').post(async(req, res) => {

    const email = req.params.email;

    try {
        
        const cart = await Cart.find({ email: email });

        if (!cart) {
            return res.status(404).json({ status: "cart items not found" });
        }

        return res.status(200).json({status: "cart items is fatched", cart});

    } catch (error) {
        
        return res.status(500).json({status: "Error with fetch cart items", message: error});

    }
});

router.route('/removecartitem/:id').delete(async (req, res) => {

    const cartID = req.params.id;

    try {
        
        await Cart.findByIdAndDelete(cartID);
        return res.status(200).json({status : "cart item is deleted"});

    } catch (error) {
        
        return res.status(400).json({status : "Error with delete cart item", message : error});

    }
});

module.exports = router;