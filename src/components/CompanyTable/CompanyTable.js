import React from 'react';
import './CompanyTable.css';
function CompanyTable(props) {
    return (
        <div id='CompanyTable'>
            <table style={{ "width": "100%", "border-collapse": "collapse" }}>
                <thead>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "width": "6%", "padding": "1rem", "font-size": "1.25rem" }} />
                        <td style={{ "width": "24%", "padding": "1rem" }}>
                            <div className="text-size-medium">Company</div>
                        </td>
                        <td style={{ "width": "24%", "padding": "1rem" }}>
                            <div className="text-size-medium">Share Name &amp; Ticker</div>
                        </td>
                        <td style={{ "width": "18%", "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">Price</div>
                            <div className="text-size-small text-color-grey">Yearly Change</div>
                        </td>
                        <td style={{ "width": "18%", "padding": "1rem", "font-size": "1.25rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">Market Cap</div>
                        </td>
                        <td style={{ "width": "10%", "padding": "1rem", "font-size": "1.25rem" }} />
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "padding-left": "1rem", "min-width": "64px" }}>
                            <a href="https://www.bossinfo.com/token/" target="_blank">
                                <img src="https://hub.aktionariat.com/images/tokens/BOSS.png" width={64} />
                            </a>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://www.bossinfo.com/token/" target="_blank">Boss Info AG</a></div>
                            <div className="text-size-small" />
                            <div className="text-size-small text-color-grey" />
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://www.bossinfo.com/token/" target="_blank">Boss Info AG</a></div>
                            <div className="text-size-small"><a href="https://etherscan.io/address/0x2e880962a9609aa3eab4def919fe9e917e99073b" target="_blank" className="text-color-grey">BOSS</a></div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">9.51 CHF</div>
                            <div className="text-size-small" style={{ "color": "rgb(14, 203, 129)" }}>+36%</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">98′909′556 CHF</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <a href="https://www.bossinfo.com/token/" target="_blank" className="button invert-colors w-button">Explore</a>
                        </td>
                    </tr>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "padding-left": "1rem", "min-width": "64px" }}>
                            <a href="https://realunit.ch/token/" target="_blank">
                                <img src="https://hub.aktionariat.com/images/tokens/REALU.png" width={64} />
                            </a>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://realunit.ch/token/" target="_blank">RealUnit Schweiz AG</a></div>
                            <div className="text-size-small">Founded 2017</div>
                            <div className="text-size-small text-color-grey">Finanzindustrie</div>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://realunit.ch/token/" target="_blank">RealUnit Shares</a></div>
                            <div className="text-size-small"><a href="https://etherscan.io/address/0x553c7f9c780316fc1d34b8e14ac2465ab22a090b" target="_blank" className="text-color-grey">REALU</a></div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">1.10 CHF</div>
                            <div className="text-size-small" style={{ "color": "rgb(207, 48, 74)" }}>-3%</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">29′153′828 CHF</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <a href="https://realunit.ch/token/" target="_blank" className="button invert-colors w-button">Explore</a>
                        </td>
                    </tr>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "padding-left": "1rem", "min-width": "64px" }}>
                            <a href="https://vidby.com/investors" target="_blank">
                                <img src="https://hub.aktionariat.com/images/tokens/VIDS.png" width={64} />
                            </a>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://vidby.com/investors" target="_blank">vidby AG</a></div>
                            <div className="text-size-small">Founded 2021</div>
                            <div className="text-size-small text-color-grey">IT services with AI</div>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://vidby.com/investors" target="_blank">vidby Shares</a></div>
                            <div className="text-size-small"><a href="https://etherscan.io/address/0xe221db71c5c527149bdf56c4d13a54cf55e543c1" target="_blank" className="text-color-grey">VIDS</a></div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">16.61 CHF</div>
                            <div className="text-size-small" style={{ "color": "rgb(14, 203, 129)" }}>+38%</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">27′047′802 CHF</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <a href="https://vidby.com/investors" target="_blank" className="button invert-colors w-button">Explore</a>
                        </td>
                    </tr>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "padding-left": "1rem", "min-width": "64px" }}>
                            <a href="https://quitt.ch/investoren" target="_blank">
                                <img src="https://hub.aktionariat.com/images/tokens/DQTS.png" width={64} />
                            </a>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://quitt.ch/investoren" target="_blank">ServiceHunter AG</a></div>
                            <div className="text-size-small" />
                            <div className="text-size-small text-color-grey" />
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://quitt.ch/investoren" target="_blank">quitt.shares</a></div>
                            <div className="text-size-small"><a href="https://etherscan.io/address/0x8747a3114ef7f0eebd3eb337f745e31dbf81a952" target="_blank" className="text-color-grey">DQTS</a></div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">8.41 CHF</div>
                            <div className="text-size-small" style={{ "color": "rgb(14, 203, 129)" }}>+61%</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">15′570′945 CHF</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <a href="https://quitt.ch/investoren" target="_blank" className="button invert-colors w-button">Explore</a>
                        </td>
                    </tr>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "padding-left": "1rem", "min-width": "64px" }}>
                            <a href="https://www.aktionariat.com/investor-relations" target="_blank">
                                <img src="https://hub.aktionariat.com/images/tokens/DAKS.png" width={64} />
                            </a>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://www.aktionariat.com/investor-relations" target="_blank">Aktionariat AG</a></div>
                            <div className="text-size-small">Founded 2020</div>
                            <div className="text-size-small text-color-grey">Fintech</div>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://www.aktionariat.com/investor-relations" target="_blank">Aktionariat AG Shares</a></div>
                            <div className="text-size-small"><a href="https://etherscan.io/address/0x6f38e0f1a73c96cb3f42598613ea3474f09cb200" target="_blank" className="text-color-grey">DAKS</a></div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">11.70 CHF</div>
                            <div className="text-size-small" style={{ "color": "rgb(14, 203, 129)" }}>+89%</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">14′594′858 CHF</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <a href="https://www.aktionariat.com/investor-relations" target="_blank" className="button invert-colors w-button">Explore</a>
                        </td>
                    </tr>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "padding-left": "1rem", "min-width": "64px" }}>
                            <a href="https://dillysocks.com/share-sale/#Installation" target="_blank">
                                <img src="https://hub.aktionariat.com/images/tokens/DILYS.png" width={64} />
                            </a>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://dillysocks.com/share-sale/#Installation" target="_blank">DillySocks AG</a></div>
                            <div className="text-size-small">Founded 2013</div>
                            <div className="text-size-small text-color-grey" />
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://dillysocks.com/share-sale/#Installation" target="_blank">DillyShares</a></div>
                            <div className="text-size-small"><a href="https://optimistic.etherscan.io/address/0x81de38fbc65b07ad02517daa6281550d3661148f" target="_blank" className="text-color-grey">DILYS</a></div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">0.85 CHF</div>
                            <div className="text-size-small" style={{ "color": "rgb(14, 203, 129)" }}>+2%</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">12′585′116 CHF</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <a href="https://dillysocks.com/share-sale/#Installation" target="_blank" className="button invert-colors w-button">Explore</a>
                        </td>
                    </tr>
                    <tr style={{ "border-bottom": "1px solid rgba(255, 255, 255, .15)" }}>
                        <td style={{ "padding-left": "1rem", "min-width": "64px" }}>
                            <a href="https://www.veda.ch/investors" target="_blank">
                                <img src="https://hub.aktionariat.com/images/tokens/VEDA.png" width={64} />
                            </a>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://www.veda.ch/investors" target="_blank">AyurVeda AG</a></div>
                            <div className="text-size-small">Founded 1980</div>
                            <div className="text-size-small text-color-grey">Holistic health</div>
                        </td>
                        <td style={{ "padding": "1rem" }}>
                            <div className="text-size-medium"><a href="https://www.veda.ch/investors" target="_blank">AyurVeda AG Shares</a></div>
                            <div className="text-size-small"><a href="https://etherscan.io/address/0x2adcbee886d23eff5adecc7767bf102e4a1ce151" target="_blank" className="text-color-grey">VEDA</a></div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">39.82 CHF</div>
                            <div className="text-size-small" style={{ "color": "rgb(14, 203, 129)" }}>+42%</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <div className="text-size-medium">4′371′181 CHF</div>
                        </td>
                        <td style={{ "padding": "1rem", "-webkit-text-align": "right", "text-align": "right" }}>
                            <a href="https://www.veda.ch/investors" target="_blank" className="button invert-colors w-button">Explore</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CompanyTable;