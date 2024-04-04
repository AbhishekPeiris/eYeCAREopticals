import React from "react";
import "../styles/AddDoctor.css";

function AddDoctor() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="content">
        <form class="form mb-5 mt-5">
          <p className="form-title">Doctors Registration Form</p>

          <br />
      <br />
          <div className="flex-container">
            <div class="input-container">
              <lable>First Name</lable>
              <input type="text" placeholder="Enter First Name " />
            </div>

            <div class="input-container">
              <div className="input-container1">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name" />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div class="input-container">
              <lable>Contact Number</lable>
              <input type="mobile" placeholder="Enter Contact Number" />
            </div>

            <div class="input-container">
              <div className="input-container1">
                <lable>Email</lable>
                <input type="email" placeholder="Enter email" />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div class="input-container">
              <lable>Password</lable>
              <input type="password" placeholder="Enter Password" />
            </div>

            <div class="input-container">
              <div className="input-container1">
                <lable>Experiance</lable>
                <input type="text" placeholder="Enter experiance" />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div class="input-container">
              <lable>Department</lable>
              <input type="text" placeholder="Enter department" />
            </div>

            <div class="input-container">
              <div className="input-container1">
                <lable>Rating</lable>
                <input type="number" placeholder="Enter Rating" />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div class="input-container">
              <lable>Doctorfee</lable>
              <input type="number" placeholder="Enter doctorfee" />
            </div>

            <div class="input-container">
              <div className="input-container1">
                <lable>Discription</lable>
                <input type="text" placeholder="Enter Discription" />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <div class="input-container">
              <lable>Date</lable>
              <input type="text" placeholder="Enter date" />
            </div>

            <div class="input-container">
              <div className="input-container1">
                <lable>Specialty</lable>
                <input type="text" placeholder="Enter Speciality" />
              </div>
            </div>
          </div>

          <div className="flex-container">
            <br />
            <label>Language</label>
            <div className="select-container">
              <input type="checkbox" id="sinhala1" name="sinhala1" value="Sinhala"/>
              <label for="Sinhala"> Sinhala</label>
              <input type="checkbox" id="English2" name="English2" value="English"/>
              <label for="English2"> English</label>
              <input type="checkbox" id="tamil3" name="Tamil3" value="Tamil"/>
              <label for="Tamil"> Tamil</label>
            </div>

            <label>Type</label>
            <br />
            <select className="Doctertype">
              <option value="ALL">Select type</option>
              <option value="Eye Surgeon">Eye Surgeon</option>
              <option value="Ear Surgeon">Ear Surgeon</option>
              <option value="oGeneral Surgeon">General Surgeon</option>
            </select>
          </div>

          <div className="submitbutton">
            <button type="submit" class="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;
