import React from 'react';
import earimage from '../images/earmain.jpg';
import era1 from '../images/era1.jpg';
import styles from '../styles/EarSpecialists.css';

export default function EarSpecialistsScreen() {
    return (
        <div className='background'>
            <br /><br /><br />

            <div className='row'>
                <div className='col md-3 EarSptable_1col_1'>
                    <h1 className="mainfonttext" data-aos="fade-right">Quality Ear Care<br /> Right When You<br /> Need It .</h1>
                    <br />
                    <p className="eyefonttext" data-aos="fade-right">Your Ears Deserve the<br />
                        Best Care...<br /></p>
                </div>
                <div className='col md-3'>
                    <img src={earimage} alt="ear pic" className="img-fluid" />
                </div>
            </div>

            <div class="container py-5 earspacial">
                <div class="row align-items-center mb-5 OpthTable_1">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <h2 class="font-weight-light">Your Journey to Clearer Hearing Begins Here</h2>
                        <br />
                        <p class="text-muted mb-4">"Welcome to our ear care doctor channelling service! Your hearing is precious, and we're dedicated to providing you with access to top-notch ear care specialists. Whether you need a routine check-up or specialized treatment, our platform makes it easy to schedule appointments at your convenience. Take charge of your hearing health today and book an appointment with us."


                        </p>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="fade-left"><img src={era1} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                </div>
            </div>

            <div>

                <div className='row mt-5 eartable_3'>

                    <div className='col md-3 doctsearch'>
                        <small className='barname2'>Search here</small>
                        <input class="form-control mr-sm-2 doctorSearch" type="search" placeholder="Search Doc Name." aria-label="Search"


                        />
                    </div>

                    <div className='col md-3 rating'>
                        <small className='type'>Specialty</small>
                        <select className="TypeSelect">
                            <option value="all">All</option>
                            <option value="prescription eyeglasses">Eye Surgeon</option>
                            <option value="sunglasses">Ear Surgeon</option>
                            <option value="sunglasses">General Surgeon</option>
                        </select>
                    </div>
                </div>
            </div>


        </div>
    );
}
