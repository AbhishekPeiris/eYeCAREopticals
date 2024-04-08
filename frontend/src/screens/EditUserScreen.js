import React, { useEffect, useState } from 'react';
import styles from '../styles/EditUser.css';
import editimg from '../images/editprofile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";

AOS.init({ duration: 1000 });

const EditUserScreen = () => {

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

    const { userId } = useParams();

    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 700);

        setFirstname(user.firstname);
        setLastname(user.lastname);
        setDob(user.dob);
        setAddress(user.address);
        setGender(user.gender);
        setContact(user.contact);
        setEmail(user.email);
    
    }, []);

    async function EditUser(e) {
        e.preventDefault();

        if(password == passwordConfirmation){

            const updateUser = {
                _id: userId,
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
                const data = (await axios.put(`http://localhost:5000/api/user/edituser/${userId}`, updateUser)).data;
                console.log(data);
                localStorage.removeItem('currentUser');
                localStorage.setItem('currentUser', JSON.stringify(updateUser));
                console.log('User data stored in localStorage:', updateUser);
                Swal.fire('Updated', "Your profile is updated successfully", "success").then(result => {

                     window.location.href = '/profile';

                });
                setLoading(false);

            } catch (error) {
                
                console.log(error);
                Swal.fire('Error', "Error with updating user", "error");
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
                    <img src={editimg} alt="Home cover" className='regpic' data-aos="fade-left" />
                    <div className="mask d-flex align-items-center h-100 frame updateframe">
                        <div className="container h-100" style={{width:"1200px"}}>
                            <div className="row d-flex justify-content-left align-items-left h-100 mt-5 mb-5">
                                <div className="col-12 col-md-8 col-lg-6">
                                    <div className="card" style={{ borderRadius: "15px", border: "3px solid #f5e9db" }}>
                                        <div className="card-body p-4">
                                            <h2 className="text-center mb-4"><strong>Edit my profile</strong></h2>

                                            <form onSubmit={EditUser}>

                                                <div className="mb-3">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" id="firstName" className="form-control edituserinput" placeholder='Enter first name' value={firstname} required 
                                                        onChange={(e) => {
                                                            setFirstname(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input type="text" id="lastName" className="form-control edituserinput" placeholder='Enter last name' value={lastname} required 
                                                        onChange={(e) => {
                                                            setLastname(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="dob">Date of Birth</label>
                                                    <input type="date" id="dob" className="form-control edituserinput" value={dob} required 
                                                        onChange={(e) => {
                                                            setDob(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="address">Address</label>
                                                    <textarea id="address" className="form-control edituserinput" style={{ width: '100%', minHeight: '50px', maxHeight: "100px", backgroundColor: "white" }} placeholder="Enter address" value={address} required
                                                        onChange={(e) => {
                                                            setAddress(e.target.value);
                                                        }}
                                                    ></textarea>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Gender</label><br />
                                                    <div className="form-check form-check-inline">
                                                        <input type="radio" id="maleRadio" name="gender" value="male" required checked={gender === "male"} 
                                                            onChange={(e) => {
                                                                setGender("male");
                                                            }}
                                                        />&nbsp;&nbsp;
                                                        <label className="form-check-label" htmlFor="maleRadio"> Male</label>
                                                    </div>&nbsp;&nbsp;
                                                    <div className="form-check form-check-inline">
                                                        <input type="radio" id="femaleRadio" name="gender" value="female" required checked={gender === "female"}
                                                            onChange={(e) => {
                                                                setGender("female");
                                                            }}
                                                        />&nbsp;&nbsp;
                                                        <label className="form-check-label edituserinput" htmlFor="femaleRadio" style={{position:"relative",bottom:"25px",left:"20px"}}>Female</label>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="contact">Contact</label>
                                                    <input type='tel' maxLength={10} id="contact" className="form-control edituserinput" placeholder='Enter contact' value={contact} required 
                                                        onChange={(e) => {
                                                            setContact(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" id="email" className="form-control edituserinput" placeholder='Enter email' value={email} required 
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="password">Password</label>
                                                    <input type={passwordVisible ? 'text' : 'password'} id="password" className="form-control edituserinput" placeholder='Enter password' value={password} required 
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
                                                    <input type={confirmPasswordVisible ? 'text' : 'password'} id="confirmPassword" className="form-control edituserinput" placeholder='Enter confirm' value={passwordConfirmation} required 
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

                                                <div className="d-flex justify-content-left">
                                                    <Link to = '/profile'><button className="editUserbtn1">Cancel</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button type="submit" className="editUserbtn2">Save</button>
                                                </div>

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

export default EditUserScreen;
