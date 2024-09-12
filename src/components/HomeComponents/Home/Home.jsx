import Card from '../../ReusableComponents/Card/Card';
import About from '../About/About';
import CSProjects from '../CSProjects/CSProjects';
import FreetimeProjects from '../FreeTimeProjects/FreetimeProjects';
import Education from '../Education/Education';
import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';
import profile from '../../../img/home/pfp.jpg';

import * as homeConstantsEn from '../../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../../i18n/homeConstants_fr';

const Home = () => {

    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <div>
            <Card
                intro = {homeConstants.INTRODUCTION}
                title = {homeConstants.MY_NAME}
                subtitle = {homeConstants.ROLE}
                image = {profile}
            />
            <About/>
            <CSProjects/>
            <FreetimeProjects/>
            <Education/>  
        </div>
    )
}
export default Home
