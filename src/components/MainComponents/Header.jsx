import Navbar from './Navbar';

import { useLanguage } from '../../LanguageContext/languageContext';

import * as mainConstantsEn from '../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../i18n/mainConstants_fr.js';

const Header = () => {

    const { language } = useLanguage();
    const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

    return (
        <header id="top">
            <Navbar/>
            <h3 className = "header__title tm">{mainConstants.INITIALS} <strong className="portfolio"><b>{mainConstants.PORTFOLIO}</b></strong> </h3>
        </header>
    )
}
export default Header
