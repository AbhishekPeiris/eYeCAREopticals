import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from '../styles/RayBan.css';
import RaybanEyeGlass from '../images/raybanglass.gif';

const RayBan = () => {

    const { brand } = useParams();
    const [RayBan, setRayBan] = useState();

    useEffect(() => {

        async function getRayBan() {

            try {

                const data = (await axios.post(`http://localhost:5000/api/eyeglass/${brand}`)).data;
                console.log(data.eyeGlass);
                setRayBan(data.eyeGlass);

            } catch (error) {

                console.log(error);

            }

        }
        getRayBan();


    }, []);

    return (
        <div>
            <br /><br /><br />

            <div className='row'>
                <div className='col md-3 RBtable_1col_1'>
                    <img src="https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png" alt="" width="200" class="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" /><br />
                    <p data-aos="fade-right"><small>Ray-Ban eyeglasses and sunglasses epitomize timeless style and cutting-edge optics.<br /> Renowned for iconic designs like the Aviator and Wayfarer, they seamlessly merge fashion and function.<br /> Crafted with precision, Ray-Ban lenses provide unparalleled clarity and UV protection.<br /> Elevate your look with the brand that has defined cool since 1936.</small></p>
                </div>
                <div className='col md-3'>
                    <img src={RaybanEyeGlass} alt="" class="img-fluid" />
                </div>
            </div>

            <div class="container py-5">
                <div class="row align-items-center mb-5">
                    <div class="col-lg-6 order-2 order-lg-1">
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RayBan;
