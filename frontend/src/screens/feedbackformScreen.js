import React, { useState } from "react";
import axios from 'axios';
import "../styles/feedbackformScreen.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";
import pngwing from "../images/pngwing.png";

function feedbackformScreen() {
  const [cusname, setCusname] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  async function addFeedback(event) {
    event.preventDefault();

    const newFeedback = {
      cusname,
      contact,
      address,
      email,
      rating,
      comment,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/feedback/addfeedback`,
        newFeedback
      );
      console.log(response.data);
      Swal.fire(
        "Feedback Submitted!",
        "Thank you for your feedback.",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/profile'; // Navigate to ProfileScreen.js
        }
      });
      // Resetting the form fields after successful submission
      setCusname("");
      setContact("");
      setAddress("");
      setEmail("");
      setRating(0); // Reset rating to 0
      setComment("");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Add Feedback Unsuccessfully", "error");
    }
  }

function feedbackformScreen() {
  return (
    <div className="fd-container">
      <br />
      <br />
      <br />

      <div className="pngwings">
        <img src={pngwing} alt="feed pic" className="png123" />
      </div>

      <h2 className="fd-form-title">Customer Feedback Form</h2>
      <form className="form" onSubmit={addFeedback}>
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
          <Link to="/viewFeedback">
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
  );
}

export default feedbackformScreen;