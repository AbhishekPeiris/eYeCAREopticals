import React, { useState, useEffect } from "react";
import "../styles/AddRepairmentDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import Sidebar from "../components/Sidebar";
import "../styles/randomThathi.css";
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import 'jspdf-autotable';


function ViewRepairmentDetails() {
  const [repairment, setRepairment] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRepairment, setFilteredRepairment] = useState([]);

  useEffect(() => {
    async function fetchRepairmentDetails() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/repairment/"
        );
        setRepairment(response.data.repairment);
      } catch (error) {
        console.log(error);
      }

    }
    fetchRepairmentDetails();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredRepairment([]);
    } else {
      const filtered = repairment.filter(
        (item) =>
          item.email.includes(searchQuery) || item.model.includes(searchQuery) 
      );
      setFilteredRepairment(filtered);
    }
  }, [searchQuery, repairment]);

  async function deleterepDetails(id) {
    try {
      const data = (
        await axios.delete(
          `http://localhost:5000/api/repairment/deleterepairment/${id}`
        )
      ).data;
      console.log(data);
      Swal.fire("Successful", "Your account is deleted", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Error with deleting user", "error");
    }
  }

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const repairmentList = filteredRepairment.length
    ? filteredRepairment
    : repairment;

    const downloadAsPDF = () => {
      const table = document.querySelector('.thathfulltable');
      html2canvas(table).then(canvas => {
        const pdf = new jsPDF();
        pdf.setFontSize(18);
        pdf.text("Repairment Details Report", 14, 22);
  
        const tableColumns = ["Name", "Email", "Contact", "Model No", "Date of Dropoff", "Preferred Pickup Date", "Discription Issue", "Price"];
  
        const tableRows = repairmentList.map((repairment) => [
          repairment.cusname || "N/A",
          repairment.email || "N/A",
          repairment.contact || "N/A",
          repairment.model || "N/A",
          repairment.DateofDropoff || "N/A",
          repairment.PreferredPickupDate || "N/A",
          repairment.DescriptionofIssue || "N/A",
          repairment.price || "N/A",
  
        ])
  
        pdf.autoTable({
          head: [tableColumns],
      body: tableRows,
      startY: 30,
      theme: 'striped',
        })
        pdf.save('repairment-report.pdf');
      });
    };
  
  return (
      <div className="thathsarani">
        <Sidebar />
        <div className="thathfulltable"  style={{ marginTop: '10px',marginLeft: '-200px'}}>
            <div className="searchbarthathi" style={{ width: "1100px", }}> 
              <input
                type="text"
                placeholder="Search by email or model number"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />

              <button className="downloadthathi" onClick={downloadAsPDF}> Download Report </button>
            
            </div>
            <Link to="/addrepairmentdetails">
              <button className="thathiaddrepbtn" style={{ width: "200px" }}>
                + Add repairment Details
              </button>
            </Link>
            <div className="row">
              <div className="col-md-1 border thathitd1" style={{ width: "200px" }}>
                <strong>
                  <p>Name</p>
                </strong>
              </div>
              <div className="col-md-1 thathitd2" style={{ width: "300px" }}>
                <strong>
                  <p>Email</p>
                </strong>
              </div>
              <div className="col-md-1 border thathitd3" style={{ width: "200px" }}>
                <strong>
                  <p>Address</p>
                </strong>
              </div>
              <div className="col-md-1 border thathitd4" style={{ width: "110px" }}>
                <strong>
                  <p>Contact</p>
                </strong>
              </div>
              <div className="col-md-1 border thathitd5" style={{ width: "110px" }}>
                <strong>
                  <p>Model No</p>
                </strong>
              </div>
            </div>
            {repairmentList.map((repairment) => (
              <div className="detatable">
                <div className="row">
                  <div
                    className="col-md-1 border thathitd1d"
                    style={{ width: "200px" }}
                  >
                    <p>{repairment.cusname}</p>
                  </div>
                  <div
                    className="col-md-1 border thathitd2d"
                    style={{ width: "300px" }}
                  >
                    <p>{repairment.email}</p>
                  </div>
                  <div
                    className="col-md-1 border thathitd3d"
                    style={{ width: "200px" }}
                  >
                    <p>{repairment.address}</p>
                  </div>
                  <div
                    className="col-md-1 border thathitd4d"
                    style={{ width: "110px" }}
                  >
                    <p>{repairment.contact}</p>
                  </div>
                  <div
                    className="col-md-1 border thathitd5d"
                    style={{ width: "110px" }}
                  >
                    <p>{repairment.model}</p>
                  </div>
                </div>
              </div>
            ))}
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-md-1 border thathitd6" style={{ width: "180px" }}>
                <strong>
                  <p>Date of Dropoff</p>
                </strong>
              </div>
              <div className="col-md-1 border thathitd7" style={{ width: "200px" }}>
                <strong>
                  <p>Preferred Pickup Date</p>
                </strong>
              </div>
              <div className="col-md-1 border thathitd8" style={{ width: "180px" }}>
                <strong>
                  <p>Discription of Issue</p>
                </strong>
              </div>
              <div className="col-md-1 border thathitd9" style={{ width: "180px" }}>
                <strong>
                  <p>Price</p>
                </strong>
              </div>
              <div className="col-md-2 border thathitd10">
                <strong>
                  <p>Action</p>
                </strong>
              </div>
            </div>
            {repairmentList.map((repairment) => (
              <div className="detatable">
                <div className="row">
                  <div
                    className="col-md-1 border thathitd6d"
                    style={{ width: "180px" }}
                  >
                    <p>{repairment.DateofDropoff}</p>
                  </div>
                  <div
                    className="col-md-1 border thathitd7d"
                    style={{ width: "200px" }}
                  >
                    <p>{repairment.PreferredPickupDate}</p>
                  </div>
                  <div
                    className="col-md-1 border thathitd9d"
                    style={{ width: "180px" }}
                  >
                    <p>{repairment.DescriptionofIssue}</p>
                  </div>
                  <div
                    className="col-md-1 border thathitd10d"
                    style={{ width: "180px" }}
                  >
                    <p>{repairment.price}</p>
                  </div>
                  <div className="col-md-2 border thathitd11d">
                    <div className="actioncontainerthathi">
                      <Link to={`/updaterepairmentdetails/${repairment._id}`}>
                        <button className="thathiupdatebtnn"> <FiEdit2 /></button>
                      </Link>
                      <button
                        onClick={(e) => deleterepDetails(repairment._id)}
                        className="thathideletebtnn"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    
  );
}

export default ViewRepairmentDetails;
