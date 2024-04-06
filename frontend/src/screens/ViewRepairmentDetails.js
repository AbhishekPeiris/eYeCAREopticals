import React, { useState, useEffect } from "react";
import styles from "../styles/AddRepairmentDetails.css";
import axios from "axios";

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
  return (
    <div>
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
        <div className="row">
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.cusname}</p>
          </div>
          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.email}</p>
          </div>

          <div className="col-md-1 border repaireviewtable_1_col_1">
            <p>{repairment.adress}</p>
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
          <div className="col-md-1 border repaireviewtable_1_col_1"></div>
        </div>
      ))}
    </div>
  );
}

export default ViewRepairmentDetails;
