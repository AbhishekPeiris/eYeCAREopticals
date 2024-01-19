import React from 'react';
import styles from '../styles/Footer.css';
import logo from '../images/navbar_logo.png';

const Footer = () => {
    return (

        <div class="d-flex flex-column h-100">
            <footer class="w-100 py-4 flex-shrink-0">
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="h1 text-white"><a to="/" className="navbar-brand logo"><img src={logo} alt="Logo" width={105}/></a></h5>
                            <p class="small text-muted">As per your wish, you can buy our quality products at the lowest price.</p>
                            <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">eyeCAREoptical.com</a></p>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="mb-3" style={{ color: "#ff4500" }}>Service</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="#">Lerning</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Prescribtion</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="mb-3" style={{ color: "#ff4500" }}>Further Information</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="#">Terams & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="mb-3" style={{ color: "#ff4500" }}>Find Us</h5>
                            <p class="small text-muted">Visit these to know more about us</p>
                           
                            <div class="input-group mb-3">
                                <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;
