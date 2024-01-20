import React, { useEffect, useState } from 'react';
import styles from '../styles/Register.css';
import registerimg from '../images/register.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

AOS.init({ duration: 1000 });

const RegisterScreen = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setLoading(false);
    }, []);

    return (

        <div>
            {loading ? (
                <Loader />
            ) : (

                <div>
                    <br /><br /><br />
                    <img src={registerimg} alt="Home cover" className='regpic' data-aos="fade-left" />
                    <div className="mask d-flex align-items-center h-100 frame">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-left align-items-left h-100 mt-5 mb-5">
                                <div className="col-12 col-md-8 col-lg-6">
                                    <div className="card" style={{ borderRadius: "15px", border: "3px solid #f5e9db" }}>
                                        <div className="card-body p-4">
                                            <h2 className="text-center mb-4"><strong>Register</strong></h2>
                                            <form>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="firstName">First Name</label>
                                                    <input type="text" id="firstName" className="form-control" placeholder='Enter first name' required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="lastName">Last Name</label>
                                                    <input type="text" id="lastName" className="form-control" placeholder='Enter last name' required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="dob">Date of Birth</label>
                                                    <input type="date" id="dob" className="form-control" required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="address">Address</label>
                                                    <textarea id="address" className="form-control" style={{ width: '100%', minHeight: '50px', maxHeight: "100px", backgroundColor: "white" }} placeholder="Enter address" required></textarea>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Gender</label><br />
                                                    <div className="form-check form-check-inline">
                                                        <input type="radio" id="maleRadio" name="gender" className="form-check-input" value="male" required checked />
                                                        <label className="form-check-label" htmlFor="maleRadio"> Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input type="radio" id="femaleRadio" name="gender" className="form-check-input" value="female" required />
                                                        <label className="form-check-label" htmlFor="femaleRadio">Female</label>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="contact">Contact</label>
                                                    <input type='tel' maxLength={10} id="contact" className="form-control" placeholder='Enter contact' required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input type="email" id="email" className="form-control" placeholder='Enter email' required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <input type="password" id="password" className="form-control" placeholder='Enter password' required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
                                                    <input type="password" id="confirmPassword" className="form-control" placeholder='Enter confirm' required />
                                                </div>

                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" value="" id="termsCheckbox" required />
                                                    <label className="form-check-label" htmlFor="termsCheckbox">
                                                        I agree to the <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center">
                                                    <button type="submit" className="btn btn-success btn-block btn-lg text-body">Register</button>
                                                </div>

                                                <p className="text-center text-muted mt-3 mb-0">Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row Rtable_1'>

                    </div>

                </div>
            )}

        </div>

    );
}

export default RegisterScreen;
