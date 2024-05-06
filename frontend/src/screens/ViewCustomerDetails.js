import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/CustomerDetails.css";
import { useReactToPrint } from "react-to-print";

function ViewCustomerDetails() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState([]);
  const [searchText, setSearchText] = useState("");
  const componentPDF = useRef();

  useEffect(() => {
    async function ViewCustomerDetails() {
      try {
        let response;
        response = await axios.post(
          "http://localhost:5000/api/manager/getalluser"
        );
        setUserList(response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    ViewCustomerDetails();
  }, []);
  
  function handleSearch()  {
    
    if (searchText.trim() === "") {
      setUser(userList);
    } else {
      console.log('text',searchText)
      // Convert searchText to lowercase for case-insensitive comparison
      const searchTextLower = searchText.toLowerCase();

      // Filter the array of users
      const filteredUsers = userList.filter((user) => {
        // Convert both firstName and lastName to lowercase for case-insensitive comparison
        const firstNameLower = user.firstname.toLowerCase();
        const lastNameLower = user.lastname.toLowerCase();

        // Check if either firstName or lastName includes the searchText
        return (
          firstNameLower.includes(searchTextLower) ||
          lastNameLower.includes(searchTextLower)
        );
      });

      setUser(filteredUsers);
    }
  }

  async function deleteUser(id) {
    try {
      const data = (
        await axios.delete(`http://localhost:5000/api/manager/deleteuser/${id}`)
      ).data;
      console.log(data);
      Swal.fire("Stay safe", "You account is deleted", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Error with deleting user", "error");
    }
  }

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "eyeCAREoptical_customerDetails",
  });

  return (
    <div ref={componentPDF}>
      <h1 className="text-center mb-4">Customer Details</h1>
      
        <div className="row mb-4">
          <div className="col-6 d-flex px-3">
            <input
              type="text"
              className="cd-form-control"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button type="button" onClick={handleSearch} className="btn btn-primary ms-2">
              Search
            </button>
          </div>
        </div>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-nowrap">First Name</th>
            <th className="text-nowrap">Last Name</th>
            <th className="text-nowrap">Date of Birth</th>
            <th className="text-nowrap">Address</th>
            <th className="text-nowrap">Gender</th>
            <th className="text-nowrap">Contact</th>
            <th className="text-nowrap">Email</th>
            <th className="text-nowrap">Password</th>
            <th className="text-nowrap">Role</th>
            <th className="text-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.dob}</td>
              <td>{user.address}</td>
              <td>{user.gender}</td>
              <td>{user.contact}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td className="cd-action-col">
                <Link to={`/editcustomerdetails/${user._id}`}>
                  <button className="cd-btn-update">Update</button>
                </Link>
                <button
                  className="cd-btn-delete"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="btn btn-success float-right me-3"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
}

export default ViewCustomerDetails;
