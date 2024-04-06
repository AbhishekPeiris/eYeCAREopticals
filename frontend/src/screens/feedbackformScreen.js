import React, { useState } from "react";
import "../styles/feedbackformScreen.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";

function FeedbackFormScreen() {
  

 

  return (
    <div className="fd-container">
      <br />
      <br />
      <br />
      <h2 className="fd-form-title">Customer Feedback Form</h2>
      <form>
        <div className="fd-form-group">
          <label htmlFor="fd-exampleInputName">Name</label>
          <input
            type="text"
            className="fd-form-control"
            id="exampleInputName"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="fd-form-group">
          <label htmlFor="fd-exampleInputContactNumber">Contact Number</label>
          <input
            type="tel"
            className="fd-form-control"
            id="exampleInputContactNumber"
            placeholder="Enter Your Contact Number"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="fd-form-group">
          <label htmlFor="exampleInputAddress">Address</label>
          <input
            type="text"
            className="fd-form-control"
            id="exampleInputAddress"
            placeholder="Enter Your Address"
            required
          />
        </div>
        <div className="fd-form-group">
          <label htmlFor="exampleInputEmail">Email</label>
          <input
            type="email"
            className="fd-form-control"
            id="exampleInputEmail"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="fd-form-group">
          <label htmlFor="fd-exampleInputRating">
            How would you rate our service?
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
          <label>Rating: {rating} stars</label>
        </div>
        <div className="fd-form-group">
          <label htmlFor="exampleInputComment">Additional Comment</label>
          <textarea
            className="fd-form-control"
            id="exampleInputComment"
            placeholder="Enter your Additional Comment"
            required
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
            I consent to the storage and handling of my data by this website.
          </label>
        </div>
        <Link to="/viewFeedback">
          <button type="button" className="btn btn-primary">
            View Feedback
          </button>
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default FeedbackFormScreen;
