import {Link} from 'react-router-dom';

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as mainConstantsEn from '../../../i18n/mainConstants_en';
import * as mainConstantsFr from '../../../i18n/mainConstants_fr';

const NotFound = () => {

    const { language } = useLanguage();
    const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

    return (
        <div className='not_found_container'>
            <div className="page_not_found">
                <h2>{mainConstants.ERROR_404}</h2>
                <br/>
                <h3 >
                    {mainConstants.ERROR_MESSAGE} <Link to="/" style={{ textDecoration: 'underline' }}>{mainConstants.NAVIGATE_BACK}</Link>.<br/><br/>
                    {mainConstants.HINTS}<br/><br/>
                    {mainConstants.SEE_YOU}
                </h3>
            </div>
        </div>
    )
}
export default NotFound
