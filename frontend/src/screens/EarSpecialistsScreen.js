import React from 'react';
import earimage from '../images/earmain.jpg';
import era1 from '../images/era1.jpg';
import styles from '../styles/EarSpecialists.css';

export default function EarSpecialistsScreen() {
    return (
        <div>
            <br /><br /><br />

            <div className='row'>
                <div className='col md-3 EarSptable_1col_1'>

                    <p data-aos="fade-right"><small>vhggvhvv</small></p>
                </div>
                <div className='col md-3'>
                    <img src={earimage} alt="ear pic" className="img-fluid" />
                </div>
            </div>

            <div class="container py-5 earspacial">
                <div class="row align-items-center mb-5 OpthTable_1">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <h2 class="font-weight-light">You can get any model of Spectacles from us</h2>
                        <p class="text-muted mb-4">Discover a diverse collection of eyewear at our optical system, featuring renowned brands like Ray-Ban, Che, Chanel, and Tens. From iconic styles to trendy designs, we offer a spectrum of choices, ensuring you find the perfect pair of spectacles that align with your fashion preferences and optical needs.</p>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="fade-left"><img src={era1} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                </div>
            </div>

            <div>

                <div className='container'>

                    <div className='row mt-5 Opthtable_3'>

                        <div className='col md-3 doctsearch'>
                            <small className='barname2'>Search here</small>
                            <input class="form-control mr-sm-2 doctorSearch" type="search" placeholder="Search Doc Name." aria-label="Search"


                            />
                        </div>

                        <div className='col md-3 rating'>
                            <small className='type'>Rating</small>
                            <select className="TypeSelect">
                                <option value="all">All</option>
                                <option value="prescription eyeglasses">Prescription Eyeglasses</option>
                                <option value="sunglasses">Sunglasses</option>
                            </select>
                        </div>





                    </div>
                </div>
            </div>


        </div>
    );
}
