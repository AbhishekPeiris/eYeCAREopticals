import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/AddHearingAids.css';
import { Link } from "react-router-dom";

function AddHearingAidsScreen() {

  // Get the current URL
  const currentUrl = window.location.href;

  // Split the URL by '/'
  const urlSegments = currentUrl.split('/');

  // Get the last segment
  const lastSegment = urlSegments[urlSegments.length - 1];

  console.log('Last segment:', lastSegment);



  const [model, setModel] = useState();
  const [gender, setGender] = useState();
  const [material, setMaterial] = useState();
  const [discription, setDiscription] = useState();

  const [size1, setSize1] = useState();
  const [size2, setSize2] = useState();        
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [imageurlcolor1, setImageurlcolor1] = useState();
  const [imageurlcolor2, setImageurlcolor2] = useState();


  async function AddHearingAidsScreen(e){

    e.preventDefault();

    

    const newRepairment = {

      model : model,
      gender : gender,
      material : material,
      discription : discription,
      size1 : size1,
      size2 : size2,
      price : price,
      rating : rating,
      imageurlcolor1 : imageurlcolor1,
      imageurlcolor2 : imageurlcolor2,
    }
    try {
      const response = await axios.post(`http://localhost:5000/api/deafaidsadmin/adddeafaids`, newRepairment);
      console.log(response.data);
      Swal.fire('Thank you!', "Add Details Successfully", "success").then(result => {

        window.location.href = '/viewdeafaidsdetails';

    });

    setModel('');
    setGender('');
    setMaterial('');
    setDiscription('');
    setSize1('');
    setSize2('');
    setPrice('');
    setRating('');
    setImageurlcolor1('');
    setImageurlcolor2('');
    
    } catch (error) {
      console.log(error);
      Swal.fire('Error', "Add Details Unsuccessfully", "error");
    }
  }



  return (
    
    <div style={{marginLeft:'350px',marginTop:'100px'}}>


      <div style={{ textAlign: 'center' }}>
  <h4 style={{ margin: '10px' }}><strong>Add Hearing Aids Details</strong></h4>
</div>
<br/>

      <Link to='/vihanga' >
      <button type="submit" className="submit112">
              + View Deaf Aids
            </button>
            </Link>

      <form onSubmit={AddHearingAidsScreen}>
      <div className="row">

    

      <div className="col-md-3" >
          <div className="form mb-5 mt-5 ">
            

            <div className="input-container">
              <lable>Model</lable><br/>
              <input type="text" placeholder="Enter Model " value={model}  required
                onChange={(e) => {
                  setModel(e.target.value);
                }
              }
              />
            </div>

            <div className="input-container">
              <label>Gender</label><br/>
              <input type="text" placeholder="Enter Gender" value={gender} required
                onChange={(e) => {
                  setGender(e.target.value);
                }
              }
              />
            </div>

            

            <div className="input-container">
              <label>Matarials</label><br/>
              <input type="text" placeholder="Enter Matarials" value={material} required
                onChange={(e) => {
                  setMaterial(e.target.value);
                }
              }
              />
            </div>

            
            <div className="input-container">
              <lable>Description</lable><br/>
              <input type="text" placeholder="Enter Discription" value={discription} required
                onChange={(e) => {
                  setDiscription(e.target.value);
                }
              }
              />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="form mb-5 mt-5">
              

            
            <div className="input-container">
              <lable>Size 01</lable><br/>
              <input type="number" placeholder="Enter Size 1" value={size1} required
                onChange={(e) => {
                  setSize1(e.target.value);
                }
              }
              />
            </div>

            <div className="input-container">
              <label>Size 02</label><br/>
              <input type="number" placeholder="Enter Size 2" value={size2} required
                onChange={(e) => {
                  setSize2(e.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <lable>Price</lable><br/>
              <input type="text" placeholder="Enter Price" value={price} required
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            <div className="input-container">
              <label>Rating</label><br/>
              <input type="number" placeholder="Enter Rating" value={rating} required
                onChange={(e) => {
                  setRating(e.target.value);
                }
              }

              />
            </div>
          </div>
        </div>

            <div className="col-md-3">
            <div className="form mb-5 mt-5">

            <div className="input-container">
              <label>Image URL Colour 01</label>
              <input type="text" placeholder="Enter Imageurlcolor 1" value={imageurlcolor1} required
                onChange={(e) => {
                  setImageurlcolor1(e.target.value);
                }
              }
              />
            </div>

            <div className="input-container">
              <label>Image URL Colour 02 </label>
              <input type="text" placeholder="Enter Imageurlcolor 2" value={imageurlcolor2} required
                onChange={(e) => {
                  setImageurlcolor2(e.target.value);
                }
             }
              />
              </div>

              <button type="submit" className="submit">Submit</button>
            <button className="submit">Cancel</button>
          </div>
        </div>

        

            
          </div>
        
      </form>
    </div>
  );
}

export default AddHearingAidsScreen;
