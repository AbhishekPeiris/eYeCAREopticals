import React from 'react';
import Eyeglasses from '../images/eyeglasses.gif';
import styles from '../styles/Eyeglasses.css';

const EyeGlassesScreens = () => {
    return (
        <div>
            <br/><br/><br/>
            <div className='row'>
                <div className='col md-3 EGtable_1col1'>
                    <h1 style={{color:"white",fontSize:"80px",marginTop:"70px",marginLeft:"100px"}}><strong>IS IT TIME<br/>FOR <span style={{color:"black"}}>NEW<br/>GLASSES?</span></strong></h1>
                </div>
                <div className='col md-3'>
                    <img src={Eyeglasses} alt="" class="img-fluid" />
                </div>

            </div>
        </div>
    );
}

export default EyeGlassesScreens;
