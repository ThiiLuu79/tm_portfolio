import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import tm_logo_white from '../../../img/home/TM-white-no-bg.png';
import GoToTop from '../GoToTop/GoToTop';

const Header = () => {
    return (
        <header id="top">
            <Navbar/>
            <img src={tm_logo_white} alt="header" className="tm_logo" />
            <GoToTop/>
        </header>
    )
}

export default Header;
