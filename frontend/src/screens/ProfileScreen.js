import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import styles from '../styles/Profile.css';
import Link from 'antd/es/typography/Link';
import Loader from '../components/Loader';
import BookingScreen from './BookingScreen';

const { TabPane } = Tabs;

const ProfileScreen = () => {

    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);

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
                                                <a href='#' className='Pdeletebtn'><i class="fa fa-trash" aria-hidden="true"></i></a>
                                            </div>

                                            <div class="row mt-2">
                                                <div class="col-md-6"><label class="labels">First name</label><input type="text" class="form-control" placeholder="First name" value={user.firstname} readOnly /></div>
                                                <div class="col-md-6"><label class="labels">Last Name</label><input type="text" class="form-control" value={user.lastname} placeholder="Last name" readOnly /></div>
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

                                            <div class="d-flex justify-content-between align-items-center experience"><span>Share your feedback</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Send</span></div><br />
                                            <div class="col-md-12"><label class="labels">Subject</label><input type="text" class="form-control" placeholder="Enter subject" value="" /></div> <br />
                                            <div class="col-md-12"><label class="labels">Message</label><textarea id="address" className="form-control" style={{ width: '100%', minHeight: '50px', maxHeight: "100px", backgroundColor: "white" }} placeholder="Enter message"></textarea></div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}



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
