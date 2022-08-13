import React, { useState } from 'react';
import '../../../scss/pages/for_companies/for_companies.css';
function ForCompanies(props) {
    return (
        <div id='ForCompanies' className=''>
            <Section1></Section1>
            <OpenMarket></OpenMarket>
            <MarketWidget></MarketWidget>
            <OnboardingProcess></OnboardingProcess>
            <LegalPackage></LegalPackage>
            <OurPlans></OurPlans>
            <Testimonial></Testimonial>
            <RequestDemo></RequestDemo>
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

const OpenMarket = () => {
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);
    const [accordion4, setAccordion4] = useState(false);

    return (
        <section id="OpenMarket" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Open Market</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-xlarge">
                                    Enjoy the{" "}
                                    <span className="text-gradient-1">
                                        benefits of a liquid&nbsp;share market
                                    </span>{" "}
                                    without a costly IPO.
                                </p>
                            </div>
                        </div>
                        <div className="content-grid rows-4">
                            <div
                                id="w-node-_28135ff2-5bd5-f5a4-2e7f-36463f100f03-decd91f1"
                                className="content-block"
                            >
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="ce4dfdfa-42b7-c009-851d-efecbaf6e25e"
                                        className="accordion-trigger" onClick={() => setAccordion1(!accordion1)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Less price uncertainty
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion1 ? '45deg' : '0deg'})` }}
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="accordion-item-content"
                                        style={{ width: "624px", height: accordion1 ? 'auto' : '0px' }}
                                    >
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                Offering a company’s shares for sale and repurchase at a given
                                                price sends a strong price signal. Thereby uncertainty about
                                                the true value of the company is reduced.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="15d3b48f-535f-8567-3b23-99b1aaf0d05a"
                                        className="accordion-trigger" onClick={() => setAccordion2(!accordion2)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Liquidity premium
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion2 ? '45deg' : '0deg'})` }}
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="accordion-item-content" style={{ height: `${accordion2 ? 'auto' : '0px'}` }}>
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                An asset is more valuable to investors if it can be sold at
                                                any point in time, in the event of an individual liquidity
                                                need<em>.</em> This effect is known as the liquidity premium.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="5d5df987-2d82-976e-f346-ee3c6634bd32"
                                        className="accordion-trigger" onClick={() => setAccordion3(!accordion3)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Stakeholder capitalism
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion3 ? '45deg' : '0deg'})` }}
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="accordion-item-content" style={{ height: accordion3 ? 'auto' : '0px' }}>
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                By enabling employees, clients, and suppliers to take a stake
                                                in the company they work with and believe in, we enable a much
                                                better alignment of the interest of stakeholders and
                                                shareholders, and the possibility to create community-owned
                                                businesses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="af3b445e-8094-30e8-3ded-c11bca221d76"
                                        className="accordion-trigger" onClick={() => setAccordion4(!accordion4)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Shortcut to public market
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion4 ? '45deg' : '0deg'})` }}

                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="accordion-item-content" style={{ height: accordion4 ? 'auto' : '0px' }}>
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                Tokenizing and selling shares on the internet offers increased
                                                brand visibility and public awareness for a company.
                                                Aktionariat assists in opening up a new path towards a public
                                                market for Swiss companies.&nbsp;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_28135ff2-5bd5-f5a4-2e7f-36463f100f00-decd91f1"
                                className="image-block-0 image-center"
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d218685a3c910d1d91e60_chart-less-price.svg"
                                    loading="lazy"
                                    alt="Less Price chart."
                                    className="secondary-market image-1"
                                    style={{ display: "block" }}
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d2186667b4ba6e04e0ff9_chart-increased-liquidity.svg"
                                    loading="lazy"
                                    alt="Increased Liquidity chart."
                                    className="secondary-market image-2"
                                    style={{ display: "none" }}
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d21871195de04a3d176ed_chart-stakeholder-capitalism.svg"
                                    loading="lazy"
                                    alt="Stakeholder Capitalism chart."
                                    className="secondary-market image-3"
                                    style={{ display: "none" }}
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d2186f650fac03ec8fb10_chart-shortcut-to-public.svg"
                                    loading="lazy"
                                    alt="Shortcut to Public graph."
                                    className="secondary-market image-4"
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const MarketWidget = () => {
    return (
        <section id="market-widgets">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-4">
                                    <div
                                        id="w-node-_8eb57f92-3865-b6d4-319f-01c7ba96ee5c-decd91f1"
                                        className="content-block space-between"
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <div className="margin-bottom margin-medium">
                                                <h2 className="heading-label text-color-grey">
                                                    Customizable Market Widgets
                                                </h2>
                                                <h3>
                                                    Add an investors page to your website and integrate the{" "}
                                                    <span className="text-gradient-1">
                                                        Aktionariat Brokerbot
                                                    </span>{" "}
                                                    and other market widgets.
                                                </h3>
                                            </div>
                                            <p className="text-color-darkgrey">
                                                Our widgets facilitate the presentation of fundamental
                                                information to investors. Further they allow investors to
                                                trade your tokenized shares directly on your website. The
                                                widgets are fully customizable to match your corporate
                                                identity. <br />
                                                <br />
                                                Since our tools operate on a public blockchain and are
                                                compatible with other wallets, 50 million Ethereum users have
                                                access to your shares. In case you prefer to make your shares
                                                available to an exclusive group of investors, we offer a
                                                whitelisting module that allows you to create a handpicked
                                                group of investors.
                                            </p>
                                        </div>
                                        <a
                                            href="/our-products/brokerbot#details"
                                            className="button-arrow action_arrow button-arrow-large w-inline-block"
                                        >
                                            <div>Learn more</div>

                                            <span className="arrow">
                                                ↘
                                            </span>
                                        </a>
                                    </div>
                                    <a
                                        id="w-node-_8eb57f92-3865-b6d4-319f-01c7ba96ee89-decd91f1"
                                        href="#"
                                        className="image-block image-center background-color-gradient-1 w-inline-block"
                                    >
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f06c8f5e0d3a1ff2e5d1_buy.png"
                                            loading="lazy"
                                            alt
                                            className="image-75"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-4">
                                    <div
                                        id="w-node-_92154960-a53b-52bb-3e79-4769ca3f7fc3-decd91f1"
                                        className="image-block image-center background-color-gradient-1"
                                    >
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f6e78e44d15805dc6934_dashboard-notebook%20(1).png"
                                            loading="lazy"
                                            width="1004.5"
                                            alt
                                        />
                                    </div>
                                    <div
                                        id="w-node-_92154960-a53b-52bb-3e79-4769ca3f7fc2-decd91f1"
                                        className="content-block space-between"
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <div className="margin-bottom margin-medium">
                                                <h2 className="heading-label text-color-grey">
                                                    The Backbone of the Toolkit
                                                </h2>
                                                <h3>
                                                    Manage thousands of shareholders with the{" "}
                                                    <span className="text-gradient-1">
                                                        Corporate Dashboard.
                                                    </span>
                                                </h3>
                                            </div>
                                            <p className="text-color-darkgrey">
                                                It consists of a digital share register that is updated
                                                automatically and allows you to tokenize shares with just a
                                                few clicks.
                                                <br />
                                                <br />
                                                Your share market, your rules. The Dashboard allows to define
                                                the parameters of your share market, such as share price,
                                                slope of the price curve and number of your shares that should
                                                be freely tradable.
                                            </p>
                                        </div>
                                        <a
                                            href="/our-products/corporate-dashboard#details"
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
                            </div>
                            <div className="divider" />
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-4">
                                    <div
                                        id="w-node-b41c126b-8cb8-10e1-a2f5-838741983d36-decd91f1"
                                        className="content-block space-between"
                                    >
                                        <div className="margin-bottom margin-large">
                                            <div className="margin-bottom margin-medium">
                                                <h2 className="heading-label text-color-grey">
                                                    Mobile Wallet
                                                </h2>
                                                <h3>
                                                    Hold tokenized shares and traditional shares securely in
                                                    self-custody with our{" "}
                                                    <span className="text-gradient-2">Portfolio&nbsp;App.</span>
                                                </h3>
                                            </div>
                                            <p className="text-color-darkgrey">
                                                Our mobile wallet is the safe deposit box for your shares.
                                                Connect your mobile wallet to a Brokerbot to buy stocks and
                                                access them anytime. Register your personal details in the
                                                wallet before buying to be automatically recorded in the
                                                company's share register. <br />
                                                <br />
                                                See the market value of your shares at any time and transfer
                                                them directly to another wallet if needed. The wallet also
                                                acts as an authentication tool for a company's signatories,
                                                e.g., to approve transactions.
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
                                        id="w-node-b41c126b-8cb8-10e1-a2f5-838741983d4a-decd91f1"
                                        className="image-block image-center background-color-gradient-1"
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d21e2f650fadaa5c8fb3e_aktionariat-app-mockup-1.png"
                                                loading="lazy"
                                                height={430}
                                                srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d21e2f650fadaa5c8fb3e_aktionariat-app-mockup-1-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d21e2f650fadaa5c8fb3e_aktionariat-app-mockup-1-p-800.png 800w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d21e2f650fadaa5c8fb3e_aktionariat-app-mockup-1.png 842w"
                                                sizes="100vw"
                                                alt="Portfolio App screenshot with a mockup."
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
                            <div>
                                <a
                                    href="https://meetings-eu1.hubspot.com/bela?__hstc=180372984.110723e7ee79c8b5cad6e8378037cce7.1659973797909.1660359929893.1660381758643.21&__hssc=180372984.2.1660381758643&__hsfp=3929547609"
                                    target="_blank"
                                    className="button-arrow-block button-arrow-large modal-open_btn w-inline-block"
                                >
                                    <div>Request a Demo</div>
                                    <div className="arrow">↘</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const OnboardingProcess = () => {
    return (
        <section id="onboarding-process">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Onboarding Process</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-xlarge">
                                    Four steps to
                                    <br />
                                    <span className="text-gradient-2">
                                        stakeholder&nbsp;capitalism.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="content-grid">
                            <div
                                id="w-node-_41598dad-59da-504b-1968-8c8c05cc3945-decd91f1"
                                className="image-block image-center"
                            >
                                <div className="padding-small">
                                    <img
                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new.png"
                                        loading="lazy"
                                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new-p-800.png 800w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new-p-1080.png 1080w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new-p-1600.png 1600w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new-p-2000.png 2000w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new-p-2600.png 2600w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c5cdcef439df78af97efe8_aktionariat-infographic-new.png 3660w"
                                        width="1004.5"
                                        sizes="(max-width: 479px) 7.75px, (max-width: 767px) 31.34375px, 100vw"
                                        alt="4 steps of share tokenization infographic."
                                    />
                                </div>
                            </div>
                            <div
                                id="w-node-_6018aac0-35da-6bca-f58e-1165c7bf9189-decd91f1"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-label text-color-grey margin-bottom margin-xsmall">
                                        Step 1
                                    </h3>
                                    <h3 className="text-size-large text-weight-normal">
                                        Digital Shareholder Registry
                                    </h3>
                                </div>
                                <p className="text-color-grey">
                                    Start by digitizing your shareholder registry in our Corporate
                                    Dashboard, completely free of charge.
                                </p>
                            </div>
                            <div
                                id="w-node-e0c3796e-4c96-46e2-d863-b83a8162edc7-decd91f1"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-label text-color-grey margin-bottom margin-xsmall">
                                        Step 2
                                    </h3>
                                    <h3 className="text-size-large text-weight-normal">
                                        Legal Framework
                                    </h3>
                                </div>
                                <p className="text-color-grey">
                                    We provide you with the legal foundation for creating and trading
                                    your digital shares.
                                </p>
                            </div>
                            <div
                                id="w-node-_862e92b2-b070-4819-e20f-177993ff3a77-decd91f1"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-label text-color-grey margin-bottom margin-xsmall">
                                        Step 3
                                    </h3>
                                    <h3 className="text-size-large text-weight-normal">
                                        Tokenized Shares
                                    </h3>
                                </div>
                                <p className="text-color-grey">
                                    Define the number of shares you want to tokenize, the starting price
                                    and the price behavior of your shares.
                                </p>
                            </div>
                            <div
                                id="w-node-_4b2d7e53-8ce0-4204-d126-5af0926f6a87-decd91f1"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-label text-color-grey margin-bottom margin-xsmall">
                                        Step 4
                                    </h3>
                                    <h3 className="text-size-large text-weight-normal">Open Market</h3>
                                </div>
                                <p className="text-color-grey">
                                    Create an investor relations page, add our market widgets and
                                    benefit from an automated and liquid share market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


const LegalPackage = () => {
    return <section id="legal-package">
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="section-title">
                        <h2 className="heading-label text-color-grey">Legal Package</h2>
                        <div className="margin-bottom margin-medium">
                            <p className="heading-large text-weight-bold">
                                A solid{" "}
                                <span className="text-gradient-2">legal&nbsp;framework</span>
                            </p>
                        </div>
                        <div className="margin-bottom margin-xlarge">
                            <p className="text-color-darkgrey max-width-large">
                                You want a market for your shares, we provide the legal framework.
                                Our carefree package was developed by LEXR, a highly trusted expert
                                in the field of Swiss DLT law.
                            </p>
                        </div>
                    </div>
                    <div className="margin-bottom">
                        <div className="content-grid">
                            <div
                                id="w-node-b1a5eb19-a3a1-0b63-388a-4df567444a51-decd91f1"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content">
                                    <div className="margin-bottom margin-small">
                                        <div className="margin-bottom margin-xlarge">
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61bbb2347f6a1a145a5a5aa9_icon-color-articles-of-assoc.svg"
                                                loading="lazy"
                                                alt
                                                className="icon-1x1-large"
                                                style={{ filter: "saturate(0%) brightness(200%)" }}
                                            />
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Articles of Association
                                            </h3>
                                        </div>
                                        <div className="margin-bottom margin-large">
                                            <p>Sets the base to mint and trade shares on a Blockchain.</p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619cd11f72bd655932661397_Articles%20of%20Association.pdf"
                                        target="_blank"
                                        className="button-arrow button-arrow-large w-inline-block"
                                    >
                                        <div>See example</div>
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
                                id="w-node-_93a3f522-ecd8-bbb6-e86e-dfc4a718a09a-decd91f1"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content">
                                    <div className="margin-bottom margin-small">
                                        <div className="margin-bottom margin-xlarge">
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61bbb23498ff4642e66726b9_icon-color-registration.svg"
                                                loading="lazy"
                                                alt
                                                className="icon-1x1-large"
                                                style={{ filter: "saturate(0%) brightness(200%)" }}
                                            />
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Registration Agreement
                                            </h3>
                                        </div>
                                        <div className="margin-bottom margin-large">
                                            <p>
                                                Enables the registration of ledger-based securities in a
                                                securities ledger.
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://hub.aktionariat.com/assets/terms/Registration%20Agreement.pdf"
                                        target="_blank"
                                        className="button-arrow button-arrow-large w-inline-block"
                                    >
                                        <div>See example</div>
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
                                id="w-node-e4bc2415-6c73-5512-e4a0-d000065fd76d-decd91f1"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content">
                                    <div className="margin-bottom margin-small">
                                        <div className="margin-bottom margin-xlarge">
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61bbb2351a23e3a47e6ff3e3_icon-color-tokenholder.svg"
                                                loading="lazy"
                                                alt
                                                className="icon-1x1-large"
                                                style={{ filter: "saturate(0%) brightness(200%)" }}
                                            />
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Token Holder Agreement
                                            </h3>
                                        </div>
                                        <div className="margin-bottom margin-large">
                                            <p>
                                                A mini shareholder agreement with drag-along and tag-along
                                                clauses.
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://hub.aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf"
                                        target="_blank"
                                        className="button-arrow button-arrow-large w-inline-block"
                                    >
                                        <div>See example</div>
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
                                id="w-node-ff8ab3c1-a570-757c-ce84-858e3cc054ad-decd91f1"
                                className="hover-card-item background-color-gradient-1"
                            >
                                <div className="hover-card-content">
                                    <div className="margin-bottom margin-small">
                                        <div className="margin-bottom margin-xlarge">
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61bbb2340726fc8a112ec77d_icon-color-shareholder.svg"
                                                loading="lazy"
                                                alt
                                                className="icon-1x1-large"
                                                style={{ filter: "saturate(0%) brightness(200%)" }}
                                            />
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Shareholder Agreement
                                            </h3>
                                        </div>
                                        <div className="margin-bottom margin-large">
                                            <p>
                                                (Optional) Classic shareholder agreement taking into account
                                                that shares need to be traded.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="button-arrow button-arrow-large button-deactive">
                                        <div>On request</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

const OurPlans = () => {
    return <section id="our-plans">

        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xlarge">
                    <div className="cta_component margin-bottom margin-small">
                        <div className="max-width-full">
                            <div className="margin-bottom margin-medium">
                                <p className="heading-xlarge text-weight-bold">
                                    Curious of our plans?
                                    <span className="text-gradient-2">
                                        <br />
                                        See our pricing page.
                                    </span>
                                </p>
                            </div>
                            <div className="displayonly_margin-top">
                                <a
                                    data-w-id="d5fc6c0a-11d1-397e-be63-dec3dfbd4788"
                                    href="/pricing"
                                    className="button w-button"
                                >
                                    Visit Pricing Page
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

const Testimonial = () => {
    return (
        <section id="testimonial" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Testimonials</h2>
                            <div className="margin-bottom margin-medium">
                                <p className="heading-large text-weight-bold">
                                    Feedback from our clients
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-xlarge">
                            <div className="testimonial-list w-dyn-list">
                                <div
                                    role="list"
                                    className="content-grid clientbar-grid-2 w-dyn-items"
                                >
                                    <div
                                        id="w-node-_6b29c2aa-56a6-2354-e4fc-578180818626-80818624"
                                        role="listitem"
                                        className="testimonial-card-item space-between w-dyn-item"
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <div className="text-color-darkgrey">
                                                "With Aktionariat, tokenizing our shares and setting up a
                                                market was a breeze. While the tools are unique, the real
                                                value lies in the team’s ability to respond to customer needs
                                                and continually evolve the product. Not for the bores or the
                                                procrastinators, Aktionariat is a perfect fit for us!"
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
                                                Aktionariat has managed to wrap the complex world of
                                                blockchain and cryptocurrencies into a customer-friendly and
                                                innovative product. Keep up the good work!"
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
                                                shareholders while being the first brand to raise CHF 0.5M
                                                over a weekend and now continuously raise more through a
                                                tradable security token on our own website."
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
                        <div className="divider" />
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">News</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    <span className="text-gradient-2">Media coverage </span>
                                    about&nbsp;Aktionariat
                                    <span className="text-gradient-3" />
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-medium">
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
const RequestDemo = () => {
    return (
        <section id="request-demo">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xlarge">
                        <div className="cta_component margin-bottom margin-small">
                            <div className="max-width-full">
                                <div className="margin-bottom margin-medium">
                                    <p className="heading-xlarge text-weight-bold">
                                        Any further questions?
                                        <span className="text-gradient-2">
                                            <br />
                                            Request a demo.
                                        </span>
                                    </p>
                                </div>
                                <div className="displayonly_margin-top">
                                    <a
                                        data-w-id="ce9baed1-57d0-3aec-2f62-af58dbe9c817"
                                        href="https://meetings-eu1.hubspot.com/bela?__hstc=180372984.110723e7ee79c8b5cad6e8378037cce7.1659973797909.1660359929893.1660381758643.21&__hssc=180372984.2.1660381758643&__hsfp=3929547609"
                                        target="_blank"
                                        className="button w-button"
                                    >
                                        Request a demo
                                    </a>
                                </div>
                            </div>
                            <div className="max-width-small" />
                        </div>
                        <div className="cta2_component">
                            <div className="cta2_content">
                                <div className="cta2_content-left">
                                    <div className="max-width-large">
                                        <div className="margin-bottom margin-small">
                                            <h4>Or use the contact form</h4>
                                        </div>
                                        <p>Send us your questions, we will get back to you asap.</p>
                                    </div>
                                </div>
                                <a href="/contact" className="button invert-colors w-button">
                                    Contact form
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}