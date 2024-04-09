import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating-stars-component';
import styles from '../styles/Doctor.css';
import StripeCheckout from "react-stripe-checkout";
import Swal from 'sweetalert2';

function Doctor() {

  const [doctor, setDoctor] = useState([]);
  const { docID } = useParams();
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem('currentUser'));

  const [cusname, setCusname] = useState(user.firstname + ' ' + user.lastname);
  const [contact, setContact] = useState(user.contact);
  const [address, setAddress] = useState(user.address);
  const [email, setEmail] = useState(user.email);


  const [doctorname, setDoctorname] = useState();
  const [date, setDate] = useState();
  const [doctorfee, setDoctorfee] = useState();



  useEffect(() => {
    async function getDoctor() {
      try {
        console.log(docID);
        const response = await axios.post(`http://localhost:5000/api/doctor/doctorid/${docID}`);
        setDoctor(response.data.doctor);
        console.log(response.data.doctor)

       
          const Appointment = response.data.doctor;
          setDoctorname(Appointment.firstname + ' ' + Appointment.lastname);
          setDate(Appointment.date);
          setDoctorfee(Appointment.doctorfee);
        
  
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getDoctor();
  }, [docID]);

  async function onToken(token) {

    console.log(token);

  
      const newAppointment = {
        cusname :cusname,
        contact :contact,
        address :address,
        email : email,
        doctorname: doctorname,
        date : date,
        doctorfee : doctorfee
       
      }
  
      try {
        const data = (await axios.post('http://localhost:5000/api/doctor/createdoctorappointment', newAppointment)).data;
        console.log(data);
        Swal.fire('Thank you!', "Your Appointment is Successfully", "success").then(result => {
          window.location.href =`/myappointment`;
        });
  
        setCusname('');
        setContact('');
        setAddress('');
        setEmail('');
        setDoctorname('');
        setDate('');
        setDoctorfee('');

      } catch (error) {
        console.log(error);
        Swal.fire('Error', "Your Appointment is Unsuccessfully", "error");
      }
    



  }





  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <br /><br /><br /><br /><br /><br />
          <img src={doctor.imageurl[0]} alt="" className='docimage' />

          <div className='fuldetail'>
            <p className='docfname'><b> {doctor.firstname}&nbsp;&nbsp;{doctor.lastname}</b></p>

            <p className='docemail'><h6><b> Email  :</b>&nbsp;&nbsp;&nbsp; {doctor.email}</h6></p>
            <hr className='hr1'></hr>
            <p className='doccontact'><h6><b> Contact Number  :</b>&nbsp;&nbsp; {doctor.contact}</h6></p>
            <hr className='hr1'></hr>
            <p className='docdate'><h6><b> Date :</b> &nbsp;&nbsp;&nbsp;&nbsp;{doctor.date}</h6></p>
            <hr className='hr1'></hr>
            <p className='docspecialty'><h6><b> Specialty  :</b>&nbsp;&nbsp;&nbsp;&nbsp; {doctor.specialty}</h6></p>
            <hr className='hr1'></hr>
            <p className='docdepartment'><h6><b> Department  :</b>&nbsp;&nbsp;&nbsp;&nbsp;{doctor.department}</h6></p>
            <hr className='hr1'></hr>
            <p className='doctype'><h6><b> Type  :</b>&nbsp;&nbsp;&nbsp;&nbsp; {doctor.type}</h6></p>
            <hr className='hr1'></hr>
            <p className='docrating'><h6><b> Rating  :</b> &nbsp;&nbsp;&nbsp;&nbsp;{doctor.rating}</h6></p>
            <hr className='hr1'></hr>
            <p className='docdoctorfee'><h6><b> Doctor Fee  :</b>  &nbsp;&nbsp;&nbsp;Rs.&nbsp;{doctor.doctorfee}.00</h6></p>
            <hr className='hr1'></hr>

          </div>

          <div className='fuldis'>
            <div className='col md-5 border'>
              <p style={{ fontSize: "20px" }}><strong>About Doctor</strong></p>
            </div>
            <div className='col md-5 border'>
              <p className="docdiscription">{doctor.discription}</p>
            </div>
          </div>


          <StripeCheckout

            amount={doctor.doctorfee * 100}

            token={onToken}
            currency='LKR'

            stripeKey="pk_test_51Nu7smDOmIYodrCji9U41paJjaMrcNBAi0HhO8DB5i0c0fXxABtjqL7GCZJxoSHMvBu8U2uymvDSKsZaAUGsbCpi000BhYzBG5"
          ><button className='btn btn-primary apponow'>Appointment Now!</button></StripeCheckout>
          <div className='row table_81'>
          </div>


        </div>


      )}

    </div>
  )
}

export default Doctor;
