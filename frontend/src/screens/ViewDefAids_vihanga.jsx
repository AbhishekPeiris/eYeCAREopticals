import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function ViewDefAidsvihanga() {
  const [deafaids, setDeafAids] = useState([]);
  const [display, setDisplay] = useState(false);
  const [formData, setFormData] = useState({
    model: '',
    gender: '',
    material: '',
    description: '',
    size1: '',
    size2: '',
    price: '',
    rating: '',
    imageurlcolor1: '',
    imageurlcolor2: ''
  });

  const handleUpdate = async (deafAid) => {
    try {
      await axios.patch(`http://localhost:5000/updateDeafAid/${deafAid._id}`, formData);
      // Update the state with the new data
      const updatedDeafAids = deafaids.map(item => (item._id === deafAid._id ? formData : item));
      setDeafAids(updatedDeafAids);
      console.log(`Item with ID ${deafAid._id} updated`);
      setDisplay(false); // Close the update form after updating
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateForm = (deafAid) => {
    setFormData(deafAid);
    setDisplay(true); // Open the update form when "Update" button is clicked
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/getddefAidDetaails/");
        setDeafAids(response.data.deafaids);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deafaidsadmin/deletedeafaids/${id}`);
      // Remove the deleted item from the state
      setDeafAids(deafaids.filter(item => item._id !== id));
      console.log(`Item with ID ${id} deleted`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

    <Link to='/addhearingaidsscreen' >
      <button type="submit" className="submit112hiru">
              + Add Deaf Aids
            </button>
    </Link>

      <table style={{ borderCollapse: 'collapse', width: '80%', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Model</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Gender</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Material</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Description</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Size1</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Size2</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Price</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Rating</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>imageurlcolor1</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>imageurlcolor2</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {deafaids.map((deafAid) => (
            <tr key={deafAid._id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.model}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.gender}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.material}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.description}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.size1}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.size2}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.price}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{deafAid.rating}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}> <img src={deafAid.imageurlcolor1} alt='ps' style={{ width: '50px', height: 'auto' }} /></td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}> <img src={deafAid.imageurlcolor2} alt='ps' style={{ width: '50px', height: 'auto' }} /></td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
  <button
    style={{
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      padding: '5px 10px',
      marginRight: '5px'
    }}
    onClick={() => handleUpdateForm(deafAid)}
  >
    <FaEdit />
  </button>
  <button
    style={{
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      padding: '5px 10px'
    }}
    onClick={() => handleDelete(deafAid._id)}
  >
    <FaTrash />
  </button>
</td>

</td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for updating data */}
      {display && (
        <div style={{ width: '100vw', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', position: 'fixed', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>

          <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: '20px', width: '400px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', height: '600px', backgroundColor: '#ff' }}>
            <h2 style={{ marginBottom: '20px' }}>Update Deaf Aid</h2>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Model:</label>
              <input type="text" name="model" value={formData.model} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Add input fields for other attributes */}
            {/* Gender */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Gender:</label>
              <input type="text" name="gender" value={formData.gender} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Material */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Material:</label>
              <input type="text" name="material" value={formData.material} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Description */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Description:</label>
              <input type="text" name="description" value={formData.description} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Size1 */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Size1:</label>
              <input type="text" name="size1" value={formData.size1} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Size2 */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Size2:</label>
              <input type="text" name="size2" value={formData.size2} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Price */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Price:</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Rating */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Rating:</label>
              <input type="text" name="rating" value={formData.rating} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Image URL Color 1 */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Image URL Color 1:</label>
              <input type="text" name="imageurlcolor1" value={formData.imageurlcolor1} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Image URL Color 2 */}
            <div style={{ marginBottom: '10px' }}>
              <label style={{ marginBottom: '5px' }}>Image URL Color 2:</label>
              <input type="text" name="imageurlcolor2" value={formData.imageurlcolor2} onChange={handleChange} style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            {/* Submit button */}
            <div>
            <button type="submit" onClick={() => handleUpdate(formData)} style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>Update</button>
            <button className="close" onClick={() => { setDisplay(false) }} style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#f44336', color: 'white', cursor: 'pointer', marginLeft: '10px' }}>Close</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ViewDefAidsvihanga;
