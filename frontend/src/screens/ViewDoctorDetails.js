import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/viewdoctordetails.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useReactToPrint } from "react-to-print";


function ViewDoctorDetails() {
  const [doctor, setDoctor] = useState([]);
  const [duplicateDoctor, setDuplicateDoctor] = useState([]);
  const [searchkey, setSearchkey] = useState('');

  const [hasResults, setHasResults] = useState(true);

  const componentPDF = useRef();

  useEffect(() => {
    async function ViewDoctorDetails() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/doctormanagement/"
        );
        setDoctor(response.data.doctor);
        setDuplicateDoctor(response.data.doctor);
      } catch (error) {
        console.log(error);
      }
    }
    ViewDoctorDetails();
  }, []);

  function filterBySearch() {
    const tempdoctor = duplicateDoctor.filter((doctor) => doctor.firstname.toLowerCase().includes(searchkey.toLowerCase()));
    setHasResults(tempdoctor.length > 0);
    setDoctor(tempdoctor);
}

  async function deletedoctor(id) {
    try {
      const data = (
        await axios.delete(
          `http://localhost:5000/api/doctormanagement/deletedoctor/${id}`
        )
      ).data;
      console.log(data);
      Swal.fire("Stay safe", "Docter account is deleted", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Error with deleting user", "error");
    }
  }

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "eyeCAREoptical_doctor_appointment_details",
  });

  return (
    <div className="aftersidebar">
      <br />
      <br />
      <br />
      <small className='barname2'>Search here</small>
                                <input class="form-control mr-sm-2 RayBanSearch" type="search" placeholder="Search model No." aria-label="Search"
                                    onChange={(e) => {
                                        setSearchkey(e.target.value);
                                    }}
                                    onKeyUp={filterBySearch}
                                /><br/>

      <button className="reservationpdfbtn" onClick={generatePDF}>
        <i class="fa fa-download" aria-hidden="true"></i>
        <span style={{ fontSize: "10px", marginLeft: "10px" }}>
          Downlad PDF
        </span>
      </button>
    <div ref={componentPDF}>
      <Link to="/adddoctor">
        <button type="submit" className="submit112">
          + Add Doctors
        </button>
      </Link>
    
      <div className="ttp1">
        <label>
          <b>Personal Details</b>
        </label>
      </div>

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

        <div className="col-md-1 border vddtable5">
          <strong>
            <p>Language</p>
          </strong>
        </div>

        {doctor.map((doctor) => (
          <div className="row">
            <div className="col-md-1 border vddtable1d">
              <p>{doctor.firstname}</p>
            </div>
            <div className="col-md-1 border vddtable2d">
              <p>{doctor.lastname}</p>
            </div>

            <div className="col-md-1 border vddtable3d">
              <p>{doctor.contact}</p>
            </div>

            <div className="col-md-1 border vddtable4d">
              <p>{doctor.email}</p>
            </div>

            <div className="col-md-1 border vddtable5d">
              <p>{doctor.language}</p>
            </div>
          </div>
        ))}

        <br />
        <br />
        <br />
        <div className="ttp2">
          <label>
            <b>Professional Background</b>
          </label>
        </div>

        <br />

        <div className="col-md-1 border vddtable1">
          <strong>
            <p>First name</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable6">
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
      </div>

      {doctor.map((doctor) => (
        <div className="row">
          <div className="col-md-1 border vddtable1d">
            <p>{doctor.firstname}</p>
          </div>

          <div className="col-md-1 border vddtable6d">
            <p>{doctor.experiance}</p>
          </div>

          <div className="col-md-1 border vddtable7d">
            <p>{doctor.type}</p>
          </div>

          <div className="col-md-1 border vddtable8d">
            <p>{doctor.department}</p>
          </div>

          <div className="col-md-1 border vddtable9d">
            <p>{doctor.rating}</p>
          </div>

          <div className="col-md-1 border vddtable10d">
            <p>{doctor.doctorfee}</p>
          </div>

          <div className="col-md-1 border vddtable12d">
            <p>{doctor.date}</p>
          </div>

          <div className="col-md-1 border vddtable13d">
            <p>{doctor.specialty}</p>
          </div>
        </div>
      ))}
      <br />
      <div className="ttp2">
        <label>
          <b>Others</b>
        </label>
      </div>

      <div className="row">
        <div className="col-md-1 border vddtable1">
          <strong>
            <p>First name</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable16">
          <strong>
            <p>Discription</p>
          </strong>
        </div>

        <div className="col-md-1 border vddtable17">
          <strong>
            <p>Image</p>
          </strong>
        </div>
        <div className="col-md-1 border vddtable20">
          <strong>
            <p>Action</p>
          </strong>
        </div>
      </div>
      {doctor.map((doctor) => (
        <div className="row">
          <div className="col-md-1 border vddtable1dfn">
            <p>{doctor.firstname}</p>
          </div>

          <div className="col-md-1 border vddtable11">
            <p>{doctor.discription}</p>
          </div>

          <div className="col-md-1 border vddtable14">
            <img src={doctor.imageurl[0]} alt="" style={{ width: "70px" }} />
          </div>

          <div className="col-md-1 border vddtable21">
            <Link to={`/updatedoctordetails/${doctor._id}`}>
              <button className="actionbtn">Update</button>
            </Link>
            <button
              className="actionbtn1"
              onClick={(e) => deletedoctor(doctor._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ViewDoctorDetails;
