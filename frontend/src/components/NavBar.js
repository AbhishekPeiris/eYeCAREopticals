import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/navbar_logo.png';
import styles from '../styles/NavBar.css';
import axios from 'axios';

const NavBar = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const user = JSON.parse(localStorage.getItem('currentUser'));

    const [cart, setCart] = useState([]);
    const [cartSize, setCartSize] = useState(0); 
    
    useEffect(() => {
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const isFixed = scrollPosition > 0;

            setIsNavbarFixed(isFixed);
        };

        window.addEventListener('scroll', handleScroll);

        async function getCartItems() {
            try {
                const response = await axios.post(`http://localhost:5000/api/cart/getallcartitems/${user.email}`);
                setCart(response.data.cart);
                console.log(cart);
                setCartSize(response.data.cart.length);
                console.log(cartSize);
            } catch (error) {
                console.log(error);
            }
        }

        getCartItems();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    

    }, []);

    function logout() {

        localStorage.removeItem('currentUser')
        window.location.href = '/login';

    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark p-3 ${isNavbarFixed ? 'fixed' : ''}`}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src={logo} alt="Logo" width={105} /></Link>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link mx-2 active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link mx-2">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link mx-2">Services</Link>
                            </li>
                           
                            <li>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown"></div>
                                <ul class="navbar-nav">

                                    {user ? (<>

                                        <div className="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className='fa fa-user'></i>&nbsp;&nbsp;{user.firstname}&nbsp;{user.lastname}
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            
                                                <li className='ddline'><i class="fa fa-user-circle dropdownIcon" aria-hidden="true"></i><Link to="/profile" className="dropdown-item">Your Profile</Link></li>
                                                <li className='ddline'><i class="fa fa-shopping-cart dropdownIcon" aria-hidden="true"></i><Link to="/bookings" className="dropdown-item">Your Bookings</Link></li>
                                                <li className='ddline'><i class="fa fa-user-md dropdownIcon" aria-hidden="true"></i><Link to="/myappointment" className="dropdown-item">Your Appointments</Link></li>
                                                <li className='ddline'><i class="fa fa-sign-out dropdownIcon" aria-hidden="true"></i><Link class="dropdown-item" onClick={logout}>Logout</Link></li>

                                            </ul>

                                        </div>

                                        <li className="nav-item">
                                        <Link to="/cart"><i className="fa fa-shopping-cart dropdownIconcart" aria-hidden="true"/></Link>
                                        <div className='cartitemcount'>{cartSize}</div> {/* Display the cart size */}
                                        </li>
                                    </>) : (<>

                                        <li className="nav-item">
                                            <Link to="/register" className="nav-link mx-2">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link mx-2">Login</Link>
                                        </li>

                                    </>)}
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
