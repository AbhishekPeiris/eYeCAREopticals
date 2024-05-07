import React, { useState } from "react";
import CustomLink from "./structures/CustomeLink";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Sidebar() {
  const [activeLinks, setActiveLinks] = useState({
    acc: false,
    spec: false,
    hear: false,
    doc: false,
    app: false,
    cus: false,
    feed: false,
  });

  function handleOnClick(name) {
    setActiveLinks((prev) => {
      const newState = {
        acc: false,
        spec: false,
        hear: false,
        doc: false,
        app: false,
        cus: false,
        feed: false,
        [name]: !prev[name], // Toggle the clicked submenu
      };
      return newState;
    });
  }

  const MainLinks = [
    { Name: "Accessories Repairment", path: "/reparementDashboard", id: 0 },
    { Name: "Spectacles", path: "/spectacles", id: 1 },
    { Name: "Hearing Aids", path: "/hearingaids", id: 2 },
    { Name: "Doctors", path: "/doctors", id: 3 },
    { Name: "Appointments", path: "/appointments", id: 4 },
    { Name: "Customer Details", path: "/customerDetails", id: 5 },
    { Name: "Feedback", path: "/feedback", id: 6 },
  ];

  const SubLinks = [
    [
      { Name: "Add Repairment", path: "/addrepairmentdetails" },
      { Name: "View Repairment Details", path: "/viewrepairmentdetails" },
    ],
    [
      { Name: "Manage Spectacle Stock", path: "/addspectacles" },
      { Name: "View Spectacle Details", path: "/viewspectaclesdetails" },
    ],
    [
      { Name: "Manage Hearing Aids", path: "/addhearingaidsscreen" },
      { Name: "View Hearing Aids Details", path: "/viewdeafaidsdetails" },
    ],
    [
      { Name: "Manage Doctor Details", path: "/adddoctor" },
      { Name: "View Doctor Details", path: "/viewdoctordetails" },
    ],
    [{ Name: "Doctor Appointment", path: "/viewdoctorappointment" }],
  ];

  return (
    <div className="sidebar" style={sidebarStyle}>
      <h1>
        <span className="left">Admin</span>
        <span className="right">Panel</span>
      </h1>
      <div className="navigationalLinks">
        <ul>
          {MainLinks.map((item) => (
            <li key={item.id} style={listItemStyle}>
              <CustomLink Name={item.Name} path={item.path} style={linkStyle} />
              {SubLinks[item.id] && (
                <>
                  <button
                    type="button"
                    onClick={() => handleOnClick(`link${item.id}`)}
                    style={buttonStyle}
                  >
                    <span className="fas fa-chevron-down" style={iconStyle}></span>
                  </button>
                  {activeLinks[`link${item.id}`] && (
                    <ul className="sublinks" style={sublistStyle}>
                      {SubLinks[item.id].map((subitem, index) => (
                        <li key={index} style={sublistItemStyle}>
                          <CustomLink Name={subitem.Name} path={subitem.path} style={sublinkStyle} />
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const sidebarStyle = {
  backgroundColor: "#f78623",
  color: "#fff",
  padding: "20px",
};

const listItemStyle = {
  marginBottom: "10px",
};

const linkStyle = {
  color: "#fff !" ,
  textDecoration: "none",
};

const buttonStyle = {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
};

const iconStyle = {
  color: "#fff",
};

const sublistStyle = {
  listStyleType: "none",
  paddingLeft: "20px",
};

const sublistItemStyle = {
  marginBottom: "5px",
};

const sublinkStyle = {
  color: "#ccc",
  textDecoration: "none",
};

export default Sidebar;
