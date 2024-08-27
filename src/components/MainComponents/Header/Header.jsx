import Navbar from '../Navbar/Navbar.jsx';

import { useLanguage } from '../../../LanguageContext/languageContext.js';

import * as mainConstantsEn from '../../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../../i18n/mainConstants_fr.js';

import { LanguageToggler } from '../../../LanguageContext/languageToggler.jsx';

const Header = () => {

    const { language } = useLanguage();
    const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

    return (
        <header id="top">
            <Navbar/>
            <div className='header__content'>
                <h3 className = "header__title tm">{mainConstants.INITIALS} <strong className="portfolio"><b>{mainConstants.PORTFOLIO}</b></strong> </h3>
                <LanguageToggler/>
            </div>
        </header>
    )
}
export default Header
