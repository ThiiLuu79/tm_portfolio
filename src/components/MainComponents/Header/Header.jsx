import Navbar from '../Navbar/Navbar.jsx';

import { useLanguage } from '../../../LanguageContext/languageContext.js';

import * as mainConstantsEn from '../../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../../i18n/mainConstants_fr.js';

const Header = () => {

    const { language } = useLanguage();
    const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

    return (
        <header id="top">
            <Navbar/>
            <div className='header__content'>
                <h3 className = "header__title tm">{mainConstants.INITIALS} <strong className="portfolio"><b>{mainConstants.PORTFOLIO}</b></strong> </h3>
            </div>
        </header>
    )
}
export default Header
