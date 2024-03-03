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
    const [selectedColor, setSelectedColor] = useState(1); // Default to color 1

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

    const selectColor = (colorNumber) => {
        setSelectedColor(colorNumber);
    }

    return (
        <div>
            <div className="row">
                <div className='col md-5'>
                    <br /><br /><br />
                    <img src="https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" style={{ marginLeft: "150px" }} /><br />
                    {eyeglass.map((eyeglass) => (
                        <div key={eyeglass.model}>
                            <p className='eyeglassModelNo'>{eyeglass.model} <span style={{ color: "black", fontWeight: "lighter", fontSize: "16px" }}> / {eyeglass.type}</span></p>
                            <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
                            <ol class="carousel-indicators">
                                
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[0]} alt="First slide" /></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[1]} alt="Second slide" /></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[2]} alt="Third slide" /></li>
                                </ol>
                                <div className="carousel-inner">
                                    {eyeglass[`imageurlcolor${selectedColor}`].map((image, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <img className="d-block w-100" src={image} alt="Slide Images" />
                                        </div>
                                    ))}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {eyeglass.map((eyeglass) => (
                    <div key={eyeglass.model} className='col md-3 mt-3'>
                        <br /><br /><br />
                        <div className='eyeglassBrandTag'>
                            <strong><p>{eyeglass.brand} &nbsp;&nbsp;|&nbsp;&nbsp; {eyeglass.model} &nbsp;&nbsp;|&nbsp;&nbsp; {eyeglass.type}</p></strong>
                        </div><br />
                        <div className='row'>
                            <div className='col md-3'>
                                <p>
                                    <strong>{eyeglass.brand} | {eyeglass.model}</strong> <br />
                                    <p style={{ fontSize: "13px" }}>
                                        {eyeglass.type} | {eyeglass.gender}<br />
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
                        <hr style={{ backgroundColor: "black", width: "500px" }} />
                        <div className='row'>
                            <div className='col md-5'>
                                <p><strong>SELECT FRAME COLOR :</strong></p>
                                {[1, 2, 3].map(colorNumber => (
                                    <button key={colorNumber} className='framecolorimg' onClick={() => selectColor(colorNumber)}>
                                        <img src={eyeglass[`imageurlcolor${colorNumber}`][0]} alt="Frame Color" width={100} />
                                    </button>
                                ))}
                            </div>
                        </div><br />
                        <hr style={{ backgroundColor: "black", width: "500px" }} />

                        <div className='row'>
                            <div className='col md-5'>
                            <p><strong>SELECT FRAME SIZE :</strong></p>
                                <button className='framecolorimg'>{eyeglass.framesize1}</button>
                                <button className='framecolorimg'>{eyeglass.framesize2}</button>
                                <button className='framecolorimg'>{eyeglass.framesize3}</button>
                            </div>
                        </div><br/>
                        <hr style={{ backgroundColor: "black", width: "500px" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RayBanModel;
