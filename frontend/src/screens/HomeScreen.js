import React, { useEffect } from 'react';
import homeCover from '../images/home_cover.jpg';
import aboutUser from '../images/aboutUs.jpg';
import styles from '../styles/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeScreen = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
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
                            <button className='btn1' >SHOP NOW !</button>&nbsp;&nbsp;&nbsp;
                            <button className='btn2' >ASK OPTOMETRIST</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row table_1'>
                <div className='col-md-3 mt-4' style={{marginLeft:"200px"}} data-aos="zoom-in">
                   
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
                    <img src={aboutUser} alt="About Us" className='aboutusImg' data-aos="fade-right"/>
                </div>
                <div className='col-md-4' style={{position:"relative", left:"400px"}} data-aos="fade-up">
                    <p style={{color:"#ff4500"}}>About Us</p>
                    <h1><strong>Style Yourself<br/>With The<br/>Best Lens</strong></h1>
                    <p>At 'Style Yourself With The Best Lens,' we are committed to enhancing your vision and style. Our optical experts 
                        curate a collection of premium lenses, providing clarity and comfort. 
                        With a passion for eyecare and fashion, we strive to elevate your visual experience, 
                        ensuring you always look and see your best
                    </p>
                    <button className='btn3'>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
