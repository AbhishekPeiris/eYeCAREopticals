// NavBar.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/navbar_logo.png';
import styles from '../styles/NavBar.css';

const NavBar = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const isFixed = scrollPosition > 0;

            setIsNavbarFixed(isFixed);
        };

        // Attach the event listener to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                            <li className="nav-item">
                                <Link to="/register" className="nav-link mx-2">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link mx-2">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
