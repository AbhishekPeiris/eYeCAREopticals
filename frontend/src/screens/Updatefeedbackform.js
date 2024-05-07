import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/feedbackformScreen.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import pngwing from "../images/pngwing.png";
function Updatefeedbackform() {

    const { feedbackID } = useParams(); 

    const [cusname, setCusname] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");

  useEffect(() => {
    async function fetchFeedbackDetails() {
      try {
        const response = await axios.post(`http://localhost:5000/api/feedback/${feedbackID}`);
        const feedbackData = response.data.feedback;
  
        // Set state after fetching user data
        setCusname(feedbackData.cusname);
        setContact(feedbackData.contact);
        setAddress(feedbackData.address);
        setEmail(feedbackData.email);
        setRating(feedbackData.rating);
        setComment(feedbackData.comment);
  
      } catch (error) {
        console.log(error);
        // Handle error fetching user data
      }
    }
  
    // Call the function to fetch user details when the component mounts
    fetchFeedbackDetails();
  
  }, [feedbackID]);

  async function editfeedback(e) {
    e.preventDefault();

 

        const updatefeedback = {
            _id: feedbackID,
            cusname,
      contact,
      address,
      email,
      rating,
      comment,
        }

        try {
            
            
            const data = (await axios.put(`http://localhost:5000/api/feedback/editfeedback/${feedbackID}`, updatefeedback)).data;
        
            Swal.fire('Updated', "Your Feedback is updated successfully", "success").then(result => {

                 window.location.href = '/profile';

            });
        

        } catch (error) {
            
            console.log(error);
            Swal.fire('Error', "Error with updating Feedback", "error");
          

        }
    }
  return (
    <div style={{marginLeft:'300px'}}>
      <br />
      <br />
      <br />

      <div className="pngwings">
        <img src={pngwing} alt="feed pic" className="png123" />
      </div>

      <h2 className="fd-form-title" style={{marginLeft:"10px"}}> Edit Customer Feedback Form</h2>
      <form className="form" onSubmit={editfeedback}>
        <div className="fd-form-group">
          <label className="fb_other" htmlFor="fd-exampleInputName">
            <b>Name</b>
          </label>
          <br />
          <input
            type="text"
            className="fd-form-control"
            id="exampleInputName"
            placeholder="Enter Your Name"
            value={cusname}
            required
            onChange={(e) => setCusname(e.target.value)}
          />
        </div>
        <div className="fd-form-group">
          <label className="fb_other" htmlFor="fd-exampleInputContactNumber">
            <b>Contact Number</b>
            required
          </label>
          <br />
          <input
            type="tel"
            className="fd-form-control"
            id="exampleInputContactNumber"
            placeholder="Enter Your Contact Number"
            value={contact}
            required
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="fd-form-group">
          <label className="fb_other" htmlFor="exampleInputAddress">
            <b>Address</b>
          </label>
          <br />
          <input
            type="text"
            className="fd-form-control"
            id="exampleInputAddress"
            placeholder="Enter Your Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="fd-form-group">
          <label className="fb_other" htmlFor="exampleInputEmail">
            <b>Email</b>
          </label>
          <br />
          <input
            type="email"
            className="fd-form-control"
            id="exampleInputEmail"
            placeholder="Enter Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="fd-form-group">
          <label className="fb_other" htmlFor="fd-exampleInputRating">
            <b>How would you rate our service?</b>
          </label>
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={(newRating) => setRating(newRating)}
            numberOfStars={5}
            name="rating"
            starDimension="25px"
            starSpacing="5px"
            value={rating}
          />
        </div>
        <div className="fd-form-group">
          <label>
            <b>Rating:</b> {rating} stars
          </label>
          <br />
        </div>
        <div className="fd-form-group">
          <label className="fb_other" htmlFor="exampleInputComment">
            <b>Additional Comment</b>
          </label>
          <br />
          <textarea
            className="fd-form-control"
            id="exampleInputComment"
            placeholder="Enter your Additional Comment"
            required
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
        </div>
        <div className="fd-form-check">
          <input
            type="checkbox"
            className="fd-form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="fd-form-check-label" htmlFor="exampleCheck1">
            <b>
              I consent to the storage and handling of my data by this website.
            </b>
          </label>
          <br />
        </div>
        <div className="fb_sub_btn">
          <Link to="/viewallfeedback">
            <button type="button" className="btn btn-primary">
              <b>View Feedback</b>
            </button>
          </Link>
          <button type="submit" className="btn btn-primary">
            <b>Submit</b>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Updatefeedbackform