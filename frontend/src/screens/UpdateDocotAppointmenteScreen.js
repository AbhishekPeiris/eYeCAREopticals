import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function UpdateDocotAppointmenteScreen() {

    const { cusemail, appoID } = useParams();
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const [firstname, setFirstName] = useState('');
    const [lastname, setLasname] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [emergency, setEmergency] = useState('');
    const [doctor, setDoctor] = useState();
    const [doctorfee, setDoctorfee] = useState();

    useEffect(() => {
        console.log(cusemail);
        console.log(appoID);
        async function ViewAppointmentDetails() {
            try {
                const response = await axios.post(
                    `http://localhost:5000/api/doctor/getalldoctorappointment/${cusemail}/${appoID}`
                );
                console.log(response.data.doctor);
                const appointments = response.data.doctor;

                setFirstName(appointments.firstname);
                setLasname(appointments.lastname);
                setDate(appointments.date);
                setGender(appointments.gender);
                setAge(appointments.age);
                setEmail(appointments.email);
                setContact(appointments.contact);
                setAddress(appointments.address);
                setEmergency(appointments.emergency);
                setDoctor(appointments.doctor);
                setDoctorfee(appointments.doctorfee);
            } catch (error) {
                console.log(error);
            }
        }
        ViewAppointmentDetails();
    }, []);


    async function EditUserScreen(e) {
        e.preventDefault();



        const updateappointment = {
            _id: appoID,
            firstname: firstname,
            lastname: lastname,
            date: date,
            gender: gender,
            age: age,
            email: email,
            contact: contact,
            address: address,
            emergency: emergency,
            doctor: doctor,
            doctorfee: doctorfee,
        }

        try {


            const data = (await axios.put(`http://localhost:5000/api/doctor/editdoctorappointment/${appoID}`, updateappointment)).data;

            Swal.fire('Updated', "Your Appointment Details is updated successfully", "success").then(result => {

                window.location.href = '/myappointment';

            });


        } catch (error) {

            console.log(error);
            Swal.fire('Error', "Error with updating user", "error");


        }
    }





    return (
        <div>
            <form onSubmit={EditUserScreen}>
                <br /><br /><br />
                <div className='full'>
                    <div class="fullform">
                        <h2 className='heder'>Patient Registration Form</h2>

                        <label className='lb' for="fname">First Name</label>
                        <input className='text1' type="text" id="fname" name="fname" required value={firstname}
                            onChange={
                                (e) => {
                                    setFirstName(e.target.value);
                                }
                            }
                        />

                        <label className='lb' for="lname">Last Name</label>
                        <input className='text1' type="text" id="lname" name="lname" required value={lastname}
                            onChange={
                                (e) => {
                                    setLasname(e.target.value);
                                }
                            }
                        />
                        <label className='lb' for="lname">Age </label>
                        <input className='text1' type="number" id="lname" name="lname" required value={age} min="0" max="120"
                            onChange={
                                (e) => {
                                    setAge(e.target.value);
                                }
                            }
                        />
                        <label className='lb' for="dob">Appointment Date</label>
                        <input type="date" id="dob" name="dob" required value={date}
                            onChange={
                                (e) => {
                                    setDate(e.target.value);
                                }
                            }
                        />     <br />

                        <label className='lb' >Gender</label>


                        <div style={{ display: 'flex' }}>
                            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <input type="radio" id="maleRadio" name="gender" value="Male" required checked={gender === "Male"}
                                onChange={(e) => {
                                    setGender("Male");
                                }}
                            /> &nbsp;&nbsp;<label className="form-check-label" htmlFor="maleRadio"> Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                            &nbsp;&nbsp;&nbsp;
                            <input type="radio" id="femaleRadio" name="gender" value="Female" required checked={gender === "Female"}
                                onChange={(e) => {
                                    setGender("Female");
                                }}
                            />&nbsp;&nbsp;<label className="form-check-label" htmlFor="femaleRadio">Female</label>
                        </div>


                        <br />

                        <label className='lb' for="phone">Phone Number</label>
                        <input className='text1' type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required value={contact}
                            onChange={
                                (e) => {
                                    setContact(e.target.value);
                                }
                            }
                        />

                        <label className='lb' for="address">Address</label>

                        <textarea id="address" name="address" required style={{ width: "580px", height: "100px" }} value={address}
                            onChange={
                                (e) => {
                                    setAddress(e.target.value);
                                }
                            }
                        ></textarea>
                        <br />

                        <label className='lb' for="emergency">Emergency Contact Number</label>
                        <input className='text1' type="tel" id="emergency" name="emergency" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required value={emergency}
                            onChange={
                                (e) => {
                                    setEmergency(e.target.value);
                                }
                            }
                        />
                        <br />


                        <div style={{ display: "flex" }}>
                            <input type="checkbox" id="consent" name="consent" required />
                            <label className='lb' for="consent" style={{ fontSize: "13.5px" }}>&nbsp;&nbsp;&nbsp;I consent to the processing of my personal data in accordance with the Privacy Policy.</label>
                        </div>
                        <br />

                        <button className='appointmentbtn' type="submit"> Update Now!</button>

                        <br />
                        <br />

                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateDocotAppointmenteScreen