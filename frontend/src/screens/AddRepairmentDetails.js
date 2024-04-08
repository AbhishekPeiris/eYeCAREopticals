import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/AddRepairmentDetails.css";

function AddRepairmentDetails() {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();

  const [model, setModel] = useState();
  const [dateofDropoff, setDateofDropoff] = useState();
  const [preferredPickupDate, setPreferredPickupDate] = useState();
  const [discription, setDiscription] = useState();
  const [price, setPrice] = useState();

  async function addRepairmentDetails(e) {
    e.preventDefault();

    const newRepairment = {
      cusname: name,
      contact: contact,
      address: address,
      email: email,
      model: model,
      DateofDropoff: dateofDropoff,
      PreferredPickupDate: preferredPickupDate,
      DescriptionofIssue: discription,
      price: price,
    };
    try {
      const response = await axios.post(
        `http://localhost:5000/api/repairment/addrepairment`,
        newRepairment
      );
      console.log(response.data);
      Swal.fire("Thank you!", "Add Details Successfully", "success").then(
        (result) => {
          window.location.href = "/viewrepairmentdetails";
        }
      );

      setName("");
      setContact("");
      setAddress("");
      setEmail("");
      setModel("");
      setDateofDropoff("");
      setPreferredPickupDate("");
      setDiscription("");
      setPrice("");
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Add Details Unsuccessfully", "error");
    }
  }

  return (
    <div style={{ marginLeft: "300px" }}>
      <form onSubmit={addRepairmentDetails}>
        <div className="row ">
          <div className="col-md-3">
            <div class="form mb-5 mt-5">
              <div className="addrfulltable">
                <h4 className="addrhedder">
                  <strong>Customer Details</strong>
                </h4>
                <br />

                <div class="input-container">
                  <lable>Name</lable>
                  <input
                    type="text"
                    placeholder="Enter Name "
                    value={name}
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div class="input-container">
                  <label>Contact Number</label>
                  <input
                    type="tel"
                    placeholder="Enter Contact Number"
                    value={contact}
                    required
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>

                <div class="input-container">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    required
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>

                <div class="input-container">
                  <lable>Email</lable>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="form mb-5 mt-5">
            <div className="addrfulltable11">
              <h4 className="addrhedder">
                <strong>Accessories Details</strong>
              </h4>
              <br />
              <div class="input-container">
                <lable>Model No</lable>
                <input
                  type="text"
                  placeholder="Enter Model No"
                  value={model}
                  required
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                />
              </div>

              <div class="input-container">
                <label>Date of Dropoff</label>
                <input
                  type="date"
                  placeholder="Enter Date of Dropoff"
                  value={dateofDropoff}
                  required
                  onChange={(e) => {
                    setDateofDropoff(e.target.value);
                  }}
                />
              </div>

              <div class="input-container">
                <lable>Preferred Pickup Date</lable>
                <input
                  type="date"
                  placeholder="Enter Preferred Pickup Date"
                  value={preferredPickupDate}
                  required
                  onChange={(e) => {
                    setPreferredPickupDate(e.target.value);
                  }}
                />
              </div>

              <div class="input-container">
                <label>Description of Issue</label>
                <input
                  type="text"
                  placeholder="Enter Description of Issue"
                  value={discription}
                  required
                  onChange={(e) => {
                    setDiscription(e.target.value);
                  }}
                />
              </div>

              <div class="input-container">
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Enter Price"
                  value={price}
                  required
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>

              <button type="submit" class="submitaddbtn1">
                Submit
              </button>
              <button class="submitaddbtn2">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddRepairmentDetails;
