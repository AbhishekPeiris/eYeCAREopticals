import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewCustomerDetails() {

    const [user, setUser] = useState([]);

  useEffect(() => {
    async function ViewCustomerDetails() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manager/getalluser"
        );
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    ViewCustomerDetails();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-1 border ">
          <strong>
            <p>First name</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Last name</p>
          </strong>
        </div>

        <div className="col-md-1 border ">
          <strong>
            <p>Date of Birth</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Address</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Gender</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Contact</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Email</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Password</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Price</p>
          </strong>
        </div>
        <div className="col-md-1 border "></div>
      </div>

      {user.map((user) => (
        <div className="row">
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.firstname}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.lastname}</p>
          </div>

          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.dob}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.address}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.gender}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.contact}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.email}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.password}</p>
          </div>
          <div className="col-md-1 border "></div>
        </div>
      ))}
    </div>
  )
}

export default ViewCustomerDetails
