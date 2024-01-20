import React, { useEffect } from 'react';
import styles from '../styles/Register.css';
import registerimg from '../images/register.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RegisterScreen = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <section class="bg-image"
                style={{ backgroundImage: `url(${registerimg})` }} data-aos="fade-left">
                <div class="mask d-flex align-items-center h-100" data-aos="fade-right">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-left align-items-left h-100 mt-5 mb-5">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card" style={{ borderRadius: "15px" }}>
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5"><strong>Create an account</strong></h2>

                                        <form>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example1cg">First Name</label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder='Enter first name' required />

                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example1cg">Last Name</label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder='Enter last name' required />

                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example1cg">Date of Birth</label>
                                                <input type="date" id="form3Example1cg" class="form-control form-control-lg" placeholder='Enter date of birth' required />

                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example1cg">Address</label>
                                                <textarea id="form3Example1cg" style={{ width: '100%', minHeight: '50px', maxHeight: "100px", backgroundColor: "white" }} className="form-control form-control-lg" placeholder="Enter address" required></textarea>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg">Gender</label><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" id="maleRadio" name="gender" className="form-check-input" value="male" required checked />
                                                <label className="form-check-label" htmlFor="maleRadio"> Male</label><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="radio" id="femaleRadio" name="gender" className="form-check-input" value="female" required />
                                                <label className="form-check-label" htmlFor="femaleRadio">Female</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example3cg">Contact</label>
                                                <input type='tel' maxLength={10} id="form3Example3cg" class="form-control form-control-lg" placeholder='Enter contact' required />

                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example3cg">Email</label>
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" placeholder='Enter email' required />

                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg" placeholder='Enter password' required />

                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form3Example4cdg">Confirm password</label>
                                                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" placeholder='Enter confirm' required />

                                            </div>

                                            <div class="form-check d-flex justify-content-left mb-5">
                                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label class="form-check-label" for="form2Example3g">
                                                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <button type="submit"
                                                    class="btn btn-success btn-block btn-lg text-body">Register</button>
                                            </div>

                                            <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                                class="fw-bold text-body"><u>Login here</u></a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RegisterScreen;
