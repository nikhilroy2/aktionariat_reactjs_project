import React from 'react';
// for English version faq
function FAQEn(props) {
    return (
        <div id='FAQEn'>
            <SectionHero></SectionHero>
            <OurVision></OurVision>
        </div>
    );
}

export default FAQEn;

const SectionHero = () => {
    return (
        <section className="section section-hero faq">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-2">
                        <div className="max-width-full">
                            <div className="padding-bottom">
                                <div className="content-grid">
                                    <div
                                        id="w-node-c964651c-c1fb-84db-6b92-c18292305996-418f4829"
                                        className="max-width-full"
                                    >
                                        <h1>F.A.Q.</h1>
                                    </div>
                                    <div
                                        id="w-node-c964651c-c1fb-84db-6b92-c1829230599e-418f4829"
                                        className="max-width-full"
                                    >
                                        <div className="margin-top">
                                            <a
                                                href="/faq/de"
                                                className="button-arrow action_arrow button-arrow-large w-inline-block"
                                            >
                                                <div>Lesen Sie auf Deutsch</div>
                                                <span className="arrow">
                                                    ↘
                                                </span>
                                            </a>
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

const OurVision = () => {
    const category_object = {
        category_1: {
            en: {
                title: 'Aktienmarkt',
                accordions: [
                    {
                        id: 1,
                        title: 'Auf welcher gesetzlichen Grundlage basieren die Aktientoken?',
                        description: <div className="text-rich-text w-richtext">
                            <p>
                                Mit den am 01.02.21 in Kraft getretenen{" "}
                                <a href="https://www.sif.admin.ch/sif/de/home/finanzmarktpolitik/digit_finanzsektor/blockchain.html">
                                    Änderungen im Schweizer Obligationenrecht
                                </a>{" "}
                                wurde der Begriff der Registerwertrechte eingeführt.{" "}
                                <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#part_5/tit_33/chap_1/lvl_H">
                                    Artikel 973d
                                </a>{" "}
                                definiert das Registerwertrecht als ein Recht, (1)
                                welches in einem Wertrechteregister eingetragen ist
                                und (2) nur über dieses geltend gemacht werden kann.
                            </p>
                            <p>
                                Ein auf DLT (Distributed Ledger Technology)
                                basierendes Register wie bspw. eine Blockchain
                                erfüllt die in Artikel 973d Ziffer 2 genannten
                                Anforderungen an ein Wertrechteregister. Sofern die
                                Statuten eines Unternehmens dies erlauben, können
                                Wertpapiere wie bspw. Aktien als Registerwertrechte
                                ausgegeben werden.
                            </p>
                            <p>
                                Auf dieser Grundlage tokenisieren wir unsere eigenen
                                Aktien, sowie die unserer Kunden. Damit beinhalten
                                die Aktientoken exakt dieselben Rechte und Pflichten
                                wie “traditionelle” Aktien.
                            </p>
                        </div>
                    },
                    {
                        id: 2,
                        title: `Was brauche ich, um tokenisierte Aktien kaufen zu
                        können?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Im Grunde reicht eine Ethereum-Wallet, damit
                                    Aktientoken in das Wallet des Investors ausgeliefert
                                    werden können, sofern man Aktien per Banküberweisung
                                    kaufen möchte. Idealerweise verwendet man unser
                                    eigenes Mobile Wallet (
                                    <a href="https://apps.apple.com/ch/app/aktionariat/id1518326813?l=en">
                                        iOS
                                    </a>{" "}
                                    oder{" "}
                                    <a href="https://play.google.com/store/apps/details?id=com.aktionariat.app">
                                        Android
                                    </a>
                                    ). Dieses wurde eigens für das Zusammenspiel mit dem
                                    Aktionariat Brokerbot (Aktienautomat) entwickelt.
                                    Daneben besteht die Möglichkeit den Brokerbot mit
                                    MetaMask oder einer WalletConnect kompatiblen
                                    Portfolio App zu verbinden.
                                </p>
                                <p>
                                    Möchte man Aktientoken per Ether (ETH) oder
                                    Kryptofranken (XCHF) zahlen, muss der entsprechende
                                    Betrag in der Wallet vorhanden sein. Über die
                                    Aktionariat Portfolio App kann man per
                                    Banküberweisung Ether kaufen.
                                </p>
                            </div>
                    },
                    {
                        id: 3,
                        title: `Ist das Investieren anonym oder wird die Identität
                        eines Investors in irgendeiner Form veröffentlicht?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Persönliche Daten von Investoren wie z.B. Namen,
                                    Adresse und Email-Adresse werden nicht publiziert.
                                    Um einen Eintrag im Aktienbuch des entsprechenden
                                    Unternehmens zu erhalten, müssen sich Investoren mit
                                    Namen und Adresse registrieren (mehr dazu unter
                                    weiter unten). Die Ethereum-Adresse eines Halters
                                    von Aktientoken ist in der Ethereum Blockchain
                                    gespeichert und für jeden einsehbar, allerdings ohne
                                    jegliche Verknüpfung zu persönlichen Daten, welche
                                    nicht auf der Blockchain gespeichert werden.
                                </p>
                            </div>
                    },
                    {
                        id: 4,
                        title: `Ist das Investieren anonym oder wird die Identität
                        eines Investors in irgendeiner Form veröffentlicht?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Persönliche Daten von Investoren wie z.B. Namen,
                                    Adresse und Email-Adresse werden nicht publiziert.
                                    Um einen Eintrag im Aktienbuch des entsprechenden
                                    Unternehmens zu erhalten, müssen sich Investoren mit
                                    Namen und Adresse registrieren (mehr dazu unter
                                    weiter unten). Die Ethereum-Adresse eines Halters
                                    von Aktientoken ist in der Ethereum Blockchain
                                    gespeichert und für jeden einsehbar, allerdings ohne
                                    jegliche Verknüpfung zu persönlichen Daten, welche
                                    nicht auf der Blockchain gespeichert werden.
                                </p>
                            </div>
                    },
                    {
                        id: 5,
                        title: `Bei einem effektiven Aktienverkauf, wie werden die
                        Aktionäre in das Handelsregister eingetragen und
                        vorher vom Notar beglaubigt?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Dies ist nur bei der Zeichnung neuer Aktien
                                    notwendig. Unser Modell basiert auf dem Handwechsel
                                    von Namensaktien, die im Besitz des Unternehmens
                                    sind (Treasury Shares), also bereits gezeichnet
                                    wurden. Bei einem Kauf/Verkauf von Aktientoken über
                                    den Aktionariat Brokerbot wird kein Kaufvertrag
                                    benötigt, da dieser durch den Smart-Contract ersetzt
                                    wird.
                                </p>
                            </div>
                    },
                    {
                        id: 6,
                        title: ` Wie werden Aktionäre im Aktienbuch eingetragen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Aktionäre müssen sich ins Aktienbuch eintragen
                                    lassen, wenn sie das Recht auf Dividende und
                                    Stimmabgabe erhalten möchten. Dazu können sie sich
                                    einfach in der Aktionariat Portfolio App oder dem
                                    Shareholder Registry Widget (auf unserer
                                    Investorenseite) mit Namen und Adresse erfassen. Wir
                                    empfehlen Investoren dies vor dem Kauf der Aktien zu
                                    erledigen.
                                </p>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 7,
                        title: ` Wie finde ich Investoren?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Die Aktionariat AG versteht sich als
                                    Technologie-Anbieter und sucht nicht aktiv nach
                                    Investoren für seine Kunden. Dennoch besitzt die
                                    Aktionariat AG eine gewisse Reichweite über
                                    verschiedene Medien. Das Aufschalten des Brokerbots
                                    eines Kunden wird über sämtliche Kanäle der
                                    Aktionariat AG geteilt (Social Media, Newsletter).
                                    Ausserdem werden sämtliche unserer Presse-Kontakte
                                    über den Go-Live neuer Kunden informiert.
                                </p>
                            </div>
                    },
                    {
                        id: 8,
                        title: `Müssen Emittenten ein Whitelisting betreiben?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein, ein Whitelisting ist im Allgemeinen nicht
                                    nötig. Wenn ein Emittent eine
                                    Übertragungsbeschränkung (Vinkulierung) der Aktien
                                    wünscht, empfiehlt es sich, diese auf der Ebene der
                                    Registrierung im Aktienbuch umzusetzen und nicht
                                    mittels Whitelisting im Smart Contract. Auch
                                    vertragliche Übertragungsbeschränkungen
                                    (beispielsweise ein Lockup) können flexibler über
                                    sekundäre Register abgebildet werden. Je einfacher
                                    das Hauptregister (smart contract) gehalten wird,
                                    desto tiefer sind die Transaktionsgebühren im
                                    Ethereum-System und desto besser kann der Token ins
                                    Blockchain-Ökosystem integriert werden.
                                    Beispielsweise lehnen viele dezentrale Exchanges
                                    Token ab, die einem Whitelisting oder ähnlichen
                                    Beschränkungen unterliegen.
                                </p>
                            </div>
                    },
                    {
                        id: 9,
                        title: `Kann ein Emittent (Unternehmen) die E-Mail-Adresse
                        eines Aktionärs selbstständig anpassen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein, das ist nicht möglich. Aber ein Anleger kann
                                    jederzeit eine zusätzliche E-Mail-Adresse in der
                                    Aktionariat Mobile Wallet (App) hinzufügen und
                                    auswählen welche Adresse die primäre Adresse sein
                                    soll. Nicht primäre Adressen können vom Investor in
                                    der Aktionariat App entfernt werden.
                                </p>
                            </div>
                    },
                    {
                        id: 10,
                        title: `Sind Emittenten verpflichtet eine KYC/AML
                        durchzuführen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Es besteht laut der{" "}
                                    <a href="https://www.finma.ch/de/news/2018/02/20180216-mm-ico-wegleitung/">
                                        Wegleitung der FINMA
                                    </a>{" "}
                                    keine gesetzliche Verpflichtung die Käufer von
                                    Aktientoken vor dem Kauf zu identifizieren, da in
                                    diesem Fall keine GwG-Unterstellung besteht.
                                    Hingegen ist der Aktionär verpflichtet, sich bei der
                                    Gesellschaft zu registrieren, sofern er mit dem Kauf
                                    25 Prozent des Aktienkapitals oder der Stimmrechte
                                    erreicht oder überschreitet (
                                    <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_697_j">
                                        Art. 697j OR
                                    </a>
                                    ) Ohne Registrierung kann er seine Rechte als
                                    Aktionär nicht geltend machen. Auch zu beachten gilt
                                    es, dass Finanzintermediäre beim Wechseln von
                                    Kryptowährungen einen Herkunftsnachweis verlangen.
                                    Welche Dokumente dafür nötig sind, hängt von den
                                    jeweiligen Umständen ab.
                                </p>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 11,
                        title: `Wie wird die Marktkapitalisierung berechnet?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Die Marktkapitalisierung wird wie folgt berechnet:
                                    (Gesamtzahl der Aktien - eigene Aktien) * Aktienkurs
                                </p>
                                <p>
                                    Eigene Aktien sind Aktien, die vom Unternehmen (und
                                    nicht von einem Anleger) gehalten werden.
                                </p>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 12,
                        title: `Welche Dokumente wie bspw. Abschlüsse oder Prospekte
                        müssen Emittenten veröffentlichen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Abschlüsse: Im Modell der Aktionariat AG muss kein
                                    (Jahres-)Abschluss veröffentlicht werden.
                                    Bestehenden Aktionären hingegen sind
                                    Geschäftsberichte und Revisionsberichte natürlich
                                    offenzulegen (
                                    <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_696">
                                        Art. 696 Abs. 1 OR
                                    </a>
                                    ). Lediglich Unternehmen, welche ihre
                                    Beteiligungspapiere an einer Börse kotiert haben,
                                    sogenannte Publikumsgesellschaften, müssen ihre
                                    Geschäftsberichte, sowie Revisionsberichte
                                    publizieren (
                                    <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_958_e">
                                        Art. 958e Abs. 1 OR
                                    </a>
                                    ,{" "}
                                    <a href="https://www.six-exchange-regulation.com/dam/downloads/regulation/admission-manual/listing-rules/03_01-LR_de.pdf">
                                        Art. 49 KR SIX
                                    </a>
                                    ). Die Aktionariat AG empfiehlt aber dringend
                                    Informationen zur Performance des Unternehmens auf
                                    der eigenen Webseite zu veröffentlichen, um
                                    potentiellen Investoren gegenüber eine gewisse
                                    Transparenz zu schaffen, dazu gehören insb. auch die
                                    Jahresabschlüsse.
                                </p>
                                <p>
                                    Prospektpflicht: Gemäss dem Schweizer
                                    <a href="https://www.fidleg.com/fidleg">
                                        {" "}
                                        Finanzdienstleistungsgesetz (FIDLEG)
                                    </a>{" "}
                                    muss kein Prospekt veröffentlicht werden, sofern
                                    (Art 36, Ziffer 1):
                                </p>
                                <ul role="list">
                                    <li>
                                        sich nur an Anlegerinnen und Anleger richtet, die
                                        als professionelle Kunden gelten;
                                    </li>
                                    <li>
                                        sich an weniger als 500 Anlegerinnen und Anleger
                                        richtet;
                                    </li>
                                    <li>
                                        sich an Anlegerinnen und Anleger richtet, die
                                        Effekten im Wert von mindestens 100 000 Franken
                                        erwerben;
                                    </li>
                                    <li>
                                        eine Mindeststückelung von 100 000 Franken
                                        aufweist;
                                    </li>
                                    <li>
                                        über einen Zeitraum von 12 Monaten berechnet einen
                                        Gesamtwert von 8 Millionen Franken nicht
                                        übersteigt.
                                    </li>
                                </ul>
                                <p>‍</p>
                            </div>
                    },
                    {
                        id: 13,
                        title: `Where does the ETH/CHF conversion rate come from?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Der Wechselkurs (ETH/CHF), den wir berücksichtigen,
                                    wird von chain.link geholt. Tatsächlich holen wir
                                    den ETH/USD und den USD/CHF Wechselkurs, um ETH/CHF
                                    zu berechnen. Darüber hinaus integrieren wir einen
                                    1%igen Slippage-Schutz beim Auslösen von
                                    Brokerbot-Transaktionen.
                                </p>
                            </div>
                    },
                    {
                        id: 14,
                        title: `Ist unser Unternehmen potentiellen Investoren
                        gegenüber verpflichtet einen Revisionsbericht
                        offenzulegen?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein, es besteht gegenüber potentiellen Investoren
                                    weder eine Pflicht zur Offenlegung des
                                    Geschäftsberichts noch eine Pflicht diesen von einer
                                    Revisionsstelle prüfen zu lassen.&nbsp;
                                </p>
                            </div>
                    },
                    {
                        id: 15,
                        title: `Wenn ein Käufer einer Aktie, diese weiterverkaufen
                        oder zurückverkaufen möchte - wie funktioniert das und
                        welche Möglichkeiten hat er?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Der Emittent hat dank der Aktionariat AG die
                                    Möglichkeit einen Liquiditätspool zur Verfügung zu
                                    stellen, indem er einen Teil der von Investoren
                                    gesammelten Gelder für Aktienrückkäufe in seinem
                                    Brokerbot belässt. Der Investor geht in diesem Fall
                                    gleich vor wie beim Aktienkauf, indem er sein
                                    Ethereum-Wallet mit dem Brokerbot verbindet und
                                    anstelle des ”Buy”- den “Sell”-Reiter anwählt. So
                                    kann Investor ganz leicht seine Aktien oder einen
                                    Teil davon an das Unternehmen zurückverkaufen.
                                </p>
                                <p>
                                    Daneben besteht auch die die Möglichkeit die Aktien
                                    vom Wallet eines Investors auf ein anderes Wallet zu
                                    übertragen. Bei Verwendung der Aktionariat Portfolio
                                    App:
                                </p>
                                <ul role="list">
                                    <li>
                                        wählt der Investor den Tab&nbsp;
                                        “Portfolio”,&nbsp;
                                    </li>
                                    <li>wählt das entsprechende Asset,</li>
                                    <li>
                                        wählt unter “Positions” die gewünschte
                                        Absenderadresse und
                                    </li>
                                    <li>drückt danach auf “Transfer”.</li>
                                </ul>
                                <p>
                                    Unter “to Address” kann der Investor anschliessend
                                    eine eigene Ethereum-Adresse oder externe Adresse
                                    wählen und per Scan des QR-Codes oder mittels
                                    manueller Eingabe der Ziel-Ethereum-Adresse die
                                    gewünschte Anzahl Aktientoken übertragen. Die
                                    Bezahlung der transferierten Token ist ein separater
                                    Prozess und kann auch ausserhalb des
                                    Blockchain-Ökosystems geschehen.&nbsp;
                                </p>
                                <p>
                                    Wichtig: Der neue Inhaber der Aktientoken muss sich
                                    über die Aktionariat Portfolio App registrieren,
                                    damit er im Aktienbuch eingetragen wird. Bei
                                    Verwendung einer anderen Ethereum Wallet kann sich
                                    der Investor mit Hilfe des Registration Widgets im
                                    Aktienbuch erfassen. Mehr dazu unter:{" "}
                                    <a href="https://aktionariat.com/market#shareholder-registry">
                                        https://aktionariat.com/market#shareholder-registry
                                    </a>
                                    <br />
                                </p>
                            </div>
                    },
                    {
                        id: 16,
                        title: ` Müssen zwingend sämtliche Aktien tokenisiert werden?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Nein. Sowohl unser Corporate Dashboard als auch
                                    unsere Mobile Wallet sind in der Lage sowohl
                                    tokenisierte als auch traditionelle Aktien zu
                                    halten. Ein Unternehmen kann also problemlos
                                    zeitgleich tokenisierte und nicht-tokenisierte Aktie
                                    verwalten. Wir empfehlen zumindest den Free
                                    Float-Teil der Aktien als Security Token zur
                                    Verfügung zu stellen, damit dieser Teil der Aktien
                                    gehandelt werden kann.
                                </p>
                            </div>
                    },
                    {
                        id: 17,
                        title: `Was hat es mit den Transaktionskosten auf sich?`,
                        description:
                            <div className="text-rich-text w-richtext">
                                <p>
                                    Die Transaktionskosten werden vom Ethereum Netzwerk
                                    erhoben und können stark variieren. Die Kosten
                                    hängen hauptsächlich davon ab wie viele andere
                                    Transaktionen auf der Ethereum Blockchain gerade
                                    ausgeführt werden. In Zukunft werden wir eine Lösung
                                    mit dauerhaft geringeren Transaktionskosten
                                    anbieten.
                                </p>
                            </div>
                    },
                ]
            },
        }
    }


    function accordionControl(id) {
        let getAccordion = document.querySelector(`.faqCategory1Collapse${id}icon`);
        getAccordion.classList.toggle('icon_rotate');
    }

    return <section id="our-vision" className='section section-grey'>
        <div id="our-vision" className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="content-grid">
                        <div
                            id="w-node-fa089396-172b-9643-4216-14fba0126f99-c2046b69"
                            className="sidebar sidebar-sticky"
                        >
                            <div className="margin-bottom margin-small">
                                <div className="text-size-medium">Category</div>
                            </div>
                            <div className="sidebar-links-list">
                                <a href="#shares-market" className="sidebar-link">
                                    Aktienmarkt
                                </a>
                                <a href="#drag-along" className="sidebar-link">
                                    Drag-Along
                                </a>
                                <a href="#dependencies" className="sidebar-link">
                                    Abhängigkeiten
                                </a>
                                <a href="#wallet" className="sidebar-link w--current">
                                    Wallet
                                </a>
                            </div>
                        </div>
                        <div
                            id="w-node-fa089396-172b-9643-4216-14fba0126fa6-c2046b69"
                            className="content-block space-between"
                        >
                            <div id="shares-market" className="sidebar-section">
                                <div className="margin-bottom margin-medium">
                                    <h2>Aktienmarkt</h2>
                                </div>
                                <div className="w-dyn-list">

                                    <div role="list" className="w-dyn-items">
                                        {category_object.category_1.en.accordions.map(v => {
                                            return (
                                                <div key={v.id} role="listitem" className="w-dyn-item">
                                                    <div className="accordion-item w-dyn-item" style={{ opacity: "0.6" }}>
                                                        <div
                                                            data-w-id="d79ecbd3-b0e6-8ab0-6838-8e83c83a34ee"
                                                            className="accordion-trigger"
                                                            onClick={() => accordionControl(v.id)}
                                                            data-mdb-toggle="collapse"
                                                            data-mdb-target={`#faqCategory1Collapse${v.id}`}
                                                        >
                                                            <div className="dropdown-title large-title">
                                                                <h3 className="text-size-medium text-weight-normal">
                                                                    Auf welcher gesetzlichen Grundlage basieren die
                                                                    Aktientoken?
                                                                </h3>
                                                            </div>
                                                            <div
                                                                className={`icon accordion-icon faqCategory1Collapse${v.id}icon`}
                                                            >
                                                                <img
                                                                    src={require('../../../icons/plus.svg').default}
                                                                    loading="lazy"
                                                                    alt="Plus Icon"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="accordion-item-content accordion-collapse collapse"
                                                            id={`faqCategory1Collapse${v.id}`}
                                                        >
                                                            <div className="accordion-description">
                                                                <div className="text-rich-text w-richtext">
                                                                    <p>
                                                                        Mit den am 01.02.21 in Kraft getretenen{" "}
                                                                        <a href="https://www.sif.admin.ch/sif/de/home/finanzmarktpolitik/digit_finanzsektor/blockchain.html">
                                                                            Änderungen im Schweizer Obligationenrecht
                                                                        </a>{" "}
                                                                        wurde der Begriff der Registerwertrechte eingeführt.{" "}
                                                                        <a href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#part_5/tit_33/chap_1/lvl_H">
                                                                            Artikel 973d
                                                                        </a>{" "}
                                                                        definiert das Registerwertrecht als ein Recht, (1)
                                                                        welches in einem Wertrechteregister eingetragen ist
                                                                        und (2) nur über dieses geltend gemacht werden kann.
                                                                    </p>
                                                                    <p>
                                                                        Ein auf DLT (Distributed Ledger Technology)
                                                                        basierendes Register wie bspw. eine Blockchain
                                                                        erfüllt die in Artikel 973d Ziffer 2 genannten
                                                                        Anforderungen an ein Wertrechteregister. Sofern die
                                                                        Statuten eines Unternehmens dies erlauben, können
                                                                        Wertpapiere wie bspw. Aktien als Registerwertrechte
                                                                        ausgegeben werden.
                                                                    </p>
                                                                    <p>
                                                                        Auf dieser Grundlage tokenisieren wir unsere eigenen
                                                                        Aktien, sowie die unserer Kunden. Damit beinhalten
                                                                        die Aktientoken exakt dieselben Rechte und Pflichten
                                                                        wie “traditionelle” Aktien.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>




                            <div id="drag-along" className="sidebar-section">
                                <div className="margin-bottom margin-medium">
                                    <div className="margin-bottom margin-xlarge">
                                        <div className="divider top-clear" />
                                    </div>
                                    <div className="margin-bottom margin-medium">
                                        <h2>Drag-Along</h2>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="bf3f7737-eb79-343a-5c62-f4b2a67806a6"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Können die Kleinaktionäre (Investoren in den Free
                                                            Float Teil der Aktien) den Verkauf des Unternehmens
                                                            blockieren?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Im Gegenteil. Unsere Basetokens können in einen
                                                                Drag-Along Token verpackt werden. Dieser erlaubt es
                                                                Kleinaktionäre bei einem Exit automatisch zum
                                                                Verkauf ihrer Aktientoken zu zwingen, sofern min 75%
                                                                aller abgegebenen Stimmen einem Verkauf zustimmen.
                                                                Jeder Drag-Along Token berechtigt zur Abgabe einer
                                                                Stimme. Mit dem Kauf von Drag-Along Token über den
                                                                Brokerbot auf der Webseite des Emittenten stimmen
                                                                Aktionäre dem „Token Holder Agreement“ zu, womit sie
                                                                sich mit der Drag-Along-Klausel einverstanden
                                                                erklären. Zum Verkauf des gesamten Unternehmens
                                                                mittels dieser Drag-Along-Funktion müssen allerdings
                                                                zuvor sämtliche Aktien tokenisiert werden. Das
                                                                Tokenisieren von “traditionellen” Aktien, welche
                                                                bspw. von den Gründern und/oder Lead-Investoren
                                                                gehalten werden, kann problemlos auf den Zeitpunkt
                                                                verschoben werden, zu dem ein Verkauf realistisch
                                                                erscheint**.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="bf3f7737-eb79-343a-5c62-f4b2a67806a6"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Wie funktioniert die Durchsetzung der
                                                            Drag-Along-Klausel?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Initiierung: Jeder interessierte Käufer mit genügend
                                                                Kapital* kann ein Angebot zum Erwerb aller (aber
                                                                nicht weniger) Drag-Along-Token von den anderen
                                                                Drag-Along-Token-Inhabern zu einem bestimmten Preis
                                                                pro Aktie im Drag-Along-Smart-Contract initiieren.
                                                                Den Übernahmepreis definiert der potentielle Käufer.
                                                                Dadurch wird ein Smart Contract, der den Erwerb
                                                                regelt, erstellt und ein entsprechendes Ereignis auf
                                                                der Blockchain emittiert. Sämtliche Tokenholder
                                                                werden über das Kaufangebot benachrichtigt und um
                                                                eine Stimmabgabe gebeten.
                                                            </p>
                                                            <p>
                                                                Abstimmung: Nach der Initiierung eines Angebots
                                                                beginnt die Abstimmungsphase (diese dauert 60 Tage).
                                                                Während der Abstimmungsphase kann jeder
                                                                Drag-Along-Token-Inhaber (einschließlich der
                                                                anbietenden Partei) mit „Ja“ oder „Nein“ über das
                                                                Erwerbsangebot abstimmen. Nach dem Ende des
                                                                Abstimmungszeitraums beginnt der
                                                                Ausführungszeitraum.
                                                            </p>
                                                            <p>
                                                                Ausführung: Die anbietende Partei kann die Funktion
                                                                "Ausführung" auf dem Angebotsvertrag auslösen, um
                                                                den Erwerb jederzeit während des
                                                                Abstimmungszeitraums oder des Ausführungszeitraums
                                                                zu erzwingen. Die Durchführung des Erwerbs ist nur
                                                                zu einem Zeitpunkt möglich, zu dem das Erwerbsquorum
                                                                erreicht ist und die erforderliche Finanzierung zur
                                                                Verfügung steht*. Während der Abstimmungsphase
                                                                müssen min. 75% aller Drag-Along Tokens mit „Ja“
                                                                gestimmt haben, während der Ausführungsphase reichen
                                                                75% aller abgegeben Stimmen. Mit der Ausführung des
                                                                Erwerbsangebots werden alle „verpackten“ Basis-Token
                                                                an die anbietende Partei abgetreten und durch den
                                                                Verkaufserlös ersetzt. Die Inhaber der Basis-Token
                                                                erhalten anschliessend den Verkaufserlös im
                                                                Verhältnis zur Anzahl ihrer Token.&nbsp;
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    Weitere Informationen zum Drag-Along Mechanismus:
                                                                </strong>
                                                                ‍
                                                            </p>
                                                            <ul role="list">
                                                                <li>
                                                                    Erklärung des Drag-Along Smart Contracts:
                                                                    <br />‍
                                                                    <a href="https://aktionariat.com/documentation/smart-contracts/draggable.html">
                                                                        https://aktionariat.com/documentation/smart-contracts/draggable.html
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    Rechtliche Grundlage innerhalb des Token Holder
                                                                    Agreements unserer DAKS: <br />‍
                                                                    <a href="https://aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf">
                                                                        https://aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <p>
                                                                <strong>
                                                                    Warnhinweis für potentielle Käufer eines
                                                                    Unternehmens:
                                                                </strong>
                                                            </p>
                                                            <p>
                                                                * Das Platzieren eines Übernahmeangebots mittels
                                                                Drag-Along-Funktion kostet 3 Ether, unabhängig
                                                                davon, ob es zu einem Verkauf kommt oder nicht. In
                                                                der Wallet der Partei, welche ein Übernahmeangebot
                                                                platziert, müssen zu jeder Zeit ab dem Platzieren
                                                                des Übernahmeangebots bis Abschluss (erfolgreich
                                                                oder nicht) genügend liquide Mittel vorhanden sein.
                                                                Jeder Besitzer entsprechender Tokens kann während
                                                                der Abstimmungsphase zur Übernahme der Token (bzw.
                                                                des gesamten Unternehmens) das Übernahmeangebot
                                                                “challengen”. Sollte beispielsweise festgestellt
                                                                werden, dass in der Wallet der Partei, die ein
                                                                Übernahmeangebot platziert hat, nicht genügend
                                                                liquide Mittel vorhanden sind, um sämtliche Token
                                                                zum angebotenen Kaufpreis zu bezahlen, und jemand
                                                                challenged das Übernahmeangebot, so wird der Prozess
                                                                umgehend automatisch abgebrochen. Die 3 Ether,
                                                                welche der potentielle Käufer für das Platzieren des
                                                                Angebots bezahlt hat, gehen damit verloren.
                                                                <br />
                                                            </p>
                                                            <p>
                                                                ** Es ist grundsätzlich zu jedem Zeitpunkt möglich
                                                                bestehende, “traditionelle” Aktien zu tokenisieren.
                                                                Damit kann sich die Anzahl Aktientoken rasch stark
                                                                erhöhen. Gründer könnten dies tun wollen, wenn
                                                                jemand versucht sämtliche Token mittels
                                                                Drag-Along-Funktion zu erwerben, um gegen das
                                                                Kaufangebot abzustimmen. Dies kann ein Risiko für
                                                                einen potentiellen Käufer der Aktientoken bergen,
                                                                der von der Drag-Along-Funktion im Smart Contract
                                                                der Draggable Aktien gebrauch macht. Dieser hat
                                                                womöglich vorab mit den Inhaber der bestehenden
                                                                Aktientoken gesprochen und ist aufgrund der
                                                                Gespräche zuversichtlich sämtliche bestehenden
                                                                Aktientoken erwerben zu können. Mit der
                                                                Tokenisierung Ihrer Aktien und das Stimmen gegen das
                                                                Kaufangebot, könnten bspw. Gründer dem potentiellen
                                                                Käufer einen Strich durch die Rechnung machen. Das
                                                                potentielle Schadensausmass umfasst 3 Ether, denn
                                                                diese werden für das Platzieren eines
                                                                Übernahmeangebots benötigt.
                                                                <br />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="dependencies" className="sidebar-section">
                                <div className="margin-bottom margin-xlarge">
                                    <div className="divider top-clear" />
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div className="margin-bottom margin-medium">
                                        <h2>Abhängigkeiten</h2>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="59f560c9-d37f-973d-0fcd-c8c66287f455"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            In welchem Land werden die Daten zum Aktienbuch
                                                            gehostet?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Wir hosten unsere Daten (inkl. der Aktienbücher) bei
                                                                einem Anbieter in der Schweiz.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="59f560c9-d37f-973d-0fcd-c8c66287f455"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Besteht ein Risiko für den Emittenten falls der Ether
                                                            auf 0$ fällt?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Nein, grundsätzlich nicht. Ether wird „nur“ für das
                                                                Bezahlen der Transaktionsgebühr des Ethereum Systems
                                                                gebraucht. Ein tiefer Etherpreis geht oftmals einher
                                                                mit tiefen Transaktionsgebühren des Ethereumsystems.
                                                                Der Worst Case wäre, dass das Ethereum-System kaputt
                                                                geht und man die Token auf eine andere Blockchain
                                                                migrieren müsste. Dieser Fall ist jedoch sehr
                                                                unwahrscheinlich, denn das Ethereumsystem ging vor
                                                                mittlerweile 6 Jahren live und erwies sich bislang
                                                                als sehr stabil. Ausserdem befindet sich das
                                                                Aktienbuch des Emittenten nicht auf der Blockchain.
                                                                Die Informationen darüber welche Investoren wie
                                                                viele Aktien halten, würden also bestehen bleiben
                                                                auch wenn die Ethereum Blockchain nicht mehr
                                                                existieren würde.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="59f560c9-d37f-973d-0fcd-c8c66287f455"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Was passiert mit den Aktien falls die Aktionariat AG
                                                            Konkurs anmelden müsste?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Die Aktientokens basieren auf dem ERC-20
                                                                Standardtoken und funktionieren vollständig ohne
                                                                unser Zutun. Falls die Aktionariat AG Konkurs geht,
                                                                gäbe es lediglich unser Userinterfaces nicht mehr
                                                                (Aktionariat App, Corporate Dashboard, Market
                                                                Widgets) aber die Inhaber der Tokens könnten diese
                                                                weiterhin transferieren, halten und die Rechte
                                                                ausüben, die damit verbunden sind. Auch besteht
                                                                immer die Möglichkeit die Tokens auf anderen
                                                                Marktplätzen anzubieten. Wir bauen auch deshalb auf
                                                                der Ethereum-Blockchain und verwenden ERC-20 Tokens,
                                                                weil es unsere Kunden in keine unnötige Abhängigkeit
                                                                der Aktionariat AG bringt. Der dezentrale Ansatz ist
                                                                für Aktionariat deshalb ein Kernanliegen, weil keine
                                                                neuen Abhängigkeiten geschaffen werden sollen.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="59f560c9-d37f-973d-0fcd-c8c66287f455"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Wie viel kostet es das Unternehmen wieder auf ein
                                                            traditionelles Aktiensystem zu wechseln?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Das Unternehmen kann in Absprache mit den Aktionären
                                                                alle Security Tokens einsammeln und ‘’verbrennen’’.
                                                                Das Einsammeln der Tokens verursacht mehrere
                                                                Transaktionen auf der Ethereum Blockchain. Deshalb
                                                                fallen dafür entsprechende Transaktionskosten an.
                                                                Wie hoch diese sind, hängt von der Anzahl
                                                                Transaktionen und dem ‘’Gaspreis’’ ab.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="wallet" className="sidebar-section">
                                <div className="margin-bottom margin-xlarge">
                                    <div className="divider top-clear" />
                                </div>
                                <div className="margin-bottom margin-medium">
                                    <div className="margin-bottom margin-medium">
                                        <h2>Wallet</h2>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="0cdf7c74-704f-1e99-b770-6af18fae554c"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Warum ist das Feld "Name" in der Aktionariat App und
                                                            im Dashboard nicht in ein "Vorname"- und ein
                                                            "Nachname"-Feld unterteilt?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Die Schönheit der Lösung liegt in ihrer Einfachheit:
                                                                Die Verwendung von nur einem Feld funktioniert für
                                                                alle gleichermaßen: Unternehmen wie "Aktionariat
                                                                AG", Personen wie "Ewan McGregor", Personen, die auf
                                                                die Verwendung von mittleren Buchstaben bestehen,
                                                                z.B. "George W. Bush", Personen, die gerne mit
                                                                Doppelnamen angesprochen werden, z.B.
                                                                "Marie-Christin Weidmann", Personen, die zwei
                                                                Vornamen verwenden, z.B. "Rainer Maria Hubacher",
                                                                usw. Wenn wir zum Beispiel ein Feld "Vorname" und
                                                                das andere Feld "Nachname" nennen, wo soll Rainer
                                                                Maria Rilke dann "Maria" eintragen?
                                                            </p>
                                                            <p>‍</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="0cdf7c74-704f-1e99-b770-6af18fae554c"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Weshalb sehe ich meine DAKS Token nicht auf meiner
                                                            MetaMask Wallet?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Da MetaMask nur grosse / bekannt Coins erkennt, muss
                                                                der DAKS oder andere Security Tokens von Aktionariat
                                                                Kunden zuerst importiert werden. Wenn man die App
                                                                auf dem Smartphone verwendet:
                                                            </p>
                                                            <ol start={1} role="list">
                                                                <li>
                                                                    MetaMask öffnen und im Menü den Browser in der App
                                                                    selber öffnen.
                                                                </li>
                                                                <li>
                                                                    Im Browser auf etherscan.io die eigene
                                                                    Ethereum-Adresse (sichtbar im MetaMask Wallet)
                                                                    eingeben
                                                                </li>
                                                                <li>
                                                                    Beim Security Token unter ‘’More’’ → Add DAKS to
                                                                    MetaMask
                                                                </li>
                                                            </ol>
                                                            <p>
                                                                Wenn man MetaMask als Erweiterung in einem Browser
                                                                auf dem Laptop verwendet, ist es wichtig in diesem
                                                                Browser auf <strong>etherscan.io </strong>die eigene
                                                                Ethereum Adresse einzugeben. Da ebenfalls beim DAKS
                                                                / anderen Security Token unter ‘’more’’ → Add to
                                                                MetaMask.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="0cdf7c74-704f-1e99-b770-6af18fae554c"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Was ist eine Seed-Phrase?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Die Seed Phrase besteht aus einer Aneinanderreihung
                                                                von 12 oder 24 Wörter und erfüllt den Zweck eines
                                                                Back-up Schlüssels. Bei Verlust des Wallets kann
                                                                mithilfe dieser Seed Phrase das eigene Konto
                                                                wiederhergestellt werden.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="0cdf7c74-704f-1e99-b770-6af18fae554c"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Wer ist verantwortlich für die Seed-Phrase?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>
                                                                Jeder Benutzer ist selber für die eigene Seed-Phrase
                                                                verantwortlich und sollte diese sicher aufbewahren.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div className="accordion-item" style={{ opacity: "0.6" }}>
                                                <div
                                                    data-w-id="0cdf7c74-704f-1e99-b770-6af18fae554c"
                                                    className="accordion-trigger"
                                                >
                                                    <div className="dropdown-title large-title">
                                                        <h3 className="text-size-medium text-weight-normal">
                                                            Wo finde ich meine Seed-Phrase?
                                                        </h3>
                                                    </div>
                                                    <div
                                                        className="icon accordion-icon"
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
                                                        <img
                                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619943dc9b20f14e1ccd8d21_icon-24-plus.svg"
                                                            loading="lazy"
                                                            alt="Plus Icon"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item-content"
                                                    style={{ height: "0px" }}
                                                >
                                                    <div className="accordion-description">
                                                        <div className="text-rich-text w-richtext">
                                                            <p>Bei erster Benutzung:</p>
                                                            <ul role="list">
                                                                <li>
                                                                    Im Aktionariat Wallet unten im Screen auf ‘
                                                                    <strong>’Connect</strong>’’ klicken.&nbsp;
                                                                </li>
                                                                <li>
                                                                    Unter ‘’All Ethereum Addresses’’ auf ‘’
                                                                    <strong>This Device BACKUP</strong>’’&nbsp;
                                                                </li>
                                                                <li>
                                                                    Auf den roten Banner ‘’
                                                                    <strong>Backup Address</strong>’’ klicken&nbsp;
                                                                </li>
                                                                <li>
                                                                    Auf ‘’<strong>View</strong>’’ klicken
                                                                </li>
                                                                <li>→ Nun wird ihr Seed-Phrase angezeigt</li>
                                                                <li>
                                                                    <strong>ACHTUNG:</strong> Notieren Sie diese 12
                                                                    Wörter in der richtigen Reihenfolge (Wir empfehlen
                                                                    ein Hardware Wallet zu verwenden, oder den Inhalt
                                                                    auf ein Blatt Papier zu schreiben und sicher zu
                                                                    verwahren). Wenn sie anschließend auf ‘’Continue’’
                                                                    klicken, wird ein Kontrollmechanismus eingeleitet.
                                                                    Dieser verlangt ihre 12 Wörter in der richtigen
                                                                    Reihenfolge. Sobald Sie diese richtig eingegeben
                                                                    haben, verschwindet der rote Warn-Balken.&nbsp;
                                                                </li>
                                                            </ul>
                                                            <p>Nach Backup:</p>
                                                            <ul role="list">
                                                                <li>
                                                                    Nachdem Sie ihre Seed-Phrase aufgerufen und den
                                                                    Kontrollmechanismus durchlaufen haben, können Sie
                                                                    ihre Seed-Phrase nicht mehr einsehen.&nbsp;
                                                                </li>
                                                            </ul>
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
                </div>
            </div>
        </div>
    </section>
}