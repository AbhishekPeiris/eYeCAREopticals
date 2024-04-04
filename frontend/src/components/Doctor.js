import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating-stars-component';
import styles from '../styles/Doctor.css';

function Doctor() {

  const [doctor, setDoctor] = useState([]);
  const { docID } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDoctor() {
      try {
        console.log(docID);
        const response = await axios.post(`http://localhost:5000/api/doctor/${docID}`);
        setDoctor(response.data.doctor);
        console.log(response.data.doctor)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getDoctor();
  }, [docID]);


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <br /><br /><br /><br /><br /><br />
          <img src={doctor.imageurl[0]} alt="" className='docimage' />

          <div className='fuldetail'>
            <p className='docfname'>{doctor.firstname}</p>
            <hr className='hr1'></hr>
            <p className='doclname'> {doctor.lastname}</p>
            <hr className='hr1'></hr>
            <p className='docemail'>{doctor.email}</p>
            <hr className='hr1'></hr>
            <p className='doccontact'>{doctor.contact}</p>
            <hr className='hr1'></hr>
            <p className='docdate'>{doctor.date}</p>
            <hr className='hr1'></hr>
            <p className='docspecialty'>{doctor.specialty}</p>
            <hr className='hr1'></hr>
            <p className='docdepartment'>{doctor.department}</p>
            <hr className='hr1'></hr>
            <p className='doctype'> {doctor.type}</p>
            <hr className='hr1'></hr>
            <p className='docrating'> {doctor.rating}</p>
            <hr className='hr1'></hr>
            <p className='docdoctorfee'> {doctor.doctorfee}</p>
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


        </div>


      )}

    </div>
  )
}

export default Doctor;
