import React from 'react';
import '../../../scss/pages/bossinfo/bossinfo.css';

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
                <div class="wpb_wrapper wpb_title"><h2>Kaufen und Handeln</h2>
                    <p>Hier können Sie Ihr Investment online durchführen, sich registrieren und Ihr Wallet verknüpfen.</p>
                </div>

                <h3>
                    Registration
                </h3>
            </div>
        </section>
    )
}