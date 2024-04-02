import React from "react";
import styles from "../styles/feedbackformScreen.css";

function feedbackformScreen() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="fullform">
        <form>
          <div class="form-group0">
          <p class="form-title">Customer Feedback Form</p>

            <label for="exampleInputName">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
            ></input>
          </div>
          <div class="form-group1">
            <label for="exampleInputcontactnumber">Contact Number</label>
            <input
              type="mobile"
              class="form-control"
              id="exampleInputcontactnumber"
              placeholder="mobile"
            ></input>
          </div>

          <div class="form-group2">
            <label for="exampleInputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your Address"
            ></input>
          </div>

          <div class="form-group3">
            <label for="exampleInputEmail">Email</label>
            <input
              type="Email"
              class="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
            ></input>
          </div>

          <div class="form-group4">
            <label for="exampleInputRating">How would you rate our service?</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputRating"
              placeholder="Rating for your service "
              
            ></input>


          </div>

          <div class="form-group4">
                <label for="exampleInputComment">Additional Comment</label>
          <textarea
              class="Additional"
              id="exampleInputComment"
              placeholder="Enter your Additional Comment"
          ></textarea>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default feedbackformScreen;
