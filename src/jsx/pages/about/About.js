import React, { useState } from 'react';

function About(props) {
    return (
        <div id='About'>
            <SectionHero></SectionHero>
            <OurVision></OurVision>
            <OurCoreValues></OurCoreValues>
            <OpenPosition></OpenPosition>
            <Team></Team>
        </div>
    );
}

export default About;

const SectionHero = () => {
    return <section id="SectionHero" className='section section-hero about'>
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-top padding-xxhuge custom-hero-2">
                    <div className="max-width-large">
                        <div className="padding-bottom">
                            <h1>
                                About us
                                <span className="text-gradient-3" />
                            </h1>
                            <div className="margin-top margin-medium">
                                <p>
                                    The time has come to change the way private companies finance
                                    themselves. Join us on our mission to transform Private Equity
                                    into Open Equity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

const OurVision = () => {
    return (
        <section id='our-vision' className="section section-grey">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="margin-bottom margin-xlarge">
                        <div className="content-grid rows-4">
                            <div
                                id="w-node-_982f607e-e572-bea8-c80f-5565c3ea7f56-7852fb88"
                                className="content-block space-between">
                                <div className="margin-bottom">
                                    <h2 className="heading-label text-color-grey">Our Vision</h2>
                                    <h3 className="heading-large">
                                        Aktionariat AG is <br />a{" "}
                                        <span className="text-gradient-1">young startup</span> with a{" "}
                                        <span className="text-gradient-1">bold&nbsp;vision.</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-color-darkgrey">
                        Today, only 230 out of more than 500′000 Swiss companies are publicly
                        traded on the stock market. We have the legal, technical, and economic
                        ideas to change this and to create liquid markets for thousands of
                        additional Swiss companies, potentially unlocking billions in dormant
                        economic value. Companies benefit from better access to capital and
                        investors benefit from a broader investment universe. Unlike today’s
                        crypto assets, which are mostly known for short-term speculation, we want
                        to leverage the underlying technology to enable long-term value-investing
                        and to build a culture of local, sustainable, transparent and
                        decentralized finance.
                        <br />
                        <br />
                        Aktionariat provides a platform for issuing, managing and trading
                        tokenized shares. Blockchain technology enables a direct market between
                        the company and its investors, and also serves as a distributed ledger. If
                        you would like to learn more about our platform or join our shareholders,
                        see our Investor Relations page.
                    </p>
                    <div className="divider" />
                    <div className="max-width-full">
                        <img
                            src={require('../../../images/pages/about/about-team.jpg')}
                            loading="lazy"
                            sizes="100vw"
                            alt="Aktionariat team on an event."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const OurCoreValues = () => {
    return <section className='section'>
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="section-title">
                        <div className="margin-bottom">
                            <div className="content-grid rows-4">
                                <div
                                    id="w-node-_23324a3a-0fa7-c17d-bcde-69b9cfecbf95-7852fb88"
                                    className="content-block space-between"
                                >
                                    <div className="margin-bottom margin-medium">
                                        <div className="margin-bottom margin-medium">
                                            <h2>
                                                Our core <span className="text-gradient-1">values</span>{" "}
                                                &amp; <span className="text-gradient-1">capabilities</span>
                                            </h2>
                                        </div>
                                        <p className="text-size-medium text-color-darkgrey">
                                            We enable the creation of decentralized markets for shares
                                            that allow liquidity, inclusion, and a better alignment of
                                            interests of the company and its stakeholders. Thereby we want
                                            to shape the future of financial ecosystems.
                                        </p>
                                    </div>
                                    <div className="content-grid">
                                        <div
                                            id="w-node-f1e2d1dd-1bbb-6cd4-620e-6097c5064d2f-7852fb88"
                                            className="layout-item"
                                        >
                                            <div className="margin-bottom">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-xlarge">1000+</h3>
                                                </div>
                                                <div className="margin-bottom margin-small">
                                                    <p className="text-size-medium text-color-grey">
                                                        Investors
                                                    </p>
                                                </div>
                                                <p className="text-color-grey">
                                                    Our ecosystem consists of a growing number of investors
                                                    who finance Swiss SMEs by purchasing shares.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_2bbdcb72-c766-151e-320f-0a14a1dbb7ba-7852fb88"
                                            className="layout-item"
                                        >
                                            <div className="margin-bottom">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-xlarge">9+</h3>
                                                </div>
                                                <div className="margin-bottom margin-small">
                                                    <p className="text-size-medium text-color-grey">
                                                        Partners
                                                    </p>
                                                </div>
                                                <p className="text-color-grey">
                                                    We are working with an increasing number of partners in
                                                    various fields in DeFi and TradFi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_23324a3a-0fa7-c17d-bcde-69b9cfecbfa9-7852fb88"
                                    className="image-div about our-values"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

const OpenPosition = () => {
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false)
    return <section className="section section-grey">
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="section-title">
                        <h2 className="heading-label text-color-grey">Open Positions</h2>
                        <div className="margin-bottom margin-xlarge">
                            <p className="heading-large text-weight-bold max-width-xlarge">
                                You’d like to help us{" "}
                                <span className="text-gradient-1">reDeFine </span>the Swiss stock
                                market?
                            </p>
                        </div>
                    </div>
                    <div className="open-positions-list">
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div
                                    role="listitem"
                                    className="accordion-item w-dyn-item"
                                    style={{ opacity: "0.6" }}
                                >
                                    <div className="accordion-trigger"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#accordion1" onClick={() => setAccordion1(!accordion1)}>
                                        <div className="dropdown-title large-title">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="horizontal-center">
                                                    <div className="heading-label text-color-grey margin-right margin-xsmall">
                                                        REMOTE FRIENDLY
                                                    </div>
                                                    <div className="heading-label text-color-grey margin-right margin-xsmall">
                                                        •
                                                    </div>
                                                    <div className="heading-label text-color-grey margin-right margin-xsmall">
                                                        Fulltime
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Strategic Partnership Manager
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon"
                                            style={{ transform: accordion1 ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                        >
                                            <img
                                                src={require('../../../icons/plus.svg').default}
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div id="accordion1"
                                        className="accordion-item-content accordion-collapse collapse"
                                    >
                                        <div className="accordion-description">
                                            <div className="text-rich-text w-dyn-bind-empty w-richtext" />
                                            <a
                                                href="https://join.com/companies/aktionariat/5403277-strategic-partnership-manager-with-technical-flair"
                                                target="_blank" rel="noreferrer"
                                                className="button w-button"
                                            >
                                                Go to Job Ad
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    role="listitem"
                                    className="accordion-item w-dyn-item"
                                    style={{ opacity: "0.6" }}
                                >
                                    <div className="accordion-trigger" onClick={() => setAccordion2(!accordion2)}
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#accordion2">
                                        <div className="dropdown-title large-title">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="horizontal-center">
                                                    <div className="heading-label text-color-grey margin-right margin-xsmall">
                                                        Remote Friendly
                                                    </div>
                                                    <div className="heading-label text-color-grey margin-right margin-xsmall">
                                                        •
                                                    </div>
                                                    <div className="heading-label text-color-grey margin-right margin-xsmall">
                                                        Full-time
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Senior Android Developer
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: accordion2 ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                                            <img
                                                src={require('../../../icons/plus.svg').default}
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        id="accordion2"
                                        className="accordion-item-content accordion-collapse collapse"

                                    >
                                        <div className="accordion-description">
                                            <div className="text-rich-text w-richtext">
                                                <p>
                                                    Are you looking for a job in the rapidly growing
                                                    blockchain sphere? Are you fascinated by the potential
                                                    applications of blockchains in the financial sector? Do
                                                    you want to be part of a cutting-edge development team
                                                    building blockchain software such as non-custodial
                                                    wallets, multi-signature schemes, innovative smart
                                                    contracts?
                                                </p>
                                            </div>
                                            <a
                                                href="https://join.com/companies/aktionariat/3923410-senior-android-developer"
                                                target="_blank"
                                                className="button w-button"
                                            >
                                                Go to Job Ad
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

    </section>
}

const Team = () => {
    const team_member_object = [
        {
            id: 1,
            img: require('../../../images/pages/about/nicola.jpg'),
            name: 'Nicola Plain',
            role: 'CEO',
            description: 'Business innovator & entrepreneur with a “let’s make it possible” mentality',
            email: {
                img: require('../../../icons/email.svg').default,
                link: 'mailto:nicola@aktionariat.com'
            },
            linkedin: {
                img: require('../../../icons/linkedin.svg').default,
                link: 'http://linkedin.com/in/nicola-plain-a200701a'
            }
        },
        {
            id: 2,
            img: require('../../../images/pages/about/murat.jpg'),
            name: 'Murat Ögat',
            role: 'CTO',
            description: 'Founder, tech entrepreneur experienced in building startups, strong development skills.',
            email: {
                img: require('../../../icons/email.svg').default,
                link: 'mailto:murat@aktionariat.com'
            },
            linkedin: {
                img: require('../../../icons/linkedin.svg').default,
                link: 'http://linkedin.com/in/muratogat'
            }
        },
        {
            id: 3,
            img: require('../../../images/pages/about/luzius.jpg'),
            name: 'Chairman',
            role: 'CTO',
            description: 'Tokenization proponent, investor and board member in various startups',
            email: {
                img: require('../../../icons/email.svg').default,
                link: 'mailto:luzius@aktionariat.com'
            },
            linkedin: {
                img: require('../../../icons/linkedin.svg').default,
                link: 'http://linkedin.com/in/luziusmeisser'
            }
        },
        {
            id: 4,
            img: require('../../../images/pages/about/Błądek.jpg'),
            name: 'Piotr Błądek',
            role: 'Senior Software Engineer',
            description: 'Tokenization proponent, investor and board member in various startups',
            email: {
                img: require('../../../icons/email.svg').default,
                link: 'mailto:piotr@aktionariat.com'
            },
            linkedin: {
                img: require('../../../icons/linkedin.svg').default,
                link: 'http://linkedin.com/in/piotr-błądek-8a3a60120'
            }
        },


    ]
    return (
        <section id="team">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <div className="margin-bottom margin-xlarge">
                                <div className="margin-bottom margin-medium">
                                    <h2 className="heading-display">
                                        <span className="text-gradient-1">Our Team</span>
                                    </h2>
                                </div>
                                <p className="text-size-medium text-color-darkgrey">
                                    Driven by the idea to disrupt financial markets.
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom">
                            <div className="blog1_component">
                                <div className="w-dyn-list">
                                    <div role="list" className="collection-grid w-dyn-items">
                                        {
                                            team_member_object.map(v => {
                                                return (
                                                    <div role="listitem" key={v.id} className="collection-item w-dyn-item">
                                                        <div className="member-item-wrapper margin-bottom margin-medium">
                                                            <div className="member_image-wrapper">
                                                                <div style={{ backgroundImage: `url(${v.img})` }} className="square-image" />
                                                            </div>
                                                            <div className="member_content">
                                                                <div className="margin-bottom margin-small">
                                                                    <div className="margin-bottom margin-xsmall">
                                                                        <h3 className="text-size-large text-weight-normal">
                                                                            {v.name}
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-color-darkgrey">{v.role}</div>
                                                                </div>
                                                                <div className="margin-bottom margin-medium">
                                                                    <p className="text-size-small text-color-grey">
                                                                        {v.description}
                                                                    </p>
                                                                </div>
                                                                <div className="horizontal-center">
                                                                    <div className="margin-right margin-small">
                                                                        <a
                                                                            href={v.email.link}
                                                                            className="w-inline-block"
                                                                        >
                                                                            <div className="icon-1x1-small">
                                                                                <img
                                                                                    src={v.email.img}
                                                                                    loading="lazy"
                                                                                    alt="Email Icon"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <a
                                                                        href={v.linkedin.link}
                                                                        className="w-inline-block"
                                                                    >
                                                                        <div className="icon-1x1-small">
                                                                            <img
                                                                                src={v.linkedin.img}
                                                                                loading="lazy"
                                                                                height={24}
                                                                                alt="LinkedIn Icon"
                                                                            />
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}