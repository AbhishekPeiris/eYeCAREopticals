import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/updatehearingAids.css';

function UpdateHearingAidsDetails() {
    const { deafaidsId } = useParams();


    const [model, setModel] = useState();
    const [gender, setGender] = useState();
    const [material, setMaterial] = useState();
    const [discription, setDiscription] = useState();

    const [size1, setSize1] = useState();
    const [size2, setSize2] = useState();
    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [imageurlcolor1, setImageurlcolor1] = useState();
    const [imageurlcolor2, setImageurlcolor2] = useState();




    useEffect(() => {
        async function fetchHearingAidsDetails() {
            try {
                const response = await axios.post(`http://localhost:5000/api/deafaidsadmin/${deafaidsId}`);
                const userData = response.data.user;

                // Set state after fetching user data

                setModel(userData, model);
                setGender(userData, gender);
                setMaterial(userData, material);
                setDiscription(userData, discription);
                setSize1(userData, size1);
                setSize2(userData, size2);
                setPrice(userData, price);
                setRating(userData, rating);
                setImageurlcolor1(userData, imageurlcolor1);
                setImageurlcolor2(userData, imageurlcolor2);







            } catch (error) {
                console.log(error);
                // Handle error fetching user data
            }
        }

        // Call the function to fetch user details when the component mounts
        fetchHearingAidsDetails();

    }, [deafaidsId]); // Include ObjectId in the dependency array to re-run effect when ObjectId changes



    async function EditHearingAids(e) {
        e.preventDefault();



        const updateUser = {
            _id: deafaidsId,
            model,
            gender,
            material,
            discription,
            size1,
            size2,
            imageurlcolor1,
            imageurlcolor2,
        }

        try {


            const data = (await axios.put(`http://localhost:5000/api/deafaidsadmin/editdeafaids/${deafaidsId}`, updateUser)).data;

            Swal.fire('Updated', "Your profile is updated successfully", "success").then(result => {

                window.location.href = '/viewcustomerdetails';

            });


        } catch (error) {

            console.log(error);
            Swal.fire('Error', "Error with updating user", "error");


        }
    }

    return (
        <div className='hearingform'>
            <form class="form mb-5 mt-5" style={{ width: "350px" }} onSubmit={EditHearingAids}>

                <h4><strong>Update Hearing Aids Details</strong></h4><br />
                <div className="input-container">
                    <label><b>First Name</b></label><br />
                    <input type="text" placeholder="Enter Model " value={model} required
                        onChange={(e) => {
                            setModel(e.target.value);
                        }}
                    />
                </div>

                <div className="input-container">
                    <label><b>Last Name</b> </label><br />
                    <input type="text" placeholder="Enter Gender" value={gender} required
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                    />
                </div>

                <div className="input-container">
                    <label><b>Materials</b></label><br />
                    <input type="number" placeholder="Enter Material" value={material} required
                        onChange={(e) => {
                            setMaterial(e.target.value);
                        }}
                    />
                </div>
                <div className="input-container">
                    <label><b>Address</b></label><br />
                    <input type="text" placeholder="Enter Discription" value={discription} required
                        onChange={(e) => {
                            setDiscription(e.target.value);
                        }}
                    />
                </div>
                <div className="input-container">
                    <label><b>Size 1</b></label><br />
                    <input type="number" placeholder="Enter Size 1" value={size1} required
                        onChange={(e) => {
                            setSize1(e.target.value);
                        }}
                    />
                </div>

                <div className="input-container">
                    <label><b>Size 2</b></label><br />
                    <input type="tel" placeholder="Enter Size 2" value={size2} required
                        onChange={(e) => {
                            setSize2(e.target.value);
                        }}
                    />
                </div>
                <div className="input-container">
                    <label><b>Price</b></label><br />
                    <input type="number" placeholder="Enter Price" value={price} required
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </div>



                <div className="input-container">
                    <label><b>Rating</b></label><br />
                    <input type="number" placeholder="Enter Rating" value={rating} required
                        onChange={(e) => {
                            setRating(e.target.value);
                        }}
                    />
                </div>


                <div className="input-container">
                    <label><b>Imageurl Color 1</b></label><br />
                    <input type="text" placeholder="Colour 1" value={imageurlcolor1} required
                        onChange={(e) => {
                            setImageurlcolor1(e.target.value);
                        }}
                    />
                </div>


                <div className="input-container">
                    <label><b>Imageurl Color 2</b></label><br />
                    <input type="text" placeholder="Colour 2" value={imageurlcolor2} required
                        onChange={(e) => {
                            setImageurlcolor2(e.target.value);
                        }}
                    />
                </div>



                <button type="submit" className="submit" style={{ width: "300px" }}>UPDATE</button>
                <button class="submit" style={{ width: "300px" }}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdateHearingAidsDetails;
