import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import styles from '../styles/Profile.css';
import Link from 'antd/es/typography/Link';
import Loader from '../components/Loader';
import BookingScreen from './BookingScreen';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

const { TabPane } = Tabs;

const ProfileScreen = () => {

    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem('currentUser'));

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);

    async function deleteUser(id){

        try {
            
            setLoading(false);
            const data = (await axios.delete(`http://localhost:5000/api/user/deleteuser/${id}`)).data;
            console.log(data);
            localStorage.removeItem('currentUser');
            Swal.fire('Stay safe', "You account is deleted", 'success').then(result => {

                window.location.href = '/register';

            });

        } catch (error) {
            
            console.log(error);
            Swal.fire('Error', "Error with deleting user", 'error');
            setLoading(false);

        }
    }

    return (
        <div className='ml-3 mt-3'>
            <br /><br /><br />
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <div>

                        {loading ? (
                            <Loader />
                        ) : (
                            <div class="container rounded bg-white mt-5 mb-5">
                                <div class="row">
                                    <div class="col-md-3 border-right">
                                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" /><span class="font-weight-bold">{user.firstname} {user.lastname}</span><span class="text-black-50">{user.email}</span><span> </span></div>
                                    </div>
                                    <div class="col-md-5 border-right">
                                        <div class="p-3 py-5">
                                            <div class="d-flex justify-content-between align-items-center mb-3">
                                                <h4 class="text-right">Profile</h4>
                                                <a href={`/editprofile/${user._id}`} className='Peditbtn'><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                                <button className='Pdeletebtn' onClick={handleShow}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                            </div>

                                            <div class="row mt-2">
                                                <div class="col-md-6"><label class="labels">First name</label><input type="text" class="form-control" placeholder="First name" value={user.firstname} readOnly /></div>
                                                <div class="col-md-6"><label class="labels">Last name</label><input type="text" class="form-control" value={user.lastname} placeholder="Last name" readOnly /></div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12"><label class="labels">Date of birth</label><input type="date" class="form-control" placeholder="Date of Birth" value={user.dob} readOnly /></div>
                                                <div class="col-md-12"><label class="labels">Address</label><textarea id="address" className="form-control" style={{ width: '100%', minHeight: '50px', maxHeight: "100px", backgroundColor: "white" }} placeholder="Address" value={user.address} readOnly></textarea></div>
                                                <div class="col-md-12"><label class="labels">Gender</label><input type="text" class="form-control" placeholder="Gender" value={user.gender} readOnly /></div>
                                                <div class="col-md-12"><label class="labels">Contact</label><input type="tel" class="form-control" placeholder="Contact" value={user.contact} readOnly /></div>
                                                <div class="col-md-12"><label class="labels">Email</label><input type="email" class="form-control" placeholder="Email" value={user.email} readOnly /></div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 py-5">

                                            <div class="d-flex justify-content-between align-items-center experience"><span>Share your feedback</span><a href="/addfeedback"><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Add Feedback</span></a></div><br />
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}

                        <Modal show={show} onHide={handleClose} size='lg'>
                            <Modal.Header closeButton>
                                <Modal.Title style={{ marginTop: "30px", marginLeft: "50px" }}><strong>Deleting account</strong></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p style={{ marginLeft: "50px" }}>Deleting your account will remove all of your<br />information from our database. This cannot be<br />undone.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="editUserbtn1" onClick={(e) => deleteUser(user._id)}>Delete my account</button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Never mind, keep my account
                                </Button>
                            </Modal.Footer>
                        </Modal>



                    </div>
                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <div>

                        <BookingScreen />

                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default ProfileScreen;
