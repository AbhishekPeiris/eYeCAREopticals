import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../styles/cart.css";
import Rating from 'react-rating-stars-component';
import Loader from '../components/Loader';

const BookingScreen = () => {

    const [cart, setCart] = useState([]);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function ViewBookingDetails() {
            try {
                setTimeout(async () => {
                    setLoading(true);
                    const response = await axios.post(`http://localhost:5000/api/eyeglassreservation/geteyeglassreservations/${user.email}`);
                    setCart(response.data.eyeglassreservation);
                    console.log(response.data.eyeglassreservation);
                    setLoading(false);
                }, 700);
            } catch (error) {
                console.log(error);
            }
        }
        ViewBookingDetails();
    }, [user.email]);

    return (
        <div>
            <br /><br /><br />
            <h1>My Booking</h1>
            
        </div>
    );
}

export default BookingScreen;
