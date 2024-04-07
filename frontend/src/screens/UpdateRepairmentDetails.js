import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../styles/AddRepairmentDetails.css";

function UpdateRepairmentDetails() {

  const { repID } = useParams(); 

  const [cusname, setName] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();

  const [model, setModel] = useState();
  const [DateofDropoff, setDateofDropoff] = useState("");
  const [PreferredPickupDate, setPreferredPickupDate] = useState("");
  const [DescriptionofIssue, setDiscription] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    async function fetchRepDetails() {
      try {
        const response = await axios.post(`http://localhost:5000/api/repairment/${repID}`);
        const repData = response.data.repairment;
  
        // Set state after fetching user data
        setName(repData.cusname);
        setContact(repData.contact);
        setAddress(repData.address);
        setEmail(repData.email);
        setModel(repData.model);
        setDateofDropoff(repData.dateofdropoff);
        setPreferredPickupDate(repData.preferredPickupDate);
        setDiscription(repData.discription);
        setPrice(repData.price);
  
      } catch (error) {
        console.log(error);
        // Handle error fetching user data
      }
    }
  
    // Call the function to fetch user details when the component mounts
    fetchRepDetails();
  
  }, [repID]); // Include userID in the dependency array to re-run effect when userID changes

  async function UpdateRepairmentDetails(e) {
    e.preventDefault();

 

        const updateRepDetails = {
            _id: repID,
            cusname : cusname,
      contact : contact,
      address : address,
      email : email,
      model : model,
      DateofDropoff : DateofDropoff,
      PreferredPickupDate : PreferredPickupDate,
      DescriptionofIssue : DescriptionofIssue,
      price : price,
        }

        try {
            
            
            const data = (await axios.put(`http://localhost:5000/api/repairment/editrepairment/${repID}`, updateRepDetails)).data;
        
            Swal.fire('Updated', "Your profile is updated successfully", "success").then(result => {

                 window.location.href = '/viewrepairmentdetails';

            });
        

        } catch (error) {
            
            console.log(error);
            Swal.fire('Error', "Error with updating user", "error");
          

        }
    }
  
  return (
    <div style={{marginLeft:'300px'}}>
      <form onSubmit={UpdateRepairmentDetails}>
      <div className="row">
      <div className="col-md-3">
          <div class="form mb-5 mt-5">
          <div className="addrfulltable">
            <h4 className="addrhedder"><strong>Customer Details</strong></h4><br/>

            <div class="input-container">
              <lable>Name</lable>
              <input type="text" placeholder="Enter Name " value={cusname} required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                
              />
            </div>

            <div class="input-container">
              <label>Contact Number</label>
              <input type="tel" placeholder="Enter Contact Number" value={contact} required
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>

            

            <div class="input-container">
              <label>Address</label>
              <input type="text" placeholder="Enter Address" value={address} required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            
            <div class="input-container">
              <lable>Email</lable>
              <input type="email" placeholder="Enter email" value={email} required
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
           
          <h4 className="addrhedder"><strong>Accessories Details</strong></h4><br />
            <div class="input-container">
              <lable>Model No</lable>
              <input type="text" placeholder="Enter Model No" value={model} required
                 onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Date of Dropoff</label>
              <input type="date" placeholder="Enter Date of Dropoff" value={DateofDropoff} required
                onChange={(e) => {
                  setDateofDropoff(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <lable>Preferred Pickup Date</lable>
              <input type="date" placeholder="Enter Preferred Pickup Date" value={PreferredPickupDate} required
                onChange={(e) => {
                  setPreferredPickupDate(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Description of Issue</label>
              <input type="text" placeholder="Enter Description of Issue" value={DescriptionofIssue} required
                onChange={(e) => {
                  setDiscription(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Price</label>
              <input type="number" placeholder="Enter Price" value={price} required
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            <button type="submit" class="submitaddbtn1">Update</button>
            <button class="submitaddbtn2">Cancel</button>
          </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default UpdateRepairmentDetails



