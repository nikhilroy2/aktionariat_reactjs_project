import React from 'react';
import '../../../scss/pages/for_companies/for_companies.css';
function ForCompanies(props) {
    return (
        <div id='ForCompanies' className=''>
            <Section1></Section1>
        </div>
    );
}

export default ForCompanies;

const Section1 = () => {
    const client_object = [
        {
            id: 1,
            name: '',
            link: 'https://www.bossinfo.ch/ueber-uns/token/',
            img: require('../../../icons/company_icons/bossinfo.svg').default,
            alt: 'Boss Info Logo'
        },
        {
            id: 2,
            name: '',
            link: 'https://www.greenconsensus.ch/investor',
            img: require('../../../icons/company_icons/greenconsensus.png'),
            alt: 'Green Consensus Logo'
        },
        {
            id: 3,
            name: '',
            link: 'https://quitt.ch/investoren/',
            img: require('../../../icons/company_icons/quitt.svg').default,
            alt: 'Quitt Logo'
        },
        {
            id: 4,
            name: 'https://tbo.clothing/ch-en/investors/',
            link: 'https://tbo.clothing/ch-en/investors/',
            img: require('../../../icons/company_icons/tbo.svg').default,
            alt: 'T-Bo Logo'
        },
    ]
    return (
        <section id="Section" className='section section-hero companies'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-2">
                        <div className="content-grid">
                            <div id="w-node-_4eb94a96-dc01-0261-8c0c-b0472e89414e-decd91f1">
                                <div className="padding-bottom padding-xxlarge">
                                    <h1>
                                        Kickstart a <span className="text-gradient-1">market</span> for
                                        your shares
                                    </h1>
                                </div>
                                <div className="content-grid clientbar-grid-2">
                                    {
                                        client_object.map(v => {
                                            return (
                                                <a id='w-node-_26745c71-c75a-7941-f178-ab44faf9366f-379e7826'
                                                    href={v.link}
                                                    target="_blank" rel='noreferrer'
                                                    className="client-logo w-inline-block"
                                                >
                                                    <img
                                                        src={v.img}
                                                        loading="lazy"
                                                        alt={v.alt}
                                                        className="clientbar1_logo"
                                                    />
                                                </a>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                            <div
                                id="w-node-_76e98fea-7bac-08b5-9f44-080dfdb7ad51-decd91f1"
                                className="hero-image for-companies"
                            >
                                <br />‍
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}