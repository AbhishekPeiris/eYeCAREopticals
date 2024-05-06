import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ViewAllFeedback.css";
import Rating from "react-rating-stars-component";

function ViewAllFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const response = await axios.post(
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
    <div>
     
      <div className="container617">
        {feedback.map((item) => (
          <div className="feedback-item" key={item.id}>
            <p className="cusname">{item.cusname}</p>
            <p>{item.contact}</p>
            <p>{item.address}</p>
            <p>{item.email}</p>
            <Rating count={5} value={item.rating} size={24} edit={false} />
            <p className="comment">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllFeedback;
