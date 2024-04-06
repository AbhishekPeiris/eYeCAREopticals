import React, { useState, useEffect } from "react";
import styles from "../styles/viewdoctordetails.css";
import axios from "axios";
function ViewDoctorDetails() {

    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        async function ViewDoctorDetails() {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/doctormanagement/"
            );
            setDoctor(response.data.doctor);
          } catch (error) {
            console.log(error);
          }
        }
        ViewDoctorDetails();
      }, []);
  return (
    <div>
        <label>Personal Details</label>
        <div className="row">
        <div className="col-md-1 border vddtable1">
          <strong>
            <p>First name</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable2">
          <strong>
            <p>Last name</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable3">
          <strong>
            <p>Contact</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable4">
          <strong>
            <p>Email</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable6">
          <strong>
            <p>Language</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable5">
          <strong>
            <p>Experience</p>
          </strong>
        </div>
        
        <div className="col-md-1 border vddtable7">
          <strong>
            <p>Type</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable8">
          <strong>
            <p>Department</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable9">
          <strong>
            <p>Rating</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable10">
          <strong>
            <p>Doctor fee</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable11">
          <strong>
            <p>Discription</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable12">
          <strong>
            <p>Date</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable13">
          <strong>
            <p>Specialty</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable14">
          <strong>
            <p>imageUrl</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable15">
        <strong>
            <p>Action</p>
          </strong>
        </div>
      </div>

      {doctor.map((doctor) => (
        <div className="row">
          <div className="col-md-1 border vddtable1">
            <p>{doctor.firstname}</p>
          </div>
          <div className="col-md-1 border vddtable2">
            <p>{doctor.lastname}</p>
          </div>

          <div className="col-md-1 border vddtable3">
            <p>{doctor.contact}</p>
          </div>

          <div className="col-md-1 border vddtable4">
            <p>{doctor.email}</p>
          </div>

          <div className="col-md-1 border vddtable5">
            <p>{doctor.language}</p>
          </div>

          <div className="col-md-1 border vddtable6">
            <p>{doctor.experiance}</p>
          </div>

          
          <div className="col-md-1 border vddtable7">
            <p>{doctor.type}</p>
          </div>

          <div className="col-md-1 border vddtable8">
            <p>{doctor.department}</p>
          </div>

          <div className="col-md-1 border vddtable9">
            <p>{doctor.rating}</p>
          </div>

          <div className="col-md-1 border vddtable10">
            <p>{doctor.doctorfee}</p>
          </div>

          <div className="col-md-1 border vddtable11">
            <p style={{fontSize:"10px"}}>{doctor.discription}</p>
          </div>

          <div className="col-md-1 border vddtable12">
            <p>{doctor.date}</p>
          </div>

          <div className="col-md-1 border vddtable13">
            <p>{doctor.specialty}</p>
          </div>

          <div className="col-md-1 border vddtable14">
            <img src={doctor.imageurl[0]} alt="" style={{width:"20px"}}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ViewDoctorDetails