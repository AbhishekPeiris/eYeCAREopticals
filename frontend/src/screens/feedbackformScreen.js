import React from 'react'

function feedbackformScreen() {
  return (
    <div> <div class="row mt-3">
    <div class="col-md-12"><label class="labels">Date of birth</label><input type="date" class="form-control" placeholder="Date of Birth" value={user.dob} readOnly /></div>
    <div class="col-md-12"><label class="labels">Address</label><textarea id="address" className="form-control" style={{ width: '100%', minHeight: '50px', maxHeight: "100px", backgroundColor: "white" }} placeholder="Address" value={user.address} readOnly></textarea></div>
    <div class="col-md-12"><label class="labels">Gender</label><input type="text" class="form-control" placeholder="Gender" value={user.gender} readOnly /></div>
    <div class="col-md-12"><label class="labels">Contact</label><input type="tel" class="form-control" placeholder="Contact" value={user.contact} readOnly /></div>
    <div class="col-md-12"><label class="labels">Email</label><input type="email" class="form-control" placeholder="Email" value={user.email} readOnly /></div>

</div></div>
    
  )
}

export default feedbackformScreen