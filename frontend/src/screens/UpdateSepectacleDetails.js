import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function UpdateSepectacleDetails() {
  const { specId } = useParams(); 

  const [model, setmodel] = useState();
  const [type, settype] = useState();
  const [brand, setbrand] = useState();
  const [gender, setgender] = useState();

  const [frameshape, setframeshape] = useState();  
  const [framematerial, setframematerial] = useState();
  const [frametype, setframetype] = useState();
  const [hingetype, sethingetype] = useState();

  const [discription, setdiscription] = useState();
  const [framesize1, setframesize1] = useState();
  const [framesize2, setframesize2] = useState();
  const [framesize3, setframesize3] = useState();

  const [price, setprice] = useState();
  const [rating, setrating] = useState();
  const [status, setstatus] = useState();
  const [imageurlcolor1, setimageurlcolor1] = useState();
  const [imageurlcolor2, setimageurlcolor2] = useState();
  const [imageurlcolor3, setimageurlcolor3] = useState();

 

    useEffect(() => {
        async function fetchSpectacleDetails() {
          try {
            const response = await axios.post(`http://localhost:5000/api/eyeglassadmin/geteyeglass/${specId}`);
            console.log(response.data.eyeglass);
            const userData = response.data.eyeglass;
      
            // Set state after fetching user data

            setmodel(userData.model);
            settype(userData.type);
            setbrand(userData.brand);
            setgender(userData.gender);
            setframeshape(userData.frameshape);
            setframematerial(userData.framematerial);
            setframetype(userData.frametype);
            sethingetype(userData.hingetype);
            setdiscription(userData.discription);
            setframesize1(userData.framesize1);
            setframesize2(userData.framesize2);
            setframesize3(userData.framesize3);
            setprice(userData.price);
            setrating(userData.rating);
            setstatus(userData.status);
            setimageurlcolor1(userData.imageurlcolor1);
            setimageurlcolor2(userData.imageurlcolor2);
            setimageurlcolor3(userData.imageurlcolor3);

            

      
          } catch (error) {
            console.log(error);
            // Handle error fetching user data
          }
        }
      
        // Call the function to fetch spectacle details when the component mounts
        fetchSpectacleDetails();
      
      }, [specId]); // Include ObjectId in the dependency array to re-run effect when ObjectId changes
      


  async function EditSpectacle(e) {
    e.preventDefault();

 

        const updatespecs = {
            _id: specId,
            model,
            type,
            brand,
            gender,
            frameshape,
            framematerial,
            frametype,
            hingetype,
            discription,
            framesize1,
            framesize2,
            framesize3,
            price,
            rating,
            status,
            imageurlcolor1,
            imageurlcolor2,
            imageurlcolor3

        }

        try {
            
            
            const data = (await axios.put(`http://localhost:5000/api/eyeglassadmin/editeyeglass/${specId}`, updatespecs)).data;
        
            Swal.fire('Updated', "Record Updated successfully", "success").then(result => {

                 window.location.href = '/ViewSpectaclesDetails';

            });
        

        } catch (error) {
            
            console.log(error);
            Swal.fire('Error', "Error WHile Updating", "error");
          

        }
    }
  
  return (
    <div>
      <form onSubmit={EditSpectacle} className='addsec'style={{marginLeft:'100px',border:'10px',borderColor:'black'}}>
      <div className="row">
      <div className="col-md-3">
          <div class="form mb-5 mt-5">
            <div style={{textAlign:'center'}}>
            <h4 ><strong >Spectacle Details</strong></h4><br/> 
            </div>

            <div class="input-container">
              <lable>Model</lable>
              <input type="text" placeholder="Enter model " value={model} required
                onChange={(e) => {
                  setmodel(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Type</label>
              <input type="text" placeholder="Enter Type " value={type} required
                onChange={(e) => {
                  settype(e.target.value);
                }}
              />
            </div>

            

            <div class="input-container">
              <label>Brand</label>
              <input type="text" placeholder="Enter Brand" value={brand} required
                onChange={(e) => {
                  setbrand(e.target.value);
                }}
              />
            </div>

            
            <div class="input-container">
              <lable>Gender</lable>
              <input type="text" placeholder="Enter Gender" value={gender} required
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div class="form mb-5 mt-5">
           
          {/* <h4><strong>Accessories Details</strong></h4><br /> */}
            <div class="input-container">
              <lable>Frame Shape</lable>
              <input type="text" placeholder="Enter Frame Shape" value={frameshape} required
                onChange={(e) => {
                  setframeshape(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Frame Material</label>
              <input type="text" placeholder="Enter Frame Material" value={framematerial} required
                onChange={(e) => {
                  setframematerial(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <lable>Frame Type</lable>
              <input type="text" placeholder="Enter Frame Type" value={frametype} required
                onChange={(e) => {
                  setframetype(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Hinge Type</label>
              <input type="text" placeholder="Enter Hinge Type" value={hingetype} required
                onChange={(e) => {
                  sethingetype(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Discription</label>
              <input type="text" placeholder="Enter Discription" value={discription} required
                onChange={(e) => {
                  setdiscription(e.target.value);
                }}
              />
            </div>

            </div>
            </div>

            <div className="col-md-3">
          <div class="form mb-5 mt-5">

            <div class="input-container">
              <label>Frame Size 01</label>
              <input type="text" placeholder="Enter Frame Size 01" value={framesize1} required
                onChange={(e) => {
                  setframesize1(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Frame Size 02</label>
              <input type="text" placeholder="Enter Frame Size 02" value={framesize2} required
                onChange={(e) => {
                  setframesize2(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Frame Size 03</label>
              <input type="text" placeholder="Enter Frame Size 03" value={framesize2} required
                onChange={(e) => {
                  setframesize3(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Price</label>
              <input type="text" placeholder="Enter Price" value={price} required
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Rating</label>
              <input type="text" placeholder="Enter Rating" value={rating} required
                onChange={(e) => {
                  setrating(e.target.value);
                }}
              />
            </div>

            <div className="input-container">
        <label>Status</label>
            <br/>
          <select
              value={status}
              required
              onChange={(e) => setstatus(e.target.value)}
            >
              <option value="In stock">In stock</option>
              <option value="Out of stock">Out of stock</option>
            </select>
        </div>

            </div>
            </div>

            <div className="col-md-3">
            <div class="form mb-5 mt-5">
            <div class="input-container">
              <label>Image URL Color 02</label>
              <input type="text" placeholder="Enter Image URL Color 01" value={imageurlcolor1} required
                onChange={(e) => {
                  setimageurlcolor1(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Image URL Color 02</label>
              <input type="text" placeholder="Enter Image URL Color 02" value={imageurlcolor2} required
                onChange={(e) => {
                  setimageurlcolor2(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Image URL Color 03</label>
              <input type="text" placeholder="Enter Image URL Color 03" value={imageurlcolor3} required
                onChange={(e) => {
                  setimageurlcolor3(e.target.value);
                }}
              />
            </div>


            <button type="submit" class="submit">Submit</button>
            <Link to ='/viewspectaclesdetails'><button class="submit">Cancel</button></Link>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default UpdateSepectacleDetails;
