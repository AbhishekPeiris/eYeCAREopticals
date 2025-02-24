import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from 'react-rating-stars-component';
import { Link } from "react-router-dom";
import { RiDeleteBin5Line, RiPencilLine } from 'react-icons/ri'; // Importing React Icons
import { AiOutlineCheck, AiOutlineFileText, AiOutlineUndo } from 'react-icons/ai';// Example of importing the FaCheckCircle icon from Font Awesome


import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
//import Sidebar from "../components/Sidebar";

function ViewSpectaclesDetails() {
  const [spectacles, setSpectacles] = useState([]);
  const [filteredSpectacles, setFilteredSpectacles] = useState([]);
  const [filters, setFilters] = useState({
    gender: "",
    model: "",
    price: "",
    type: ""
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/eyeglassadmin/"
        );
        setSpectacles(response.data.eyeglass);
        setFilteredSpectacles(response.data.eyeglass);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  async function deletespectacles(id){
    try {        
        const data = (await axios.delete(`http://localhost:5000/api/eyeglassadmin/deleteeyeglass/${id}`)).data;
        console.log(data);
        Swal.fire('', "Successfully Deleted", 'success').then(result => {
            window.location.reload();
        });
    } catch (error) {        
        console.log(error);
        Swal.fire('Error', "Error with deleting user", 'error');
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Heading
    doc.setFontSize(16);
    doc.text("Inventory Report", 10, 10); // Adjust the position as needed
  
    // Define table headers
    const headers = ["Model No", "Type", "Brand", "Gender", "Frame size 1", "Description", "Price", "Rating"];
  
    // Define table rows
    const rows = filteredSpectacles.map(spectacle => [
      spectacle.model,
      spectacle.type,
      spectacle.brand,
      spectacle.gender,
      spectacle.framesize1,
      spectacle.description,
      spectacle.price,
      spectacle.rating
    ]);
  
    // Set up colors for alternating rows
    const alternateRowColor = ['#f0f0f0', '#ffffff'];
  
    // Set up table properties
    const tableProps = {
      startY: 20, // Start below the heading
      head: [headers],
      body: rows,
      theme: 'grid',
      styles: {
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        fontSize: 10
      },
      alternateRowStyles: {
        fillColor: alternateRowColor
      }
    };
  
    // Add table to the PDF
    doc.autoTable(tableProps);
  
    // Save the PDF
    doc.save('inventory_details.pdf');
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const applyFilters = () => {
    const filteredData = spectacles.filter(spectacle => {
      return (
        spectacle.gender.toLowerCase().includes(filters.gender.toLowerCase()) &&
        spectacle.model.toLowerCase().includes(filters.model.toLowerCase()) &&
        spectacle.price.toString().includes(filters.price) &&
        spectacle.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    });
    setFilteredSpectacles(filteredData);
  };

  const resetFilters = () => {
    setFilters({
      gender: "",
      model: "",
      price: "",
      type: ""
    });
    setFilteredSpectacles(spectacles);
  };

  const buttonStyle = {
    backgroundColor: '#fc6203',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  const iconButtonStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const iconStyle = {
    marginRight: '5px',
  };

  const inputStyle = {
    marginRight: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  return (
    <div>



      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <input 
          type="text" 
          name="gender" 
          value={filters.gender} 
          onChange={handleFilterChange} 
          placeholder="Filter by gender" 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="model" 
          value={filters.model} 
          onChange={handleFilterChange} 
          placeholder="Filter by model" 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="price" 
          value={filters.price} 
          onChange={handleFilterChange} 
          placeholder="Filter by price" 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="type" 
          value={filters.type} 
          onChange={handleFilterChange} 
          placeholder="Filter by type" 
          style={inputStyle}
        />
        <button onClick={applyFilters} style={{ ...buttonStyle, ...iconButtonStyle }}>
        <AiOutlineCheck /> 
        </button>
        <button onClick={resetFilters} style={{ ...buttonStyle, ...iconButtonStyle }}>
        <AiOutlineUndo />
        </button>
        <button onClick={generatePDF} style={{ ...buttonStyle, ...iconButtonStyle }}><AiOutlineFileText /></button>
      </div>

      

      {/* Stretching the table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '200vw', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <thead>
            <tr>
              <th className="border samth">Model No.</th>
              <th className="border samth">Type</th>
              <th className="border samth">Brand</th>
              <th className="border samth">Gender</th>
              <th className="border samth">Frame shape</th>
              <th className="border samth">Frame material</th>
              <th className="border samth">Frame type</th>
              <th className="border samth">Frame size 1</th>
              <th className="border samth">Frame size 2</th>
              <th className="border samth">Frame size 3</th>
              <th className="border samth">Hinge type</th>
              <th className="border samth">Description</th>
              <th className="border samth">Price</th>
              <th className="border samth">Rating</th>
              <th className="border samth">Image url color 1</th>
              <th className="border samth">Image url color 2</th>
              <th className="border samth">Image url color 3</th>
              <th className="border samth">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSpectacles.map((spectacle, index) => (
              <tr key={spectacle._id} style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
                <td className="border samtd">{spectacle.model}</td>
                <td className="border samtd">{spectacle.type}</td>
                <td className="border samtd">{spectacle.brand}</td>
                <td className="border samtd">{spectacle.gender}</td>
                <td className="border samtd">{spectacle.frameshape}</td>
                <td className="border samtd">{spectacle.framematerial}</td>
                <td className="border samtd">{spectacle.frametype}</td>
                <td className="border samtd">{spectacle.framesize1}</td>
                <td className="border samtd">{spectacle.framesize2}</td>
                <td className="border samtd">{spectacle.framesize3}</td>
                <td className="border samtd">{spectacle.hingetype}</td>
                <td className="border samtd">{spectacle.description}</td>
                <td className="border samtd">{spectacle.price}</td>
                <td className="border samtd">
                  <Rating
                    count={5}
                    value={spectacle.rating}
                    size={24}
                    edit={false}
                  />
                </td>
                <td className="border samtd">
                  <img src={spectacle.imageurlcolor1[0]} alt="" width={50} height={40}/>
                </td>
                <td className="border samtd">
                  <img src={spectacle.imageurlcolor2[0]} alt="" width={50} height={40}/>
                </td>
                <td className="border samtd">
                  <img src={spectacle.imageurlcolor3[0]} alt="" width={50} height={40}/>
                </td>
                <td className="border samtd">
                  <Link to={`/updatesepectacledetails/${spectacle._id}`} style={{ marginRight: '5px' }}>
                    <RiPencilLine className="samupdatebtn" />
                  </Link>
                  <RiDeleteBin5Line onClick={() => deletespectacles(spectacle._id)} className="samdeletebtn" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>

    </div>
    
  );
}

export default ViewSpectaclesDetails;
