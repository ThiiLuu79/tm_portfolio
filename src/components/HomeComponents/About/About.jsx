import about from "../../../img/home/about_img.jpg";
import ScrollToTopOnLoad from "../../MainComponents/ScrollToTopOnLoad/ScrollToTopOnLoad";
import Button from "../../ReusableComponents/Button/Button";

import { useLanguage } from '../../../LanguageToggler/LanguageContext';

import * as homeConstantsEn from '../../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../../i18n/homeConstants_fr';

const About = () => {

    ScrollToTopOnLoad();
    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <section className="block" id = "about">
            <h2 className = "section__title section__title--block">{homeConstants.ABOUT_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--block user_country">{homeConstants.ABOUT_LOCATION}</p>

            <div>
                <p className="block__content user_about_p1">{homeConstants.ABOUT_P1}</p>
                <br></br>
                <p className = "user_about_p2">{homeConstants.ABOUT_P2}</p>
                <br></br>
                <p className = "user_about_p3">{homeConstants.ABOUT_P3}</p>
                <br></br>
                <Button text={homeConstants.BUTTON} redirect="/Work" blank={false} noreferrer={false} buttonType='Link'/>
                <br></br><br></br>

            </div>
            <img src = {about} alt="about_image" width="500" className="block__img"></img>
        </section>

    )
}
export default About
