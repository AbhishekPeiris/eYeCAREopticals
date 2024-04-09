import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import EditUserScreen from './EditUserScreen';

function UpdateDocotAppointmenteScreen() {

    const { appoID } = useParams();
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [appointment, setAppointment] = useState([]);

    const [cusname, setCusname] = useState(user.firstname + ' ' + user.lastname);
    const [contact, setContact] = useState(user.contact);
    const [address, setAddress] = useState(user.address);
    const [email, setEmail] = useState(user.email);


    const [doctorname, setDoctorname] = useState();
    const [date, setDate] = useState();
    const [doctorfee, setDoctorfee] = useState();

    useEffect(() => {
        async function ViewAppointmentDetails() {
            try {
                const response = await axios.post(
                    `http://localhost:5000/api/doctor/getalldoctorappointment/${user.email}`
                );
                console.log(response.data.doctor);
                const appointments = response.data.doctor;

                setAppointment(appointments)

                {
                    appointment.map((appointment) => (

                        setCusname(appointment.cusname),
                        setContact(appointment.contact),
                        setAddress(appointment.address),
                        setEmail(appointment.email),
                        setDoctorname(appointment.doctorname),
                        setDate(appointment.date),
                        setDoctorfee(appointment.doctorfee)


                    ))
                }


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
            cusname: cusname,
            contact: contact,
            address: address,
            email: email,
            doctorname: doctorname,
            date: date,
            doctorfee: doctorfee
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
            <br /><br /><br />

            <form onSubmit={EditUserScreen} className='docfullfrom' style={{marginLeft:'300px',padding:'100px'}}>

                <div >
                    <div className="input-container" >
                        <label><b>Date</b></label>
                        <br />

                        <select
                            className="languagetype"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        >
                            <option value="Monday">Monday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Friday">Friday</option>
                        </select>
                    </div>
                </div>

                <div className="input-container" style={{marginTop:'10px'}}>
                    <label ><b>Patient name</b></label>
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={cusname}
                        onChange={(e) => setCusname(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label><b>Address</b></label>
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="input-container">
                    <label><b>Contact</b></label>
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit" style={{ width: "150px",marginTop:'50px',height:'40px',borderRadius:' 10px',backgroundColor:'#da751c',color:'white',border:'none', margin:'10px' }}>Update</button>
                <button style={{ width: "150px",height:'40px',borderRadius:'10px',backgroundColor:'#da751c',color:'white',border:'none'  }}>Cancel</button>
            </form>

        </div>
    )
}

export default UpdateDocotAppointmenteScreen