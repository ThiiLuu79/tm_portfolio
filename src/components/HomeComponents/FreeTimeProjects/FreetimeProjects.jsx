import arts from "../../../img/home/art_gallery.jpg";
import photos from "../../../img/photography/photo5.JPG";

import ScrollToTopOnLoad from "../../MainComponents/ScrollToTopOnLoad/ScrollToTopOnLoad";

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as homeConstantsEn from '../../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../../i18n/homeConstants_fr';
import ProjectLink from "../../ReusableComponents/ProjectLink/ProjectLink";

const FreetimeProjects = () => {

    ScrollToTopOnLoad();
    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <section className = "my-projects" id = "freetime_projects">
            <h2 className = "section__title section__title--projects">{homeConstants.FREETIME_PROJECTS_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--projects">{homeConstants.FREETIME_PROJECTS_SUBTITLE}</p>

            <div className = "portfolio">
                <ProjectLink
                    redirect="/ArtGallery"
                    image={arts}
                    alt="art_project_cover"
                    text={homeConstants.ART_PROJECTS}
                />
                <ProjectLink
                    redirect="/PhotoGallery"
                    image={photos}
                    alt="photo_project_cover"
                    text={homeConstants.PHOTO_PROJECTS}
                />
            </div>
        </section>
    )
}
export default FreetimeProjects
