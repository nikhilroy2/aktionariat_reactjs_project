import React, { useEffect } from 'react';
import logo from '../../../images/logo.svg';
import MenuIcon from '../../../images/layout/header/menu_icon.svg';
import '../../../scss/layout/header/Header.css';
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
    const companies_object = [
        {
            id: 1,
            name: 'Overview',
            link: '#',
            active: false
        },
        {
            id: 2,
            name: 'Secondary Market',
            link: '#',
            active: false

        },
        {
            id: 3,
            name: 'Our Products',
            link: '#',
            active: false

        },
        {
            id: 4,
            name: 'Onboarding Process',
            link: '#',
            active: false

        },
        {
            id: 5,
            name: 'Legal Package',
            link: '#',
            active: false

        },
        {
            id: 6,
            name: 'Pricing',
            link: '#',
            active: false

        },
        {
            id: 6,
            name: 'Corporate Login',
            link: '#',
            active: true
        },
    ]
    const investors_object = [
        {
            id: 1,
            name: 'Overview',
            link: '#',
            active: false,
        },
        {
            id: 2,
            name: 'Mobile Wallet',
            link: '#',
            active: false,
        },
        {
            id: 3,
            name: 'The Private Equity Market',
            link: '#',
            active: false,
        },
        {
            id: 4,
            name: 'Investment Opportunities',
            link: '#',
            active: false,
        },
        {
            id: 5,
            name: 'How it Works',
            link: '#',
            active: false,
        },
        {
            id: 6,
            name: 'Invest in Us',
            link: '#',
            active: true,
        },
        {
            id: 7,
            name: 'All Companies',
            link: '#',
            active: true,
        },
    ]
    const about_us_object = [
        {
            id: 1,
            name: 'About us',
            link: '#',
            active: false,
        },
        {
            id: 1,
            name: 'FAQ',
            link: '#',
            active: true,
        },
        {
            id: 1,
            name: 'Get in Touch',
            link: '#',
            active: true,
        },
        {
            id: 1,
            name: 'Subscribe to the Newsletter',
            link: '#',
            active: true,
        },
    ]
    const resource_object = [
        {
            id: 1,
            name: 'Documentation',
            link: '#',
            active: false,
        },
        {
            id: 1,
            name: 'Slide Deck',
            link: '#',
            active: false,
        },
        {
            id: 1,
            name: 'Blog',
            link: '#',
            active: false,
        },
        {
            id: 1,
            name: 'News',
            link: '#',
            active: false,
        },
    ]
    return (
        <menu id="HeaderMenu" className='position-relative'>
            <div className="section_container px-0">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    {/* Container wrapper */}
                    <div className="container-fluid px-0">
                        <div className="d-flex d-lg-none align-items-center justify-content-between w-100">
                            <a className="navbar-brand mt-2 mt-lg-0 d-inline-block" href="#">
                                <img src={logo} id="logo" alt="logo" />
                            </a>

                            {/* Toggle button */}
                            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <img src={MenuIcon} alt="bar" />
                            </button>
                        </div>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0 d-none d-lg-inline-block" href="#">
                                <img src={logo} id="logo" alt="logo" />
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-wrap">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        For companies <i className="fa-solid ms-2 fa-angle-down"></i>
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            companies_object.map(v => {
                                                return (
                                                    <li key={v.id}>
                                                        <a className={`dropdown-item ${v.active ? 'active_item' : ''}`} href={v.link}>{v.name}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        For investors <i className="fa-solid ms-2 fa-angle-down"></i>
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {investors_object.map(v => {
                                            return (
                                                <li key={v.id}>
                                                    <a className={`dropdown-item ${v.active ? 'active_item' : ''}`} href={v.link}>{v.name}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        About us <i className="fa-solid ms-2 fa-angle-down"></i>
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {about_us_object.map(v => {
                                            return (<li key={v.id}>
                                                <a className={`dropdown-item ${v.active ? 'active_item' : ''}`} href={v.link}>{v.name}</a>
                                            </li>)
                                        })}
                                    </ul>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                        Resources <i className="fa-solid ms-2 fa-angle-down"></i>
                                    </a>
                                    {/* Dropdown menu */}
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {resource_object.map(v => {
                                            return (<li key={v.id}>
                                                <a className={`dropdown-item ${v.active ? 'active_item' : ''}`} href={v.link}>{v.name}</a>
                                            </li>)
                                        })}
                                    </ul>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                        {/* Right elements */}
                        <div className="d-none d-lg-flex align-items-center">
                            <a href="#" className='text-white me-4 text-nowrap'>Invest in us</a>
                            <a href="#" className="btn btn-light text-black p-2 text-nowrap px-3">
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