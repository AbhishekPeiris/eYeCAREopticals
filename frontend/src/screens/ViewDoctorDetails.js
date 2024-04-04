import React, { useState, useEffect } from "react";
import styles from "../styles/AddRepairmentDetails.css";
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
        <div className="row">
        <div className="col-md-1 border vddtable">
          <strong>
            <p>First name</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Last name</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable">
          <strong>
            <p>Contact</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Email</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Experience</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Language</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Type</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Department</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Rating</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Doctor fee</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Discription</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Date</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>Specialty</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
          <strong>
            <p>imageUrl</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable">
        <strong>
            <p>Action</p>
          </strong>
        </div>
      </div>

      {doctor.map((doctor) => (
        <div className="row">
          <div className="col-md-1 border vddtable">
            <p>{doctor.firstname}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.lastname}</p>
          </div>

          <div className="col-md-1 border vddtable">
            <p>{doctor.contact}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.email}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.experiance}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.language}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.type}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.department}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.rating}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.doctorfee}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p style={{fontSize:"10px"}}>{doctor.discription}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.date}</p>
          </div>
          <div className="col-md-1 border vddtable">
            <p>{doctor.specialty}</p>
          </div>

          <div className="col-md-1 border vddtable">
            <img src={doctor.imageurl[0]} alt="" style={{width:"20px"}}/>
          </div>
          <div className="col-md-1 border "></div>
        </div>
      ))}
    </div>
  )
}

export default ViewDoctorDetails