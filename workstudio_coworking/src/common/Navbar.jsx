import React from 'react';
import { Link } from 'react-router-dom';
import '../common/Navbar.css';

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <Link to='/'><img src="https://www.workstudiocoworking.com/resources/static/img/logo-light.png" /></Link>
        <Link to='/' className="text-white text-decoration-none">Home</Link>
        <Link to='/' className="text-white text-decoration-none">Our centers</Link>
        <Link to='/' className="text-white text-decoration-none">Add your space</Link>
        <Link to='/' className="text-white text-decoration-none">Submit your requirement</Link>
        <Link to='/' className="text-white text-decoration-none">Blogs</Link>
        </nav>
        </>
    )
}

export default Navbar;


// 