import React, { useEffect, useState } from 'react';
import '../styles/Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loginImg from '../images/login.jpg';
import Loader from '../components/Loader';
import axios from 'axios';
import Swal from 'sweetalert2';

AOS.init({ duration: 1000 });

const LoginScreen = () => {

    const [loading, setLoading] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);

    async function UserLogin(e) {
        e.preventDefault();

        const newUser = {

            email,
            password
        }

        try {

            setLoading(true);
            const data = (await axios.post('http://localhost:5000/api/user/login', newUser)).data;
            console.log(data.loginUser);

            if (data.status === "Login Success") {
                localStorage.setItem('currentUser', JSON.stringify(data.loginUser));
                console.log('User data stored in localStorage:', data.loginUser);
                window.location.href = '/';
            }
            else {
                Swal.fire('Oops', "Your email or password is incorrect", "error");
            }
            setLoading(false);

        } catch (error) {

            console.error(error);
            Swal.fire('Oops', "Your email or password is incorrect", "error");
            setLoading(false);

        }
    }

    return (

        <div>
            {loading ? (
                <Loader />
            ) : (

                <div>
                    <br /><br /><br />
                    <img src={loginImg} alt="Home cover" className='logpic' data-aos="fade-right" />
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div class="card card2abhi" style={{ borderRadius: "1rem" }}>

                                    <form onSubmit={UserLogin}>
                                        <div class="card-body p-5 text-center">

                                            <div class="mb-md-5 mt pb-5">

                                                <h2 class=" mb-2"><strong>Login</strong></h2><br /><br />
                                                
                                                <div class="form-outline form-white mb-4">
                                                    <label className="form-label" for="typeEmailX">Email</label>
                                                    <input type="email" id="typeEmailX" class="form-control form-control-lg inputlogin" placeholder='Enter email' required
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }}
                                                    />

                                                </div>

                                                <div class="form-outline form-white mb-4">
                                                    <label className="form-label" for="typePasswordX">Password</label>
                                                    <input
                                                        type={passwordVisible ? 'text' : 'password'}
                                                        id="typePasswordX"
                                                        className="form-control form-control-lg inputlogin"
                                                        placeholder="Enter password"
                                                        required
                                                        onChange={(e) => {
                                                            setPassword(e.target.value);
                                                        }}
                                                    />
                                                    <i
                                                        className={`bi ${passwordVisible ? 'bi-eye' : 'bi-eye-slash'} Showpassword`}
                                                        id="togglePassword"
                                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                                    ></i>

                                                </div>

                                                <p class="small mb-3 pb-lg-2"><a href="#!">Forgot password?</a></p>

                                                <button class="btn btn-success btn-block btn-lg text-body" type="submit"><span style={{color:"white"}}>Login</span></button>

                                                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                                    <a href="#!"><i class="fab fa-facebook-f fa-lg"></i></a>
                                                    <a href="#!"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                                    <a href="#!"><i class="fab fa-google fa-lg"></i></a>
                                                </div>

                                            </div>

                                            <div>
                                                <p style={{ marginTop: "-50px" }}>Don't have an account? <a href="/register" class="fw-bold">Sign Up</a>
                                                </p>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                                <div className='row Ltable_1'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default LoginScreen;
