import React, { useState } from 'react';

function AdminFeedback() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="myfulltable617">
        <div className="row">
          <div className="col-md-1 border feedback_1_col_1">
            <strong>Name</strong>
          </div>
          <div className="col-md-1 border feedback_1_col_1">
            <strong>Contact Number</strong>
          </div>
          <div className="col-md-1 border feedback_1_col_1">
            <strong>Address</strong>
          </div>
          <div className="col-md-1 border feedback_1_col_1">
            <strong>Email</strong>
          </div>
          <div className="col-md-1 border feedback_1_col_1">
            <strong>Rating</strong>
          </div>
          <div className="col-md-1 border feedback_1_col_1">
            <strong>Comment</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFeedback;
