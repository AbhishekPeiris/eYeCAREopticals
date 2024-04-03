import React from 'react'

function AddHearingAidsScreen() {
  return (
<div>
      <br/><br/><br/><br/>
    <div className="content">
    <form class="form mb-5 mt-5">
       <p class="form-title">Add Hearing Aids</p>

        <div class="input-container">
          <lable>Model</lable>
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
            <lable>Password</lable>
            <input type="password" placeholder="Enter Password"/>
          </div>

          <div class ="input-container">
            <lable>Contact Number</lable>
            <input type ="mobile" placeholder="Enter Contact Number"/>
          </div>


         <button type="submit" class="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
   </form>
   </div>
    </div>
  )
}

export default AddHearingAidsScreen
