import React, { useEffect, useState } from 'react';
import styles from '../styles/Register.css';
import registerimg from '../images/register.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import axios from 'axios';
import Swal from 'sweetalert2';

AOS.init({ duration: 1000 });

const RegisterScreen = () => {

    const [loading, setLoading] = useState(true);

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [dob, setDob] = useState();
    const [address, setAddress] = useState();
    const [gender, setGender] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setconfirmPasswordVisible] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
          }, 700);
    }, []);

    async function UserRegister(e) {
        e.preventDefault();

        if(password == passwordConfirmation){

            const newUser = {

                firstname,
                lastname,
                dob,
                address,
                gender,
                contact,
                email,
                password
            }

            try {
                
                setLoading(true);
                const data = (await axios.post('http://localhost:5000/api/user/register', newUser)).data;
                console.log(data);
                Swal.fire('Thank you!', "Registration Successfully", "success").then(result => {

                    window.location.href = '/login';

                });
                setLoading(false);

                setFirstname('');
                setLastname('');
                setDob('');
                setAddress('');
                setGender('');
                setContact('');
                setEmail('');
                setPassword('');

            } catch (error) {
                
                console.log(error);
                Swal.fire('Error', "Registration Unsuccessfully", "error");
                setLoading(false);
            }

        }
        else{

            Swal.fire('Oops', "Password is not matched", "error");

        }


    }

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

                                            <form onSubmit={UserRegister}>

                                                <div className="mb-3">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" id="firstName" className="form-control" placeholder='Enter first name' value={firstname} required 
                                                        onChange={(e) => {
                                                            setFirstname(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input type="text" id="lastName" className="form-control" placeholder='Enter last name' value={lastname} required 
                                                        onChange={(e) => {
                                                            setLastname(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="dob">Date of Birth</label>
                                                    <input type="date" id="dob" className="form-control" value={dob} required 
                                                        onChange={(e) => {
                                                            setDob(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="address">Address</label>
                                                    <textarea id="address" className="form-control" style={{ width: '100%', minHeight: '50px', maxHeight: "100px", backgroundColor: "white" }} placeholder="Enter address" value={address} required
                                                        onChange={(e) => {
                                                            setAddress(e.target.value);
                                                        }}
                                                    ></textarea>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Gender</label><br />
                                                    <div className="form-check form-check-inline">
                                                        <input type="radio" id="maleRadio" name="gender" className="form-check-input" value="male" required checked={gender === "male"} 
                                                            onChange={(e) => {
                                                                setGender("male");
                                                            }}
                                                        />
                                                        <label className="form-check-label" htmlFor="maleRadio"> Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input type="radio" id="femaleRadio" name="gender" className="form-check-input" value="female" required checked={gender === "female"}
                                                            onChange={(e) => {
                                                                setGender("female");
                                                            }}
                                                        />
                                                        <label className="form-check-label" htmlFor="femaleRadio">Female</label>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="contact">Contact</label>
                                                    <input type='tel' maxLength={10} id="contact" className="form-control" placeholder='Enter contact' value={contact} required 
                                                        onChange={(e) => {
                                                            setContact(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" id="email" className="form-control" placeholder='Enter email' value={email} required 
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="password">Password</label>
                                                    <input type={passwordVisible ? 'text' : 'password'} id="password" className="form-control" placeholder='Enter password' value={password} required 
                                                        onChange={(e) => {
                                                            setPassword(e.target.value);
                                                        }}
                                                    />
                                                    <i
                                                        className={`bi ${passwordVisible ? 'bi-eye' : 'bi-eye-slash'} Showpassword2`}
                                                        id="togglePassword"
                                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                                    ></i>
                                                </div>

                                                <div className="mb-3 cp">
                                                    <label htmlFor="confirmPassword">Confirm password</label>
                                                    <input type={confirmPasswordVisible ? 'text' : 'password'} id="confirmPassword" className="form-control" placeholder='Enter confirm' value={passwordConfirmation} required 
                                                        onChange={(e) => {
                                                            setPasswordConfirmation(e.target.value);
                                                        }}
                                                    />
                                                    <i
                                                        className={`bi ${confirmPasswordVisible ? 'bi-eye' : 'bi-eye-slash'} Showpassword2`}
                                                        id="togglePassword"
                                                        onClick={() => setconfirmPasswordVisible(!confirmPasswordVisible)}
                                                    ></i>
                                                </div>

                                                <div className="form-check mb-3 tos">
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