import profile from "../../img/home/pfp.jpg";

import { useLanguage } from '../../LanguageContext/languageContext';

import * as homeConstantsEn from '../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../i18n/homeConstants_fr';

const Card = () => {

    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <section className="intro" id = "home">
            <h2 className = "section__title section__title--intro">{homeConstants.INTRODUCTION} <strong className="name"><b className = "user_full_name">{homeConstants.MY_NAME}</b></strong> </h2>
            <p className = "section__subtitle section__subtitle--intro user_title">{homeConstants.ROLE}</p>
            <img src = {profile} alt="home_picture" className="intro__img"></img>
        </section>
    )
}
export default Card