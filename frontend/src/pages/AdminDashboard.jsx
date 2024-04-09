import React from "react";
import Sidebar from "../components/Sidebar";
import ContentArea from "../components/ContentArea_";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="DashboardContainer">
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default AdminDashboard;
