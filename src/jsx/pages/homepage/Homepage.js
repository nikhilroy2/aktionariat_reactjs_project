import React from 'react';
import '../../../scss/pages/homepage/Homepage.css';
import CompanyTable from '../../../jsx/components/CompanyTable/CompanyTable';
function Homepage(props) {
    return (
        <div id='Homepage'>
            <CreateMarketSection></CreateMarketSection>
            <Companies></Companies>
            <VideoSection></VideoSection>
            <CompanyEmpower></CompanyEmpower>
            <OurVision></OurVision>
            <OurSolution></OurSolution>
            <LatestBlogs></LatestBlogs>
            <LatestNews></LatestNews>
            <CustomerFeedback></CustomerFeedback>
            <NewsLatter></NewsLatter>
        </div>
    );
}
export default Homepage;


function CreateMarketSection() {
    const company_object = [
        {
            id: 1,
            img: require('../../../images/pages/homepage/nzz.svg').default,
            link: '#',
            width: 112,
        },
        {
            id: 2,
            img: require('../../../images/pages/homepage/hslu.svg').default,
            link: '#',
            width: 156,
        },
        {
            id: 3,
            img: require('../../../images/pages/homepage/bilanz.svg').default,
            link: '#',
            width: 156,
        },
        {
            id: 4,
            img: require('../../../images/pages/homepage/moneyca.svg').default,
            link: '#',
            width: 156,
        },
        {
            id: 5,
            img: require('../../../images/pages/homepage/startup.svg').default,
            link: '#',
            width: 161,
        },

    ]
    return (
        <section id="CreateMarketSection">
            <div className="section_container">
                <div className="d-flex justify-content-between flex-wrap flex-lg-nowrap">
                    <div className="jumbo_text"><h1>Create a market for
                        <span className="text-gradient-3"> your&nbsp;shares</span>
                    </h1>
                        <p className="text-size-medium">We provide Swiss companies with digital tools to create a market for their shares on their website.</p>
                    </div>
                    <div className="d-flex mb-3 justify-content-end req_wrapper mt-4">
                        <a href="#" className='req_demo action_arrow align-items-end'>
                            Request a Demo
                            <span className="arrow">
                                ↘
                            </span>
                        </a>
                    </div>
                </div>
                <div className="row company_logo_row flex-wrap flex-sm-nowrap my-3 my-md-5 py-md-5 align-items-center">

                    {company_object.map(v => {
                        return (
                            <div className={`col ${v.id !== 1 ? 'text-end' : ''}`}>
                                <a href={v.link}>
                                    <img width={v.width} src={v.img} alt="img" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


function Companies() {
    const company_table_object = [
        {
            id: 1,

        }
    ]
    return (
        <section id="Companies">
            <div className="section_container">
                <h2 className="heading-label text-color-grey">Investment Opportunities</h2>
                <div className="margin-bottom margin-small"><p className="heading-large text-weight-bold">Companies</p></div>
                <p className="paragraph margin-bottom margin-large">Important information: Read our <a href="/disclaimer"><strong>disclaimer</strong> </a>before taking any investment decisions.</p>

                <CompanyTable data={company_table_object}></CompanyTable>
            </div>


            <div className="section_container pt-5">
                {/* show more */}
                <a href="#" className='w-100 d-block action_arrow '>
                    Show more
                    <span className="arrow">
                        ↘
                    </span>
                </a>
            </div>

        </section>
    )
}


function VideoSection() {
    return (
        <div id="VideoSection">
            <div className="page-padding"><div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="max-width-full">
                        <div className="margin-top margin-small">
                            <div style={{ "padding-top": "56.17021276595745%" }}
                                className="w-embed-youtubevideo homepage-video">
                                <iframe src="https://www.youtube-nocookie.com/embed/0qpMAnr9Nwo?rel=0&controls=1&autoplay=1&mute=1&start=0"
                                    frameBorder={0} style={{ "position": "absolute", "left": "0", "top": "0", "width": "100%", "height": "100%", "pointer-events": "auto" }} allow="autoplay; encrypted-media" allowFullScreen title="Aktionariat" /></div></div></div></div></div></div>
        </div>
    )
}

function CompanyEmpower() {
    return (

        <section id="CompanyEmpower" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">What We Enable</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    We empower your company to{" "}
                                    <span className="text-gradient-1">
                                        self-finance through&nbsp;its ecosystem.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="content-grid">
                            <div
                                id="w-node-_56209af1-0039-0a72-959e-32a5445db57c-445db57b"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content justify-start">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3ce52d49394879f9a3_icon-color-continuous.svg"
                                            loading="lazy"
                                            alt
                                            className="icon-1x1-small"
                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                        />
                                    </div>
                                    <div className="max-width-full">
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                <a href="http://client.aktionariat.com/continuous-fundraising">
                                                    Continuous fundraising
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-color-darkgrey">
                                            Allow new investors to buy-in at any time directly through
                                            your website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_56209af1-0039-0a72-959e-32a5445db586-445db57b"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content justify-start">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3cb5fb87497a989a3c_icon-color-community.svg"
                                            loading="lazy"
                                            alt
                                            className="icon-1x1-small"
                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                        />
                                    </div>
                                    <div className="max-width-full">
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                <a href="http://client.aktionariat.com/community-engagement">
                                                    Community engagement
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-color-darkgrey">
                                            Let clients, suppliers, and other stakeholders participate in
                                            your success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_56209af1-0039-0a72-959e-32a5445db590-445db57b"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content justify-start">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3df007f810f5190a69_icon-color-employee.svg"
                                            loading="lazy"
                                            alt
                                            className="icon-1x1-small"
                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                        />
                                    </div>
                                    <div className="max-width-full">
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                <a href="http://client.aktionariat.com/employee-participation">
                                                    Employee participation
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-color-darkgrey">
                                            Incentivize your employees with real shares of tangible value.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_56209af1-0039-0a72-959e-32a5445db59a-445db57b"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content justify-start">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3de52d49649479f9a4_icon-color-strategic.svg"
                                            loading="lazy"
                                            alt
                                            className="icon-1x1-small"
                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                        />
                                    </div>
                                    <div className="max-width-full">
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                <a href="http://client.aktionariat.com/strategic-independence">
                                                    Strategic independence
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-color-darkgrey">
                                            Enjoy liquidity and grow your company without being pushed
                                            towards an exit.
                                        </p>
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

function OurVision() {
    return (
        <section id="OurVision">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-0">
                                    <h2
                                        id="w-node-_42b832d8-0436-d744-9edb-85b3c7346cc7-e57ea549"
                                        className="heading-label text-color-grey"
                                    >
                                        Our Vision
                                    </h2>
                                    <p
                                        id="w-node-_45b08ea8-8353-0604-2aec-9c851dc403fb-e57ea549"
                                        className="heading-large text-weight-bold"
                                    >
                                        Welcome to the era of{" "}
                                        <span className="text-gradient-3">direct</span> and{" "}
                                        <span className="text-gradient-3">scalable</span> relations
                                        between companies and investors—built on blockchain technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-grid rows-4">
                            <div
                                id="w-node-_6205f154-9ae5-1265-f507-101ae10b3d05-e57ea549"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6193f7779d29bab3d2e05e88_aktionariat-gradient-icon-company.svg"
                                            loading="lazy"
                                            alt="Company Icon"
                                            className="icon-1x1-large"
                                        />
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <h3 className="text-size-xlarge text-weight-normal">
                                            For companies
                                        </h3>
                                    </div>
                                    <p className="text-color-grey">
                                        Companies should have the capability to raise funds directly
                                        through their website.
                                    </p>
                                </div>
                                <a
                                    href="/for-companies"
                                    className="button-arrow button-arrow-large w-inline-block"
                                >
                                    <div>Show more</div>
                                    <div
                                        className="arrow"
                                        style={{
                                            "-webkit-transform":
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            "-ms-transform":
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            "-webkit-transform-style": "preserve-3d",
                                            "-ms-transform-style": "preserve-3d",
                                            "transform-style": "preserve-3d",
                                        }}
                                    >
                                        ↘
                                    </div>
                                </a>
                            </div>
                            <div
                                id="w-node-d5266f8e-c88a-1f7f-a6d6-e31dfa9b41c9-e57ea549"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6193f85676a2b2dbf0653b67_aktionariat-gradient-icon-investor.svg"
                                            loading="lazy"
                                            alt="Investor Icon"
                                            className="icon-1x1-large"
                                        />
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <h3 className="text-size-xlarge text-weight-normal">
                                            For investors
                                        </h3>
                                    </div>
                                    <p className="text-color-grey">
                                        Anyone should be able to invest in the companies they believe in.
                                    </p>
                                </div>
                                <a
                                    href="/for-investors"
                                    className="button-arrow button-arrow-large w-inline-block"
                                >
                                    <div>Show more</div>
                                    <div
                                        className="arrow"
                                        style={{
                                            "-webkit-transform":
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            "-ms-transform":
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            "-webkit-transform-style": "preserve-3d",
                                            "-ms-transform-style": "preserve-3d",
                                            "transform-style": "preserve-3d",
                                        }}
                                    >
                                        ↘
                                    </div>
                                </a>
                            </div>
                            <div
                                id="w-node-_17b8cbbe-8c27-6aac-370b-3881f79bcbd9-e57ea549"
                                className="image-text-block image-center"
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619bf6878cc1d17312902939_aktionariat-vision-artwork.png"
                                    loading="lazy"
                                    width={550}
                                    srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619bf6878cc1d17312902939_aktionariat-vision-artwork-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619bf6878cc1d17312902939_aktionariat-vision-artwork-p-800.png 800w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619bf6878cc1d17312902939_aktionariat-vision-artwork.png 1188w"
                                    sizes="(max-width: 479px) 30.75px, (max-width: 767px) 40.5px, 100vw"
                                    alt="Ethereum Blockchain powered direct relationship artwork."
                                />
                                <div className="artwork-caption absolute-top">
                                    <div className="text-size-small text-align-center">
                                        Direct relationships, no intermediaries.
                                    </div>
                                </div>
                                <div className="artwork-caption absolute-bottom">
                                    <div className="text-size-small text-align-center">
                                        Powered by the Ethereum Blockchain.
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

function OurSolution() {
    return (
        <section id="OurSolution" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <h2 className="heading-label text-color-grey">Our Solutions</h2>
                        <div className="section-title">
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid">
                                    <p
                                        id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f85-2aff9f7c"
                                        className="heading-large text-weight-bold"
                                    >
                                        Our tools make you{" "}
                                        <span className="text-gradient-1">forget&nbsp;about IPOs.</span>
                                    </p>
                                    <p
                                        id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f89-2aff9f7c"
                                        className="text-size-medium"
                                    >
                                        Our solution allows you to trade your company’s shares with
                                        investors directly on your website.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-grid rows-4">
                            <a
                                id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f8c-2aff9f7c"
                                href="https://www.aktionariat.com/investor-relations#brokerbot"
                                className="image-block image-center background-color-gradient-1 w-inline-block"
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f06c8f5e0d3a1ff2e5d1_buy.png"
                                    loading="lazy"
                                    width={420}
                                    data-w-id="27d0e4a0-dda7-9b67-fc5b-6b722aff9f8d"
                                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 27.53125px, (max-width: 991px) 8.796875px, 10.046875px"
                                    srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f06c8f5e0d3a1ff2e5d1_buy-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f06c8f5e0d3a1ff2e5d1_buy.png 515w"
                                    alt
                                    className="our-vision-image-1"
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61994137fe057294ef9139c2_aktionariat-portfolio-app.gif"
                                    loading="lazy"
                                    width={321}
                                    height
                                    data-w-id="27d0e4a0-dda7-9b67-fc5b-6b722aff9f8e"
                                    alt="Portfolio App Screens Gif"
                                    className="our-vision-image-2"
                                />
                            </a>
                            <div
                                id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f8f-2aff9f7c"
                                className="content-block"
                            >
                                <div
                                    data-current="Tab 1"
                                    data-easing="linear"
                                    data-duration-in={0}
                                    data-duration-out={0}
                                    className="product-tabs w-tabs"
                                >
                                    <div className="product-tabs-menu w-tab-menu" role="tablist">
                                        <a
                                            data-w-tab="Tab 1"
                                            data-w-id="27d0e4a0-dda7-9b67-fc5b-6b722aff9f92"
                                            className="product-tab-link w-inline-block w-tab-link w--current"
                                            id="w-tabs-0-data-w-tab-0"
                                            href="#w-tabs-0-data-w-pane-0"
                                            role="tab"
                                            aria-controls="w-tabs-0-data-w-pane-0"
                                            aria-selected="true"
                                        >
                                            <div>Brokerbot</div>
                                        </a>
                                        <a
                                            data-w-tab="Tab 2"
                                            data-w-id="27d0e4a0-dda7-9b67-fc5b-6b722aff9f95"
                                            className="product-tab-link w-inline-block w-tab-link"
                                            tabIndex={-1}
                                            id="w-tabs-0-data-w-tab-1"
                                            href="#w-tabs-0-data-w-pane-1"
                                            role="tab"
                                            aria-controls="w-tabs-0-data-w-pane-1"
                                            aria-selected="false"
                                        >
                                            <div>Portfolio&nbsp;App</div>
                                        </a>
                                    </div>
                                    <div className="product-tabs-content w-tab-content">
                                        <div
                                            data-w-tab="Tab 1"
                                            className="w-tab-pane w--tab-active"
                                            id="w-tabs-0-data-w-pane-0"
                                            role="tabpanel"
                                            aria-labelledby="w-tabs-0-data-w-tab-0"
                                        >
                                            <div className="content-block space-between">
                                                <div className="margin-bottom margin-medium">
                                                    <h3 className="text-size-xlarge text-weight-normal">
                                                        A fully automated,{" "}
                                                        <span className="text-gradient-1">
                                                            blockchain-based market{" "}
                                                        </span>
                                                        tool.
                                                    </h3>
                                                </div>
                                                <div className="margin-bottom margin-medium">
                                                    <ul role="list" className="text-color-darkgrey">
                                                        <li>Embedded in your company's website.</li>
                                                        <li>
                                                            Equipped with shares of your company (treasury shares)
                                                        </li>
                                                        <li>Trade shares against XCHF, Ether or even CHF</li>
                                                        <li>
                                                            Based on smart contracts on the Ethereum blockchain or
                                                            Optimism Layer-2 network
                                                        </li>
                                                        <li>Shares are minted as ERC-20 security tokens</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    href="/for-companies"
                                                    className="button-arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>Learn more</div>
                                                    <div
                                                        className="arrow"
                                                        style={{
                                                            "-webkit-transform":
                                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            "-ms-transform":
                                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            transform:
                                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            "-webkit-transform-style": "preserve-3d",
                                                            "-ms-transform-style": "preserve-3d",
                                                            "transform-style": "preserve-3d",
                                                        }}
                                                    >
                                                        ↘
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            data-w-tab="Tab 2"
                                            className="w-tab-pane"
                                            id="w-tabs-0-data-w-pane-1"
                                            role="tabpanel"
                                            aria-labelledby="w-tabs-0-data-w-tab-1"
                                        >
                                            <div className="content-block space-between">
                                                <div className="margin-bottom margin-medium">
                                                    <h3 className="text-size-xlarge text-weight-normal">
                                                        <span className="text-gradient-1">Manage</span> and{" "}
                                                        <span className="text-gradient-1">store</span> your
                                                        assets.
                                                    </h3>
                                                </div>
                                                <div className="margin-bottom margin-medium">
                                                    <ul role="list" className="text-color-darkgrey">
                                                        <li>
                                                            Trade tokenized shares by connecting with the Brokerbot
                                                        </li>
                                                        <li>
                                                            Manage Ethereum-based assets (self custody wallet) &amp;
                                                            traditional shares
                                                        </li>
                                                        <li>Request the tokenization of traditional shares</li>
                                                        <li>Transfer Ethereum and Optimism-based assets </li>
                                                        <li>Supports the WalletConnect protocol</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    href="/for-companies"
                                                    className="button-arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>Show more</div>
                                                    <div
                                                        className="arrow"
                                                        style={{
                                                            "-webkit-transform":
                                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            "-ms-transform":
                                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            transform:
                                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                            "-webkit-transform-style": "preserve-3d",
                                                            "-ms-transform-style": "preserve-3d",
                                                            "transform-style": "preserve-3d",
                                                        }}
                                                    >
                                                        ↘
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
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

function LatestBlogs() {
    return (
        <section id="LatestBlogs">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Blog</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    Latest <span className="text-gradient-2">blog articles</span>
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-medium">
                            <div className="blog1_component">
                                <div className="blog1_list-wrapper w-dyn-list">
                                    <div role="list" className="collection-grid w-dyn-items">
                                        <div
                                            id="w-node-_3cec4047-dc23-a95a-b6f8-b68a04997983-04997981"
                                            role="listitem"
                                            className="blog1_item w-dyn-item"
                                        >
                                            <div className="blog_content-wrapper">
                                                <div className="blog_image-wrapper">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62d8f95a57e92f3465a9ae74_SDX.png"
                                                        loading="lazy"
                                                        alt
                                                        sizes="(max-width: 479px) 43vw, (max-width: 767px) 46vw, (max-width: 991px) 29vw, 30vw"
                                                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62d8f95a57e92f3465a9ae74_SDX-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62d8f95a57e92f3465a9ae74_SDX.png 714w"
                                                        className="image-100"
                                                    />
                                                </div>
                                                <div className="blog_content">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-large text-weight-normal">
                                                            SIX Digital Exchange partners with Aktionariat to
                                                            provide greater access to capital through digital
                                                            securities in Switzerland
                                                        </h3>
                                                    </div>
                                                    <div className="text-size-small text-color-lightgrey">
                                                        July 21, 2022
                                                    </div>
                                                </div>
                                                <a
                                                    href="/blogs/six-digital-exchange-partners-with-aktionariat"
                                                    className="blog1_item-link w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_3cec4047-dc23-a95a-b6f8-b68a04997983-04997981"
                                            role="listitem"
                                            className="blog1_item w-dyn-item"
                                        >
                                            <div className="blog_content-wrapper">
                                                <div className="blog_image-wrapper">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6273ce21804b0f814b993d49_wallet.png"
                                                        loading="lazy"
                                                        alt="Wallets for cryptocurrencies: A comparison of hot, cold and smart wallets."
                                                        sizes="(max-width: 479px) 43vw, (max-width: 767px) 46vw, (max-width: 991px) 29vw, 30vw"
                                                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6273ce21804b0f814b993d49_wallet-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6273ce21804b0f814b993d49_wallet-p-800.png 800w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6273ce21804b0f814b993d49_wallet-p-1080.png 1080w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6273ce21804b0f814b993d49_wallet-p-1600.png 1600w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6273ce21804b0f814b993d49_wallet-p-2000.png 2000w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6273ce21804b0f814b993d49_wallet.png 2136w"
                                                        className="image-100"
                                                    />
                                                </div>
                                                <div className="blog_content">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-large text-weight-normal">
                                                            Wallets for cryptocurrencies: An overview.
                                                        </h3>
                                                    </div>
                                                    <div className="text-size-small text-color-lightgrey">
                                                        May 10, 2022
                                                    </div>
                                                </div>
                                                <a
                                                    href="/blogs/wallets-for-cryptocurrencies-an-overview"
                                                    className="blog1_item-link w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_3cec4047-dc23-a95a-b6f8-b68a04997983-04997981"
                                            role="listitem"
                                            className="blog1_item w-dyn-item"
                                        >
                                            <div className="blog_content-wrapper">
                                                <div className="blog_image-wrapper">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/624ea4878fb43cb4988be640_aktionariat-layer-2-optimisasdm-blog-3.jpeg"
                                                        loading="lazy"
                                                        alt="Reasons for Optimism: Aktionariat implemented Ethereum Layer-2 Optimism roll-up protocol"
                                                        sizes="(max-width: 479px) 43vw, (max-width: 767px) 46vw, (max-width: 991px) 29vw, 30vw"
                                                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/624ea4878fb43cb4988be640_aktionariat-layer-2-optimisasdm-blog-3-p-500.jpeg 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/624ea4878fb43cb4988be640_aktionariat-layer-2-optimisasdm-blog-3-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/624ea4878fb43cb4988be640_aktionariat-layer-2-optimisasdm-blog-3-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/624ea4878fb43cb4988be640_aktionariat-layer-2-optimisasdm-blog-3-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/624ea4878fb43cb4988be640_aktionariat-layer-2-optimisasdm-blog-3.jpeg 2560w"
                                                        className="image-100"
                                                    />
                                                </div>
                                                <div className="blog_content">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-large text-weight-normal">
                                                            Reasons for Optimism: Aktionariat implemented Ethereum
                                                            Layer-2 Optimism roll-up protocol
                                                        </h3>
                                                    </div>
                                                    <div className="text-size-small text-color-lightgrey">
                                                        April 7, 2022
                                                    </div>
                                                </div>
                                                <a
                                                    href="/blogs/reasons-for-optimism-aktionariat-implements-ethereum-layer-2-optimism-roll-up-protocol"
                                                    className="blog1_item-link w-inline-block"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            href="/blog"
                            className="button-arrow button-arrow-large w-inline-block"
                        >
                            <div>Show more</div>
                            <div
                                className="arrow"
                                style={{
                                    "-webkit-transform":
                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    "-ms-transform":
                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transform:
                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    "-webkit-transform-style": "preserve-3d",
                                    "-ms-transform-style": "preserve-3d",
                                    "transform-style": "preserve-3d",
                                }}
                            >
                                ↘
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function LatestNews() {
    return (
        <section id="LatestNews" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">News</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    Latest <span className="text-gradient-3">news</span>
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom">
                            <div className="blog1_component">
                                <div className="blog1_list-wrapper w-dyn-list">
                                    <div role="list" className="collection-grid w-dyn-items">
                                        <div
                                            id="w-node-b6f51d02-9f4a-53e5-7a6c-3f373218c71a-3218c718"
                                            role="listitem"
                                            className="blog1_item w-dyn-item"
                                        >
                                            <div className="blog_content-wrapper">
                                                <div className="blog_image-wrapper">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62d8f95a57e92f3465a9ae74_SDX.png"
                                                        loading="lazy"
                                                        alt
                                                        sizes="(max-width: 479px) 43vw, (max-width: 767px) 46vw, (max-width: 991px) 29vw, 30vw"
                                                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62d8f95a57e92f3465a9ae74_SDX-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62d8f95a57e92f3465a9ae74_SDX.png 714w"
                                                        className="image-100"
                                                    />
                                                </div>
                                                <div className="blog_content">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-large text-weight-normal">
                                                            SIX Digital Exchange partners with Aktionariat to
                                                            provide greater access to capital through digital
                                                            securities in Switzerland
                                                        </h3>
                                                    </div>
                                                    <div className="text-size-small text-color-lightgrey w-dyn-bind-empty" />
                                                </div>
                                                <a
                                                    href="https://www.aktionariat.com/blogs/six-digital-exchange-partners-with-aktionariat"
                                                    target="_blank"
                                                    className="blog1_item-link w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-b6f51d02-9f4a-53e5-7a6c-3f373218c71a-3218c718"
                                            role="listitem"
                                            className="blog1_item w-dyn-item"
                                        >
                                            <div className="blog_content-wrapper">
                                                <div className="blog_image-wrapper">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016.jpg"
                                                        loading="lazy"
                                                        alt
                                                        sizes="(max-width: 479px) 43vw, (max-width: 767px) 46vw, (max-width: 991px) 29vw, 30vw"
                                                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016-p-500.jpg 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016-p-800.jpg 800w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016-p-1600.jpg 1600w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016-p-2000.jpg 2000w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016-p-2600.jpg 2600w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016-p-3200.jpg 3200w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61d5cc24cea82f726311514c_Aktionariat-0016.jpg 3680w"
                                                        className="image-100"
                                                    />
                                                </div>
                                                <div className="blog_content">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-large text-weight-normal">
                                                            Startups für alle: Die «Demokratisierung» von Private
                                                            Equity und Venture Capital hat begonnen
                                                        </h3>
                                                    </div>
                                                    <div className="text-size-small text-color-lightgrey w-dyn-bind-empty" />
                                                </div>
                                                <a
                                                    href="https://www.nzz.ch/finanzen/private-finanzen/startups-und-fintech-neue-finanzprodukte-fuer-privatanleger-ld.1692186"
                                                    target="_blank"
                                                    className="blog1_item-link w-inline-block"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-b6f51d02-9f4a-53e5-7a6c-3f373218c71a-3218c718"
                                            role="listitem"
                                            className="blog1_item w-dyn-item"
                                        >
                                            <div className="blog_content-wrapper">
                                                <div className="blog_image-wrapper">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat.jpeg"
                                                        loading="lazy"
                                                        alt
                                                        sizes="(max-width: 479px) 43vw, (max-width: 767px) 46vw, (max-width: 991px) 29vw, 30vw"
                                                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat-p-500.jpeg 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat-p-800.jpeg 800w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62ab2b20a7b6de5d4659de43_realuXaktionariat.jpeg 2662w"
                                                        className="image-100"
                                                    />
                                                </div>
                                                <div className="blog_content">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-large text-weight-normal">
                                                            Erstmals Aktien einer Schweizer börsenkotierten
                                                            Gesellschaft direkt über Blockchain erwerben
                                                        </h3>
                                                    </div>
                                                    <div className="text-size-small text-color-lightgrey w-dyn-bind-empty" />
                                                </div>
                                                <a
                                                    href="https://www.moneycab.com/finanz/realunit-schweiz-erstmals-aktien-einer-schweizer-boersenkotierten-gesellschaft-direkt-ueber-blockchain-erwerben/"
                                                    target="_blank"
                                                    className="blog1_item-link w-inline-block"
                                                />
                                            </div>
                                        </div>
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

function CustomerFeedback() {
    return (
        <section id="CustomerFeedback">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Customer Feedback</h2>
                            <div className="margin-bottom margin-medium">
                                <p className="heading-xlarge text-weight-bold max-width-large">
                                    <span className="text-gradient-1">What our customers say</span>
                                </p>
                            </div>
                            <div className="margin-bottom margin-xlarge">
                                <p> Re(DeFi)ning Capitalism.</p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-xlarge">
                            <div className="layout5_component">
                                <a href="#" className="layout-item w-inline-block">
                                    <div className="margin-bottom margin-small">
                                        <h3 className="heading-xlarge">1000+</h3>
                                    </div>
                                    <div className="margin-bottom">
                                        <p className="text-size-medium text-color-grey">
                                            Registered Investors
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="layout-item w-inline-block">
                                    <div className="margin-bottom margin-small">
                                        <h3 className="heading-xlarge">6.8 Mio+</h3>
                                    </div>
                                    <div className="margin-bottom">
                                        <p className="text-size-medium text-color-grey">Raised Capital</p>
                                    </div>
                                </a>
                                <a href="#" className="layout-item w-inline-block">
                                    <div className="margin-bottom margin-small">
                                        <h3 className="heading-xlarge">16</h3>
                                    </div>
                                    <div className="margin-bottom">
                                        <p className="text-size-medium text-color-grey">
                                            Onboarded Companies
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="testimonial-list w-dyn-list">
                            <div role="list" className="content-grid clientbar-grid-2 w-dyn-items">
                                <div
                                    id="w-node-_6b29c2aa-56a6-2354-e4fc-578180818626-80818624"
                                    role="listitem"
                                    className="testimonial-card-item space-between w-dyn-item"
                                >
                                    <div className="margin-bottom margin-medium">
                                        <div className="text-color-darkgrey">
                                            "With Aktionariat, tokenizing our shares and setting up a market
                                            was a breeze. While the tools are unique, the real value lies in
                                            the team’s ability to respond to customer needs and continually
                                            evolve the product. Not for the bores or the procrastinators,
                                            Aktionariat is a perfect fit for us!"
                                        </div>
                                    </div>
                                    <div className="horizontal-center space-between">
                                        <div className="horizontal-center">
                                            <div className="margin-right margin-small">
                                                <div className="icon-1x1-medium">
                                                    <div style={{}} className="avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div>Simon Boss</div>
                                                <div className="text-size-small text-color-grey inline-text">
                                                    CEO, COB, Founder, Co-Owner
                                                </div>
                                                <div className="text-size-small text-color-grey inline-text right-margin">
                                                    ,
                                                </div>
                                                <div className="text-size-small text-color-grey inline-text">
                                                    Boss Info
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="https://linkedin.com/company/bossinfo"
                                            className="icon-1x1-small w-inline-block"
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619988fac57d3ef64985cbeb_icon-linkedin.svg"
                                                loading="lazy"
                                                width={64}
                                                alt="LinkedIn Icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_6b29c2aa-56a6-2354-e4fc-578180818626-80818624"
                                    role="listitem"
                                    className="testimonial-card-item space-between w-dyn-item"
                                >
                                    <div className="margin-bottom margin-medium">
                                        <div className="text-color-darkgrey">
                                            "Thanks to Aktionariat, we can offer our employees, customers
                                            and investors a simple solution to buy and sell quitt.shares.
                                            Aktionariat has managed to wrap the complex world of blockchain
                                            and cryptocurrencies into a customer-friendly and innovative
                                            product. Keep up the good work!"
                                        </div>
                                    </div>
                                    <div className="horizontal-center space-between">
                                        <div className="horizontal-center">
                                            <div className="margin-right margin-small">
                                                <div className="icon-1x1-medium">
                                                    <div style={{}} className="avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div>Marie-Christin Kamann</div>
                                                <div className="text-size-small text-color-grey inline-text">
                                                    CEO
                                                </div>
                                                <div className="text-size-small text-color-grey inline-text right-margin">
                                                    ,
                                                </div>
                                                <div className="text-size-small text-color-grey inline-text">
                                                    quitt
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="https://www.linkedin.com/company/servicehunter-ag-quitt-ch/"
                                            className="icon-1x1-small w-inline-block"
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619988fac57d3ef64985cbeb_icon-linkedin.svg"
                                                loading="lazy"
                                                width={64}
                                                alt="LinkedIn Icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_6b29c2aa-56a6-2354-e4fc-578180818626-80818624"
                                    role="listitem"
                                    className="testimonial-card-item space-between w-dyn-item"
                                >
                                    <div className="margin-bottom margin-medium">
                                        <div className="text-color-darkgrey">
                                            "Since 2017, we have been tirelessly working on how we can
                                            further empower the consumer. With the Security Token Offering
                                            we finally found a way to go a big step further. Aktionariat
                                            provided us with the tools to transform our stakeholders into
                                            shareholders while being the first brand to raise CHF 0.5M over
                                            a weekend and now continuously raise more through a tradable
                                            security token on our own website."
                                        </div>
                                    </div>
                                    <div className="horizontal-center space-between">
                                        <div className="horizontal-center">
                                            <div className="margin-right margin-small">
                                                <div className="icon-1x1-medium">
                                                    <div style={{}} className="avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div>Roy Bernheim</div>
                                                <div className="text-size-small text-color-grey inline-text">
                                                    Co-Founder
                                                </div>
                                                <div className="text-size-small text-color-grey inline-text right-margin">
                                                    ,
                                                </div>
                                                <div className="text-size-small text-color-grey inline-text">
                                                    TBo
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="https://www.linkedin.com/company/tboclothing"
                                            className="icon-1x1-small w-inline-block"
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619988fac57d3ef64985cbeb_icon-linkedin.svg"
                                                loading="lazy"
                                                width={64}
                                                alt="LinkedIn Icon"
                                            />
                                        </a>
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

function NewsLatter() {
    return (
        <section id="NewsLatter">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xlarge">
                        <div className="cta_component">
                            <div className="max-width-full">
                                <div className="margin-bottom margin-medium">
                                    <p className="heading-xlarge text-weight-bold">
                                        Don’t miss out.
                                        <span className="text-gradient-3">
                                            <br />
                                        </span>
                                        <span className="text-gradient-3">
                                            Sign up for&nbsp;our newsletter.
                                        </span>
                                    </p>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <p className="max-width-large text-color-darkgrey">
                                        To stay up-to-date on our latest tools and products, visit our{" "}
                                        <a href="/blog">Blog</a>, follow us on{" "}
                                        <a
                                            href="https://www.linkedin.com/company/aktionariat-ag"
                                            target="_blank"
                                        >
                                            LinkedIn
                                        </a>{" "}
                                        and{" "}
                                        <a href="https://twitter.com/aktionariat" target="_blank">
                                            Twitter
                                        </a>
                                        , or subscribe to our newsletter:
                                    </p>
                                </div>
                            </div>
                            <div className="max-width-medium">
                                <div className="w-embed w-script">
                                    {/*[if lte IE 8]>

<![endif]*/}
                                    <div className="hbspt-form" id="hbspt-form-1660121872064-498133863">
                                        <iframe
                                            title="Form 0"
                                            id="hs-form-iframe-0"
                                            className="hs-form-iframe"
                                            scrolling="no"
                                            width="100%"
                                            style={{
                                                width: "100%",
                                                position: "static",
                                                border: "none",
                                                display: "block",
                                                overflow: "hidden",
                                                height: "214px",
                                            }}
                                            height={214}
                                        />
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