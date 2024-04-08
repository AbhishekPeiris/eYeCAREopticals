import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

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


  async function deleteUser(id){

    try {
        
        
        const data = (await axios.delete(`http://localhost:5000/api/manager/deleteuser/${id}`)).data;
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
        
        <div className="col-md-1 border ">Action</div>
      </div>
      <form>
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
          <div className="col-md-1 border ">
          <Link to = {`/editcustomerdetails/${user._id}`}><button>Update</button></Link>
          <button onClick={(e) => deleteUser(user._id)}>Delete</button>
          </div>
        </div>
      ))}
      </form>
    </div>
  )
}

export default ViewCustomerDetails
