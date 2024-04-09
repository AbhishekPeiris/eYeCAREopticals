import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function UpdateDoctorAppointmentDetails() {
    const { userID } = useParams(); 

    const [cusname, setCustomername] = useState();
      const [contact, setContact] = useState();
      const [address, setAddress] = useState();
      const [email, setEmail] = useState();
      const [doctorname, setDoctorname] = useState();
      const [date, setDate] = useState();
      const [doctorfee, setDoctorfee] = useState();
  
   
      useEffect(() => {
          async function fetchUserDetails() {
            try {
              const response = await axios.post(`http://localhost:5000/api/manager/getalluser/${userID}`);
              const userData = response.data.user;
        
              // Set state after fetching user data
              setCustomername(userData.cusname);
              setContact(userData.contact);
              setAddress(userData.address);
              setEmail(userData.email);
              setDoctorname(userData.doctorname);
              setDate(userData.date);
              setDoctorfee(userData.doctorfee);
        
            } catch (error) {
              console.log(error);
              // Handle error fetching user data
            }
          }
        
          // Call the function to fetch user details when the component mounts
          fetchUserDetails();
        
        }, [userID]); // Include userID in the dependency array to re-run effect when userID changes
        
  
  
    async function EditUser(e) {
      e.preventDefault();
  
   
  
          const updateUser = {
              _id: userID,
              cusname,
              contact,
              address,
              email,
              doctorname,
              date,
              doctorfee
          }
  
          try {
              
              
              const data = (await axios.put(`http://localhost:5000/api/manager/edituser/${userID}`, updateUser)).data;
          
              Swal.fire('Updated', "Your profile is updated successfully", "success").then(result => {
  
                   window.location.href = '/viewdoctorappointment';
  
              });
          
  
          } catch (error) {
              
              console.log(error);
              Swal.fire('Error', "Error with updating user", "error");
            
  
          }
      }
    
    return (
      <div>
         <form  class="form mb-5 mt-5" style={{width:"350px"}} onSubmit={EditUser}>
  
  <h4><strong>Doctor Appointment Form</strong></h4><br/>
    <div className="input-container">
      <label>Customer Name</label><br/>
      <input type="text" placeholder="Enter customer name " value={cusname} required
        onChange={(e) => {
          setCustomername(e.target.value);
        }}
      />
    </div>

    <div className="input-container">
      <label>Contact</label><br/>
      <input type="tel" placeholder="Enter contact" value={contact} required
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />
    </div>

    <div className="input-container">
      <label>Address</label><br/>
      <input type="text" placeholder="Enter address" value={address} required
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
    </div>
  
    <div className="input-container">
      <label>Email</label><br/>
      <input type="email" placeholder="Enter email" value={email} required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>

    <div className="input-container">
      <label>Doctor Name</label><br/>
      <input type="text" placeholder="Enter doctor name " value={doctorname} required
        onChange={(e) => {
          setDoctorname(e.target.value);
        }}
      />
    </div>
    <div className="input-container">
      <label>Date</label><br/>
      <input type="date" placeholder="Enter date " value={date} required
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </div>
    <div className="input-container">
      <label>Doctor Fee</label><br/>
      <input type="text" placeholder="Enter doctor fee " value={doctorfee} required
        onChange={(e) => {
          setDoctorfee(e.target.value);
        }}
      />
    </div>
    <button type="submit" className="submit" style={{width:"300px"}}>Submit</button>
        <button class="submit" style={{width:"300px"}}>Cancel</button>
  </form>
      </div>
    );
  }
  

export default UpdateDoctorAppointmentDetails
