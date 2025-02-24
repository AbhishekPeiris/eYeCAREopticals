import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddDoctor.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AddDoctor() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [experiance, setExperience] = useState("");
  const [language, setLanguage] = useState("Sinhala");
  const [type, setType] = useState("Ophthalmologists");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [doctorfee, setDoctorFee] = useState("");
  const [discription, setDescription] = useState("");
  const [date, setDate] = useState("Monday");
  const [specialty, setSpecialty] = useState("Eye surgeon");
  const [imageurl, setImageUrl] = useState("");

  async function addDoctorDetails(e) {
    e.preventDefault();

    const newDoctor = {
      firstname : firstname,
      lastname : lastname, 
      contact : contact,
      email : email,
      experiance : experiance,
      language : language,
      type : type,
      department : department,
      rating : rating,
      doctorfee : doctorfee,
      discription : discription,
      date : date,
      specialty : specialty,
      imageurl : imageurl
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/doctormanagement/adddoctor`,
        newDoctor
      );
      console.log(response.data);
      Swal.fire("Thank you!", "Add Doctor Successfully", "success").then(
        (result) => {
          window.location.href = "/viewdoctordetails";
        }
      );
      // Resetting the form fields after successful submission
      setFirstname("");
      setLastname("");
      setContact("");
      setEmail("");
      setExperience("");
      setLanguage("Sinhala");
      setType("Ophthalmologists");
      setDepartment("");
      setRating("");
      setDoctorFee("");
      setDescription("");
      setDate("Monday");
      setSpecialty("Eye surgeon");
      setImageUrl("");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Add Doctor Unsuccessfully", "error");
    }
  }

  return (
    <div>
      <Link to='/viewdoctordetails'>
      <button type="submit" className="sanchviewdocbtn">
              View Docter Details
            </button>
            </Link>

          
      <div className="formcontent111">

        <Sidebar />

        <form className="form mb-5 mt-5 snchadddocform111" onSubmit={addDoctorDetails}>
          <p className="form-title">Doctors Registration Form</p>
          <div className="displaytp">
            
          <div className="input-container">
            <label>First Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="space-between">
          <div className="input-container">
            <label>Last Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Last Name"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          </div>
          </div>
          <div className="displaytp"> 
          <div className="input-container">
            <label>Contact Number</label>
            <br />
            <input
              type="text"
              placeholder="Enter Contact Number"
              value={contact}
              required
              maxLength={10}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="space-between">
          <div className="input-container">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          </div>

          <div className="displaytp">
          <div className="input-container">
            <label>Experience</label>
            <br />
            <input
              type="text"
              placeholder="Enter Experience"
              value={experiance}
              required
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="space-between">

          <div className="input-container">
            <label>Department</label>
            <br />
            <input
              type="text"
              placeholder="Enter Department"
              value={department}
              required
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          </div>
          </div>
          <div className="displaytp"> 
          <div className="input-container">
            <label>Rating</label>
            <br />
            <input
              type="number"
              placeholder="Enter Rating"
              value={rating}
              required
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="space-between">
          <div className="input-container">
            <label>Doctor Fee</label>
            <br />
            <input
              type="number"
              placeholder="Enter Doctor Fee"
              value={doctorfee}
              required
              onChange={(e) => setDoctorFee(e.target.value)}
            />
          </div>
          </div>
          </div>

          <div className="displaytp">
          <div className="input-container">
            <label>Description</label>
            <br />
            <input
              type="text"
              placeholder="Enter Description"
              value={discription}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-between">
          <div className="input-container">
            <label>Date</label>
            <br/>
          <select
              className="languagetype"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            >
              <option value="Monday">Monday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Friday">fridaty</option>
            </select>
          </div>
          </div>
          </div>
          <div className="displaytp">
          <div className="input-container">
            <label>Specialty</label>
            <br />
           
            <select
              className="languagetype"
              value={specialty}
              required
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="Eye surgeon">Eye surgeon</option>
              <option value="General surgeon">General surgeon</option>
              <option value="Ear Specialist">Ear Specialist</option>
            </select>
          </div>
          <div className="space-between">
          <div className="input-container">
            <label>Language</label>
            <br />

            <select
              className="languagetype"
              value={language}
              required
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Sinhala">Sinhala</option>
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
            </select>
          </div>
          </div>
          </div>

          <div className="displaytp">

          <div className="input-container">
            <label>Type</label>
            <br/>
            <select
              className="Doctertype"
              value={type}
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Ophthalmologists">Ophthalmologists</option>
              <option value="Ear Specialists">Ear Specialists</option>
            </select>
          </div>

        <div className="space-between">

          <div className="input-container">
            <label>Image URL</label>
            <br />
            <input
              type="text"
              placeholder="Enter Image URL"
              value={imageurl}
              required
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          </div>
          </div>

          <div className="submitbutton">
            <button type="submit" className="submit111">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;
