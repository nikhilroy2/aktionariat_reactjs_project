import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../../scss/layout/base/Base.css';
function Base(props) {
    return (
        <div id="Base">
            <Header></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Base;