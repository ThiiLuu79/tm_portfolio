import arts from "../../../img/home/art_gallery.jpg";
import photos from "../../../img/photography/photo5.JPG";
import {Link} from 'react-router-dom';

import ScrollToTopOnLoad from "../../MainComponents/ScrollToTopOnLoad/ScrollToTopOnLoad";

import { useLanguage } from '../../../LanguageContext/languageContext';

import * as homeConstantsEn from '../../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../../i18n/homeConstants_fr';

const FreetimeProjects = () => {

    ScrollToTopOnLoad();
    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <section className = "my-projects" id = "freetime_projects">
            <h2 className = "section__title section__title--projects">{homeConstants.FREETIME_PROJECTS_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--projects">{homeConstants.FREETIME_PROJECTS_SUBTITLE}</p>

            <div className = "portfolio">

            <Link to="/ArtGallery">
                <div className="project__container portfolio__item drawPro_link">
                    <img src = {arts} alt="art-project cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                    <p className="project__text drawPro_">{homeConstants.ART_PROJECTS}</p>
                    </div>
                </div>

            </Link>

            <Link to="/PhotoGallery">
                <div className="project__container portfolio__item photoPro_link">
                    <img src = {photos} alt="photo_project_cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                        <p className="project__text photoPro_">{homeConstants.PHOTO_PROJECTS}</p>
                    </div>
                </div>
            </Link>
                
            </div>
        </section>
    )
}
export default FreetimeProjects
