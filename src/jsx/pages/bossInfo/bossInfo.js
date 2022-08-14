import React, { useState, useEffect } from 'react';
import '../../../scss/pages/bossinfo/bossinfo.css';
import CountryJson from '../../../json/country_list.json';
function BossInfo(props) {
    return (
        <div id='BossInfo'>
            <div className="page_wrapper">
                <Registration></Registration>
                <Brokerbot></Brokerbot>
            </div>
        </div>
    );
}

export default BossInfo;

const Registration = () => {

    return (
        <section id="Registration">
            <div className="section_wrapper">
                <div className="wpb_wrapper wpb_title"><h2>Kaufen und Handeln</h2>
                    <p>Hier können Sie Ihr Investment online durchführen, sich registrieren und Ihr Wallet verknüpfen.</p>
                </div>

                <h3 className='section_title'>
                    Registration
                </h3>
                <div className="form_wrapper">
                    <form action="" method="post">
                        <p className='mb-3'>
                            Register your address to enjoy your shareholder rights.
                        </p>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                E-mail
                            </label>
                            <input type="email" name="" id="" className='form_control p-2 rounded-3' />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Full Name
                            </label>
                            <input type="text" name="" id="" className='form_control p-2 rounded-3' />
                        </div>


                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Address
                            </label>
                            <textarea name="" className="form_control p-2 rounded-3"></textarea>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Post Code
                            </label>
                            <input type="text" name="" id="" className='form_control form_control_sm p-2 rounded-3' />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                City
                            </label>
                            <input type="text" name="" id="" className='form_control form_control_sm p-2 rounded-3' />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Country
                            </label>
                            <select name="" id="" className="form_control form_control_sm p-2 rounded-3">
                                {CountryJson.map(v => {
                                    return (
                                        <option key={v.code} value={v.name}>{v.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="text-end mt-3">
                            <button type="button" class="btn btn-connect-wallet"> Connect to a Wallet </button>
                        </div>




                    </form>
                </div>
            </div>
        </section>
    )
}

const Brokerbot = () => {
    const [btnSelection, setBtnSelection] = useState('buy');
    return (
        <div id="Brokerbot">
            <div className="section_wrapper">
                <div className="wpb_wrapper">
                    <h3 className="section_title">
                        Brokerbot
                    </h3>
                    <div className="brokerbot_wrapper">
                        <div className="card_header">
                            <div className="row gx-0">
                                <div className="col text-center">Amount
                                    <div id="progress-amount" className="progress-bar">
                                        <svg
                                            viewBox="0 0 100 1"
                                            preserveAspectRatio="none"
                                            className='w-100 d-block'
                                        >
                                            <path
                                                d="M 0,0.5 L 100,0.5"
                                                stroke=" #004d9e"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                                style={{ "stroke-dasharray": "100, 100", "stroke-dashoffset": "0" }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="col text-center">Registration
                                    <div id="progress-verification" className="progress-bar">
                                        <svg
                                            viewBox="0 0 100 1"
                                            preserveAspectRatio="none"
                                            className='d-block w-100'>
                                            <path
                                                d="M 0,0.5 L 100,0.5"
                                                stroke=" #004d9e"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                                style={{ "stroke-dasharray": "100, 100", "stroke-dashoffset": "100" }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="col text-center">Confirmation

                                    <div id="progress-verification" className="progress-bar">
                                        <svg
                                            viewBox="0 0 100 1"
                                            preserveAspectRatio="none"
                                            className='d-block w-100'>
                                            <path
                                                d="M 0,0.5 L 100,0.5"
                                                stroke=" #004d9e"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                                style={{ "stroke-dasharray": "100, 100", "stroke-dashoffset": "100" }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card_body">
                            <h3 className="title">
                                Boss Info AG
                            </h3>
                            <div className="form_control">
                                <label htmlFor="" className="form_label">
                                    Number of Shares
                                </label>
                                <div className="btn_control">
                                    <button onClick={() => setBtnSelection('buy')} className={`btn_selection ${btnSelection === 'buy' ? 'active_btn' : ''}`}>Buy</button>
                                    <button onClick={() => setBtnSelection('sell')} className={`btn_selection ${btnSelection === 'sell' ? 'active_btn' : ''}`}>Sell</button>
                                </div>
                            </div>

                        </div>
                        <div className="card_footer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}