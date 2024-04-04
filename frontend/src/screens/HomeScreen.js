import React, { useEffect, useState } from 'react';
import homeCover from '../images/home_cover.jpg';
import aboutUser from '../images/aboutUs.jpg';
import styles from '../styles/Home.css';
import EyeCheckUp from '../images/EyeCheckUp.jpg';
import EyeTest from '../images/EyeTest.jpg';
import EarCheckUp from '../images/earCheckup.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ourvalue from '../images/ourvalue.jpg';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

AOS.init({ duration: 1000 });

const HomeScreen = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {    
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
          }, 700);    
    }, []);

    return (

        <div>
            {loading ? (
                <Loader />
            ) : (

                <div>
                    <br /><br /><br />
                    <div className='row'>
                        <div className='col'>
                            <img src={homeCover} alt="Home cover" className='homepic' />

                            <h1 className='welcome' data-aos="fade-right"><strong>We secure your<br />
                                eye with quality<br />
                                glasses</strong></h1>
                            <p className='welcome_2' data-aos="fade-left">As per your wish, you can buy our quality products<br />
                                at the lowest price. We offer a wide range of products<br />
                                from the most popular brands to the most expensive brands.<br />
                                We also offer a wide range of products from the most<br />
                                popular brands to the most expensive brands.<br />
                            </p>
                            <div className='row' style={{ position: "relative", bottom: "530px", marginLeft: "185px" }}>
                                <div className='col'>
                                    <Link to = '/eyeglasses'><button className='btn1' >SHOP NOW !</button></Link>&nbsp;&nbsp;&nbsp;
                                    <Link to = {`/ophthalmologists/${"Ophthalmologists"}`}><button className='btn2' >ASK OPTOMETRIST</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row table_1'>
                        <div className='col-md-3 mt-4' style={{ marginLeft: "200px" }} data-aos="zoom-in">

                            <i class="fa fa-check-square icon_1" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                            <span className='hQ1_1'><strong>Qualified Doctors</strong></span><br />
                            <span>Optical professionals include ophthalmologists, optometrists, and skilled opticians
                                who provide qualified eye care,vision testing, and corrective lenses.</span>

                        </div>
                        <div className='col-md-3 mt-4' data-aos="zoom-in">

                            <i class="fa fa-check-square icon_1" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                            <span className='hQ1_1'><strong>Emergency Care</strong></span><br />
                            <span>In optical emergencies, prompt attention by qualified professionals is crucial for
                                issues like eye injuries, sudden vision changes, or infections.</span>

                        </div>
                        <div className='col-md-3 mt-4' data-aos="zoom-in">

                            <i class="fa fa-check-square icon_1" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                            <span className='hQ1_1'><strong>24 Hours Services</strong></span><br />
                            <span>Enjoy the convenience of 24-hour optical services, ensuring access to eye care
                                experts for emergencies, consultations, and urgent assistance</span>

                        </div>
                    </div>
                    <div className='row table_2'>
                        <div className='col-md-3'>
                            <img src={aboutUser} alt="About Us" className='aboutusImg' data-aos="fade-right" />
                        </div>
                        <div className='col-md-4' style={{ position: "relative", left: "400px" }} data-aos="fade-up">
                            <p style={{ color: "#ff4500" }}>About Us</p>
                            <h1><strong>Style Yourself<br />With The<br />Best Lens</strong></h1>
                            <p>At 'Style Yourself With The Best Lens,' we are committed to enhancing your vision and style. Our optical experts
                                curate a collection of premium lenses, providing clarity and comfort.
                                With a passion for eyecare and fashion, we strive to elevate your visual experience,
                                ensuring you always look and see your best
                            </p>
                            <Link to = "/aboutus"><button className='btn3'>Learn More</button></Link>
                        </div>
                    </div>
                    <div className='row mt-5 justify-content-center table_3'>
                        <div className='col-md-7 mt-5'>
                            <center><p style={{ color: "#ff4500" }}>Our Service</p>
                                <h1 data-aos="fade-up"><strong>What Can We Do</strong></h1>
                                <p data-aos="fade-up">Our optical services encompass comprehensive eye exams, precise prescriptions,
                                    and a curated selection of fashionable frames and lenses. Whether you seek vision correction,
                                    style enhancement, or emergency eye care, our dedicated team is committed to providing personalized solutions,
                                    ensuring your eye health and satisfaction are our top priorities.</p></center>
                        </div>
                    </div>
                    <div className='row justify-content-center table_4'>
                        <div className='col-md-3 mt-5' data-aos="zoom-in">
                            <img src={EyeTest} alt="Visual Acuity Test" className='t4img' />
                            <h2 style={{ marginTop: "30px" }}><strong>Visual Acuity Test</strong></h2>
                            <p>The visual acuity test assesses your ability to see details at various distances.
                                Our skilled optometrists conduct precise examinations to determine your vision
                                needs and prescribe accurate corrective lenses for optimal clarity.</p>
                        </div>
                        <div className='col-md-3 mt-5' data-aos="zoom-in">
                            <img src={EyeCheckUp} alt="Visual Acuity Test" className='t4img' />
                            <h2 style={{ marginTop: "30px" }}><strong>Eye Check Up</strong></h2>
                            <p>Experience thorough eye check-ups at our optical clinic. Our comprehensive examinations
                                cover vision assessment, eye health, and personalized consultations to ensure your eyes
                                receive the care they deserve for optimal well-being.</p>
                        </div>
                        <div className='col-md-3 mt-5' data-aos="zoom-in">
                            <img src={EarCheckUp} alt="Visual Acuity Test" className='t4img' />
                            <h2 style={{ marginTop: "30px" }}><strong>Ear Check Up</strong></h2>
                            <p>At our optical clinic, we go beyond vision care, offering comprehensive
                                ear and eye check-ups. Our skilled professionals ensure your auditory health,
                                providing thorough examinations for complete sensory well-being</p>
                        </div>
                    </div>
                    <div className='row table_5'>
                        <div className='col-md-12'>
                            <img src={ourvalue} alt="Home cover" className='homepic' />
                            <p style={{ color: "#ff4500" }} className='ourvalue'>Our Value</p>
                            <h2 className='ourvalue'><strong>High End Equipments</strong></h2>
                            <p className='ourvalue'>At our optical center, we are dedicated to providing unparalleled eyecare<br />
                                with our commitment to high-end equipment. Our state-of-the-art diagnostic<br />
                                tools and precision instruments enable us to deliver accurate prescriptions<br />
                                and thorough eye examinations. Embracing technological advancements, we ensure<br />
                                your visual health is in capable hands, setting a standard for excellence<br />
                                in the optical industry</p><br />
                            <span className='ourvalue'><strong>Statim Sterilizers</strong></span>
                            <div class="progress mt-2">
                                <div class="progress-bar pbar" role="progressbar" style={{ width: "87%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right">87%</div>
                            </div><br />
                            <span className='ourvalue'><strong>Surgical Microscopes</strong></span>
                            <div class="progress mt-2">
                                <div class="progress-bar pbar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right">90%</div>
                            </div><br />
                            <span className='ourvalue'><strong>Ophthalmoscopes</strong>Ophthalmoscopes</span>
                            <div class="progress mt-2">
                                <div class="progress-bar pbar" role="progressbar" style={{ width: "94%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right">94%</div>
                            </div><br />
                        </div>
                    </div>
                    <div className='row justify-content-center table_6'>
                        <div className='col-md-5 table_6col_1' data-aos="fade-right">
                            <h1><strong>Spectacles</strong></h1>
                            <p>You can get any model of<br />Spectacles from us</p>
                            <Link to = '/eyeglasses'><button className='btn1' >SHOP NOW !</button></Link>
                        </div>
                        <div className='col-md-5 table_6col_2' data-aos="fade-left">
                            <h1 style={{ color: "white" }}><strong>Hearing Aids</strong></h1>
                            <p style={{ color: "white" }}>You can get any model of<br />Hearing Aids from us</p>
                            <button className='btn1' >SHOP NOW !</button>
                        </div>
                    </div>
                    <div className='row mt-3 justify-content-center table_6'>
                        <div className='col-md-5 table_6col_3' data-aos="fade-up-right">
                            <h1><strong>Ophthalmologists</strong></h1>
                            <p>You can book an eye specialist for<br />your eye examination</p>
                            <Link to = {`/ophthalmologists/${"Ophthalmologists"}`}><button className='btn2' >ASK OPTOMETRIST</button></Link>
                        </div>
                        <div className='col-md-5 table_6col_4' data-aos="fade-up-left">
                            <h1 style={{ color: "white" }}><strong>Ear Specialists</strong></h1>
                            <p style={{ color: "white" }}>You can book an ear specialist for<br />your ear examination</p>
                            <Link to = '/EarSpecialistsScreen'><button className='btn2' >ASK OPTOMETRIST</button></Link>
                            
                        </div>
                    </div>
                    <div className='row table_7'>
                        <div className='col mt-4 table_7col_1'>
                            <i class="fa fa-volume-control-phone icon_2" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                            <span style={{ fontSize: "30px", color: "white" }}><strong>Get your Eyes Checked At Our Clinic</strong></span><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ fontSize: "25px", color: "white" }}>and get a discount on your new glasses</span>
                        </div>
                        <div className='col mt-5 table_7col_1'>
                            <button className='btn2' >ASK OPTOMETRIST</button>
                        </div>
                    </div>
                    <div className='row table_8'>

                    </div>
                </div>

            )}
        </div>

    );
}

export default HomeScreen;
