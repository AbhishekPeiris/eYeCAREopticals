import React from 'react';
import '../styles/AddDoctor.css';

function AddDoctor() {
  return (
    <div>
      <br/><br/><br/><br/>
    <div className="content">
    <form class="form mb-5 mt-5">
       <p class="form-title">Docters Registration Form</p>
       
       
       <div className='flex-container'>
        <div class="input-container">
          <lable>First  Name</lable>
          <input type="text" placeholder="Enter First Name "/>  
        </div>
        
         <div class="input-container">
           <label>Last Name</label>       
           <input type="text" placeholder="Enter Last Name"/>
         </div>
         </div>


         <div className='flex-container'>
         <div class ="input-container">
            <lable>Contact Number</lable>
            <input type ="mobile" placeholder="Enter Contact Number"/>
          </div>
          

          <div class="input-container">
            <lable>Email</lable>
            <input type="email" placeholder="Enter email"/>
          </div>
          </div>

          <div className='flex-container'>
          <div class="input-container">
            <lable>Password</lable>
            <input type="password" placeholder="Enter Password"/>
          </div>

          <div class="input-container">
            <lable>Experiance</lable>
            <input type="text" placeholder="Enter experiance"/>
          </div>
          </div>
          <div className='flex-container'>
          <div class="input-container">
            <lable>Language</lable>
            <input type="text" placeholder="Enter language"/>
          </div>

          <div class="input-container">
            <lable>Type</lable>
            <input type="text" placeholder="Enter Type"/>
          </div>
          </div>

          <div className='flex-container'>

          <div class="input-container">
            <lable>Department</lable>
            <input type="text" placeholder="Enter department"/>
          </div>

          <div class="input-container">
            <lable>Rating</lable>
            <input type="number" placeholder="Enter Rating"/>
          </div>

          </div>

          <div className='flex-container'>

          <div class="input-container">
            <lable>Doctorfee</lable>
            <input type="number" placeholder="Enter doctorfee"/>
          </div>

          <div class="input-container">
            <lable>Discription</lable>
            <input type="text" placeholder="Enter Discription"/>
          </div>
          </div>

          <div className='flex-container'>

          <div class="input-container">
            <lable>Date</lable>
            <input type="text" placeholder="Enter date"/>
          </div>

          <div class="input-container">
            <lable>Specialty</lable>
            <input type="text" placeholder="Enter Speciality"/>
          </div>
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
  );
}

export default AddDoctor;
