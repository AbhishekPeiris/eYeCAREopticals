import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from '../components/Sidebar';
import "../styles/AdminDashboard.css";


function AddCustomerDetails() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const [errorfirstname, setErrorFirstname] = useState(false);
  const [errorlastname, setErrorLastname] = useState(false);
  const [errordob, setErrorDob] = useState(false);
  const [erroraddress, setErrorAddress] = useState(false);
  const [errorgender, setErrorGender] = useState(false);
  const [errorcontact, setErrorContact] = useState(false);
  const [erroremail, setErrorEmail] = useState(false);
  const [errorpassword, setErrorPassword] = useState(false);
  const [errorrole, setErrorRole] = useState(false);

  function resetErrors() {

    setErrorFirstname(false);
    setErrorLastname(false);
    setErrorDob(false);
    setErrorAddress(false);
    setErrorGender(false);
    setErrorContact(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorRole(false);

  }
  function ValidateForm() {
    //reset previous error messages

    resetErrors();
    if (firstname.trim() === "") {
      setErrorFirstname(false);
    }
    if (lastname.trim() === "") {
      setErrorLastname(false);
    }
    if (dob === "") {
      setErrorDob(false);
    }
    if (address.trim() === "") {
      setErrorAddress(false);
    }
    if (gender === "") {
      setErrorGender(false);
    }
    if (contact.trim() === "") {
      setErrorContact(false);
    }
    if (email.trim() === "") {
      setErrorEmail(false);
    }
    if (password === "") {
      setErrorPassword(false);
    }
    if (role === "") {
      setErrorRole(false);
    }
  }

  function isThereAnyValidationError() {
    return (
      errorfirstname ||
      errorlastname ||
      errordob ||
      erroraddress ||
      errorgender ||
      errorcontact ||
      erroremail ||
      errorpassword ||
      errorrole
    );
  }


  async function UserRegister(e) {
    e.preventDefault();
    ValidateForm();

    if (!isThereAnyValidationError()) {
      const newUser = {
        firstname: firstname,
        lastname: lastname,
        dob: dob,
        address: address,
        gender: gender,
        contact: contact,
        email: email,
        password: password,
        role: role,
      };

      try {
        const data = (
          await axios.post("http://localhost:5000/api/user/register", newUser)
        ).data;
        console.log(data);
        Swal.fire("Thank you!", "Registration Successfully", "success").then(
          (result) => {
            window.location.href = "/viewcustomerdetails";
          }
        );

        setFirstname("");
        setLastname("");
        setDob("");
        setAddress("");
        setGender("");
        setContact("");
        setEmail("");
        setPassword("");
        setRole("user");
      } catch (error) {
        console.log(error);
        Swal.fire("Error", "Registration Unsuccessfully", "error");
      }
    }
  }

  return (
    <div>

      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-3'>
          <form class="cd-form-group" onSubmit={UserRegister}>

            <h4><strong>Customer Registration Form</strong></h4><br />
            <div className="mb-3">
              <label className='cd-control-label'>First name</label><br />
              <input type="text" placeholder="Enter first name " value={firstname} required className='cd-form-control'
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label className='cd-control-label'>Last name </label><br />
              <input type="text" placeholder="Enter last name" value={lastname} required className='cd-form-control'
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label className='cd-control-label'>Date of Birth</label><br />
              <input type="date" placeholder="Enter Date of Birth" value={dob} required className='cd-form-control'
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className='cd-control-label'>Address</label><br />
              <input type="text" placeholder="Enter address" value={address} required className='cd-form-control'
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className='cd-control-label'>Gender</label>
              <br />
              <select
                value={gender}
                required
                className='cd-form-control'
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label className='cd-control-label'>Contact</label><br />
              <input type="tel" placeholder="Enter contact" value={contact} required className='cd-form-control' maxLength={10} minLength={10}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className='cd-control-label'>Email</label><br />
              <input type="email" placeholder="Enter email" value={email} required className='cd-form-control'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className='cd-control-label'>Password</label><br />
              <input type="password" placeholder="Enter password" value={password} required className='cd-form-control'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className='cd-control-label'>Role</label>
              <br />
              <select
                value={role}
                required
                className='cd-form-control'
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <button type="submit" className="submit">Submit</button>
          
          </form>

        </div>

      </div>


    </div>
  );
}

export default AddCustomerDetails;
