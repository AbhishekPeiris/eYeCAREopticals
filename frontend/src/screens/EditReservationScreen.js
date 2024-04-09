import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Rating from 'react-rating-stars-component';
import '../styles/EditReservation.css';
import { Link } from "react-router-dom";
import Loader from '../components/Loader';

const EditReservationScreen = () => {

    const { resvationID, brand, model } = useParams();
    const [eyeglass, setEyeglass] = useState([]);

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [email, setEmail] = useState(user.email);

    const [cusname, setCusname] = useState(user.firstname + " " + user.lastname);
    const [contact, setContact] = useState(user.contact);
    const [address, setAddress] = useState(user.address);

    const [modelNo, setModelNo] = useState();
    const [type, setType] = useState();
    const [brandname, setBrandName] = useState();
    const [gender, setGender] = useState();
    const [price, setPrice] = useState();
    const [imageurlcolor, setImageurlColor] = useState([]);

    const [framesize, setFramsize] = useState();

    const [selectedColor, setSelectedColor] = useState(1); // Default to color 1
    const [selectedButton, setSelectedButton] = useState(null);

    const [eyeglassreservation, setEyeglassReservation] = useState([]);
    const [reservationId, setReservationId] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getEyeglassDetails(brand, model) {
            try {
                setLoading(true);
                const response = await axios.post(`http://localhost:5000/api/eyeglass/${brand}/${model}`)
                setEyeglass(response.data.eyeGlass);
                console.log(response.data.eyeGlass);
                setLoading(false);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getEyeglassDetails(brand, model);

        async function ViewBookingDetails() {
            try {
                setTimeout(async () => {
                    setLoading(true);
                    const response = await axios.get(`http://localhost:5000/api/eyeglassreservation/geteyeglassreservations/${user.email}/${resvationID}`);
                    setEyeglassReservation(response.data.eyeglassreservation);
                    console.log(response.data.eyeglassreservation);

                    if (response.data.eyeglassreservation.length > 0) {
                        // Assuming you want the _id of the first reservation

                        setCusname(response.data.eyeglassreservation.cusname);
                        setContact(response.data.eyeglassreservation.contact);
                        setAddress(response.data.eyeglassreservation.address);
                        setEmail(response.data.eyeglassreservation.email);
                        setModelNo(response.data.eyeglassreservation.model);
                        setType(response.data.eyeglassreservation.type);
                        setBrandName(response.data.eyeglassreservation.brand);
                        setGender(response.data.eyeglassreservation.gender);
                        setFramsize(response.data.eyeglassreservation.framesize);
                        setPrice(response.data.eyeglassreservation.price);
                        setImageurlColor(response.data.eyeglassreservation.imageurlcolor);
                    }
                    

                    setLoading(false);
                }, 700);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        ViewBookingDetails();


    }, [brand, model]);

    const selectColor = (colorNumber) => {
        setSelectedColor(colorNumber);
    }
    function selectSize(size) {
        setFramsize(size);
    }

    async function EditReservation() {
        console.log(resvationID);
        console.log(email);

        const updateReservation = {
            _id: resvationID,
            cusname: cusname,
            contact: contact,
            address: address,
            email: email,
            model: modelNo,
            type: type,
            brand: brandname,
            gender: gender,
            framesize: framesize,
            price: price,
            imageurlcolor: imageurlcolor
        }
        console.log(updateReservation)
        try {


            const data = (await axios.put(`http://localhost:5000/api/eyeglassreservation/editeyeglassreservation/${resvationID}`, updateReservation)).data;

            Swal.fire('Updated', "Your reservation is updated successfully", "success").then(result => {

                window.location.href = '/bookings'

            });
            
 

        } catch (error) {

            console.log(error);
            Swal.fire('Error', "Error with updating reservation", "error");


        }
    }


    return (
        <div>

            <div className="row">
                <div className='col md-5'>
                    <br /><br /><br />
                    <img src="https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" style={{ marginLeft: "150px" }} /><br />
                    {eyeglass.map((eyeglass) => (
                        <div key={eyeglass.model}>
                            <p className='eyeglassModelNo'>{eyeglass.model} <span style={{ color: "black", fontWeight: "lighter", fontSize: "16px" }}> / {eyeglass.type}</span></p>
                            <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
                                <ol class="carousel-indicators">

                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[0]} alt="First slide" /></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[1]} alt="Second slide" /></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="smalld-block"><img class="d-block w-100 smalld-blockimg" src={eyeglass.imageurlcolor1[2]} alt="Third slide" /></li>
                                </ol>
                                <div className="carousel-inner">
                                    {eyeglass[`imageurlcolor${selectedColor}`].map((image, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <img className="d-block w-100" src={image} alt="Slide Images" />
                                        </div>
                                    ))}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {eyeglass.map((eyeglass) => (
                    <div key={eyeglass.model} className='col md-3 mt-3'>
                        <br /><br /><br />
                        <div className='eyeglassBrandTag'>
                            <strong><p>{eyeglass.brand} &nbsp;&nbsp;|&nbsp;&nbsp; {eyeglass.model} &nbsp;&nbsp;|&nbsp;&nbsp; {eyeglass.type}</p></strong>
                        </div><br />
                        <div className='row'>
                            <div className='col md-3'>
                                <p>
                                    <strong>{eyeglass.brand} | {eyeglass.model}</strong> <br />
                                    <p style={{ fontSize: "13px" }}>
                                        {eyeglass.type} | {eyeglass.gender}<br />
                                        <Rating
                                            count={5}
                                            value={eyeglass.rating}
                                            size={24}
                                            edit={false}
                                        />
                                    </p>
                                </p>
                            </div>
                            <div className='col md-3'>
                                <p className='eyeGlassPrice_1'><strong>LKR &nbsp;{eyeglass.price}</strong></p>
                            </div>
                        </div>
                        <hr style={{ backgroundColor: "black", width: "500px" }} />
                        <div className='row'>
                            <div className='col md-5'>
                                <p><strong>SELECT FRAME COLOR :</strong></p>
                                {[1, 2, 3].map(colorNumber => (
                                    <button key={colorNumber} className='framecolorimg' onClick={() => { selectColor(colorNumber); setImageurlColor(eyeglass[`imageurlcolor${colorNumber}`][0]) }}>
                                        <img src={eyeglass[`imageurlcolor${colorNumber}`][0]} alt="Frame Color" width={100} />
                                    </button>
                                ))}
                            </div>
                        </div><br />
                        <hr style={{ backgroundColor: "black", width: "500px" }} />

                        <div className='row'>
                            <div className='col md-5'>
                                <p><strong>SELECT FRAME SIZE :</strong></p>
                                <button
                                    className={selectedButton === eyeglass.framesize1 ? 'framecolorimg selected' : 'framecolorimg'}
                                    onClick={(e) => {
                                        selectSize(eyeglass.framesize1);
                                        setSelectedButton(eyeglass.framesize1);
                                    }}
                                >
                                    {eyeglass.framesize1}
                                </button>
                                <button
                                    className={selectedButton === eyeglass.framesize2 ? 'framecolorimg selected' : 'framecolorimg'}
                                    onClick={(e) => {
                                        selectSize(eyeglass.framesize2);
                                        setSelectedButton(eyeglass.framesize2);
                                    }}
                                >
                                    {eyeglass.framesize2}
                                </button>
                                <button
                                    className={selectedButton === eyeglass.framesize3 ? 'framecolorimg selected' : 'framecolorimg'}
                                    onClick={(e) => {
                                        selectSize(eyeglass.framesize3);
                                        setSelectedButton(eyeglass.framesize3);
                                    }}
                                >
                                    {eyeglass.framesize3}
                                </button>
                            </div>
                        </div><br />
                        <hr style={{ backgroundColor: "black", width: "500px" }} />

                        <div className='row'>
                            <div className='col md-5'>
                                <p style={{ fontSize: "23px" }}><strong>TOTAL PRICE :</strong></p>

                            </div>
                            <div className='col md-5'>
                                <p style={{ fontSize: "23px", marginLeft: "50px" }}><strong>LKR <span style={{ color: "#ab2317" }}>&nbsp;{eyeglass.price}</span></strong></p>
                            </div>
                        </div><br />
                        <div className='updatediscriptioncrd'>
                            <p className='updatediscription'>Since you have already paid for the item, you can only choose the color and size of the item again.</p>
                        </div>
                        
                                <Link to='/bookings'><button className='reservationcancelbtn'>Cancel</button></Link>
                                <button className='btn btn-primary reservationupdatebtn' onClick={(e) => EditReservation()} >Update</button>
                          

                        <br /><br />
                        <hr style={{ backgroundColor: "black", width: "500px" }} />
                    </div>
                ))}

                
          
            </div>

            <div className='row' style={{ marginLeft: "133px", marginRight: "133px" }}>
                <div className='col md-5 border'>
                    <p style={{ fontSize: "20px" }}><strong>Product Details</strong></p>
                </div>
                <div className='col md-5 border'>
                    <p style={{ fontSize: "20px" }}><strong>About RayBan Eyeware</strong></p>
                </div>
            </div>

            {eyeglass.map((eyeglass) => (
                <div className='row' style={{ marginLeft: "133px", marginRight: "133px" }}>
                    <div className='col md-5 border'>
                        <p className="eyeGlassDetailsList">
                            <b>Model :</b> {eyeglass.model}<br />
                            <b>Type :</b> {eyeglass.type}<br />
                            <b>Brand :</b> {eyeglass.brand}<br />
                            <b>Frame shape :</b> {eyeglass.frameshape}<br />
                            <b>Frame material :</b> {eyeglass.framematerial}<br />
                            <b>Frame type :</b> {eyeglass.frametype}<br />
                            <b>Hinge type :</b> {eyeglass.hingetype}<br />
                        </p>

                    </div>
                    <div className='col md-5 border'>
                        <p className="eyeGlassDis">{eyeglass.discription}</p>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default EditReservationScreen;
