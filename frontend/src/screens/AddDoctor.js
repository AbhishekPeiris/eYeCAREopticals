import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../styles/AddDoctor.css";

function AddDoctor() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("Sinhala");
  const [type, setType] = useState("Ophthalmologists");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [doctorFee, setDoctorFee] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("Monday");
  const [specialty, setSpecialty] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function addDoctorDetails(e) {
    e.preventDefault();

    const newDoctor = {
      firstname,
      lastname,
      contact,
      email,
      experience,
      language,
      type,
      department,
      rating,
      doctorFee,
      description,
      date,
      specialty,
      imageUrl,
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
      setSpecialty("");
      setImageUrl("");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Add Doctor Unsuccessfully", "error");
    }
  }

  return (
    <div>
      
      <div className="content">
        <form className="form mb-5 mt-5 snchadddocform" onSubmit={addDoctorDetails}>
          <p className="form-title">Doctors Registration Form</p>
          <div className="displaytp">
            
          <div className="input-container">
            <label>First Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstname}
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
              value={experience}
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
              value={doctorFee}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-between">
          <div className="input-container">
            <label>Date</label>
            <br />
            <input
              type="text"
              placeholder="Enter Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          </div>
          </div>
          <div className="displaytp">
          <div className="input-container">
            <label>Specialty</label>
            <br />
            <input
              type="text"
              placeholder="Enter Specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </div>
          <div className="space-between">
          <div className="input-container">
            <label>Language</label>
            <br />

            <select
              className="languagetype"
              value={language}
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
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          </div>
          </div>

          <div className="submitbutton">
            <button type="submit" className="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;
