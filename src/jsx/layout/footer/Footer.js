import React from 'react';
import logo from '../../../scss/layout/header/Header.css'
import '../../../scss/layout/footer/Footer.css';
function Footer(props) {
    return (
        <footer id='footer'>
            <div className="section_container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <ul className="list-unstyled footer_list">
                                <li>
                                    <img src={logo} alt="logo" />
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Solutions
                            </h3>
                            <ul className="list-unstyled footer_list">
                                <li>
                                    <a href="#">For companies</a>
                                </li>
                                <li>
                                    <a href="#">For investors</a>
                                </li>
                                <li>
                                    <a href="#">Our products</a>
                                </li>
                                <li>
                                    <a href="#">Corporate login</a>
                                </li>

                            </ul>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                About us
                            </h3>
                            <ul className="list-unstyled footer_list">
                                <li>
                                    <a href="#">Our vision</a>
                                </li>
                                <li>
                                    <a href="#">Team & career</a>
                                </li>
                                <li>
                                    <a href="#">Our products</a>
                                </li>
                                <li>
                                    <a href="#">Press room</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Resources
                            </h3>
                            <ul className="list-unstyled footer_list">
                                <li>
                                    <a href="#">Documentation</a>
                                </li>
                                <li>
                                    <a href="#">Developer resources</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Legal & privacy
                            </h3>
                            <ul className="list-unstyled footer_list">
                                <li>
                                    <a href="#">Terms of service</a>
                                </li>
                                <li>
                                    <a href="#">Legal package</a>
                                </li>
                                <li>
                                    <a href="#">Impressum</a>
                                </li>
                            </ul>
                        </div>


                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Contact
                            </h3>
                            <ul className="list-unstyled footer_list">
                                <li>
                                    <a href="#">E-mail</a>
                                </li>
                                <li>
                                    <a href="#">Call</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">Linkedin</a>
                                </li>
                                <li>
                                    <a href="#">Telegram</a>
                                </li>
                                <li>
                                    <a href="#">Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row footer_list">
                        <div className="col-6">
                            <span className="footer_item">
                                © 2022 AKTIONARIAT AG
                            </span>
                        </div>
                        <div className="col-6 text-end">
                            <span className="footer_item">
                                All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;