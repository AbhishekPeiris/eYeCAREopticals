import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Rating from 'react-rating-stars-component';

function ViewAllFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/feedback/"
        );
        setFeedback(response.data.feedback);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFeedback();
  }, []);

  return (
    <div className="container" style={{ width: "1500px" }}>
      {feedback.map((item) => (
        <div className="row" key={item.id}>
          <p style={{ fontSize: "11px" }}>{item.cusname}</p>
          <p style={{ fontSize: "11px" }}>{item.contact}</p>
          <p style={{ fontSize: "11px" }}>{item.address}</p>
          <p style={{ fontSize: "11px" }}>{item.email}</p>
          <Rating
            count={5}
            value={item.rating}
            size={24}
            edit={false}
          />
          <p style={{ fontSize: "11px" }}>{item.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewAllFeedback;
