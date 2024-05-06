import React from "react";
import feedbackimage from "../images/feedbackimage.jpg";
import "../styles/feedback.css";
import { Link } from 'react-router-dom';

function FeedbackScreen() {
  return (
    <div className="feed_background">
      <br />
      <br />
      <br />

      <div className="col md-3">
        <img src={feedbackimage} alt="feed pic" className="img-feed" />
      </div>

      <div className="feedback_right">
        <h1>
          Customer <strong>Feedback</strong>
        </h1>
        <br />
        "Customer feedback is essential for improving the quality of services at
        our eye care center. Your input helps us enhance our patient experience
        and ensure we meet your eye care needs effectively. Share your thoughts
        with us today!"
        
        <div className="btn-1">          

            

            <button className="backbutton">
            <Link to="/profile">Back</Link>
            </button>

          
            <button className="addfeedbutton">
            <Link to="/feedbackformScreen">Add Feedback</Link>
          </button>
        
                            
        
        </div>
        </div>
        
      
    </div>
  );
}

export default FeedbackScreen;
