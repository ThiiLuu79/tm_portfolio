import academics from "../../img/home/academic.jpg";
import personals from "../../img/home/personal.jpg";
import {Link} from 'react-router-dom';

import ScrollToTopOnLoad from "../MainComponents/ScrollToTopOnLoad";

import { useLanguage } from '../../LanguageContext/languageContext';

import * as homeConstantsEn from '../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../i18n/homeConstants_fr';

const CSProjects = () => {

    ScrollToTopOnLoad();
    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <section className = "my-projects" id = "cs_projects">
            <h2 className = "section__title section__title--projects">{homeConstants.CS_PROJECTS_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--projects">{homeConstants.CS_PROJECTS_SUBTITLE}</p>

            <div className = "portfolio">

                <Link to="/Academics">

                    <div className="project__container portfolio__item academicPro_link">
                        <img src = {academics} alt="academic-project cover" width="900" className = "portfolio__img project__img"></img>
                        <div className="project__box">
                        <p className="project__text academicPro_">{homeConstants.ACADEMIC_PROJECTS}</p>
                        </div>
                    </div>
                </Link>

                <Link to="/Personals">

                <div className="project__container portfolio__item personal_link">
                    <img src = {personals} alt="personal-project cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                        <p className="project__text personal_">{homeConstants.PERSONAL_PROJECTS}</p>
                    </div>
                </div>
                </Link>

            </div>

        </section>
    )
}
export default CSProjects
