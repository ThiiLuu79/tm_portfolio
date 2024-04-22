import arts from "../../img/home/art_gallery.jpg";
import photos from "../../img/home/photography_cover.jpg";
import {Link} from 'react-router-dom';

import ScrollToTopOnLoad from "../mainComponents/ScrollToTopOnLoad.jsx";

import {
    FREETIME_PROJECTS_TITLE,
    FREETIME_PROJECTS_SUBTITLE,
    ART_PROJECTS,
    PHOTO_PROJECTS
} from "./constants.js";

const FreetimeProjects = () => {

    ScrollToTopOnLoad();

    return (
        <section className = "my-projects" id = "freetime_projects">
            <h2 className = "section__title section__title--projects">{FREETIME_PROJECTS_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--projects">{FREETIME_PROJECTS_SUBTITLE}</p>

            <div className = "portfolio">

            <Link to="/ArtGallery">
                <div className="project__container portfolio__item drawPro_link">
                    <img src = {arts} alt="art-project cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                    <p className="project__text drawPro_">{ART_PROJECTS}</p>
                    </div>
                </div>

            </Link>

            <Link to="/PhotoGallery">
                <div className="project__container portfolio__item photoPro_link">
                    <img src = {photos} alt="photo_project_cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                        <p className="project__text photoPro_">{PHOTO_PROJECTS}</p>
                    </div>
                </div>
            </Link>
                
            </div>
        </section>
    )
}
export default FreetimeProjects