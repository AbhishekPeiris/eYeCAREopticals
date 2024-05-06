import React from "react";
import { Link } from "react-router-dom";

function CustomLink({ path, Name }) {
  return (
    <Link to={path} className="link">
      {" "}
      {Name}{" "}
    </Link>
  );
}

export default CustomLink;
