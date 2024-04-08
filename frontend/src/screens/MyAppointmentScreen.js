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
        <br/><br/><br/>
        {appointment.map((appointment) => (
          
          <div className="fulldetailsapp">
            {appointment.cusname}<br/>
            {appointment.contact}<br/>
            {appointment.address}<br/>
            {appointment.email}<br/>
            {appointment.doctorname}<br/>
            {appointment.date}<br/>
            {appointment.doctorfee}<br/>
          </div>
          
        ))}
         <br/><br/><br/> <br/><br/><br/> <br/><br/><br/> <br/><br/><br/> <br/><br/><br/> <br/><br/><br/> <br/><br/><br/>
    </div>
  )
}

export default MyAppointmentScreen