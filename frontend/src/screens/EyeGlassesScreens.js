import React, { useEffect, useState } from 'react';
import Eyeglasses from '../images/eyeglasses.gif';
import styles from '../styles/Eyeglasses.css';
import EyeglassesOffer from '../images/eyeglassoffer.jpg';
import Rayban from '../images/rayban.gif';
import CHE from '../images/che.gif';
import Chanel from '../images/chanel.gif';
import Tens from '../images/tens.gif';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../components/Loader';

AOS.init({ duration: 1000 });

const EyeGlassesScreens = () => {

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
                    <div class="container py-5">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-6 order-2 order-lg-1">
                                <img src={Rayban} alt="" class="img-fluid" />
                            </div>
                            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="zoom-in">
                                <img src="https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png" alt="" width="200" class="img-fluid mb-4 mb-lg-0" />
                                <p class="text-muted mb-4"> Ray-Ban glasses are fitted with prescription lenses made from high-quality glass or plastic to ensure your eyes have maximum eye protection. Ray-Ban lenses, whether glass or plastic, can also have various lens coatings to add when you purchase prescription eyeglasses.</p>
                                <Link to={`/rayban/${"Ray-Ban"}`}><button className='btn1' >SHOP NOW !</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="container py-5">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-4 order-2 order-lg-1" data-aos="zoom-in">
                                <img src="https://cheeyewear.com.au/cdn/shop/files/Screen_Shot_2023-09-16_at_12.36.42_pm_1200x1200.png?v=1694845852" alt="" width="200" class="img-fluid mb-4 mb-lg-0" />
                                <p class="text-muted mb-4">It's high-quality materials that ensure convenience and comfort of use. The most popular high quality material is used for production of the glasses. A derivative of plastic, resistant to scratches and external damage. A characteristic feature is a very high gloss that stays on the frames for many years.</p>
                                <Link to={`/che/${"Che"}`}><button className='btn1' >SHOP NOW !</button></Link>
                            </div>
                            <div class="col-lg-6 px-6 mx-auto order-1 order-lg-2">
                                <img src={CHE} alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div class="container py-5">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-6 order-2 order-lg-1">
                                <img src={Chanel} alt="" class="img-fluid" />
                            </div>
                            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2" data-aos="zoom-in">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/2560px-Chanel_logo_interlocking_cs.svg.png" alt="" width="170" class="img-fluid mb-4 mb-lg-0" /><br/><br/>
                                <p class="text-muted mb-4">CHANEL is dedicated to ultimate luxury and to the highest level of craftsmanship. It is a brand whose core values remain historically grounded on exceptional creation. As such, CHANEL promotes culture, art, creativity and “savoir-faire” throughout the world, and invests significantly in people, R&D and innovation.</p>
                                <Link to={`/chanel/${"Chanel"}`}><button className='btn1' >SHOP NOW !</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="container py-5">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-4 order-2 order-lg-1" data-aos="zoom-in">
                                <img src="https://iconape.com/wp-content/png_logo_vector/tens.png" alt="" width="150" class="img-fluid mb-4 mb-lg-0" />
                                <p class="text-muted mb-4">While typical sunglasses block light with dark and lifeless shade, our "Original" lens filter was designed to warm and enrich your view. Utilising warm amber and red undertones with a gradient designed to illuminate specific colour elements within the lens, "Original" delivers a unique, uplifting view of the world.</p>
                                <Link to={`/tens/${"Tens"}`}><button className='btn1' >SHOP NOW !</button></Link>
                            </div>
                            <div class="col-lg-6 px-6 mx-auto order-1 order-lg-2">
                                <img src={Tens} alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>

    );
}

export default EyeGlassesScreens;
