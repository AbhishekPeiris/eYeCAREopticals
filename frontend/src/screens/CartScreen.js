import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const CartScreen = () => {

    const [cart, setCart] = useState([]);
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        async function ViewCartDetails() {
          try {
            const response = await axios.post(`http://localhost:5000/api/cart/getallcartitems/${user.email}`);
            setCart(response.data.cart);
            console.log(response.data.cart);
          } catch (error) {
            console.log(error);
          }
        }
        ViewCartDetails();
      }, [user.email]);

    return (
        <div>
            <br /><br /><br />
            <h1>Cart</h1>
        </div>
    );
}

export default CartScreen;
