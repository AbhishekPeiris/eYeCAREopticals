import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from 'react-rating-stars-component';

function ViewDeafAidsDetails() {

    const [deafaids, setDeafAids] = useState([]);

    useEffect(() => {
        async function ViewDeafAidsDetails() {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/deafaidsadmin/"
            );
            setDeafAids(response.data.deafaids);
          } catch (error) {
            console.log(error);
          }
        }
        ViewDeafAidsDetails();
      }, []);
    
  return (
    <div>
      <div className="row">
        <div className="col-md-1 border ">
          <strong>
            <p>Model No.</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Gender</p>
          </strong>
        </div>

        <div className="col-md-1 border ">
          <strong>
            <p>Material</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Discription</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>size 1</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>size 2</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Price</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Rating</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Image url color 1</p>
          </strong>
        </div>
        <div className="col-md-1 border ">
          <strong>
            <p>Image url color 2</p>
          </strong>
        </div>
        <div className="col-md-1 border "></div>
      </div>

      {deafaids.map((deafaids) => (
        <div className="row">
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{deafaids.model}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{deafaids.gender}</p>
          </div>

          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{deafaids.material}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{deafaids.discription}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{deafaids.size1}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{deafaids.size2}</p>
          </div>
          <div className="col-md-1 border ">
            <p style={{fontSize:"11px"}}>{deafaids.price}</p>
          </div>
          <div className="col-md-1 border ">
          <Rating
                                            count={5}
                                            value={deafaids.rating}
                                            size={24}
                                            edit={false}
                                        />
          </div>
          <div className="col-md-1 border ">
            
            <img src={deafaids.imageurlcolor1[0]} alt="" width={50} />
          </div>
          <div className="col-md-1 border ">
            
            <img src={deafaids.imageurlcolor2[0]} alt="" width={50} />
          </div>
          <div className="col-md-1 border "></div>
        </div>
      ))}
    </div>
  )
}

export default ViewDeafAidsDetails
