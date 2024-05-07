import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from 'react-rating-stars-component';
import { Link } from "react-router-dom";
import "../styles/ViewDeafAidsDetails.css";

import Swal from 'sweetalert2';
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

      function deletedeafaids(){
        
      }

      
  async function deletedeafaids(id){

    try {
        
        
        const data = (await axios.delete(`http://localhost:5000/api/deafaidsadmin/deletedeafaids/${id}`)).data;
        console.log(data);
        Swal.fire('record deleted successfully', "You account is deleted", 'success').then(result => {

            window.location.reload();

        });

    } catch (error) {
        
        console.log(error);
        Swal.fire('Error', "Error with deleting user", 'error');
 

    }
}
    
  return (
    <div className="hiraaftersidebar">

      <div className="row">
        <div className="col-md-1 border hirtalehd1">
          <strong>
            <p>Model No.</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd2">
          <strong>
            <p>Gender</p>
          </strong>
        </div>

        <div className="col-md-1 border border hirtalehd3">
          <strong>
            <p>Material</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd4">
          <strong>
            <p>Discription</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd5">
          <strong>
            <p>size 1</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd6">
          <strong>
            <p>size 2</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd7">
          <strong>
            <p>Price</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd8">
          <strong>
            <p>Rating</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd9">
          <strong>
            <p>Image color 1</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd10 ">
          <strong>
            <p>Image color 2</p>
          </strong>
        </div>
        <div className="col-md-1 border border hirtalehd11">Action</div>
      </div>

      {deafaids.map((deafaids) => (
        <div className="row" key={deafaids._id}>
          <div className="col-md-1 border hirtalehd1">
            <p>{deafaids.model}</p>
          </div>
          <div className="col-md-1 border hirtalehd2">
            <p>{deafaids.gender}</p>
          </div>

          <div className="col-md-1 border hirtalehd3">
            <p>{deafaids.material}</p>
          </div>
          <div className="col-md-1 border hirtalehd4">
            <p>{deafaids.discription}</p>
          </div>
          <div className="col-md-1 border hirtalehd5">
            <p>{deafaids.size1}</p>
          </div>
          <div className="col-md-1 border hirtalehd6">
            <p>{deafaids.size2}</p>
          </div>
          <div className="col-md-1 border hirtalehd7">
            <p>{deafaids.price}</p>
          </div>
          <div className="col-md-1 border hirtalehd8">
          <Rating
                                            count={5}
                                            value={deafaids.rating}
                                            size={24}
                                            edit={false}
                                        />
          </div>
          <div className="col-md-1 border hirtalehd9">
            
            <img src={deafaids.imageurlcolor1[0]} alt="" width={50} />
          </div>
          <div className="col-md-1 border hirtalehd10">
            
            <img src={deafaids.imageurlcolor2[0]} alt="" width={50} />
          </div>
          <div className="col-md-1 border hirtalehd11">
          <Link to = {`/updatehearingaidsdetails/${deafaids._id}`}><button className="hiraupdatebtn">Update</button></Link>
          <button onClick={(e) => deletedeafaids (deafaids._id)} className="hiradeletebtn">Delete</button></div>
          
          </div>

      ))}
    </div>
  )
}

export default ViewDeafAidsDetails
