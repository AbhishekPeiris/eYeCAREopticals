import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function UpdateCustomerDetails() {
  const { userID } = useParams();

  const [firstname, setFirstname] = useState();

  const [lastname, setLastname] = useState();
  const [dob, setDob] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/manager/getalluser/${userID}`
        );
        const userData = response.data.user;

        // Set state after fetching user data
        setFirstname(userData.firstname);
        setLastname(userData.lastname);
        setDob(userData.dob);
        setAddress(userData.address);
        setGender(userData.gender);
        setContact(userData.contact);
        setEmail(userData.email);
        setPassword(userData.password);
        setRole(userData.role);
      } catch (error) {
        console.log(error);
        // Handle error fetching user data
      }
    }

    const [lastname, setLastname] = useState();
    const [dob, setDob] = useState();
    const [address, setAddress] = useState();
    const [gender, setGender] = useState();
    const [contact, setContact] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState('user');

 

    useEffect(() => {
        async function fetchUserDetails() {
          try {
            const response = await axios.post(`http://localhost:5000/api/manager/getalluser/${userID}`);
            const userData = response.data.user;
      
            // Set state after fetching user data
            setFirstname(userData.firstname);
            setLastname(userData.lastname);
            setDob(userData.dob);
            setAddress(userData.address);
            setGender(userData.gender);
            setContact(userData.contact);
            setEmail(userData.email);
            setPassword(userData.password);
            setRole(userData.role);
      
          } catch (error) {
            console.log(error);
            // Handle error fetching user data
          }
        }
      
        // Call the function to fetch user details when the component mounts
        fetchUserDetails();
      
      }, [userID]); // Include userID in the dependency array to re-run effect when userID changes
      


    // Call the function to fetch user details when the component mounts
    fetchUserDetails();
  }, [userID]); // Include userID in the dependency array to re-run effect when userID changes

  async function EditUser(e) {
    e.preventDefault();


    const updateUser = {
      _id: userID,
      firstname,
      lastname,
      dob,
      address,
      gender,
      contact,
      email,
      password,
      role,
    };

    try {
      const data = (
        await axios.put(
          `http://localhost:5000/api/manager/edituser/${userID}`,
          updateUser
        )
      ).data;

      Swal.fire(
        "Updated",
        "Your profile is updated successfully",
        "success"
      ).then((result) => {
        window.location.href = "/viewcustomerdetails";
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Error with updating user", "error");

 

        const updateUser = {
            _id: userID,
            firstname,
            lastname,
            dob,
            address,
            gender,
            contact,
            email,
            password,
            role
        }

        try {
            
            
            const data = (await axios.put(`http://localhost:5000/api/manager/edituser/${userID}`, updateUser)).data;
        
            Swal.fire('Updated', "Your profile is updated successfully", "success").then(result => {

                 window.location.href = '/viewcustomerdetails';

            });
        

        } catch (error) {
            
            console.log(error);
            Swal.fire('Error', "Error with updating user", "error");
          

        }

    }
  }

  return (
    <div>

      <form className="cd-form-group" onSubmit={EditUser}>
        <h4>Customer Registration</h4>
        <br />
        <div className="mb-3">
          <label className="cd-control-label">First Name</label>
          <br />
          <input
            type="text"
            className="cd-form-control"
            placeholder="Enter first name "
            value={firstname}
            required
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </div>

        <div className="  ">
          <label className="cd-control-label">Last Name </label>
          <br />
          <input
            type="text"
            className="cd-form-control"
            placeholder="Enter last name"
            value={lastname}
            required
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="cd-control-label">Date of Birth</label>
          <br />
          <input
            type="date"
            className="cd-form-control"
            placeholder="Enter Date of Birth"
            value={dob}
            required
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="cd-control-label">Address</label>
          <br />
          <input
            type="text"
            className="cd-form-control"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
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
        </div>

        <div className="mb-3">
          <label className="cd-control-label">Contact</label>
          <br />
          <input
            type="tel"
            className="cd-form-control"
            placeholder="Enter contact"
            value={contact}
            required
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="cd-control-label">Email</label>
          <br />
          <input
            type="email"
            className="cd-form-control"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="cd-control-label">Password</label>
          <br />
          <input
            type="password"
            className="cd-form-control"
            placeholder="Enter password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>

       <form  class="form mb-5 mt-5" style={{width:"350px"}} onSubmit={EditUser}>

<h4><strong>Customer Registration Form</strong></h4><br/>
  <div className="input-container">
    <label>First name</label><br/>
    <input type="text" placeholder="Enter first name " value={firstname} required
      onChange={(e) => {
        setFirstname(e.target.value);
      }}
    />
  </div>

  <div className="input-container">
    <label>Last name </label><br/>
    <input type="text" placeholder="Enter last name" value={lastname} required
      onChange={(e) => {
        setLastname(e.target.value);
      }}
    />
  </div>

  <div className="input-container">
    <label>Date of Birth</label><br/>
    <input type="date" placeholder="Enter Date of Birth" value={dob} required
      onChange={(e) => {
        setDob(e.target.value);
      }}
    />
  </div>
  <div className="input-container">
    <label>Address</label><br/>
    <input type="text" placeholder="Enter address" value={address} required
      onChange={(e) => {
        setAddress(e.target.value);
      }}
    />
  </div>
  <div className="input-container">
    <label>Gender</label><br/>
    <input type="text" placeholder="Enter gender" value={gender} required
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
  </div>

  <div className="input-container">
    <label>Contact</label><br/>
    <input type="tel" placeholder="Enter contact" value={contact} required
      onChange={(e) => {
        setContact(e.target.value);
      }}
    />
  </div>
  <div className="input-container">
    <label>Email</label><br/>
    <input type="email" placeholder="Enter email" value={email} required
      onChange={(e) => {
        setEmail(e.target.value);
      }}
    />
  </div>
  <div className="input-container">
    <label>Password</label><br/>
    <input type="password" placeholder="Enter password" value={password} required
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
  </div>
  <div className="input-container">
        <label>Role</label>
            <br/>
          <select
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
        </div>
  <button type="submit" className="submit" style={{width:"300px"}}>Submit</button>
      <button class="submit" style={{width:"300px"}}>Cancel</button>
</form>

    </div>
  );
}

export default UpdateCustomerDetails;
