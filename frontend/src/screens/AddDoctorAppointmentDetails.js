
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
        Swal.fire('Error', "Add Appointment Unsuccessfull", "error");
      }
    }   
  return (
    <div>
    <form  className="da-form-group" onSubmit={AddDoctorAppointmentDetails}>

    <h2>Doctor Appointment</h2><br/>
      <div className="mb-3">
        <label className="da-control-label">Customer Name</label><br/>
        <input type="text" className="da-form-control" placeholder="Enter customer name " value={cusname} required

        onChange={(e) => {
          setCustomername(e.target.value)
        }}
        />
      </div>
      
      <div className="mb-3">
        <label className="da-control-label">Contact</label><br/>
        <input type="tel" className="da-form-control" placeholder="Enter contact" value={contact} required
        onChange={(e) => {
          setContact(e.target.value)
        }}
          
        />
      <div className="mb-3">
        <label className="da-control-label">Address</label><br/>
        <input type="text" className="da-form-control" placeholder="Enter address" value={address} required
         onChange={(e) => {
          setAddress(e.target.value)
        }}
        />
      </div>
      </div>
      <div className="mb-3">
        <label className="da-control-label">Email</label><br/>
        <input type="email" className="da-form-control" placeholder="Enter email" value={email} required
         onChange={(e) => {
          setEmail(e.target.value)
        }}
        />
      </div>

      <div className="mb-3">
        <label className="da-control-label">Doctor Name </label><br/>
        <input type="text" className="da-form-control" placeholder="Enter doctor name" value={doctorname} required
          onChange={(e) => {
            setDoctorname(e.target.value)
          }}
        />
      </div>

      <div className="mb-3">
        <label className="da-control-label">Date</label><br/>
        <input type="date" className="da-form-control" placeholder="Enter Date " value={date} required
          onChange={(e) => {
            setDate(e.target.value)
          }}
        />
      </div>

      <div className="mb-3">
        <label className="da-control-label">Doctor Fee</label><br/>
        <input type="text" className="da-form-control" placeholder="Enter doctor fee" value={doctorfee} required
         onChange={(e) => {
          setDoctorfee(e.target.value)
        }}
        />
      </div>

      <button type="submit" className="submit">Submit</button>
         
    </form>
  </div>

  )
}

export default AddDoctorAppointmentDetails
