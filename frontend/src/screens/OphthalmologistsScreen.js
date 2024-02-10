import React from 'react'
import eye from '../images/eye.png';
import eye1 from '../images/eye1.jpg';
import styles from '../styles/Ophthalmologists.css';
export default function OphthalmologistsScreen() {
    return (

        <div className='background'>
            <br /><br /><br />
            <div>
                <img src={eye} alt="eye pic" className='eye pic' />
            </div>
            <div>
                <h1 className='mainfont'>YOU'VE GOT OPTIONS</h1> <br />
                <p className='eyefont'>No glasses. No contacts.<br />
                    The safe and easy way...<br />
                </p>
            </div>

            <div class="container py-5">
                <div class="row align-items-center mb-5 OpthTable_1">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <h2 class="font-weight-light">You can get any model of Spectacles from us</h2>
                        <p class="text-muted mb-4">Discover a diverse collection of eyewear at our optical system, featuring renowned brands like Ray-Ban, Che, Chanel, and Tens. From iconic styles to trendy designs, we offer a spectrum of choices, ensuring you find the perfect pair of spectacles that align with your fashion preferences and optical needs.</p>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="fade-left"><img src={eye1} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                </div>
            </div>
            <div>

                <div className='container'>

                    <div className='row mt-5 Opthtable_3'>

                        <div className='col md-3 RBtable_3col_1'>
                            <small className='barname2'>Search here</small>
                            <input class="form-control mr-sm-2 RayBanSearch" type="search" placeholder="Search model No." aria-label="Search"


                            />
                        </div>

                        <div className='col md-3 RBtable_3col_1'>
                            <small className='barname'>Select Type</small>
                            <select className="RayBanTypeSelect">
                                <option value="all">All</option>
                                <option value="prescription eyeglasses">Prescription Eyeglasses</option>
                                <option value="sunglasses">Sunglasses</option>
                            </select>
                        </div>

                        <div className='col md-3 RBtable_3col_1'>
                            <small className='barname'>Select Gender</small>
                            <select className="RayBanTypeSelect"  >
                                <option value="all">All</option>
                                <option value="unisex">Unisex</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                            </select>
                        </div>

                        <div className='col md-3 RBtable_3col_1'>
                            <small className='barname'>Select Price</small>
                            <select className="RayBanTypeSelect" >
                                <option value="all">All</option>
                                <option value="9999">LKR 0 - LKR 9 999</option>
                                <option value="19999">LKR 10 000 - LKR 19 999</option>
                                <option value="29999">LKR 20 000 - LKR 29 999</option>
                                <option value="39999">LKR 30 000 - LKR 39 999</option>
                                <option value="49999">LKR 40 000 - LKR 49 999</option>
                                <option value="59999">LKR 50 000 - LKR 59 999</option>
                                <option value="69999">LKR 60 000 - LKR 69 999</option>
                                <option value="79999">LKR 70 000 - LKR 79 999</option>
                                <option value="89999">LKR 80 000 - LKR 89 999</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div></div>

    )
}
