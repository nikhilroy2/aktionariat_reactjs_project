import React from 'react';
import './Homepage.css';
function Homepage(props) {
    return (
        <div id='Homepage'>
            <CreateMarketSection></CreateMarketSection>
            <Companies></Companies>
        </div>
    );
}
export default Homepage;


function CreateMarketSection() {
    return (
        <section id="CreateMarketSection">
            <div className="section_container">
                <div className="d-flex">
                    <div class="jumbo_text"><h1>Create a market for
                        <span class="text-gradient-3"> your&nbsp;shares</span>
                    </h1>
                        <p class="text-size-medium">We provide Swiss companies with digital tools to create a market for their shares on their website.</p>
                    </div>

                    <div className="d-flex mb-3">
                        <a href="#" className='req_demo action_arrow align-items-end'>
                            Request a Demo
                            <span className="arrow">
                                ↘
                            </span>
                        </a>
                    </div>
                </div>

                <div className="row company_logo_row my-5">
                    <div className="col">
                        <a href="#">
                            <img width={112} src={require('./img/nzz.svg').default} alt="nzz" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#">
                            <img width={156} src={require('./img/hslu.svg').default} alt="hslu" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#">
                            <img width={156} src={require('./img/bilanz.svg').default} alt="hslu" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#">
                            <img width={156} src={require('./img/moneyca.svg').default} alt="hslu" />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#">
                            <img width={161} src={require('./img/startup.svg').default} alt="hslu" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


function Companies() {
    return (
        <section id="Companies">

        </section>
    )
}