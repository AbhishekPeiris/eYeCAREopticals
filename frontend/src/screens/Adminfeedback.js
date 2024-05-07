import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import Sidebar from "../components/Sidebar";
import "../styles/random.css"
import Rating from 'react-rating-stars-component';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function AdminFeedback() {

  const [feedback, setFeedback] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/feedback/"
        );
        setFeedback(response.data.feedback);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFeedback();
  }, []);

  async function deleteFeedback(id){
    try {
      const data = (await axios.delete(`http://localhost:5000/api/feedback/deletefeedback/${id}`)).data;
      console.log(data);
      Swal.fire('Stay safe', "You account is deleted", 'success').then(result => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      Swal.fire('Error', "Error with deleting user", 'error');
    }
  }

  const filteredFeedback = feedback.filter((item) => {
    return (
      item.cusname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const downloadAsPDF = () => {
    const table = document.querySelector('.table617');
    html2canvas(table).then(canvas => {
      const pdf = new jsPDF();
      pdf.setFontSize(18);
      pdf.text("Feedback Report", 14, 22);

      const tableColumns = ["Customer name", "Contact", "Address", "Email", "Rating", "Comment"];

      const tableRows = filteredFeedback.map((feedback) => [
        feedback.cusname || "N/A",
        feedback.contact || "N/A",
        feedback.address || "N/A",
        feedback.email || "N/A",
        feedback.rating || "N/A",
        feedback.comment || "N/A",

      ])

      pdf.autoTable({
        head: [tableColumns],
    body: tableRows,
    startY: 30,
    theme: 'striped',
      })
      pdf.save('feedback-report.pdf');
    });
  };

  return (
    <div className="divana">
      <Sidebar />
      <div className="form617"  style={{ marginTop: '-300px'}}>
        <div className="container617" style={{ width: "120%" , height: '100vh', overflowX: 'scroll'}}>
          <div  style={{ marginBottom: '-150px', width: '1150px',display: 'flex',alignItems: 'center', justifyContent: 'space-between',marginLeft: '-220px'}}>
            <input 
              type="text"
              placeholder="Search name or email"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar617"
            />
            <button onClick={downloadAsPDF} className="download-button617">Download Report</button>
          </div>
          <table className="table617">
            <thead>
              <tr>
                <th>Customer name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Email</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedback.map((feedback) => (
                <tr key={feedback._id}>
                  <td>{feedback.cusname}</td>
                  <td>{feedback.contact}</td>
                  <td>{feedback.address}</td>
                  <td>{feedback.email}</td>
                  <td><Rating count={5} value={feedback.rating} size={24} edit={false} /></td>
                  <td>{feedback.comment}</td>
                  <td><button onClick={(e) => deleteFeedback(feedback._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminFeedback;
