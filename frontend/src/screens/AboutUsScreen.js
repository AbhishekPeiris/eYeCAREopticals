import React, { useEffect, useState } from 'react';
import CEO1 from '../images/CEO1.jpg';
import CEO2 from '../images/CEO2.jpg';
import CEO3 from '../images/CEO3.jpg';
import CEO4 from '../images/CEO4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../components/Loader';

AOS.init({ duration: 1000 });

const AboutUsScreen = () => {

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
                    <div class="bg-light">
                        <div class="container py-5">
                            <div class="row h-100 align-items-center py-5">
                                <div class="col-lg-6">
                                    <h1 class="display-4" data-aos="fade-right"><strong>About us</strong></h1>
                                    <p class="lead text-muted mb-0" data-aos="fade-left">We are committed to enhancing your vision and style. Our optical experts
                                        curate a collection of premium lenses, providing clarity and comfort.
                                        With a passion for eyecare and fashion, we strive to elevate your visual experience,
                                        ensuring you always look and see your best.</p>
                                </div>
                                <div class="col-lg-6 d-none d-lg-block"><img src="https://img.freepik.com/free-photo/colleagues-planning-business-project-together_23-2148738288.jpg?w=996&t=st=1706262714~exp=1706263314~hmac=2652e60a3991cbab269232bad86f010d4453c3e79c5bccec8582b3174c7db186" alt="" class="img-fluid" /></div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white py-5">
                        <div class="container py-5">
                            <div class="row align-items-center mb-5">
                                <div class="col-lg-6 order-2 order-lg-1" data-aos="fade-right"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                    <h2 class="font-weight-light">Our credibility and transparency</h2>
                                    <p class="font-italic text-muted mb-4">In the realm of optical systems, our credibility and transparency are paramount. We adhere to rigorous standards, ensuring the accuracy and reliability of our products, fostering trust among customers and stakeholders.</p><button className='btn3'>Learn More</button>
                                </div>
                                <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://img.freepik.com/free-photo/african-business-male-people-shaking-hands_1303-18516.jpg?w=996&t=st=1706262645~exp=1706263245~hmac=b4c3c99d66985f9837e6ec6c5d373db06283cc03fef0f258d575c58fc7f4c562" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-lg-5 px-5 mx-auto"><img src="https://img.freepik.com/free-photo/team-doctors-standing-row_107420-84773.jpg?w=996&t=st=1706262204~exp=1706262804~hmac=90b146af5b35f815894794261794983ab406a6c72ee7c670fc6196acbad9f03e" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                                <div class="col-lg-6" data-aos="fade-left"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                                    <h2 class="font-weight-light">The sense of community we have among each other</h2>
                                    <p class="font-italic text-muted mb-4">Within our optical system community, a profound sense of unity prevails. Collaborative efforts and mutual support define our interactions, fostering an environment where innovation thrives and excellence is celebrated.</p><button className='btn3'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-light py-5">
                        <div class="container py-5">
                            <div class="row mb-4">
                                <div class="col-lg-5" data-aos="fade-down">
                                    <h2 class="display-4 font-weight-light">Our team</h2>
                                    <p class="font-italic text-muted">Our optical system team excels through expertise and collaboration. Diverse skills converge, driving innovation and precision in every project we undertake.</p>
                                </div>
                            </div>

                            <div class="row text-center">

                                <div class="col-xl-3 col-sm-6 mb-5" data-aos="zoom-in">
                                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src={CEO1} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                        <h5 class="mb-0">Mr.Keerthi Fernando</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                        <div class="social mt-5"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                                    </div>
                                </div>



                                <div class="col-xl-3 col-sm-6 mb-5" data-aos="zoom-in">
                                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src={CEO2} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                        <h5 class="mb-0">Dr.Chandani Jayawardhana</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                        <div class="social mt-5"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                                    </div>
                                </div>



                                <div class="col-xl-3 col-sm-6 mb-5" data-aos="zoom-in">
                                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src={CEO3} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                        <h5 class="mb-0">Mr.Dasun Edirisinghe</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                        <div class="social mt-5"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 mb-5" data-aos="zoom-in">
                                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src={CEO4} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                        <h5 class="mb-0">Ms.July Fernando</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                        <div class="social mt-5"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default AboutUsScreen;
