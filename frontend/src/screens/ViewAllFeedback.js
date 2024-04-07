import React from 'react'
import chatbox from "../images/chatbox.png";
import userfeed from "../images/userfeed.png";

import "../styles/ViewAllFeedback.css";

function ViewAllFeedback() {
  return (
    <div>
        <br /><br /><br />
        <div className="chatbox">
        <img src={chatbox} alt="feed pic" className="chatbox1234" />

        
      </div>
      <div className="userfeed">
        <img src={userfeed} alt="feed pic" className="userfeedimage" />

        
      </div>
    </div>
  )
}

export default ViewAllFeedback