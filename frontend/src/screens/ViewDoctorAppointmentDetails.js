import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../styles/DoctorAppointmentDetails.css";


function ViewDoctorAppointmentDetails() {

  const [doctorappointments, setAppointment] = useState([]);

  useEffect(() => {
    async function ViewDoctorAppointmentDetails() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manager/getalldoctorappointment"
        );
        setAppointment(response.data.doctorAppointments);
      } catch (error) {
        console.log(error);
      }
    }
    ViewDoctorAppointmentDetails();
  }, []);


  async function deleteUser(id){

    try {
        
        
        const data = (await axios.delete(`http://localhost:5000/api/manager/deleteuser/${id}`)).data;
        console.log(data);
        Swal.fire('Stay safe', "You account is deleted", 'success').then(result => {

            window.location.reload();

        });

    } catch (error) {
        
        console.log(error);
        Swal.fire('Error', "Error with deleting user", 'error');
 

    }
}

  return (
    <div className="container" style={{width:"1500px"}}>
      <div className="row">
        <div className="col-md-1 border viewdoctorappoinmentDcol ">
          <strong>
            <p>Customer name</p>
          </strong>
        </div>
        <div className="col-md-1 border viewdoctorappoinmentDcol ">
          <strong>
            <p>Contact</p>
          </strong>
        </div>

        <div className="col-md-3 border viewdoctorappoinmentDcol ">
          <strong>
            <p>Address</p>
          </strong>
        </div>
        <div className="col-md-3 border viewdoctorappoinmentDcol ">
          <strong>
            <p>Email</p>
          </strong>
        </div>
        <div className="col-md-1 border viewdoctorappoinmentDcol ">
          <strong>
            <p>Doctor name</p>
          </strong>
        </div>
        <div className="col-md-1 border viewdoctorappoinmentDcol ">
          <strong>
            <p>Date</p>
          </strong>
        </div>
        <div className="col-md-1 border  viewdoctorappoinmentDcol">
          <strong>
            <p>Doctor fee</p>
          </strong>
        </div>
        
        <div className="col-md-1 border viewdoctorappoinmentDcol">
          <strong>Action</strong>
          </div>
      </div>

      {doctorappointments.map((doctorappointments) => (
        <div className="row">
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.cusname}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.contact}</p>
          </div>

          <div className="col-md-3 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.address}</p>
          </div>
          <div className="col-md-3 border viewdoctorappoinmentDcol11 ">
            <p style={{fontSize:"11px"}}>{doctorappointments.email}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.doctorname}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.date}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.doctorfee}</p>
          </div>
          <div className="col-md-1 border ">
          <Link to = {`/editcustomerdetails/${doctorappointments._id}`}><button className="snupdatebtn1">Update</button></Link>
          <button className="sndeletebtn1" onClick={(e) => deleteUser(doctorappointments._id)}>Delete</button>
          </div>
        </div>
        
      ))}
    </div>
  )
}

export default ViewDoctorAppointmentDetails
