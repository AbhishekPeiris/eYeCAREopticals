import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/CustomerDetails.css";
import Sidebar from "../components/Sidebar";
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

  function resetErrors(){
   
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
    <div className="DashboardContainer bg-sidebar">
      <Sidebar />
    <form onSubmit={UserRegister} className="cd-form-group">
      
      <h2 className="">Customer Registration</h2>
      <br />
      <div className="mb-3">
        <label className="cd-control-label">First Name </label>
        <br />
        <input
          className="cd-form-control"
          type="text"
          placeholder="Enter First Name "
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        {errorfirstname && (
          <div className="text-danger">Please Enter Your First Name</div>
        )}
      </div>

      <div className="mb-3">
        <label className="cd-control-label">Last Name </label>
        <br />
        <input
          className="cd-form-control"
          type="text"
          placeholder="Enter Last Name"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        {errorlastname && (
          <div className="text-danger">Please Enter Your Last Name</div>
        )}
      </div>

      <div className="mb-3">
        <label className="cd-control-label">Date of Birth</label>
        <br />
        <input
          className="cd-form-control"
          type="date"
          placeholder="Enter Date of Birth"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        {errordob && (
          <div className="text-danger">Please Enter Your Date of Birth</div>
        )}
      </div>
      <div className="mb-3">
        <label className="cd-control-label">Address </label>
        <br />
        <input
          className="cd-form-control"
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        {erroraddress && (
          <div className="text-danger">Please Enter Your Address</div>
        )}
      </div>
      <div className="mb-3">
        <label className="cd-control-label">Gender</label>
        <br />
        <select
          className="cd-form-control"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Your Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errorgender && (
          <div className="text-danger">Please Select Your Gender</div>
        )}
      </div>

      <div className="mb-3">
        <label className="cd-control-label">Contact</label>
        <br />
        <input
          className="cd-form-control"
          type="tel"
          placeholder="Enter contact"
          maxLength={10}
          minLength={10}
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        {errorcontact && (
          <div className="text-danger">Please Enter Your Contact</div>
        )}
      </div>
      <div className="mb-3">
        <label className="cd-control-label">Email</label>
        <br />
        <input
          className="cd-form-control"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {erroremail && (
          <div className="text-danger">Please Enter Your Email</div>
        )}
      </div>
      <div className="mb-3">
        <label className="cd-control-label">Password</label>
        <br />
        <input
          className="cd-form-control"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorpassword && (
          <div className="text-danger">Please Enter Your Password</div>
        )}
      </div>
      <div className="mb-3">
        <label className="cd-control-label">Role</label>
        <br />
        <select
          className="cd-form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        {errorrole && (
          <div className="text-danger">Please Select Your Role</div>
        )}
      </div>

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
    </div>
  );
}

export default AddCustomerDetails;
