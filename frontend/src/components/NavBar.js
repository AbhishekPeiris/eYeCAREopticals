import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div class="container-fluid">
        <Link to="/" class="navbar-brand">Navbar</Link>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/" class="nav-link mx-2 active" aria-current="page">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/#" class="nav-link mx-2">Products</Link>
                </li>
                <li class="nav-item">
                    <Link to="#" class="nav-link mx-2">Pricing</Link>
                </li>
                <li class="nav-item dropdown">
                    <Link to="#" class="nav-link mx-2 dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Company
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link to="#" class="dropdown-item">Blog</Link></li>
                        <li><Link to="#" class="dropdown-item">About Us</Link></li>
                        <li><Link to="#" class="dropdown-item">Contact us</Link></li>
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
