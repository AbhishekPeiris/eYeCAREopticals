import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios library
import ProfileCard from "./structures/ProfileCard";
import { Link } from "react-router-dom";

function ProfileSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Data", error);
      });
  }, []);

  const dashboradpath = [ 
    "/adc",
    "/adc",
    "/adc",
    "/adc",
    "/adc",
    "/adc",
    "/adc",
    "/adc",
  ]

  return (
    <div className="profiles">
      {users.map(
        (
          user,
          index // Add key prop to ProfileCard component
        ) => (
          <Link to={dashboradpath[index]} >
            <ProfileCard
            key={index}
            Name={user.firstname}
            email={user.email}
            role={user.role}
          />
          </Link>
        )
      )}
    </div>
  );
}

export default ProfileSection;
