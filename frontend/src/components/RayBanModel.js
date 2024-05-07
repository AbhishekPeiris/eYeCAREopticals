import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/RayBanModel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rating from 'react-rating-stars-component';
import StripeCheckout from "react-stripe-checkout";
import Swal from 'sweetalert2';
import Loader from '../components/Loader';

const RayBanModel = () => {
    const [eyeglass, setEyeglass] = useState([]);
    const [selectedColor, setSelectedColor] = useState(1); // Default to color 1
    const [selectedButton, setSelectedButton] = useState(null);

    const [cart, setCart] = useState([]);

    const user = JSON.parse(localStorage.getItem('currentUser'));

    const [email, setEmail] = useState();
    const [cusname, setCusname] = useState();
    const [contact, setContact] = useState();
    const [address, setAddress] = useState();

    const [modelNo, setModelNo] = useState();
    const [type, setType] = useState();
    const [brandname, setBrandName] = useState();
    const [gender, setGender] = useState();
    const [price, setPrice] = useState();
    const [rating, setRating] = useState();
    const [status, setStatus] = useState();
    const [imageurlcolor, setImageurlColor] = useState([]);

    const [framesize, setFramsize] = useState();

    const { brand, model } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    

    const [eyeglassID, seteyeglassID] = useState('');
    const [eyeglasscartID, seteyeglasscartID] = useState('');


    useEffect(() => {

        if(localStorage.getItem('currentUser')){

            async function getEyeglassDetails(brand, model) {

                setEmail(user.email);
                setCusname(user.firstname + " " + user.lastname);
                setContact(user.contact);
                setAddress(user.address)
    
                try {
                    setLoading(true);
                    const response = await axios.post(`http://localhost:5000/api/eyeglass/${brand}/${model}`)
                    setEyeglass(response.data.eyeGlass);
                    console.log(response.data.eyeGlass);
    
                    // Only set individual states once after fetching data
                    if (response.data.eyeGlass.length > 0) {
                        const eyeglassData = response.data.eyeGlass[0]; 
                        seteyeglassID(eyeglassData._id)// Assuming only one item is returned
                        setModelNo(eyeglassData.model);
                        setType(eyeglassData.type);
                        setBrandName(eyeglassData.brand);
                        setGender(eyeglassData.gender);
                        setPrice(eyeglassData.price);
                        setRating(eyeglassData.rating);
                        setStatus(eyeglassData.status);
                        setImageurlColor(eyeglassData.imageurlcolor1);
                        setFramsize(eyeglassData.framesize1);
                    }
                    setLoading(false);
    
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
            getEyeglassDetails(brand, model);
    
            async function getCartItems() {
                try {
                    setLoading(true);
                    const response = await axios.post(`http://localhost:5000/api/cart/getallcartitems/${user.email}`);
                    setCart(response.data.cart);
                    console.log(response.data.cart);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
    
            getCartItems();

            async function getCartItem() {
                try {
                    setLoading(true);
                    const response = await axios.post(`http://localhost:5000/api/cart/getallcartitems/${user.email}/${model}`);
                    console.log(response.data.cart);
                    const CartData = response.data.cart[0]; 
                    seteyeglasscartID(CartData._id)
                    console.log(CartData._id)
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
    
            getCartItem();

        }
        else{
            Swal.fire('Oops!',"Please login to the system", "warning").then(result => {
                navigate('/login');
            });
            
            
        }

        
    }, []);

    

    const selectColor = (colorNumber) => {
        setSelectedColor(colorNumber);
    }

    async function AddtoCart() {

        let isAlreadyAdded = false;

        for (const item of cart) {
            if (item.model === modelNo) {
                isAlreadyAdded = true;
                break;
            }
        }

        if (isAlreadyAdded) {
            alert('Item already added to cart');
        }
        else{

            const newCartItem = {

                email : email,
                model : modelNo,
                type : type,
                brand : brandname,
                gender : gender,
                price : price,
                rating : rating,
                status : status,
                imageurlcolor : imageurlcolor
            }
    
            try {
                setLoading(true);
                const response = await axios.post("http://localhost:5000/api/cart/addtocart", newCartItem);
                console.log(response.data);
                console.log(newCartItem);
                window.location.reload();
                setLoading(false);
    
            } catch (error) {
                console.log(error);
                setLoading(false);
            }

        }

       
    }

    async function onToken(token) {

        console.log(token);

        const newEyeglassReservation = {
            cusname : cusname,
            contact : contact,
            address : address,
            email : email,
            model : modelNo,
            type : type,
            brand : brandname,
            gender : gender,
            framesize : framesize,
            price : price,
            imageurlcolor : imageurlcolor

          }

          const updateEyeglassStatus = {
            status: "Out of stock",
        };
          
      
          try {
            setLoading(true);
            const data = (await axios.post('http://localhost:5000/api/eyeglassreservation/createeyeglassreservation', newEyeglassReservation)).data;
            console.log(data);
            const updateResponse = await axios.put(
                `http://localhost:5000/api/eyeglass/updateyeglassstatus/${eyeglassID}`,
                updateEyeglassStatus
            );
            console.log(updateResponse.data);
            console.log(eyeglasscartID);

            const updateResponsecart = await axios.put(
                `http://localhost:5000/api/cart/updateyeglassstatuscart/${eyeglasscartID}`,
                updateEyeglassStatus
            );
            console.log(updateResponsecart.data);

           // await axios.post('http://localhost:5000/api/sendemail/summery', {object : data, email : data.email})    
            Swal.fire('Thank you!', "Your Reservation is Successfully", "success").then(result => {
             // window.location.href = '/bookings';
            });
            setLoading(false);
            
          } catch (error) {
            console.log(error);
            Swal.fire('Error', "Your Resetvation is Unsuccessfully", "error");
            setLoading(false);
          }

    }

    function selectSize(size) {
        setFramsize(size);
    }

    return (
        <div>

        {loading ? (
            <Loader />
        ) : (
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
                                    <button key={colorNumber} className='framecolorimg' onClick={() => {selectColor(colorNumber);setImageurlColor(eyeglass[`imageurlcolor${colorNumber}`][0])}}>
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
                        <button className='btn btn-primary addtocartbtn' onClick={AddtoCart}><i class="fa fa-cart-plus" aria-hidden="true"></i> &nbsp;Add to Cart</button>
                        
                        <StripeCheckout
                             amount={eyeglass.price * 100}
                             token={onToken}
                             currency='LKR'
                             stripeKey="pk_test_51Nu7smDOmIYodrCji9U41paJjaMrcNBAi0HhO8DB5i0c0fXxABtjqL7GCZJxoSHMvBu8U2uymvDSKsZaAUGsbCpi000BhYzBG5"
                             
                        ><button className='btn btn-primary eyeglasspaynowbtn'>Pay Now!</button></StripeCheckout>
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
            
        )}

        </div>
            
    );
}

export default RayBanModel;
