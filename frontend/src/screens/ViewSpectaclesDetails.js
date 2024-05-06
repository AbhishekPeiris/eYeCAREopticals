import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from 'react-rating-stars-component';
import "../styles/SpecsDetails.css";
import { Link } from "react-router-dom";
import "../styles/ViewSpectaclesDetails.css";
import Swal from 'sweetalert2';

function ViewSpectaclesDetails() {
  const [spectacles, setSpectacles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/eyeglassadmin/"
        );
        setSpectacles(response.data.eyeglass);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function deletespectacles(id){

    try {
        
        
        const data = (await axios.delete(`http://localhost:5000/api/eyeglassadmin/deleteeyeglass/${id}`)).data;
        console.log(data);
        Swal.fire('', "Successfully Deleted", 'success').then(result => {

            window.location.reload();

        });

    } catch (error) {
        
        console.log(error);
        Swal.fire('Error', "Error with deleting user", 'error');
 

    }
  }


  return (
    <div className="samfullafterside">
      <div className="row">
        <div className="col-md-1 border mdlno1">
          <strong><p>Model No.</p></strong>
        </div>
        <div className="col-md-1 mdlno2">
          <strong><p>Type</p></strong>
        </div>
        <div className="col-md-1 mdlno3">
          <strong><p>Brand</p></strong>
        </div>
        <div className="col-md-1 mdlno4">
          <strong><p>Gender</p></strong>
        </div>
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border mdlno1">
            <p>{spectacle.model}</p>
          </div>
          <div className="col-md-1 border mdlno2">
            <p>{spectacle.type}</p>
          </div>
          <div className="col-md-1 border mdlno3">
            <p>{spectacle.brand}</p>
          </div>
          <div className="col-md-1 border mdlno4">
            <p>{spectacle.gender}</p>
          </div>
        </div>
      ))}

      <br /><br />

      <div className="row">
        <div className="col-md-1 border samth">
          <strong><p>Frame shape</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Frame material</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Frame type</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Frame size 1</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Frame size 2</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Frame size 3</p></strong>
        </div>
        
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border samtd">
            <p style={{ fontSize: "11px" }}>{spectacle.frameshape}</p>
          </div>
          <div className="col-md-1 border samtd">
            <p style={{ fontSize: "11px" }}>{spectacle.framematerial}</p>
          </div>
          <div className="col-md-1 border samtd">
            <p style={{ fontSize: "11px" }}>{spectacle.frametype}</p>
          </div>
          <div className="col-md-1 border samtd">
            <p style={{ fontSize: "11px" }}>{spectacle.framesize1}</p>
          </div>
          <div className="col-md-1 border samtd">
            <p style={{ fontSize: "11px" }}>{spectacle.framesize2}</p>
          </div>
          <div className="col-md-1 border samtd">
            <p style={{ fontSize: "11px" }}>{spectacle.framesize3}</p>
          </div>
          
        </div>
      ))}

      <br /><br />

      <div className="row">
      <div className="col-md-1 border samth">
          <strong><p>Hinge type</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Description</p></strong>
        </div>
        
        <div className="col-md-1 border samth">
          <strong><p>Price</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Rating</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Status</p></strong>
        </div>
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border samtd">
            <p>{spectacle.hingetype}</p>
          </div>
          <div className="col-md-1 border samtd">
            <p>{spectacle.description}</p>
          </div>
          
          <div className="col-md-1 border samtd">
            <p>{spectacle.price}</p>
          </div>
          <div className="col-md-1 border samtd">
            

            <Rating
                                            count={5}
                                            value={spectacle.rating}
                                            size={24}
                                            edit={false}
                                        />
          </div>
          <div className="col-md-1 border samtd">
            <p>{spectacle.status}</p>
          </div>
        </div>
      ))}

      <br /><br />

      <div className="row">
        <div className="col-md-1 border samth">
          <strong><p>Image url color 1</p></strong>
        </div>
        <div className="col-md-1 border samth">
          <strong><p>Image url color 2</p></strong>
        </div>
        <div className="col-md-1 border samtd">
          <strong><p>Image url color 3</p></strong>
        </div>
        <div className="col-md-1 border samtdsam">Action</div>
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border samth">
            <img src={spectacle.imageurlcolor1[0]} alt="" width={50} height={40}/>
            
          </div>
          <div className="col-md-1 border samtd">
            
            <img src={spectacle.imageurlcolor2[0]} alt="" width={50} height={40}/>
          </div>
          <div className="col-md-1 border samtd">
            
            <img src={spectacle.imageurlcolor3[0]} alt="" width={50} height={40}/>
          </div>
          <div className="col-md-1 border samtdsam">
            <Link to = {`/updatesepectacledetails/${spectacle._id}`}><button className="samupdatebtn">Update</button></Link>
          <button onClick={(e) => deletespectacles(spectacle._id)} className="samdeletebtn">Delete</button></div>
          
        </div>
      ))}
    </div>
  );
}

export default ViewSpectaclesDetails;
