import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/DoctorAppointmentDetails.css";

function ViewDoctorAppointmentDetails() {
  const [doctorAppointments, setDoctorAppointments] = useState([]);

  useEffect(() => {
    async function fetchDoctorAppointments() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/manager/getalldoctorappointment"
        );
        setDoctorAppointments(response.data.doctorAppointments);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDoctorAppointments();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(`http://localhost:5000/api/manager/deleteuser/${id}`);
      Swal.fire("Stay safe", "Your account has been deleted", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Error with deleting user", "error");
    }
  }

  return (
    <div className="container">
      <h1 className="text-center mb-4">Doctor Appointment Details</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-nowrap">Customer Name</th>
            <th className="text-nowrap">Contact</th>
            <th className="text-nowrap">Address</th>
            <th className="text-nowrap">Email</th>
            <th className="text-nowrap">Doctor name</th>
            <th className="text-nowrap">Date</th>
            <th className="text-nowrap">Doctor fee</th>
            <th className="text-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {doctorAppointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.cusname}</td>
              <td>{appointment.contact}</td>
              <td>{appointment.address}</td>
              <td>{appointment.email}</td>
              <td>{appointment.doctorname}</td>
              <td>{appointment.date}</td>
              <td>{appointment.doctorfee}</td>
              <td>
                <Link to={`/editcustomerdetails/${appointment._id}`}>
                  <button className="da-btn-update">Update</button>
                </Link>
                <button
                  className="da-btn-delete"
                  onClick={() => deleteUser(appointment._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewDoctorAppointmentDetails;
