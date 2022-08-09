import React from 'react';
import './Homepage.css';
function Homepage(props) {
    return (
        <div id='Homepage'>
            <CreateMarketSection></CreateMarketSection>
        </div>
    );
}
export default Homepage;


function CreateMarketSection() {
    return (
        <section id="CreateMarketSection">
            <div className="section_container">
                <div class="jumbo_text"><h1>Create a market for
                    <span class="text-gradient-3"> your&nbsp;shares</span>

                </h1>

                    <p class="text-size-medium">We provide Swiss companies with digital tools to create a market for their shares on their website.</p>


                </div>


            </div>
        </section>
    )
}