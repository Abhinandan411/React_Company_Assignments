// Header.js
import React from 'react';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link to={"/"}>
                    <h1>Warehouse</h1>
                </Link>

                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
