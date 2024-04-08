import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';
import "../styles/Myappointment.css";


function MyAppointmentScreen() {

  const [appointment, setAppointment] = useState([]);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    async function ViewAppointmentDetails() {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/doctor/getalldoctorappointment/${user.email}`
        );
        setAppointment(response.data.doctor);
        console.log(response.data.doctor);
      } catch (error) {
        console.log(error);
      }
    }
    ViewAppointmentDetails();
  }, []);


  return (
    <div>
      <br /><br /><br />
      {appointment.map((appointment) => (

        <div className="fulldetailsapp">
          <p> {appointment.cusname}<br />
            {appointment.email}<br />
            <span className="conadd">{appointment.contact} | {appointment.address}<br /></span>
            <hr style={{marginRight:'30px'}}></hr>


            <div className="namedatefee">
              <span >Name :   <b>{appointment.doctorname}</b></span><br />
               <span>Date :   <b>{appointment.date}</b></span><br />
              <span>Doctor Fee :  <b>{appointment.doctorfee}</b></span><br />
            </div></p>
            <div className="updatedelectbtn">
            <button className="appupdate">update </button>
            <button className="appdelect">delect </button>
            </div>
        </div>

      ))}
      <br /><br /><br /> <br /><br /><br /> <br />
    </div>
  )
}

export default MyAppointmentScreen