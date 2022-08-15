import React from 'react';

function OurProducts(props) {
    return (
        <div id='OurProducts'>
            <SectionHero></SectionHero>
            <ExploreProduct></ExploreProduct>
            <QAFurther></QAFurther>
        </div>
    );
}

export default OurProducts;


const SectionHero = () => {
    return (
        <section className="section section-hero our-products">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-4">
                        <div className="content-grid">
                            <div
                                id="w-node-df22f752-4466-00b1-a1d9-65387c0ea40c-369110f3"
                                className="max-width-full"
                            >
                                <div className="padding-bottom">
                                    <div className="heading-xlarge text-weight-bold">
                                        Our <span>products</span>
                                    </div>
                                    <div className="_0px">
                                        <h1>Brokerbot</h1>
                                    </div>
                                    <div className="margin-top margin-medium">
                                        <p>
                                            Aktionariat offers a set of tools for Swiss companies to create
                                            a market for their digital shares on their own website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-df22f752-4466-00b1-a1d9-65387c0ea42c-369110f3"
                                className="content-block"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-padding">
                <div className="container-large">
                    <div className="divider full-clear" />
                    <div className="padding-vertical padding-xlarge">
                        <div className="content-grid">
                            <div
                                id="w-node-_8d5612e3-338d-3f68-ae46-c1e824f04303-369110f3"
                                className="content-block space-between"
                            >
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-small">
                                        How our <span className="text-gradient-2">market&nbsp;works</span>
                                    </h3>
                                </div>
                            </div>
                            <div
                                id="w-node-_8d5612e3-338d-3f68-ae46-c1e824f04307-369110f3"
                                className="content-block"
                            >
                                <div className="margin-bottom">
                                    <div className="margin-bottom margin-small">
                                        <div className="horizontal-center">
                                            <div className="margin-right margin-small">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c87420e02bcc02350d44a3_icon-question.svg"
                                                    loading="lazy"
                                                    alt="Question Mark Icon"
                                                    className="icon-1x1-small"
                                                />
                                            </div>
                                            <div className="text-size-large">Problem</div>
                                        </div>
                                    </div>
                                    <p className="text-size-small text-color-darkgrey">
                                        A meaningful trading venue provides a share with sufficient
                                        liquidity. Unfortunately, even shares listed on central trading
                                        venues are sometimes affected by illiquidity, especially if they
                                        are not traded frequently enough (e.g. SIX listed titles are not
                                        necessarily liquid).
                                    </p>
                                </div>
                            </div>
                            <div
                                id="w-node-_8d5612e3-338d-3f68-ae46-c1e824f0430e-369110f3"
                                className="content-block"
                            >
                                <div className="margin-bottom">
                                    <div className="margin-bottom margin-small">
                                        <div className="horizontal-center">
                                            <div className="margin-right margin-small">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c874201fece310393b4ae5_icon-check.svg"
                                                    loading="lazy"
                                                    alt="Check Icon"
                                                    className="icon-1x1-small"
                                                />
                                            </div>
                                            <div className="text-size-large">Solution</div>
                                        </div>
                                    </div>
                                    <p className="text-size-small text-color-darkgrey">
                                        Following the successful model of Uniswap, we enable companies to
                                        provide a liquidity pool themselves.
                                    </p>
                                </div>
                            </div>
                            <div
                                id="w-node-_8d5612e3-338d-3f68-ae46-c1e824f04315-369110f3"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-small">
                                    <div className="margin-bottom margin-small">
                                        <div className="horizontal-center">
                                            <div className="margin-right margin-small">
                                                <img
                                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c87420f6120ec878f00440_icon-paragraph-center.svg"
                                                    loading="lazy"
                                                    alt="Center Paragraph Icon"
                                                    className="icon-1x1-small"
                                                />
                                            </div>
                                            <div className="text-size-large">Summary</div>
                                        </div>
                                    </div>
                                    <p className="text-size-small text-color-darkgrey">
                                        Thanks to this fully decentralized approach, we achieve high
                                        liquidity, full market control and maximum decentralization in
                                        line with the blockchain philosophy.
                                    </p>
                                </div>
                                <a
                                    href="/blogs/about-the-superiority-of-uniswap-style-markets-over-traditional-order-books"
                                    className="button-arrow action_arrow w-inline-block"
                                >
                                    <div>Learn more</div>
                                    <span className="arrow">
                                        ↘
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const ExploreProduct = () => {
    return (
        <section className='section section-grey'>
            <div id="details" className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="our-products-menu">
                            <div className="margin-bottom margin-xlarge">
                                <h2 className="heading-medium">Explore our products</h2>
                            </div>
                            <div className="margin-bottom margin-xxlarge">
                                <div className="tabs-menu">
                                    <a
                                        href="https://www.aktionariat.com/our-products/brokerbot#details"
                                        className="tab-link w-inline-block"
                                    >
                                        <div>Brokerbot</div>
                                    </a>
                                    <a
                                        href="https://www.aktionariat.com/our-products/portfolio-app#details"
                                        className="tab-link w-inline-block"
                                    >
                                        <div>Portfolio App</div>
                                    </a>
                                    <a
                                        href="https://www.aktionariat.com/our-products/corporate-dashboard#details"
                                        className="tab-link w-inline-block"
                                    >
                                        <div>Corporate Dashboard</div>
                                    </a>
                                    <a
                                        href="https://www.aktionariat.com/our-products/investor-widgets#details"
                                        className="tab-link w-inline-block"
                                    >
                                        <div>Investor Widgets</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content-products">
                            <div className="container-large">
                                <div className="margin-bottom margin-xlarge">
                                    <div className="content-grid rows-4 mobile-grid">
                                        <div
                                            id="w-node-_377faedc-6048-0ed3-2223-239a40218be1-9cd4fe06"
                                            className="content-block"
                                        >
                                            <div className="margin-bottom margin-medium">
                                                <div className="margin-bottom margin-medium">
                                                    <h3>
                                                        Our automated trading machine called{" "}
                                                        <span className="text-gradient-2">Brokerbot.</span>
                                                    </h3>
                                                </div>
                                                <p className="text-color-darkgrey">
                                                    Make your shares tradable by integrating our Brokerbot into
                                                    your website on a separate investors page.<em> </em>This
                                                    gives investors easy access to your company's shares.
                                                    Investments can be placed without unnecessary hurdles via
                                                    bank transfer or directly with crypto. <br />
                                                    <br />
                                                    Allow investors to sell shares back to the company to take
                                                    advantage of liquid shares. <br />
                                                    Why? <br />
                                                    Traditional market makers are expensive and mean an
                                                    additional intermediary between the issuer of shares and
                                                    investors. Smart contracts on the blockchain can handle
                                                    trading much more efficiently. Therefore our approach
                                                    enables not only the sale of shares but, when desired, also
                                                    a secondary market in an unprecedented form.
                                                    <br />
                                                    The issuer thereby always retains full control over its own
                                                    stock market.
                                                    <br />‍<br />
                                                    The Aktionariat Brokerbot® is the most efficient market
                                                    maker available.
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            id="w-node-_377faedc-6048-0ed3-2223-239a40218bf7-9cd4fe06"
                                            href="#"
                                            className="image-block image-center background-color-gradient-1 w-inline-block"
                                        >
                                            <img
                                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f06c8f5e0d3a1ff2e5d1_buy.png"
                                                loading="lazy"
                                                srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f06c8f5e0d3a1ff2e5d1_buy-p-500.png 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/62c2f06c8f5e0d3a1ff2e5d1_buy.png 515w"
                                                width="1004.5"
                                                sizes="(max-width: 479px) 83vw, (max-width: 767px) 89vw, (max-width: 991px) 100vw, 15.010416984558105px"
                                                alt
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="container-large">
                                <div className="margin-bottom margin-xlarge">
                                    <div className="max-width-medium">
                                        <div className="margin-bottom margin-xlarge">
                                            <h2>
                                                Fundamentals of{" "}
                                                <span className="text-gradient-2">Brokerbot</span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="content-grid">
                                        <div
                                            id="w-node-_377faedc-6048-0ed3-2223-239a40218c03-9cd4fe06"
                                            className="hover-card-item background-color-gradient-1"
                                        >
                                            <div className="hover-card-content">
                                                <div className="margin-bottom margin-medium">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a64249eee80069bfd480_history.svg"
                                                        loading="lazy"
                                                        alt="Background Icon"
                                                        className="icon-1x1-large"
                                                        style={{ filter: "saturate(0%) brightness(200%)" }}
                                                    />
                                                </div>
                                                <div className="max-width-full">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            Background
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Today, only 230 out of more than 500′000 Swiss companies
                                                        are publicly traded on the stock market. We believe many
                                                        more could and should be traded – thanks to our Brokerbot.
                                                        <br />
                                                        <br />
                                                        We have the legal, technical, and economic ideas to create
                                                        liquid markets for thousands of additional Swiss
                                                        companies, potentially unlocking billions in dormant
                                                        economic value.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_377faedc-6048-0ed3-2223-239a40218c10-9cd4fe06"
                                            className="hover-card-item background-color-gradient-1"
                                        >
                                            <div className="hover-card-content">
                                                <div className="margin-bottom margin-medium">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a643f3078834c6ded300_legal-foundations.svg"
                                                        loading="lazy"
                                                        alt="Legal Foundations Icon"
                                                        className="icon-1x1-large"
                                                        style={{ filter: "saturate(0%) brightness(200%)" }}
                                                    />
                                                </div>
                                                <div className="max-width-full">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            Strong Legal Foundations
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Since February 1st, 2021, Swiss DLT (Distributed Ledger
                                                        Technology) Law enables the introduction of ledger-based
                                                        securities that are represented on a blockchain. <br />
                                                        <br />
                                                        Aktionariat AG has been at the forefront of the new
                                                        frontiers offered by this fresh legal framework since day
                                                        one: we’ve been selling our own shares using Brokerbot
                                                        immediately after the new legislation took effect.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_377faedc-6048-0ed3-2223-239a40218c1d-9cd4fe06"
                                            className="hover-card-item background-color-gradient-1"
                                        >
                                            <div className="hover-card-content">
                                                <div className="margin-bottom margin-medium">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a64370a3e56173bbc59f_economics-rationale.svg"
                                                        loading="lazy"
                                                        alt="Economic Rationale Icon"
                                                        className="icon-1x1-large"
                                                        style={{ filter: "saturate(0%) brightness(200%)" }}
                                                    />
                                                </div>
                                                <div className="max-width-full">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            Economics Rationale
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Assets are more valuable when they are liquid. Our
                                                        Brokerbot not only makes your shares tradable, but also
                                                        ensures the necessary liquidity in trading.
                                                        <br />
                                                        <br />
                                                        Thanks to a liquidity pool provided by the company, it
                                                        achieves a high degree of liquidity while maintaining
                                                        control over its own stock market. The most rational
                                                        approach to making SME shares tradable.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_377faedc-6048-0ed3-2223-239a40218c2a-9cd4fe06"
                                            className="hover-card-item background-color-gradient-1"
                                        >
                                            <div className="hover-card-content">
                                                <div className="margin-bottom margin-medium">
                                                    <img
                                                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a64249521cc76f2b069b_innovative-tech.svg"
                                                        loading="lazy"
                                                        alt="Innovative Tech Icon"
                                                        className="icon-1x1-large"
                                                        style={{ filter: "saturate(0%) brightness(200%)" }}
                                                    />
                                                </div>
                                                <div className="max-width-full">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            Innovative Technologies
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Smart Contracts on distributed networks (Blockchain
                                                        Technology) make it possible to create digital
                                                        representations of physical objects and the peer-to-peer
                                                        exchange of them. <br />
                                                        <br />
                                                        Brokerbot runs based on an innovative smart contract (our
                                                        Market Contract), on the Ethereum blockchain, with each
                                                        Brokerbot installation bound to a specific Ethereum
                                                        Address. Delivered as a web-based widget, Brokerbot makes
                                                        the automated market-making of tokenized equity possible
                                                        on any website.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="container-large">
                                <div className="cta_component margin-bottom margin-small">
                                    <div className="max-width-full">
                                        <div className="margin-bottom margin-medium">
                                            <p className="heading-xlarge text-weight-bold">
                                                Discover companies using{" "}
                                                <span className="text-gradient-2">our toolkit.</span>
                                            </p>
                                        </div>
                                        <a href="#" className="button w-button">
                                            Show more
                                        </a>
                                    </div>
                                    <div className="max-width-small" />
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="container-large">
                                <div className="max-width-large">
                                    <div className="margin-bottom margin-xlarge">
                                        <div className="margin-bottom margin-medium">
                                            <h2 className="text-gradient-2">Key Features</h2>
                                        </div>
                                        <div className="text-size-medium">
                                            Shares are meant to be transferable. Markets work best when they
                                            are free and open. We create transferability and transparency
                                            for private equity markets by leveraging the latest legal and
                                            technical developments. By tokenizing your equity and allowing
                                            it to be freely traded you can expect the following benefits:
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div
                                        id="w-node-_377faedc-6048-0ed3-2223-239a40218c44-9cd4fe06"
                                        className="hover-card-item background-color-gradient-1"
                                    >
                                        <div className="hover-card-content horizontal-card">
                                            <div className="dont-shrink">
                                                <div className="margin-right margin-large">
                                                    <div className="margin-bottom margin-medium">
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a999090c123f13202d1b_open.svg"
                                                            loading="lazy"
                                                            alt="Open Icon"
                                                            className="icon-1x1-large"
                                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="horizontal-card-text">
                                                <div className="margin-right margin-medium">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            Transparent Technical Basis
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Both the source code and the actual contract a given
                                                        Brokerbot is running on are all open source, freely and
                                                        openly accessible, on the blockchain, safe from
                                                        alterations. The Brokerbot that you see on this page and
                                                        our Investor Relations page, for instance, is on
                                                        0xbddE...bB84.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="dont-shrink">
                                                <a
                                                    data-w-id="377faedc-6048-0ed3-2223-239a40218c52"
                                                    href="https://etherscan.io/address/0xbddE35780e3986a47e54a580017d8213f0D2bB84"
                                                    target="_blank"
                                                    className="button-arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>View Smart Contract</div>
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
                                <div className="margin-bottom margin-medium">
                                    <div
                                        id="w-node-_377faedc-6048-0ed3-2223-239a40218c58-9cd4fe06"
                                        className="hover-card-item background-color-gradient-1"
                                    >
                                        <div className="hover-card-content horizontal-card">
                                            <div className="dont-shrink">
                                                <div className="margin-right margin-large">
                                                    <div className="margin-bottom margin-medium">
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a9998bee1b789ca2a6c1_curve-chart.svg"
                                                            loading="lazy"
                                                            alt="Curve Icon"
                                                            className="icon-1x1-large"
                                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="horizontal-card-text">
                                                <div className="margin-right margin-medium">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            A Bonding Curve – Under Your Control
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        The smart contract establishes a linear relationship
                                                        between the (net) number of shares sold and the current
                                                        price. The price mechanism of the Brokerbot operates on
                                                        simple parameters which the operating company can easily
                                                        configure in our Corporate Dashboard. In concrete terms,
                                                        this means that the issuer can define by how many
                                                        francs/rappen the share price moves for each purchase/sale
                                                        of shares.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div
                                        id="w-node-_377faedc-6048-0ed3-2223-239a40218c6c-9cd4fe06"
                                        className="hover-card-item background-color-gradient-1"
                                    >
                                        <div className="hover-card-content horizontal-card">
                                            <div className="dont-shrink">
                                                <div className="margin-right margin-large">
                                                    <div className="margin-bottom margin-medium">
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a98d49eee82280bfdd7e_liquidity.svg"
                                                            loading="lazy"
                                                            alt="Liquidity Icon"
                                                            className="icon-1x1-large"
                                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="horizontal-card-text">
                                                <div className="margin-right margin-medium">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            Liquidity Premium
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Investors are likely to pay a higher price per share when
                                                        there is a reliable market price and an option to
                                                        liquidate their positions. Damodaran (2005) empirically
                                                        estimates this effect to be at least 25%, even more for
                                                        smaller firms.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="dont-shrink">
                                                <a
                                                    data-w-id="377faedc-6048-0ed3-2223-239a40218c7a"
                                                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=841484"
                                                    target="_blank"
                                                    className="button-arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>View Report</div>
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
                                <div className="margin-bottom margin-medium">
                                    <div
                                        id="w-node-_377faedc-6048-0ed3-2223-239a40218c80-9cd4fe06"
                                        className="hover-card-item background-color-gradient-1"
                                    >
                                        <div className="hover-card-content horizontal-card">
                                            <div className="dont-shrink">
                                                <div className="margin-right margin-large">
                                                    <div className="margin-bottom margin-medium">
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a98e8bee1b34f6a2a6bf_reduced-price.svg"
                                                            loading="lazy"
                                                            alt="Reduced Icon"
                                                            className="icon-1x1-large"
                                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="horizontal-card-text">
                                                <div className="margin-right margin-medium">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            Reduced Price Uncertainty
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Founders, employees and investors benefit as their
                                                        tokenized shares gain a tangible and predictable value.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div
                                        id="w-node-_377faedc-6048-0ed3-2223-239a40218c8e-9cd4fe06"
                                        className="hover-card-item background-color-gradient-1"
                                    >
                                        <div className="hover-card-content horizontal-card">
                                            <div className="dont-shrink">
                                                <div className="margin-right margin-large">
                                                    <div className="margin-bottom margin-medium">
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61c8a98daa2c8d18a6596aaa_meeting.svg"
                                                            loading="lazy"
                                                            alt="Meeting Icon"
                                                            className="icon-1x1-large"
                                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="horizontal-card-text">
                                                <div className="margin-right margin-medium">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            More Potential Investors
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        Less uncertainty allows to create appeal to new types of
                                                        less adventurous investors. Smaller ticket sizes lower the
                                                        entry level for smaller investors. Ease of use allows
                                                        anyone to purchase shares, even if not familiar with stock
                                                        exchanges. Since our tools work on the Ethereum
                                                        Blockchain, issuers automatically get access to 50 million
                                                        Ethereum users; all potential investors.
                                                    </p>
                                                </div>
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

const QAFurther = () => {
    return (
        <section>
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
                                        href="https://meetings-eu1.hubspot.com/bela?__hstc=180372984.110723e7ee79c8b5cad6e8378037cce7.1659973797909.1660383757307.1660400542472.23&__hssc=180372984.6.1660400542472&__hsfp=3929547609"
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