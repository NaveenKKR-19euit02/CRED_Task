import React from "react";
import './navbar.css';
import Logo from '../images/logo3.png';
export function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <img style={{borderRadius:"25px",marginRight:"20px"}}src={Logo} className="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#section">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#dashboard">Booking</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#footer">Contact</a>
                            </li>
                        </ul>
                     
                    </div>
                </div>
            </nav>
        </>

    );
}



