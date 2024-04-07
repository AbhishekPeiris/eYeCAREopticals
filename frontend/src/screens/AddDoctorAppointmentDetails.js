
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddDoctorAppointmentDetails() {

    const [cusname, setCustomername] = useState();
    const [contact, setContact] = useState();;
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [doctorname, setDoctorname] = useState()
    const [date, setDate] = useState()
    const [doctorfee, setDoctorfee] = useState();
  
    async function AddDoctorAppointmentDetails(e) {
      e.preventDefault();
  
      const newDoctorAppointment = {
       cusname,
       contact,
       address,
       email,
       doctorname,
       date,
       doctorfee

      }
  
      try {
        const data = (await axios.post('http://localhost:5000/api/manager/addappointment', newDoctorAppointment)).data;
        console.log(data);
        Swal.fire('Thank you!', "Add Appointment Successfully", "success").then(result => {
          window.location.href = '/viewdoctorappointment';
        });
  
        setCustomername('');
        setContact('');
        setAddress('');
        setEmail('');
        setDoctorname('');
        setDate('');
        setDoctorfee('');
      } catch (error) {
        console.log(error);
        Swal.fire('Error', "Add Appointment Unsuccessfully", "error");
      }
    }   
  return (
    <div>
    <form  class="form mb-5 mt-5" style={{width:"350px"}} onSubmit={AddDoctorAppointmentDetails}>

    <h4><strong>Doctor Appointment Form</strong></h4><br/>
      <div className="input-container">
        <label>Customer Name</label><br/>
        <input type="text" placeholder="Enter customer name " value={cusname} required

        onChange={(e) => {
          setCustomername(e.target.value)
        }}
        />
      </div>
      
      <div className="input-container">
        <label>Contact</label><br/>
        <input type="tel" placeholder="Enter contact" value={contact} required
        onChange={(e) => {
          setContact(e.target.value)
        }}
          
        />
      <div className="input-container">
        <label>Address</label><br/>
        <input type="text" placeholder="Enter address" value={address} required
         onChange={(e) => {
          setAddress(e.target.value)
        }}
        />
      </div>
      </div>
      <div className="input-container">
        <label>Email</label><br/>
        <input type="email" placeholder="Enter email" value={email} required
         onChange={(e) => {
          setEmail(e.target.value)
        }}
        />
      </div>

      <div className="input-container">
        <label>Doctor Name </label><br/>
        <input type="text" placeholder="Enter doctor name" value={doctorname} required
          onChange={(e) => {
            setDoctorname(e.target.value)
          }}
        />
      </div>

      <div className="input-container">
        <label>Date</label><br/>
        <input type="date" placeholder="Enter Date " value={date} required
          onChange={(e) => {
            setDate(e.target.value)
          }}
        />
      </div>

      <div className="input-container">
        <label>Doctor Fee</label><br/>
        <input type="text" placeholder="Enter doctor fee" value={doctorfee} required
         onChange={(e) => {
          setDoctorfee(e.target.value)
        }}
        />
      </div>

      <button type="submit" className="submit" style={{width:"300px"}}>Submit</button>
          <button class="submit" style={{width:"300px"}}>Cancel</button>
    </form>
  </div>

  )
}

export default AddDoctorAppointmentDetails
