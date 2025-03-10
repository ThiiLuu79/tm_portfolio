import academics from "../../../img/home/academic.jpg";
import personals from "../../../img/home/personal.jpg";

import ScrollToTopOnLoad from "../../MainComponents/ScrollToTopOnLoad/ScrollToTopOnLoad";

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as homeConstantsEn from '../../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../../i18n/homeConstants_fr';
import ProjectLink from "../../ReusableComponents/ProjectLink/ProjectLink";

const CSProjects = () => {

    ScrollToTopOnLoad();
    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <section className = "my-projects" id = "cs_projects" data-aos="fade-right">
            <h2 className = "section__title section__title--projects">{homeConstants.CS_PROJECTS_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--projects">{homeConstants.CS_PROJECTS_SUBTITLE}</p>

            <div className = "portfolio">
                <ProjectLink
                    redirect="/Academics"
                    image={academics}
                    alt="academic_project_cover"
                    text={homeConstants.ACADEMIC_PROJECTS}
                />
                <ProjectLink
                    redirect="/Personals"
                    image={personals}
                    alt="personal_project cover"
                    text={homeConstants.PERSONAL_PROJECTS}
                />
            </div>

        </section>
    )
}
export default CSProjects
