import React, { useState, useEffect } from "react";
import "../styles/AddRepairmentDetails.css";
import { Link } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
function ViewRepairmentDetails() {
  const [repairment, setRepairment] = useState([]);

  useEffect(() => {
    async function ViewRepairmentDetails() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/repairment/"
        );
        setRepairment(response.data.repairment);
      } catch (error) {
        console.log(error);
      }
    }
    ViewRepairmentDetails();
  }, []);

  // const handleUpdate = (id) => {
  //   // Implement update logic
  //   console.log("Update clicked for id:", id);
  // };

  // const handleDelete = (id) => {
  //   // Implement delete logic
  //   console.log("Delete clicked for id:", id);
  // };
  async function deleterepDetails(id) {
    try {
      const data = (
        await axios.delete(
          `http://localhost:5000/api/repairment/deleterepairment/${id}`
        )
      ).data;
      console.log(data);
      Swal.fire("Successful", "You account is deleted", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Error with deleting user", "error");
    }
  }

  return (

    <div className="thathfulltable">
      <Link to= '/addrepairmentdetails'>
      <button className="thathiaddrepbtn"  style={{ width: "200px" }}>  + Add repairment Details</button></Link>   
      <div className="row">
        
        <div className="col-md-1 border thathitd1" style={{ width: "200px" }}>
          <strong>
            <p>Name</p>
          </strong>
        </div>
        <div className="col-md-1 thathitd2" style={{ width: "300px" }}>
          <strong>
            <p>Email</p>
          </strong>
        </div>

        <div className="col-md-1 border thathitd3" style={{ width: "200px" }}>
          <strong>
            <p>Address</p>
          </strong>
        </div>
        <div className="col-md-1 border thathitd4" style={{ width: "110px" }}>
          <strong>
            <p>Contact</p>
          </strong>
        </div>
        <div className="col-md-1 border thathitd5" style={{ width: "110px" }}>
          <strong>
            <p>Model No</p>
          </strong>
        </div>

        {repairment.map((repairment) => (
          <div className="detatable">
            <div className="row">
              <div className="col-md-1 border thathitd1d" style={{ width: "200px" }}>
                <p>{repairment.cusname}</p>
              </div>
              <div
                className="col-md-1 border thathitd2d"
                style={{ width: "300px" }}
              >
                <p>{repairment.email}</p>
              </div>

              <div className="col-md-1 border thathitd3d" style={{ width: "200px" }}>
                
                <p>{repairment.address}</p>
              </div>
              <div className="col-md-1 border thathitd4d" style={{ width: "110px" }}>
                <p>{repairment.contact}</p>
              </div>
              <div
                className="col-md-1 border thathitd5d" style={{ width: "110px" }}>
                <p>{repairment.model}</p>
              </div>
            </div>
          </div>
        ))}

        <br/>
        <br/>
        <br/>

        <div className="col-md-1 border thathitd6" style={{ width: "180px" }}>
          <strong>
            <p>Date of Dropoff</p>
          </strong>
        </div>
        <div className="col-md-1 border thathitd7"  style={{ width: "200px" }}>
          <strong>
            <p>Preferred Pickup Date</p>
          </strong>
        </div>
        <div className="col-md-1 border thathitd8"  style={{ width: "180px" }}>
          <strong>
            <p>Discription of Issue</p>
          </strong>
        </div>
        <div className="col-md-1 border thathitd9"  style={{ width: "180px" }}>
          <strong>
            <p>Price</p>
          </strong>
        </div>
        <div className="col-md-2 border thathitd10">
          <strong>
            <p>Action</p>
          </strong>
        </div>
      </div>

      {repairment.map((repairment) => (
        <div className="detatable">
          <div className="row">
            <div className="col-md-1 border thathitd6d"  style={{ width: "180px" }}>
              <p>{repairment.DateofDropoff}</p>
            </div>
            <div className="col-md-1 border thathitd7d"  style={{ width: "200px" }}>
              <p>{repairment.PreferredPickupDate}</p>
            </div>
            <div className="col-md-1 border thathitd9d"  style={{ width: "180px" }}>
              <p>{repairment.DescriptionofIssue}</p>
            </div>
            <div className="col-md-1 border thathitd10d"  style={{ width: "180px" }}>
              <p>{repairment.price}</p>
            </div>
            <div className="col-md-2 border thathitd11d">
              <Link to={`/updaterepairmentdetails/${repairment._id}`}>
                <button className="thathiupdatebtnn">Update</button>
              </Link>
              <button
                onClick={(e) => deleterepDetails(repairment._id)}
                className="thathideletebtnn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewRepairmentDetails;
