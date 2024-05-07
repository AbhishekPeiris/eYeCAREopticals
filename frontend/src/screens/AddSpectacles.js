import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from '../components/Sidebar';
import "../styles/AdminDashboard.css";
import '../styles/newStyles.css';
import { Link } from "react-router-dom";




function AddSpectacles() {

  
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
  

  async function AddSpectacles(e){

    e.preventDefault();

    const newRepairment = {

      model : model,
      type : type,
      brand : brand,
      gender : gender,
      frameshape : frameshape,
      framematerial : framematerial,
      frametype : frametype,
      hingetype : hingetype,
      discription : discription,
      framesize1 : framesize1,
      framesize2 : framesize2,
      framesize3 : framesize3,
      price : price,
      rating : rating,
      status : status,
      imageurlcolor1 : imageurlcolor1,
      imageurlcolor2 : imageurlcolor2,
      imageurlcolor3 : imageurlcolor3,

    }

    try {
      const response = await axios.post(`http://localhost:5000/api/eyeglassadmin/addeyeglass`, newRepairment);
      console.log(response.data);
      Swal.fire('Thank you!', "Add Details Successfully", "success").then(result => {

        window.location.href = '/viewspectaclesdetails';

    });

    setmodel('');
    settype('');
    setbrand('');
    setgender('');
    setframeshape('');
    setframematerial('');
    setframetype('');
    sethingetype('');
    setdiscription('');
    setframesize1('');
    setframesize2('');
    setframesize3('');
    setprice('');
    setrating('');
    setstatus('In stock')
    setimageurlcolor1('');
    setimageurlcolor2('');
    setimageurlcolor3('');

    
    } catch (error) {
      console.log(error);
      Swal.fire('Error', "Add Details Unsuccessfully", "error");
    }
  }

  
  
  return (
    <div className='container DashboardContainer'>
      <Sidebar />
      
      
      
      <div>
      <div style={{ textAlign: 'center' }}>
  <h4 style={{ marginTop: '100px' , marginBottom:'0px'}}><strong>Spectacle Details</strong></h4>
  <Link to="/viewspectaclesdetails" style={{ textDecoration: 'none', marginLeft: '20px', display: 'inline-block' }}>
  <button style={{ 
  backgroundColor: 'orange', 
  color: 'white', 
  padding: '10px 20px', 
  borderRadius: '5px', 
  border: 'none', 
  cursor: 'pointer', 
  position: 'absolute', 
  top: '20px', 
  right: '20px', 
  zIndex: '1' /* Ensure the button is above other elements */
}}>View Spectacle Details</button>

          </Link>
    </div>
   

    <form onSubmit={AddSpectacles} className='addspec' style={{ marginLeft: '10px', border: '10px', borderColor: 'black'}}>

      <div className="row">
      <div className="col-md-3">
          <div class="form mb-5 mt-5">
            <div style={{textAlign:'center'}}>

            </div>

            <div class="input-container">
              <lable>Model</lable>
              <input style={{width:"250px"}} type="text" placeholder="Enter model " value={model} required
                onChange={(e) => {
                  setmodel(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Type</label>
              <input style={{width:"250px"}} type="text" placeholder="Enter Type " value={type} required
                onChange={(e) => {
                  settype(e.target.value);
                }}
              />
            </div>

            

            <div class="input-container">
            <label className='cd-control-label'>Brand</label>
              <br />
              <select
                value={brand}
                required
                className='cd-form-control'
                onChange={(e) => setbrand(e.target.value)}
              >
                <option value="Ray-Ban">Ray-Ban</option>
                <option value="Che">Che</option>
                <option value="Chenel">Chenel</option>
                <option value="Tens">Tens</option>
              </select>
            </div>

            
            <div class="input-container">
              <lable>Gender</lable>
              <input style={{width:"250px"}} type="text" placeholder="Enter Gender" value={gender} required
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
              <input style={{width:"250px"}} type="text" placeholder="Enter Frame Shape" value={frameshape} required
                onChange={(e) => {
                  setframeshape(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Frame Material</label>
              <input style={{width:"250px"}} type="text" placeholder="Enter Frame Material" value={framematerial} required
                onChange={(e) => {
                  setframematerial(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <lable>Frame Type</lable>
              <input style={{width:"250px"}} type="text" placeholder="Enter Frame Type" value={frametype} required
                onChange={(e) => {
                  setframetype(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Hinge Type</label>
              <input style={{width:"250px"}} type="text" placeholder="Enter Hinge Type" value={hingetype} required
                onChange={(e) => {
                  sethingetype(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Discription</label>
              <input style={{width:"250px"}} type="text" placeholder="Enter Discription" value={discription} required
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
              <input style={{width:"230px"}} type="text" placeholder="Enter Frame Size 01" value={framesize1} required
                onChange={(e) => {
                  setframesize1(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Frame Size 02</label>
              <input style={{width:"230px"}} type="text" placeholder="Enter Frame Size 02" value={framesize2} required
                onChange={(e) => {
                  setframesize2(e.target.value);
                }}
              />
            </div>

            <div class="input-container">
              <label>Frame Size 03</label>
              <input style={{width:"230px"}} type="text" placeholder="Enter Frame Size 03" value={framesize3} required
                onChange={(e) => {
                  setframesize3(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Price</label>
              <input style={{width:"230px"}} type="text" placeholder="Enter Price" value={price} required
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Rating</label>
              <input style={{width:"230px"}} type="text" placeholder="Enter Rating" value={rating} required
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
              <label>Image URL Colour</label>
              <input style={{width:"20px"}} type="text" placeholder="Enter Image URL Color 01" value={imageurlcolor1} required
                onChange={(e) => {
                  setimageurlcolor1(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Image URL Color  </label>
              <input style={{width:"210px"}} type="text" placeholder="Enter Image URL Color 02" value={imageurlcolor2} required
                onChange={(e) => {
                  setimageurlcolor2(e.target.value);
                }}
              />
            </div>


            <div class="input-container">
              <label>Image URL</label>
              <input style={{width:"210px"}} type="text" placeholder="Enter Image URL Color 03" value={imageurlcolor3} required
                onChange={(e) => {
                  setimageurlcolor3(e.target.value);
                }}
              />
            </div>


          </div>
        </div>
      </div>
      </form>
      
      {/* Submit and Cancel buttons */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
          <button onClick={AddSpectacles} style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Submit</button>
          <button style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Cancel</button>
        </div>
      
      
      </div>
    </div>
  );
}

export default AddSpectacles;


