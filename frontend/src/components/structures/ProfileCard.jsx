import React from "react";
import Profile from "../../assets/profileimage.jpg";

function ProfileCard({ Name, email, role }) {
  return (
    <div className="profilecard">
      <img src={Profile} alt="" srcset="" />
      <div className="details">
        <p>{Name}</p>
        <p>{email}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
