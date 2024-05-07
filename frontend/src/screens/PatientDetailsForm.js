import React, { useState, useEffect } from 'react';
import "../styles/PatientDetailsForm.css";
import axios from 'axios';

import { Link, useParams } from 'react-router-dom';

import StripeCheckout from "react-stripe-checkout";
import Swal from 'sweetalert2';

function PatientDetailsForm() {

  const { docfname, doclastname, docfee } = useParams();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const [firstname, setFirstName] = useState('');
  const [lastname, setLasname] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState(user.email);
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [emergency, setEmergency] = useState('');
  const [doctor, setDoctor] = useState(docfname + doclastname);
  const [doctorfee, setDoctorfee] = useState(docfee);



  async function onToken(token) {

    console.log(token);


    const newAppointment = {
      firstname: firstname,
      lastname: lastname,
      date: date,
      gender: gender,
      age: age,
      email: email,
      contact: contact,
      address: address,
      emergency: emergency,
      doctor: doctor,
      doctorfee: doctorfee,

    }

    try {
      const data = (await axios.post('http://localhost:5000/api/doctor/createdoctorappointment', newAppointment)).data;
      console.log(data);
      Swal.fire('Thank you!', "Your Appointment is Successfully", "success").then(result => {
        window.location.href = '/myappointment'
      });

      setFirstName('')
      setLasname('')
      setDate('')
      setGender('')
      setAge('')
      setEmail(user.email)
      setContact('')
      setAddress('')
      setEmergency('')
      setDoctor(docfname + doclastname)
      setDoctorfee(docfee)

    } catch (error) {
      console.log(error);
      Swal.fire('Error', "Your Appointment is Unsuccessfully", "error");
    }




  }

  function sumbmithadle(){
 
    // Check if all required fields are filled
    if (!firstname || !lastname || !date || !gender || !age || !contact || !address || !emergency) {
      alert('Please fill in all required fields')
      window.location.reload();
    }
    
  }

  return (
    <div>
      <form>
        <br /><br /><br />
        <div className='full'>
          <div class="fullform">
            <h2 className='heder'>Patient Registration Form</h2>

            <label className='lb' for="fname">First Name</label>
            <input className='text1' type="text" id="fname" name="fname" required value={firstname}
              onChange={
                (e) => {
                  setFirstName(e.target.value);
                }
              }
            />     

            <label className='lb' for="lname">Last Name</label>
            <input className='text1' type="text" id="lname" name="lname" required value={lastname}
              onChange={
                (e) => {
                  setLasname(e.target.value);
                }
              }
            />
            <label className='lb' for="lname">Age </label>
            <input className='text1' type="number" id="lname" name="lname" required value={age} min="0" max="120"
              onChange={
                (e) => {
                  setAge(e.target.value);
                }
              }
            />
            <label className='lb' for="dob"> Appointment Date</label>
            <input type="date" id="dob" name="dob" required value={date}
              onChange={
                (e) => {
                  setDate(e.target.value);
                }
              }
            />     <br />

            <label className='lb' >Gender</label>


            <div style={{display:'flex'}}>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <input type="radio" id="maleRadio" name="gender" value="Male" required checked={gender === "Male"}
              onChange={(e) => {
                setGender("Male");
              }}
            />&nbsp;&nbsp;<label className="form-check-label" htmlFor="maleRadio"> Male</label>
           

           &nbsp;&nbsp;&nbsp;
            <input type="radio" id="femaleRadio" name="gender" value="Female" required checked={gender === "Female"}
              onChange={(e) => {
                setGender("Female");
              }}
            />&nbsp;&nbsp;<label className="form-check-label" htmlFor="femaleRadio">Female</label>
            </div>
           

            <br />
      
            <label className='lb' for="phone">Phone Number</label>
            <input className='text1' type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required value={contact}
              onChange={
                (e) => {
                  setContact(e.target.value);
                }
              }
            />

            <label className='lb' for="address">Address</label>
            
            <textarea id="address" name="address" required style={{ width: "580px", height: "100px" }} value={address}
              onChange={
                (e) => {
                  setAddress(e.target.value);
                }
              }
            ></textarea>
            <br />

            <label className='lb' for="emergency">Emergency Contact Number</label>
            <input className='text1' type="tel" id="emergency" name="emergency" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required value={emergency}
              onChange={
                (e) => {
                  setEmergency(e.target.value);
                }
              }
            />
            <br />
            

           <div style={{display:"flex"}}>
           <input type="checkbox" id="consent" name="consent" required />
            <label className='lb' for="consent" style={{ fontSize: "13.5px" }}>&nbsp;&nbsp;&nbsp;I consent to the processing of my personal data in accordance with the Privacy Policy.</label>
           </div>
            <br />
            

            <StripeCheckout
              amount={docfee * 100}
              token={onToken}
              currency='LKR'
              stripeKey="pk_test_51Nu7smDOmIYodrCji9U41paJjaMrcNBAi0HhO8DB5i0c0fXxABtjqL7GCZJxoSHMvBu8U2uymvDSKsZaAUGsbCpi000BhYzBG5"
            >
            
              <button className='appointmentbtn' type="button" onClick={sumbmithadle}>Appointment Now!</button>
            </StripeCheckout>
            <br />
            <br />

          </div>
        </div>
      </form>
    </div>
  );
}

export default PatientDetailsForm;
