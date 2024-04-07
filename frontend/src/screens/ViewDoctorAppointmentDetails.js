import React, { useState, useEffect } from "react";
import axios from "axios";


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
  return (
    <div>
      <div className="row">
        <div className="col-md-1 border ">
          <strong>
            <p>Customer name</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Contact</p>
          </strong>
        </div>

        <div className="col-md-1 border ">
          <strong>
            <p>Address</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Email</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Doctor name</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Date</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Doctor fee</p>
          </strong>
        </div>
        
        <div className="col-md-1 border ">Action</div>
      </div>

      {doctorappointments.map((doctorappointments) => (
        <div className="row">
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.cusname}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.contact}</p>
          </div>

          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{doctorappointments.address}</p>
          </div>
          <div className="col-md-1 border ">
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
          <div className="col-md-1 border "></div>
        </div>
      ))}
    </div>
  )
}

export default ViewDoctorAppointmentDetails
