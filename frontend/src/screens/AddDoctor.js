import React from 'react';
import '../styles/AddDoctor.css';

function AddDoctor() {
  return (
    <div>
      <br/><br/><br/><br/>
    <div className="content">
    <form class="form mb-5 mt-5">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password"/>
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
