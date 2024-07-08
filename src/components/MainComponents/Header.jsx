import Navbar from './Navbar';

import{
    INITIALS,
    PORTFOLIO
}from "../../i18n/globalConstants.js";

const Header = () => {

    return (
        <header id="top">
            <Navbar/>
            <h3 className = "header__title tm">{INITIALS} <strong className="portfolio"><b>{PORTFOLIO}</b></strong> </h3>
        </header>
    )
}
export default Header