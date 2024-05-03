import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../styles/CustomerDetails.css";
import { useReactToPrint} from "react-to-print";

function ViewCustomerDetails() {

    const [user, setUser] = useState([]);
    const componentPDF = useRef();

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

const generatePDF = useReactToPrint({
  content: ()=>componentPDF.current,
  documentTitle: "eyeCAREoptical_customerDetails"
});


  return (
    <div className="container" style={{width:"1500px"}}  ref={componentPDF}>
      <button className="reservationpdfbtn" onClick={generatePDF}><i class="fa fa-download" aria-hidden="true"></i><span style={{fontSize:"10px",marginLeft:"10px"}}>Downlad PDF</span></button>
      <div className="row " >
        
        <div className="col-md-1 border viewcustomerDcol">
          <strong>
            <p>First name</p>
          </strong>
        </div>
        <div className="col-md-1 border viewcustomerDcol">
          <strong>
            <p>Last name</p>
          </strong>
        </div>

        <div className="col-md-1 border viewcustomerDcol">
          <strong>
            <p>Date of Birth</p>
          </strong>
        </div>
        <div className="col-md-3 border viewcustomerDcol">
          <strong>
            <p>Address</p>
          </strong>
        </div>
        <div className="col-md-1 border viewcustomerDcol">
          <strong>
            <p>Gender</p>
          </strong>
        </div>
        <div className="col-md-1 border viewcustomerDcol">
          <strong>
            <p>Contact</p>
          </strong>
        </div>
        <div className="col-md-1 border viewcustomerDcol1">
          <strong>
            <p>Email</p>
          </strong>
        </div>
        <div className="col-md-1 border viewcustomerDcol">
          <strong>
            <p>Password</p>
          </strong>
        </div>
        <div className="col-md-1 border viewcustomerDcol">
          <strong>
            <p>Role</p>
          </strong>
        </div>
        
        <div className="col-md-1 border viewcustomerDcol"><strong>Action</strong></div>
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
          <div className="col-md-3 border ">
            <p style={{fontSize:"11px"}}>{user.address}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.gender}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.contact}</p>
          </div>
          <div className="col-md-1 border viewcustomerDcol11">
            <p style={{fontSize:"11px"}}>{user.email}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.password}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{user.role}</p>
          </div>
          <div className="col-md-1 border  " >
          <Link to = {`/editcustomerdetails/${user._id}`}><button className="snupdatebtn">Update</button></Link>
          <button className="sndeletebtn" onClick={(e) => deleteUser(user._id)}>Delete</button>
          </div>
        </div>
      ))}
      </form>
      
    </div>
  ) 
}

export default ViewCustomerDetails
