import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../styles/AddDoctor.css";

function AddDoctor() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [language, setLanguage] = useState('Sinhala');
  const [type, setType] = useState('Ophthalmologists');
  const [department, setDepartment] = useState('');
  const [rating, setRating] = useState('');
  const [doctorFee, setDoctorFee] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('Monday');
  const [specialty, setSpecialty] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  async function addDoctorDetails(e) {
    e.preventDefault();

    const newDoctor = {
      firstname : firstname,
      lastname : lastname,
      contact : contact,
      email : email,
      experiance : experience,
      language : language,
      type : type,
      department : department,
      rating : rating,
      doctorfee : doctorFee,
      discription : description,
      date : date,
      specialty : specialty,
      imageurl : imageUrl
    };

    try {
      
        const response = await axios.post(`http://localhost:5000/api/doctormanagement/adddoctor`, newDoctor);
        console.log(response.data);
        Swal.fire('Thank you!', "Add Doctor Successfully", "success").then(result => {
  
          window.location.href = '/viewdoctordetails';
  
      });
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
      Swal.fire('Error', "Add Doctor Unsuccessfully", "error");
    }
  }
  

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="content">
        <form className="form mb-5 mt-5" onSubmit={addDoctorDetails}>
          <p className="form-title">Doctors Registration Form</p>

          <br />
          <br />
          <div className="flex-container">
            <div className="input-container">
              <label>First Name</label>
              <input type="text" value={firstname} placeholder="Enter First Name " required 
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className="input-container">
              <div className="input-container1">
                <label>Last Name</label>
                <input type="text" value={lastname} placeholder="Enter Last Name"  required
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div className="input-container">
              <label>Contact Number</label>
              <input type="text" value={contact} placeholder="Enter Contact Number" required
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="input-container">
              <div className="input-container1">
                <label>Email</label>
                <input type="email" value={email} placeholder="Enter Email" required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div className="input-container">
              <label>Experience</label>
              <input type="text" value={experience} placeholder="Enter Experience" required
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-container">
            <div className="input-container">
              <label>Department</label>
              <input type="text" value={department} placeholder="Enter Department" required
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="input-container">
              <div className="input-container1">
                <label>Rating</label>
                <input type="number" value={rating} placeholder="Enter Rating" required
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div className="input-container">
              <label>Doctor Fee</label>
              <input type="number" value={doctorFee} placeholder="Enter Doctor Fee" required
                onChange={(e) => setDoctorFee(e.target.value)}
              />
            </div>

            <div className="input-container">
              <div className="input-container1">
                <label>Description</label>
                <input type="text" value={description} placeholder="Enter Description" required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex-container">
            
           
            

            <div className="input-container">
              <div className="input-container1">
                <label>Specialty</label>
                <input type="text" value={specialty} placeholder="Enter Specialty" required
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex-container">

          <label>Date</label>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="Monday">Monday</option>
              <option value="Wednsday">Wednsday</option>
              <option value="Friday">Friday</option>
            </select>
            <label>Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="Sinhala">Sinhala</option>
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
            </select>

            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Ophthalmologists">Ophthalmologists</option>
              <option value="Ear Specialists">Ear Specialists</option>
            </select>

            <div className="input-container1">
              <label>Image URL</label>
              <input type="text" value={imageUrl} placeholder="Enter Image URL" required
                onChange={(e) => setImageUrl(e.target.value)}
              />
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
