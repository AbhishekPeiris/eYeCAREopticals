import React, { useState, useEffect } from "react";
import "../styles/AddRepairmentDetails.css";
import { Link } from "react-router-dom";

import axios from "axios";
import Swal from 'sweetalert2';
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
  async function deleterepDetails(id){

    try {
        
        
        const data = (await axios.delete(`http://localhost:5000/api/repairment/deleterepairment/${id}`)).data;
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
    <div className="fulltable">
      <div className="row">
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Name</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Email</p>
          </strong>
        </div>

        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Address</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Contact</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Model No.</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Date of Dropoff</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Preferred Pickup Date</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Discription of Issue</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
          <strong>
            <p>Price</p>
          </strong>
        </div>
        <div className="col-md-1 border repaireviewtable_1_col_1">
        <strong>
            <p>Action</p>
          </strong>
        </div>
      </div>

      {repairment.map((repairment) => (
        <div className="detatable">
          <div className="row">
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.cusname}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.email}</p>
          </div>

          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.address}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.contact}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.model}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.DateofDropoff}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.PreferredPickupDate}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.DescriptionofIssue}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.price}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
          <Link to = {`/updaterepairmentdetails/${repairment._id}`}><button>Update</button></Link>
          <button onClick={(e) => deleterepDetails(repairment._id)}>Delete</button>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default ViewRepairmentDetails;
