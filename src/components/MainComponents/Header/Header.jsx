import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import tm_logo_white from '../../../img/home/TM-white-no-bg.png';

const Header = () => {
    return (
        <header id="top">
            <Navbar/>
            <img src={tm_logo_white} alt="header" className="tm_logo tm_logo_white" />
        </header>
    )
}

export default Header;
