import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../styles/cart.css";
import Loader from '../components/Loader';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const BookingScreen = () => {

    const [eyeglassreservation, setEyeglassReservation] = useState([]);
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [reservationId, setReservationId] = useState();

    useEffect(() => {
        async function ViewBookingDetails() {
            try {
                setTimeout(async () => {
                    setLoading(true);
                    const response = await axios.post(`http://localhost:5000/api/eyeglassreservation/geteyeglassreservations/${user.email}`);
                    setEyeglassReservation(response.data.eyeglassreservation);
                    console.log(response.data.eyeglassreservation);

                    if (response.data.eyeglassreservation.length > 0) {
                        // Assuming you want the _id of the first reservation
                        setReservationId(response.data.eyeglassreservation[0]._id);
                        console.log(response.data.eyeglassreservation[0]._id);
                    }

                    setLoading(false);
                }, 700);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        ViewBookingDetails();
    }, [user.email]);

    async function deleteBooking(id) {

        try {

            setLoading(false);
            const data = (await axios.delete(`http://localhost:5000/api/eyeglassreservation/deleteeyeglassreservation/${id}`)).data;
            console.log(data);

            Swal.fire('Stay safe', "You reservation is deleted", 'success').then(result => {

                window.location.reload();

            });

        } catch (error) {

            console.log(error);
            Swal.fire('Error', "Error with deleting reservation", 'error');
            setLoading(false);

        }
    }

    return (
        <div>

            {loading ? (
                <Loader />
            ) : (

                <section className="my-5">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-9">
                                <div className="card border shadow-0 mt-5">
                                    <div className="m-4">
                                        <h4 className="card-title mb-4 myshoppingcart"><strong>My Bookings</strong></h4><br />

                                        <div className="row mb-5 cartlisttable">
                                            {eyeglassreservation.map((eyeglassreservation) => (
                                                <div className="col-lg-3 cartlisttablecol1">
                                                    <div className="caritemscard" data-aos="zoom-in">
                                                        <div className="row" >
                                                            <div className="col md-3">
                                                                <p className="cartitemscardptag1">
                                                                    <span style={{ fontSize: "11px" }}><strong>{eyeglassreservation.cusname}</strong></span><br />
                                                                    <span style={{ fontSize: "11px" }}>{eyeglassreservation.email}</span><br />
                                                                    <span style={{ fontSize: "11px" }}>{eyeglassreservation.contact} {eyeglassreservation.address}</span><br />
                                                                    <hr />
                                                                    <span style={{ color: "#0a5a70" }}><strong>{eyeglassreservation.brand} | {eyeglassreservation.model}</strong></span><br />
                                                                    <span style={{ fontSize: "11px" }}>{eyeglassreservation.type} | {eyeglassreservation.gender}</span><br />
                                                                    <span style={{ fontSize: "11px" }}>{eyeglassreservation.framesize}</span><br /><br />

                                                                    <Link to = {`/editreservation/${eyeglassreservation._id}/${eyeglassreservation.brand}/${eyeglassreservation.model}`}><button className="btn cartviewbtn">Edit Booking</button></Link>
                                                                    <button className="btn cartremovebtn" onClick={handleShow} style={{marginTop:"-57px",marginLeft:"100px",width:"100px"}}>Delete Booking</button>
                                                                </p>
                                                            </div>
                                                            <div className="col md-3" >
                                                                <p className="cartitemscardptag1">
                                                                    <img src={eyeglassreservation.imageurlcolor[0]} alt="" width={100} /><br />
                                                                    <span><strong>LKR</strong></span> <span style={{ color: "#ab2317" }}><strong>{eyeglassreservation.price}</strong></span>
                                                                </p>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            ))}

                                            

                                                <Modal show={show} onHide={handleClose} size="lg">
                                                    <Modal.Header closeButton>
                                                        <Modal.Title style={{ marginTop: "30px", marginLeft: "50px" }}>
                                                            <strong>Deleting Your Booking</strong>
                                                        </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <p style={{ marginLeft: "50px" }}>
                                                            Deleting your reservation will remove all of your
                                                            <br />
                                                            information from our database. This cannot be
                                                            <br />
                                                            undone.
                                                        </p>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <button
                                                            className="editUserbtn1"
                                                            onClick={(e) => deleteBooking(reservationId)}
                                                        >
                                                            <span style={{ fontSize: "12px" }}>Delete my reservation</span>
                                                        </button>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            <span style={{ fontSize: "12px" }}>Never mind, keep my reservation</span>
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>

                                      


                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="card mb-3 border shadow-0 mt-5">
                                    <div className="card-body">
                                        <form>
                                            <img src="https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" style={{ marginLeft: "30px" }} /><br />
                                        </form>
                                    </div>
                                </div>
                                <div className="card mb-3 border shadow-0 mt-5">
                                    <div className="card-body">
                                        <form>
                                            <img src="https://cheeyewear.com.au/cdn/shop/files/Screen_Shot_2023-09-16_at_12.36.42_pm_1200x1200.png?v=1694845852" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" style={{ marginLeft: "30px" }} /><br />
                                        </form>
                                    </div>
                                </div>

                                <div className="card mb-3 border shadow-0 mt-5">
                                    <div className="card-body">
                                        <form>
                                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/2560px-Chanel_logo_interlocking_cs.svg.png" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" style={{ marginLeft: "30px" }} /><br />
                                        </form>
                                    </div>
                                </div>

                                <div className="card mb-3 border shadow-0 mt-5">
                                    <div className="card-body">
                                        <form>
                                            <img src="https://iconape.com/wp-content/png_logo_vector/tens.png" alt="" width="200" className="img-fluid mb-4 mb-lg-0" data-aos="zoom-in" style={{ marginLeft: "30px" }} /><br />
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            )}



        </div>
    );
}

export default BookingScreen;
