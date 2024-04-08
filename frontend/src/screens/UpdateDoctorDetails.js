import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../styles/AddDoctor.css";

function UpdateDoctorDetails() {

    const { docID } = useParams(); 

    const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [type, setType] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [doctorfee, setDoctorFee] = useState("");
  const [discription, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [imageurl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchDoctorDetails() {
      try {
        const response = await axios.post(`http://localhost:5000/api/doctormanagement/${docID}`);
        const DoctorData = response.data.doctor;
  
        // Set state after fetching user data
        setFirstname(DoctorData.firstname);
        setLastname(DoctorData.lastname);
        setContact(DoctorData.contact);
        setEmail(DoctorData.email);
        setExperience(DoctorData.experiance);
        setLanguage(DoctorData.language);
        setType(DoctorData.type);
        setDepartment(DoctorData.department);
        setRating(DoctorData.rating);
        setDoctorFee(DoctorData.doctorfee);
        setDescription(DoctorData.discription);
        setDate(DoctorData.date);
        setSpecialty(DoctorData.specialty);
        setImageUrl(DoctorData.imageurl)
  
      } catch (error) {
        console.log(error);
        // Handle error fetching user data
      }
    }
  
    // Call the function to fetch user details when the component mounts
    fetchDoctorDetails();
  
  }, [docID]); // Include userID in the dependency array to re-run effect when userID changes

  async function EditDoctor(e) {
    e.preventDefault();

 

        const updatedoctor = {
            _id: docID,
            firstname,
      lastname,
      contact,
      email,
      experience,
      language,
      type,
      department,
      rating,
      doctorfee,
      discription,
      date,
      specialty,
      imageurl,
        }

        try {
            
            
            const data = (await axios.put(`http://localhost:5000/api/doctormanagement/editdoctor/${docID}`, updatedoctor)).data;
        
            Swal.fire('Updated', "Your profile is updated successfully", "success").then(result => {

                 window.location.href = '/viewdoctordetails';

            });
        

        } catch (error) {
            
            console.log(error);
            Swal.fire('Error', "Error with updating user", "error");
          

        }
    }
  
  return (
    <div>
         <div className="formcontent111">
        <form className="form mb-5 mt-5 snchadddocform111" onSubmit={EditDoctor}>
          <p className="form-title">Doctor's Details Update Form</p>
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
              value={doctorfee}
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
              value={imageurl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          </div>
          </div>
          <button type="submit" className="updateformdeltbtn">
              Cancle Update 
            </button>
            <button type="submit" className="Updateformbtn">
              Update Details
            </button>
          
        </form>
      </div>
    </div>
  )
}

export default UpdateDoctorDetails