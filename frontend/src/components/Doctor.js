import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating-stars-component';

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
        <div className="col-lg-3 RBtable_2col_1" key={doctor._id} data-aos="zoom-in">
          <img src={doctor.imageurl[0]} alt="" width={300} />
          <br /><br />
          <p>
            <strong>{doctor.firstname} {doctor.lastname}</strong><br />
            <p style={{ fontSize: "11px" }}>{doctor.specialty} | {doctor.department}<br />
              {doctor.type}
              <Rating
                count={5}
                value={doctor.rating}
                size={24}
                edit={false}
              />
              <hr style={{ backgroundColor: "black" }} />
              <Link to={`/${doctor._id}`}><button className='docappoibtn'>Make Appointment !</button></Link>
            </p>
          </p>
        </div>
      )}

    </div>
  )
}

export default Doctor;
