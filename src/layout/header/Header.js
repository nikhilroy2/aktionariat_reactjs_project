import React, { useEffect } from 'react';
import logo from './logo.svg'

import './Header.css';
function Header(props) {
    return (
        <header id='Header'>
            <marquee behavior='' scrollamount="3" direction="">
                <a href="#">
                    2nd Aktionariat Investor Event — Sign up for free — 02. September 2022 — Papiersaal, Zürich
                </a>
                <a href="#">
                    2nd Aktionariat Investor Event — Sign up for free — 02. September 2022 — Papiersaal, Zürich
                </a>
                <a href="#">
                    2nd Aktionariat Investor Event — Sign up for free — 02. September 2022 — Papiersaal, Zürich
                </a>
            </marquee>

            <HeaderMenu></HeaderMenu>
        </header>
    );
}

export default Header;

function HeaderMenu() {
    return (
        <menu id="HeaderMenu">
            <div className="section_container">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Toggle button */}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0 d-inline-block" href="#">
                                <img src={logo} id="logo" alt="logo" />
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        For companies
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">Overview</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Secondary Market</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Our Products</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Onboarding Process</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Legal Package</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Pricing</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Corporate Login</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        For investors
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">Overview</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Mobile Wallet</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">The Private Equity Market</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Investment Opportunities</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">How it Works</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Invest in Us</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">All Companies</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        About us
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Get in Touch</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Subscribe to the Newsletter</a>
                                        </li>
                                    </ul>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Resources
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">Documentation</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Slide Deck</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">News</a>
                                        </li>
                                    </ul>
                                </li>



                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            <a href="#" className='text-white'>Invest in us</a>
                            <a href="#" className="btn btn-light">
                                Request a demo
                            </a>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
            </div>
        </menu>
    )
}