import React from 'react'

function AddRepairmentDetails() {
  return (
    <div>
        <br/><br/><br/>

        <div className='row'>
          <div className='col-md-3'>
          
    <form class="form mb-5 mt-5">
       <p class="form-title">Customer Details</p>

        <div class="input-container">
          <lable>First Name</lable>
          <input type="text" placeholder="Enter First Name "/>  
        </div>

         <div class="input-container">
           <label>Last Name</label>       
           <input type="text" placeholder="Enter Last Name"/>
         </div>

          <div class="input-container">
            <lable>Email</lable>
            <input type="email" placeholder="Enter email"/>
          </div>

          <div class="input-container">
           <label>Address</label>       
           <input type="text" placeholder="Enter Address"/>
         </div>

         <div class="input-container">
           <label>Contact Number</label>       
           <input type="tel" placeholder="Enter Contact Number"/>
         </div>
        
   </form>
 
            

          </div>
          <div className='col-md-3'>

         
    <form class="form mb-5 mt-5">
       <p class="form-title">Accessories Details</p>

        <div class="input-container">
          <lable>Model No</lable>
          <input type="text" placeholder="Enter Model No"/>  
        </div>

         <div class="input-container">
           <label>Date of Dropoff</label>       
           <input type="date" placeholder="Enter Date of Dropoff"/>
         </div>

          <div class="input-container">
            <lable>Preferred Pickup Date</lable>
            <input type="date" placeholder="Enter Preferred Pickup Date"/>
          </div>

          <div class="input-container">
           <label>Description of Issue</label>       
           <input type="text" placeholder="Enter Description of Issue"/>
         </div>

         <div class="input-container">
           <label>Price</label>       
           <input type="text" placeholder="Enter Price"/>
         </div>
        
   </form>
 

          </div>

        </div>
       

    </div>
  )
}

export default AddRepairmentDetails