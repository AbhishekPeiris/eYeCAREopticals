import React from 'react';
import Eyeglasses from '../images/eyeglasses.gif';
import styles from '../styles/Eyeglasses.css';
import EyeglassesOffer from '../images/eyeglassoffer.jpg';

const EyeGlassesScreens = () => {
    return (
        <div>
            <br /><br /><br />
            <div className='row'>
                <div className='col md-3 EGtable_1col1'>
                    <h1 style={{ color: "white", fontSize: "80px", marginTop: "70px", marginLeft: "100px" }}><strong>IS IT TIME<br />FOR <span style={{ color: "black" }}>NEW<br />GLASSES?</span></strong></h1>
                </div>
                <div className='col md-3'>
                    <img src={Eyeglasses} alt="" class="img-fluid" />
                </div>
            </div>

            <div class="container py-5">
                <div class="row align-items-center mb-5">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <h2 class="font-weight-light">You can get any model of Spectacles from us</h2>
                        <p class="text-muted mb-4">Discover a diverse collection of eyewear at our optical system, featuring renowned brands like Ray-Ban, Che, Chanel, and Tens. From iconic styles to trendy designs, we offer a spectrum of choices, ensuring you find the perfect pair of spectacles that align with your fashion preferences and optical needs.</p>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="fade-left"><img src={EyeglassesOffer} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                </div>
            </div>

        </div>
    );
}

export default EyeGlassesScreens;
