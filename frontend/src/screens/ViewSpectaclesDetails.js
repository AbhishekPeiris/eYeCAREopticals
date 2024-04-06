import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from 'react-rating-stars-component';
import "../styles/SpecsDetails.css";

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

  return (
    <div>
      <div className="row">
        <div className="col-md-1 border mdlno">
          <strong><p>Model No.</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Type</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Brand</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Gender</p></strong>
        </div>
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.model}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.type}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.brand}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.gender}</p>
          </div>
        </div>
      ))}

      <br /><br />

      <div className="row">
        <div className="col-md-1 border">
          <strong><p>Frame shape</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Frame material</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Frame type</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Hinge type</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Description</p></strong>
        </div>
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.frameshape}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.framematerial}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.frametype}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.hingetype}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.description}</p>
          </div>
        </div>
      ))}

      <br /><br />

      <div className="row">
        <div className="col-md-1 border">
          <strong><p>Frame size 1</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Frame size 2</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Frame size 3</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Price</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Rating</p></strong>
        </div>
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.framesize1}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.framesize2}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.framesize3}</p>
          </div>
          <div className="col-md-1 border">
            <p style={{ fontSize: "11px" }}>{spectacle.price}</p>
          </div>
          <div className="col-md-1 border">
            

            <Rating
                                            count={5}
                                            value={spectacle.rating}
                                            size={24}
                                            edit={false}
                                        />
          </div>
        </div>
      ))}

      <br /><br />

      <div className="row">
        <div className="col-md-1 border">
          <strong><p>Image url color 1</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Image url color 2</p></strong>
        </div>
        <div className="col-md-1 border">
          <strong><p>Image url color 3</p></strong>
        </div>
        <div className="col-md-1 border"></div>
      </div>

      {spectacles.map((spectacle) => (
        <div className="row" >
          <div className="col-md-1 border">
            <img src={spectacle.imageurlcolor1[0]} alt="" width={50}/>
            
          </div>
          <div className="col-md-1 border">
            
            <img src={spectacle.imageurlcolor2[0]} alt="" width={50}/>
          </div>
          <div className="col-md-1 border">
            
            <img src={spectacle.imageurlcolor3[0]} alt="" width={50}/>
          </div>
          <div className="col-md-1 border"></div>
        </div>
      ))}
    </div>
  );
}

export default ViewSpectaclesDetails;
