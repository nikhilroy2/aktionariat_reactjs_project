import React, { useState, useEffect } from 'react';
import '../../../scss/pages/bossinfo/bossinfo.css';
import CountryJson from '../../../json/country_list.json';
function BossInfo(props) {
    return (
        <div id='BossInfo'>
            <div className="page_wrapper">
                <Registration></Registration>
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

                <h3>
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