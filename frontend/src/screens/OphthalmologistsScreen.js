import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import eye from '../images/eye.png';
import eye1 from '../images/eye1.jpg';
import styles from '../styles/Ophthalmologists.css';
import Loader from '../components/Loader';
import Rating from 'react-rating-stars-component';
export default function OphthalmologistsScreen() {

    const [doctor, setDoctor] = useState([]);
    const { type } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getDoctor() {

            try {
                setTimeout(async () => {
                    setLoading(true);
                    const response = await axios.post(`http://localhost:5000/api/doctor/getdoctor/${type}`);
                    setDoctor(response.data.doctor);
                    console.log(response.data.doctor)
                    console.log(type)
                    setLoading(false);
                }, 700);

            } catch (error) {
                console.log(error);
                setLoading(false);

            }
        }
        getDoctor();
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (

                <div className='background'>


                    <div>
                        <img src={eye} alt="eye pic" className='eye pic' />
                    </div>
                    <div>
                        <h1 className='mainfont'>Take Control Of <br />  Your Eye Health <br />  With Us.</h1> <br />
                        <p className='eyefont'>Your Vision Matters,<br />
                            Book an Appointment Now.<br />
                        </p>
                    </div>

                    <div class="lap_1">
                        <div class="container py-5">
                            <div class="row align-items-center mb-5 OpthTable_1">
                                <div class="col-lg-6 order-2 order-lg-1">
                                    <h2 class="font-weight-light">Experience Expert Eye Care Channelling Online</h2>
                                    <br />
                                    <p class="text-muted mb-4">"Welcome to our eye care doctor channelling service! We understand the importance of your vision and are here to help you schedule appointments with our experienced eye care specialists. Take the first step towards clearer vision and better eye health by booking your appointment today."</p>
                                </div>
                                <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="fade-left"><img src={eye1} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='container'>

                            <div className='row mt-5 Opthtable_3'>

                                <div className='col md-3 doctsearch'>
                                    <small className='barname2'>Doctor Name</small>
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

                        <div className="row mb-5 mt-5 RBtable_2">
                            {doctor.map((doctor) => (
                                <div className="col-lg-3 RBtable_2col_1" key={doctor._id} data-aos="zoom-in">
                                    <img src={doctor.imageurl[0]} alt="" width={300} />
                                    <br/><br/>
                                    <p>
                                        <strong>{doctor.firstname} {doctor.lastname}</strong><br/>
                                        <p style={{fontSize:"11px"}}>{doctor.specialty} | {doctor.department}<br/>
                                        {doctor.type}
                                        <Rating
                                            count={5}
                                            value={doctor.rating}
                                            size={24}
                                            edit={false}
                                        />
                                        <hr style={{ backgroundColor: "black" }} />
                                        <Link><button className='docappoibtn' >Make Appointment !</button></Link>
                                        </p>
                                        

                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}
