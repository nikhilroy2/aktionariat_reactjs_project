import React from 'react';
import '../../../scss/pages/ForInvestors/ForInvestors.css';
import CompanyTable from '../../components/CompanyTable/CompanyTable';
function ForInvestors(props) {
    return (
        <div id='ForInvestors'>
            <SectionHero></SectionHero>
            <MobileWallet></MobileWallet>
            <PrivateEquityMarket></PrivateEquityMarket>
            <OurPortfolio></OurPortfolio>
            <NewsLatter></NewsLatter>
            <HowItWork></HowItWork>
            <InvestIn></InvestIn>
            <LatestBlogs></LatestBlogs>
            <AppDownload></AppDownload>
        </div>
    );
}

export default ForInvestors;


const SectionHero = () => {
    return (
        <section className="section section-hero investors">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-2">
                        <div className="content-grid">
                            <div
                                id="w-node-_4eb94a96-dc01-0261-8c0c-b0472e89414e-a644fd35"
                                className="max-width-full"
                            >
                                <div className="padding-bottom">
                                    <h1>
                                        Become a{" "}
                                        <span className="text-gradient-3">private&nbsp;equity </span>
                                        <span className="text-gradient-3">investor</span>
                                    </h1>
                                    <div className="margin-top margin-medium">
                                        <p>
                                            Until now, direct investments in private companies were reserved
                                            for institutional investors and high net-worth individuals. We
                                            are changing that.
                                            <br />
                                            With Aktionariat, anyone can invest in non-listed Swiss
                                            companies.
                                        </p>
                                    </div>
                                    <div className="max-width-small">
                                        <div className="margin-top margin-medium">
                                            <a
                                                href="#newsletter"
                                                className="button-arrow button-arrow-large modal-open_btn w-inline-block"
                                            >
                                                <div>Stay informed</div>
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
                                    <div className="margin-top margin-large">
                                        <div className="horizontal-center">
                                            <div className="dont-shrink">
                                                <div className="margin-right margin-small">
                                                    <div className="investor-logo-wrap">
                                                        <div className="icon-1x1-medium">
                                                            <div className="investor-avatar _1" />
                                                        </div>
                                                    </div>
                                                    <div className="investor-logo-wrap">
                                                        <div className="icon-1x1-medium">
                                                            <div className="investor-avatar _2" />
                                                        </div>
                                                    </div>
                                                    <div className="investor-logo-wrap">
                                                        <div className="icon-1x1-medium">
                                                            <div className="investor-avatar _3" />
                                                        </div>
                                                    </div>
                                                    <div className="investor-logo-wrap _4 last-logo">
                                                        <div className="icon-1x1-medium">
                                                            <div className="investor-avatar _4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>Join our community of investors.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_76e98fea-7bac-08b5-9f44-080dfdb7ad51-a644fd35"
                                className="hero-image for-investors"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


const MobileWallet = () => {
    return (
        <section id="MobileWallet">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="content-grid rows-4">
                            <div
                                id="w-node-_75a2da32-7773-e54c-8caf-826868424b1f-a644fd35"
                                className="content-block space-between"
                            >
                                <div className="margin-bottom margin-large">
                                    <div className="margin-bottom margin-medium">
                                        <h2 className="heading-label text-color-grey">Mobile Wallet</h2>
                                        <h3>
                                            Hold tokenized shares and traditional shares securely in
                                            self-custody with our{" "}
                                            <span className="text-gradient-3">Portfolio&nbsp;App.</span>
                                        </h3>
                                    </div>
                                    <p className="text-color-darkgrey">
                                        Our mobile wallet is the safe deposit box for your shares. Connect
                                        your mobile wallet to a Brokerbot to buy stocks and access them
                                        anytime. Register your personal details in the wallet before
                                        buying to be automatically recorded in the company's share
                                        register. <br />
                                        <br />
                                        See the market value of your shares at any time and transfer them
                                        directly to another wallet if needed. The wallet also acts as an
                                        authentication tool for a company's signatories, e.g., to approve
                                        transactions.
                                    </p>
                                </div>
                                <a
                                    href="/our-products/portfolio-app#details"
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
                            <div
                                id="w-node-_75a2da32-7773-e54c-8caf-826868424b32-a644fd35"
                                className="image-block image-center background-color-gradient-1"
                            >
                                <div className="margin-bottom margin-medium">
                                    <img
                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c7cedfdd4868998d6531a6_mobile-wallet.png"
                                        loading="lazy"
                                        height={430}
                                        alt
                                    />
                                </div>
                                <div className="horizontal-center">
                                    <div className="margin-right margin-xsmall">
                                        <a
                                            href="https://apps.apple.com/ch/app/aktionariat/id1518326813#?platform=iphone"
                                            target="_blank"
                                            className="w-inline-block"
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6199799d7f6c6bc01322e3ae_button-apple.svg"
                                                loading="lazy"
                                                alt="Button for App Store"
                                            />
                                        </a>
                                    </div>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.aktionariat.app"
                                        target="_blank"
                                        className="w-inline-block"
                                    >
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6199799dd3a10efe04325ef9_button-google.svg"
                                            loading="lazy"
                                            alt="Button for Google Play"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const PrivateEquityMarket = () => {
    return (
        <section id="private-equity-market">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <div className="margin-bottom margin-medium">
                                <div className="max-width-xlarge">
                                    <div className="margin-bottom margin-medium">
                                        <h2>
                                            The <span className="text-gradient-3">private equity</span>{" "}
                                            market
                                            <span className="text-gradient-3" />
                                        </h2>
                                    </div>
                                    <p className="text-size-medium text-color-darkgrey">
                                        Private equity refers to investments in privately-owned companies
                                        or in public companies with the intent to take them private.
                                        Venture capital is a specialized form of private equity that
                                        typically involves investing in or providing financing to startup
                                        or early-stage companies with high growth potential (CFA
                                        institute, 2021, p.4).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-grid">
                            <div
                                id="w-node-bbbacec7-bdb7-981f-71a3-ea2177ca61fa-a644fd35"
                                className="info-block"
                            >
                                <div className="info-text">
                                    <div className="margin-bottom margin-small">
                                        <h3>+3.02%</h3>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <div>
                                            US&nbsp;Private equity outperformed the S&amp;P 500 index by
                                            3.02%*
                                        </div>
                                    </div>
                                    <div className="text-size-small text-color-grey">
                                        * mean annual return over 25 years (CFA institute, 2021. p.41)
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_750a9d54-f878-93c4-8cee-26540da25d34-a644fd35"
                                className="info-block"
                            >
                                <div className="info-text">
                                    <div className="margin-bottom margin-small">
                                        <h3>+111% (2020-2021)</h3>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <div>Global venture funding increased by 111% YoY*</div>
                                    </div>
                                    <div className="text-size-small text-color-grey">
                                        * $ 249B in 2020 vs. $ 621 in 2021 (CB Insights, 2021 Q4, p.8)
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-c492f4c2-74a3-7ebc-8241-df1f0a2b8e55-a644fd35"
                                className="info-block"
                            >
                                <div className="info-text">
                                    <div className="margin-bottom margin-small">
                                        <h3>+58%</h3>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <div>
                                            Number of exits: 58% more global exits in 2021 compared to 2020
                                        </div>
                                    </div>
                                    <div className="text-size-small text-color-grey">
                                        *Global M&amp;A exits jump to over 10K, (2020: 6'833, 2021:
                                        10'792) (CB Insights Q4, 2021, p.69)
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-d7adc1b5-0a08-38ba-166e-c127e77da9f6-a644fd35"
                                className="info-block"
                            >
                                <div className="info-text">
                                    <div className="margin-bottom margin-small">
                                        <h3>+142%</h3>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <div>Europe VC funding up by more than 2x*</div>
                                    </div>
                                    <div className="text-size-small text-color-grey">
                                        * Europe VC&nbsp;funding reached $93.3B in 2021. Comparison:
                                        2020's funding amounted to $38.5B (CB Insights Q4, 2021, p.236)
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_9bd4dfa1-cd3e-8532-b636-f811895ee7b6-a644fd35"
                                className="info-block"
                            >
                                <div className="info-text">
                                    <div className="margin-bottom margin-small">
                                        <h3>CHF 3.1 B</h3>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <div>CHF 3.1B invested capital in Swiss startups 2021 *</div>
                                    </div>
                                    <div className="text-size-small text-color-grey">
                                        *st+44% from CHF 2.124B in 2020 (
                                        <a href="https://www.startupticker.ch/index.php/en/news/chf-3-1-billion-for-start-ups">
                                            startupticker.ch
                                        </a>
                                        )
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

const OurPortfolio = () => {
    return <section id="our-portfolio" className='section section-grey'>

        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="section-title">
                        <h2 className="heading-label text-color-grey">
                            Investment Opportunities
                        </h2>
                        <div className="margin-bottom margin-small">
                            <p className="heading-display text-weight-bold">Companies</p>
                        </div>
                        <p className="paragraph margin-bottom margin-large">
                            Important information: Read our{" "}
                            <a href="/disclaimer">
                                <strong>disclaimer</strong>{" "}
                            </a>
                            before taking any investment decisions.
                        </p>
                        <div className="margin-bottom margin-xlarge">
                            <p className="text-color-darkgrey">
                                In a historical view, investments in private companies typically
                                lacked any consistent access to liquidity. <br />
                                Introduced in early 2021, our marketplace enables the buying and
                                selling of private company shares, providing liquidity when business
                                demands it.
                                <br />
                                <br />
                                The offered security tokens represent real shares of companies. No
                                digital twins or the like: fully-fledged shares based on blockchain
                                technology and backed by{" "}
                                <a
                                    href="https://www.admin.ch/gov/en/start/documentation/media-releases/media-releases-federal-council.msg-id-84035.html#:~:text=In%20September%202020%2C%20Parliament%20passed,necessary%20adjustments%20to%20ten%20ordinances."
                                    target="_blank"
                                >
                                    Swiss DLT-Law.
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="padding-bottom padding-xlarge">
                        <div className="html-embed-2 w-embed">
                            <CompanyTable></CompanyTable>
                        </div>
                    </div>
                    <a
                        href="/all-companies"
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
}

const NewsLatter = () => {
    return <section id="newslatter">
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xlarge">
                    <div className="cta_component">
                        <div className="max-width-full">
                            <div className="margin-bottom margin-medium">
                                <p className="heading-xlarge text-weight-bold">
                                    Couldn't find what you were looking for?
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
                                    We are constantly onboarding new companies. Subscribe to our
                                    newsletter to be among the first to be informed about new
                                    investment opportunities:
                                </p>
                            </div>
                        </div>
                        <div className="max-width-medium">
                            <div className="w-embed w-script">
                                {/*[if lte IE 8]>

<![endif]*/}
                                <div
                                    className="hbspt-form"
                                    id="hbspt-form-1660384332042-5526384441"
                                >
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
}

const HowItWork = () => {
    return (
        <section id="how-it-works">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <div className="margin-bottom margin-medium">
                                <h2>
                                    <span className="text-gradient-3">How it Works</span>
                                    <span className="text-gradient-3" />
                                </h2>
                            </div>
                            <div className="margin-bottom margin-xlarge">
                                <p>
                                    Investing in private companies with Aktionariat is straightforward.{" "}
                                </p>
                            </div>
                            <div className="margin-bottom">
                                <div className="content-grid">
                                    <div
                                        id="w-node-a832b5ae-46a1-0093-8ebe-bde7467e52ef-a644fd35"
                                        className="step-block"
                                    >
                                        <div className="info-text">
                                            <div className="margin-bottom margin-small">
                                                <h3>1</h3>
                                            </div>
                                            <div className="text-size-medium text-color-darkgrey">
                                                Download the Aktionariat Wallet App.
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-fdd6190f-4405-8a5f-716c-4a56393cb861-a644fd35"
                                        className="step-block"
                                    >
                                        <div className="info-text">
                                            <div className="margin-bottom margin-small">
                                                <h3>2</h3>
                                            </div>
                                            <div className="text-size-medium text-color-darkgrey">
                                                Find interesting companies.
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-b3e19bb9-d56b-e6f6-8732-1d2c11c3fdb7-a644fd35"
                                        className="step-block"
                                    >
                                        <div className="info-text">
                                            <div className="margin-bottom margin-small">
                                                <h3>3</h3>
                                            </div>
                                            <div className="text-size-medium text-color-darkgrey">
                                                Place your investments directly in our App.
                                                <span className="tablet-hidden">
                                                    <br />‍
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-d7a24505-8000-c738-a0ef-3282ffb2204b-a644fd35"
                                        className="step-block"
                                    >
                                        <div className="info-text">
                                            <div className="margin-bottom margin-small">
                                                <h3>4</h3>
                                            </div>
                                            <div className="text-size-medium text-color-darkgrey">
                                                Buy more or sell your shares.
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

const InvestIn = () => {
    return <section id="InvestIn">
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="content-grid rows-0">
                        <h2
                            id="w-node-a8110123-c9d1-ffb4-1851-4860c2453d87-a644fd35"
                            className="heading-label text-color-grey"
                        >
                            Invest in us
                        </h2>
                        <div
                            id="w-node-_3f763c6c-6a45-f506-ae39-04cee0972231-a644fd35"
                            className="max-width-full"
                        >
                            <div className="margin-bottom margin-medium">
                                <p className="heading-xlarge text-weight-bold">
                                    Invest in <span className="text-gradient-3">Aktionariat.</span>
                                </p>
                            </div>
                            <div className="margin-bottom margin-xlarge">
                                <p>
                                    Aktionariat brings fundamental investing to the crypto world.
                                    Today, the most traded crypto-assets do not represent any tangible
                                    value. We want to change this by using blockchain technology which
                                    enables the trading of tokenized company shares.
                                    <br />
                                    <br />
                                    Excited?&nbsp;We are. Join us on our journey by becoming a fellow
                                    shareholder of Aktionariat AG.
                                </p>
                            </div>
                            <div className="margin-bottom margin-xlarge">
                                <div className="layout5_component">
                                    <a href="#" className="layout-item w-inline-block">
                                        <div className="margin-bottom margin-small">
                                            <h3 className="heading-small text-weight-normal text-style-italic">
                                                2.6M CHF
                                            </h3>
                                        </div>
                                        <div className="margin-bottom">
                                            <p className="text-size-medium text-color-grey">
                                                Total raised
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#" className="layout-item w-inline-block">
                                        <div className="margin-bottom margin-small">
                                            <div className="heading-small w-embed">
                                                <var className="akt-leftshares" />
                                            </div>
                                        </div>
                                        <div className="margin-bottom">
                                            <p className="text-size-medium text-color-grey">
                                                Shares left
                                            </p>
                                        </div>
                                    </a>
                                    <a href="#" className="layout-item w-inline-block">
                                        <div className="margin-bottom margin-small">
                                            <div className="heading-small w-embed">
                                                <var className="akt-marketcap">14′973′228 CHF</var>
                                            </div>
                                        </div>
                                        <div className="margin-bottom">
                                            <p className="text-size-medium text-color-grey">Market cap</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <a
                                href="/investor-relations"
                                className="button-arrow button-arrow-large w-inline-block"
                            >
                                <div>Invest in us</div>
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

    </section>
}

const LatestBlogs = () => {
    return <section id="LatestBlogs">
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="section-title">
                        <h2 className="heading-label text-color-grey">Blog</h2>
                        <div className="margin-bottom margin-xlarge">
                            <p className="heading-large text-weight-bold max-width-large">
                                Latest <span className="text-gradient-3">blog articles</span>
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
                        <div>More blog articles</div>
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
}

const AppDownload = () => {
    return <section>
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xlarge">
                    <div className="cta_component margin-bottom margin-small">
                        <div className="max-width-full">
                            <div className="margin-bottom margin-medium">
                                <p className="heading-xlarge text-weight-bold">
                                    You’re invited to join our community investing in Swiss companies.
                                    <br />
                                    <span className="text-gradient-3">Download the app.</span>
                                </p>
                            </div>
                            <div className="horizontal-center">
                                <div className="margin-right margin-xsmall">
                                    <a
                                        href="https://apps.apple.com/ch/app/aktionariat/id1518326813#?platform=iphone"
                                        target="_blank"
                                        className="w-inline-block"
                                    >
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6199799d7f6c6bc01322e3ae_button-apple.svg"
                                            loading="lazy"
                                            alt="Button for App Store"
                                        />
                                    </a>
                                </div>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.aktionariat.app"
                                    target="_blank"
                                    className="w-inline-block"
                                >
                                    <img
                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6199799dd3a10efe04325ef9_button-google.svg"
                                        loading="lazy"
                                        alt="Button for Google Play"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="max-width-small" />
                    </div>
                </div>
            </div>
        </div>

    </section>
}