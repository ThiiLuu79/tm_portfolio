import {Link} from 'react-router-dom';

import ScrollToTopOnLoad from '../ScrollToTopOnLoad/ScrollToTopOnLoad.jsx';

import { useLanguage } from '../../../LanguageContext/languageContext.js';

import * as mainConstantsEn from '../../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../../i18n/mainConstants_fr.js';


const GoBack = () => {

    ScrollToTopOnLoad();
    const { language } = useLanguage();
    const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

    return (
        <Link to="/" className='go_back_container'>
            <div className="go__back">
                <div className="button__arrow"></div>
                  {mainConstants.GO_BACK}
            </div>
        </Link>

    )
}
export default GoBack
