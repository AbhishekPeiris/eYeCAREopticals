import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Adminfeedback.css";

import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Rating from 'react-rating-stars-component';


function AdminFeedback() {

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    async function ViewAllFeedback() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/feedback/"
        );
        setFeedback(response.data.feedback);
      } catch (error) {
        console.log(error);
      }
    }
    ViewAllFeedback();
  }, []);

  async function deleteFeedback(id){

    try {
        
        
        const data = (await axios.delete(`http://localhost:5000/api/feedback/deletefeedback/${id}`)).data;
        console.log(data);
        Swal.fire('Stay safe', "You account is deleted", 'success').then(result => {

            window.location.reload();

        });

    } catch (error) {
        
        console.log(error);
        Swal.fire('Error', "Error with deleting user", 'error');
 

    }
}
  
  return (
    <div className="form617">
    <div className="container" style={{width:"1500px"}}>
    <div className="row ">
      <div className="col-md-1 border table6171">
        <strong>
          <p>Customer name</p>
        </strong>
      </div>
      <div className="col-md-1 border table6172">
        <strong>
          <p>Contact</p>
        </strong>
      </div>

      <div className="col-md-1 border table6173">
        <strong>
          <p>Address</p>
        </strong>
      </div>
      <div className="col-md-3 border table6174">
        <strong>
          <p>Email</p>
        </strong>
      </div>
      <div className="col-md-1 border table6175">
        <strong>
          <p>Rating</p>
        </strong>
      </div>
      <div className="col-md-1 border table6176">
        <strong>
          <p>Comment</p>
        </strong>
      </div>
     
      
      <div className="col-md-1 border table6177"><strong>Action</strong></div>
    </div>
    <form>
    {feedback.map((feedback) => (
      <div className="row">
        <div className="col-md-1 border table6171a">
          <p style={{fontSize:"11px"}}>{feedback.cusname}</p>
        </div>
        <div className="col-md-1 border table6172a">
          <p style={{fontSize:"11px"}}>{feedback.contact}</p>
        </div>

        <div className="col-md-1 border table6173a">
          <p style={{fontSize:"11px"}}>{feedback.address}</p>
        </div>
        <div className="col-md-3 border table6174a ">
          <p style={{fontSize:"11px"}}>{feedback.email}</p>
        </div>
        <div className="col-md-1 border table6175a">
        <Rating
                                            count={5}
                                            value={feedback.rating}
                                            size={24}
                                            edit={false}
                                        />
        </div>
        <div className="col-md-1 border table6176a">
          <p style={{fontSize:"11px"}}>{feedback.comment}</p>
        </div>
       
        <div className="col-md-1 border table6177a " >
        <button onClick={(e) => deleteFeedback(feedback._id)}>Delete</button>
        </div>
      </div>
    ))}
    </form>
  </div>
  </div>
  );
}

export default AdminFeedback;
