import React from 'react';
import DocAside from './DocAside';
import DocumentationHowToBuy from './DocumentationHowToBuy';
function Documentation(props) {
    return (
        <div id='Documentation'>
            <DocumentationBox></DocumentationBox>
        </div>
    );
}

export default Documentation;

export const SectionHero = () => {
    return (
        <section className="section section-hero documentation pt-4">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-documentation">
                        <div className="max-width-large">
                            <div className="padding-bottom">
                                <div className="heading-xlarge text-weight-bold">Documentation</div>
                                <div className="margin-top margin-medium">
                                    <p>
                                        Aktionariat offers a set of tools for Swiss companies to create a
                                        market for their digital shares on their own website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

const DocumentationBox = () => {
    return <DocumentationHowToBuy></DocumentationHowToBuy>
}