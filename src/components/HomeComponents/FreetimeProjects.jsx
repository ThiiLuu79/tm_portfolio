import arts from "../../img/home/art_gallery.jpg";
import photos from "../../img/home/photography_cover.jpg";
import {Link} from 'react-router-dom';

const FreetimeProjects = () => {

    return (
        <section className = "my-projects" id = "freetime_projects">
            <h2 className = "section__title section__title--projects">Freetime Projects</h2>
            <p className = "section__subtitle section__subtitle--projects">Hover over the images to see the project type</p>

            <div className = "portfolio">

            <Link to="/ArtGallery" onClick={() => {
                window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
                });
            }}>
                <div className="project__container portfolio__item drawPro_link">
                    <img src = {arts} alt="art-project cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                    <p className="project__text drawPro_">Art Gallery</p>
                    </div>
                </div>

                </Link>

                <Link to="/PhotoGallery" onClick={() => {
                window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
                });
            }}>
                <div className="project__container portfolio__item photoPro_link">
                    <img src = {photos} alt="photo_project_cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                        <p className="project__text photoPro_">Photo Gallery</p>
                    </div>
                </div>

                </Link>
                
            </div>
        </section>
    )
}
export default FreetimeProjects