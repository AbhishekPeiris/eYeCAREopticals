import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/RayBanModel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rating from 'react-rating-stars-component';

const RayBanModel = () => {
    const [eyeglass, setEyeglass] = useState([]);

    const { brand, model } = useParams();

    useEffect(() => {
        async function getEyeglassDetails(brand, model) {
            try {
                const response = await axios.post(`http://localhost:5000/api/eyeglass/${brand}/${model}`)
                setEyeglass(response.data.eyeGlass);
            } catch (error) {
                console.log(error);
            }
        }
        getEyeglassDetails(brand, model);
    }, [brand, model]);

    return (
        <div>
            <div className="row">
                <div className='col md-5'>

                    <br /><br /><br />
                    <img src="https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" style={{ marginLeft: "150px" }} /><br />
                    {eyeglass.map((eyeglass) => (

                        <div>
                            <p className='eyeglassModelNo'>{eyeglass.model} <span style={{ color: "black", fontWeight: "lighter", fontSize: "16px" }}> / {eyeglass.type}</span></p>

                            <div id="carouselExampleIndicators" class="carousel slide mb-5" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[0]} alt="First slide" /></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[1]} alt="Second slide" /></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[2]} alt="Third slide" /></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={eyeglass.imageurlcolor1[0]} alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={eyeglass.imageurlcolor1[1]} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={eyeglass.imageurlcolor1[2]} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>

                                </a>
                            </div>
                        </div>

                    ))}

                </div>

                {eyeglass.map((eyeglass) => (
                <div className='col md-3 mt-3'>
                            
                    <br /><br /><br />
                    <div className='eyeglassBrandTag'>
                        <strong><p>{eyeglass.brand} &nbsp;&nbsp;|&nbsp;&nbsp; {eyeglass.model} &nbsp;&nbsp;|&nbsp;&nbsp; {eyeglass.type}</p></strong>
                    </div><br/>

                    <div className='row'>
                        <div className='col md-3'>
                            <p>
                                <strong>{eyeglass.brand} | {eyeglass.model}</strong> <br/>
                                <p style={{fontSize:"13px"}}>
                                    {eyeglass.type} | {eyeglass.gender}<br/>
                                    <Rating
                                            count={5}
                                            value={eyeglass.rating}
                                            size={24}
                                            edit={false}
                                        />
                                </p>
                            </p>
                        </div>
                        <div className='col md-3'>
                            <p className='eyeGlassPrice_1'><strong>LKR &nbsp;{eyeglass.price}</strong></p>
                        </div>
                    </div>
                    <hr style={{ backgroundColor: "black", width:"500px"}} />
                    
                </div>
                ))}
            
            </div>
        </div>
    );
}

export default RayBanModel;
