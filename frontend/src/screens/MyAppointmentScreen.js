import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';
import "../styles/Myappointment.css";
import { useReactToPrint} from "react-to-print";


function MyAppointmentScreen() {

  const [appointment, setAppointment] = useState([]);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  
  const componentPDF = useRef();

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

  async function deleteAppointment(id) {

    try {


      const data = (await axios.delete(`http://localhost:5000/api/doctor/deletedoctorappointment/${id}`)).data;
      console.log(data);
      Swal.fire('Successfull', "You Appointment is deleted", 'success').then(result => {

        window.location.reload();

      });

    } catch (error) {

      console.log(error);
      Swal.fire('Error', "Error with deleting user", 'error');


    }
  }
  const generatePDF = useReactToPrint({
    content: ()=>componentPDF.current,
    documentTitle: "eyeCAREoptical_doctor_appointment"
});


  return (
    <div>
      <div className="row mb-5 appotable" >
      <br /><br /><br />
      {appointment.map((appointment) => (

        <div className="fulldetailsapp">
          <div ref={componentPDF}>
          <p> <span style={{fontSize:"19px"}}> Patient Name :<b> {appointment.firstname} {appointment.lastname}</b></span><br />
            <span style={{fontSize:"19px"}}> Age : <b>{appointment.age} Years</b></span><br />
            <span style={{fontSize:"19px"}}> Gender : <b>{appointment.gender}</b></span><br />
            <span style={{fontSize:"19px"}}>Appointment Date : <b>{appointment.date}</b></span><br />
            <spnp style={{fontSize:"19px"}}>{appointment.email}<br /></spnp>
            <span  className="conadd">{appointment.contact} | {appointment.address}<br /></span>


            <hr style={{ marginRight: '30px' }}></hr>

            <div className="namedatefee">
              <span >Doctor Name :   <b>{appointment.doctor}</b></span><br />
              <span>Doctor Fee :<b> RS {appointment.doctorfee}.00</b></span><br />
            </div></p></div>


          <div className="updatedelectbtn">
            <Link to={`/editdoctorappointment/${appointment.email}/${appointment._id}`}><button className="appupdate">Update </button></Link>
            <button className="appdelect" onClick={(e) => deleteAppointment(appointment._id)}>Delete </button>
            <button className="reservationpdfbtn" onClick={generatePDF} style={{marginLeft:"60px"}}><i class="fa fa-download" aria-hidden="true"></i><span style={{fontSize:"10px",marginLeft:"10px"}}>Downlad PDF</span></button>
          </div>
        </div>

      ))}
      <br /><br /><br /> <br /><br /><br /> <br />
      </div>
    </div>
  )
}

export default MyAppointmentScreen