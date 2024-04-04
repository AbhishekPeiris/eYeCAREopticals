import React from 'react'

function UpdateRepairmentDetails() {
  return (
    <div>
      <form onSubmit={UpdateRepairmentDetails}>
      <div className="row">
      <div className="col-md-3">
          <div class="form mb-5 mt-5">
            <h4><strong>Customer Details</strong></h4><br/>

            <div class="input-container">
              <lable>Name</lable>
              <input type="text" placeholder="Enter Name " value="" required
                
                
              />
            </div>

            <div class="input-container">
              <label>Contact Number</label>
              <input type="tel" placeholder="Enter Contact Number" value="" required
                
              />
            </div>

            

            <div class="input-container">
              <label>Address</label>
              <input type="text" placeholder="Enter Address" value="" required
                
              />
            </div>

            
            <div class="input-container">
              <lable>Email</lable>
              <input type="email" placeholder="Enter email" value="" required
                
              />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div class="form mb-5 mt-5">
           
          <h4><strong>Accessories Details</strong></h4><br />
            <div class="input-container">
              <lable>Model No</lable>
              <input type="text" placeholder="Enter Model No" value="" required
                
              />
            </div>

            <div class="input-container">
              <label>Date of Dropoff</label>
              <input type="date" placeholder="Enter Date of Dropoff" value="" required
                
              />
            </div>

            <div class="input-container">
              <lable>Preferred Pickup Date</lable>
              <input type="date" placeholder="Enter Preferred Pickup Date" value="" required
                
              />
            </div>

            <div class="input-container">
              <label>Description of Issue</label>
              <input type="text" placeholder="Enter Description of Issue" value="" required
                
              />
            </div>

            <div class="input-container">
              <label>Price</label>
              <input type="number" placeholder="Enter Price" value="" required
                
              />
            </div>

            <button type="submit" class="submit">Update</button>
            <button class="submit">Cancel</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default UpdateRepairmentDetails